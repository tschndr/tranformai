import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/db";
import { transformations, usageLogs } from "@/db/schema";
import { getClientIp, hashIp } from "@/lib/hash-ip";
import { runTransformation } from "@/lib/llm";
import { checkDailyFreeLimit, checkSubscriberFairUse } from "@/lib/rate-limit";
import { getActiveSubscription } from "@/lib/subscription";
import { consumeCredit, addCredits } from "@/lib/credits";

// Free tier and prepaid credits are capped shorter; subscribers can submit
// much longer inputs (a paid upgrade, alongside the higher-quality model).
const FREE_MAX_INPUT = 4000;
const PREMIUM_MAX_INPUT = 12000;

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const body = await req.json().catch(() => null);
  const input = typeof body?.input === "string" ? body.input.trim() : "";

  if (!input) {
    return NextResponse.json({ error: "Input text is required." }, { status: 400 });
  }
  // Absolute upper bound — reject oversized payloads before any auth/DB work.
  if (input.length > PREMIUM_MAX_INPUT) {
    return NextResponse.json(
      { error: `Input must be under ${PREMIUM_MAX_INPUT.toLocaleString()} characters.` },
      { status: 400 }
    );
  }

  const [transformation] = await db
    .select()
    .from(transformations)
    .where(eq(transformations.slug, slug))
    .limit(1);

  if (!transformation) {
    return NextResponse.json({ error: "Unknown transformation." }, { status: 404 });
  }

  const session = await auth();
  const userId = session?.user?.id;
  const subscription = userId ? await getActiveSubscription(userId) : null;
  const isSubscriber = !!subscription;
  const ipHash = hashIp(getClientIp(req.headers));

  // Length gate for non-subscribers — a conversion moment, not just an error.
  if (!isSubscriber && input.length > FREE_MAX_INPUT) {
    return NextResponse.json(
      {
        error: `Rewrites are limited to ${FREE_MAX_INPUT.toLocaleString()} characters on the free and credit tiers. Subscribe to rewrite inputs up to ${PREMIUM_MAX_INPUT.toLocaleString()}.`,
        upgradeUrl: "/pricing",
        needsAccount: !userId,
        reason: "length",
      },
      { status: 402 }
    );
  }

  async function generateAndLog(source: "free" | "credit" | "subscription") {
    const { output, tokensUsed } = await runTransformation(
      transformation.promptTemplate,
      input,
      { premium: source === "subscription" }
    );
    await db.insert(usageLogs).values({
      transformationId: transformation.id,
      userId,
      ipHash,
      tokensUsed,
      source,
    });
    return output;
  }

  // 1. Subscribers: unlimited, subject to a generous daily fair-use cap.
  if (subscription) {
    const fair = await checkSubscriberFairUse(userId!);
    if (!fair.allowed) {
      return NextResponse.json(
        {
          error: `You've reached today's fair-use limit of ${fair.limit} rewrites. It resets within 24 hours. Need higher volume? Email support@rewrite-anything.com.`,
        },
        { status: 429 }
      );
    }
    const output = await generateAndLog("subscription");
    return NextResponse.json({ output, unlimited: true, remaining: null });
  }

  // 2. Free daily allowance (2/day total across all tools).
  const daily = await checkDailyFreeLimit({ userId, ipHash });
  if (daily.allowed) {
    const output = await generateAndLog("free");
    return NextResponse.json({
      output,
      unlimited: false,
      remaining: daily.remaining - 1,
    });
  }

  // 3. Prepaid credits (signed-in users only). Reserve the credit up front so
  //    concurrent requests can't overspend, and refund it if generation fails.
  if (userId) {
    const balanceAfter = await consumeCredit(userId);
    if (balanceAfter !== null) {
      try {
        const output = await generateAndLog("credit");
        return NextResponse.json({
          output,
          unlimited: false,
          remaining: 0,
          creditsRemaining: balanceAfter,
        });
      } catch (err) {
        await addCredits(userId, 1); // refund — the generation didn't happen
        throw err;
      }
    }
  }

  // 4. Out of free generations and credits.
  return NextResponse.json(
    {
      error: "You've used your 2 free generations for today.",
      upgradeUrl: "/pricing",
      needsAccount: !userId,
      reason: "quota",
    },
    { status: 402 }
  );
}
