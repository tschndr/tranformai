import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import type Stripe from "stripe";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing webhook signature." }, { status: 400 });
  }

  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId ?? session.client_reference_id ?? undefined;
      if (userId && session.subscription) {
        const sub = await stripe.subscriptions.retrieve(session.subscription as string);
        await upsertSubscription(userId, sub);
      }
      break;
    }
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (userId) {
        await upsertSubscription(userId, sub);
      } else {
        // No userId on the subscription (shouldn't normally happen since we set it at
        // checkout time) — fall back to matching by Stripe customer id.
        await db
          .update(subscriptions)
          .set({
            status: sub.status,
            currentPeriodEnd: periodEnd(sub),
            updatedAt: new Date(),
          })
          .where(eq(subscriptions.stripeCustomerId, sub.customer as string));
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}

// In current Stripe API versions the billing period lives on each subscription
// item rather than the subscription object itself.
function periodEnd(sub: Stripe.Subscription): Date | null {
  const seconds = sub.items.data[0]?.current_period_end;
  return typeof seconds === "number" ? new Date(seconds * 1000) : null;
}

async function upsertSubscription(userId: string, sub: Stripe.Subscription) {
  const plan = sub.items.data[0]?.price.recurring?.interval === "year" ? "annual" : "monthly";

  await db
    .insert(subscriptions)
    .values({
      userId,
      stripeCustomerId: sub.customer as string,
      stripeSubscriptionId: sub.id,
      status: sub.status,
      plan,
      currentPeriodEnd: periodEnd(sub),
    })
    .onConflictDoUpdate({
      target: subscriptions.userId,
      set: {
        stripeCustomerId: sub.customer as string,
        stripeSubscriptionId: sub.id,
        status: sub.status,
        plan,
        currentPeriodEnd: periodEnd(sub),
        updatedAt: new Date(),
      },
    });
}
