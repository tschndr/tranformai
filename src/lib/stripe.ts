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

export const PRICE_IDS: Record<"monthly" | "annual", string | undefined> = {
  monthly: process.env.STRIPE_PRICE_ID_MONTHLY,
  annual: process.env.STRIPE_PRICE_ID_ANNUAL,
};
