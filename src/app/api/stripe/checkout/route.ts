import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import {
  PRICE_IDS,
  CREDIT_PACKS,
  getStripe,
  type CreditPackId,
} from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const [existing] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, session.user.id))
    .limit(1);

  // --- One-time credit-pack purchase ---
  if (body?.kind === "credits") {
    const packId = body?.pack as CreditPackId;
    const pack = CREDIT_PACKS[packId];
    if (!pack?.priceId) {
      return NextResponse.json(
        { error: "That credit pack is not configured yet." },
        { status: 500 }
      );
    }

    const checkoutSession = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer: existing?.stripeCustomerId,
      customer_email: existing ? undefined : session.user.email,
      client_reference_id: session.user.id,
      line_items: [{ price: pack.priceId, quantity: 1 }],
      // metadata is echoed back on checkout.session.completed; the webhook grants
      // credits by looking up the purchased price, not by trusting this value.
      metadata: { userId: session.user.id, kind: "credits", pack: packId },
      success_url: `${appUrl}/account?checkout=credits`,
      cancel_url: `${appUrl}/pricing?checkout=cancelled`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  }

  // --- Subscription ---
  const plan = body?.plan === "annual" ? "annual" : "monthly";
  const priceId = PRICE_IDS[plan];

  if (!priceId) {
    return NextResponse.json({ error: "Billing is not configured yet." }, { status: 500 });
  }

  const checkoutSession = await getStripe().checkout.sessions.create({
    mode: "subscription",
    customer: existing?.stripeCustomerId,
    customer_email: existing ? undefined : session.user.email,
    client_reference_id: session.user.id,
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: { metadata: { userId: session.user.id } },
    success_url: `${appUrl}/account?checkout=success`,
    cancel_url: `${appUrl}/pricing?checkout=cancelled`,
    metadata: { userId: session.user.id, kind: "subscription" },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
