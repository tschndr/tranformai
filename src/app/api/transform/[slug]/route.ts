import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/db";
import { transformations, usageLogs } from "@/db/schema";
import { getClientIp, hashIp } from "@/lib/hash-ip";
import { runTransformation } from "@/lib/llm";
import { checkRateLimit } from "@/lib/rate-limit";
import { getActiveSubscription } from "@/lib/subscription";

const MAX_INPUT_LENGTH = 4000;

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
  if (input.length > MAX_INPUT_LENGTH) {
    return NextResponse.json(
      { error: `Input must be under ${MAX_INPUT_LENGTH} characters.` },
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

  const ipHash = hashIp(getClientIp(req.headers));
  let remaining: number | null = null;

  if (!subscription) {
    const rateLimit = await checkRateLimit(transformation.id, { userId, ipHash });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "You've used your 3 free generations for this tool today.",
          upgradeUrl: "/pricing",
        },
        { status: 402 }
      );
    }
    remaining = rateLimit.remaining - 1;
  }

  const { output, tokensUsed } = await runTransformation(
    transformation.promptTemplate,
    input
  );

  await db.insert(usageLogs).values({
    transformationId: transformation.id,
    userId,
    ipHash,
    tokensUsed,
  });

  return NextResponse.json({ output, remaining, unlimited: !!subscription });
}
