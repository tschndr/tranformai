import "server-only";
import Stripe from "stripe";

let _stripe: Stripe | null = null;

// Lazily construct the Stripe client so importing this module doesn't throw at
// build time (or when STRIPE_SECRET_KEY is absent). The Stripe constructor
// rejects an empty key, so we only build the client on first real use.
export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not set — billing is not configured.");
    }
    _stripe = new Stripe(key);
  }
  return _stripe;
}

// Subscription plans.
export const PRICE_IDS: Record<"monthly" | "annual", string | undefined> = {
  monthly: process.env.STRIPE_PRICE_ID_MONTHLY,
  annual: process.env.STRIPE_PRICE_ID_ANNUAL,
};

// One-time credit packs. Each pack maps a Stripe (one-time) price to a number of
// generation credits granted on purchase. Keep `credits` in sync with the
// quantity described on the pricing page.
export type CreditPackId = "small" | "medium" | "large";

export const CREDIT_PACKS: Record<
  CreditPackId,
  { priceId: string | undefined; credits: number; label: string; price: string }
> = {
  small: {
    priceId: process.env.STRIPE_PRICE_ID_CREDITS_SMALL,
    credits: 100,
    label: "100 credits",
    price: "$6",
  },
  medium: {
    priceId: process.env.STRIPE_PRICE_ID_CREDITS_MEDIUM,
    credits: 300,
    label: "300 credits",
    price: "$15",
  },
  large: {
    priceId: process.env.STRIPE_PRICE_ID_CREDITS_LARGE,
    credits: 1000,
    label: "1000 credits",
    price: "$40",
  },
};

// Reverse lookup: Stripe price id -> credits granted. Used by the webhook to
// grant the right amount without trusting client input.
export function creditsForPriceId(priceId: string | null | undefined): number | null {
  if (!priceId) return null;
  for (const pack of Object.values(CREDIT_PACKS)) {
    if (pack.priceId && pack.priceId === priceId) return pack.credits;
  }
  return null;
}
