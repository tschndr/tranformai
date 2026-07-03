import "dotenv/config";
import Stripe from "stripe";

// Creates the products, prices, and webhook endpoint for Rewrite Anything in
// whatever mode the STRIPE_SECRET_KEY belongs to (test vs live). Run once.
const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error("STRIPE_SECRET_KEY is not set in .env");
  process.exit(1);
}
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://tranformai.vercel.app";
const stripe = new Stripe(key);
const mode = key.startsWith("sk_live") ? "LIVE" : "TEST";
console.log(`Setting up Stripe in ${mode} mode for ${appUrl}\n`);

// --- Subscription product + prices ---
const subProduct = await stripe.products.create({
  name: "Rewrite Anything Unlimited",
  description: "Unlimited AI text rewrites across every tool, on our best model.",
});
const monthly = await stripe.prices.create({
  product: subProduct.id,
  currency: "usd",
  unit_amount: 800, // $8.00
  recurring: { interval: "month" },
  nickname: "Unlimited Monthly",
});
const annual = await stripe.prices.create({
  product: subProduct.id,
  currency: "usd",
  unit_amount: 8000, // $80.00 (≈2 months free vs $8/mo)
  recurring: { interval: "year" },
  nickname: "Unlimited Annual",
});

// --- Credit pack product + one-time prices ---
const creditProduct = await stripe.products.create({
  name: "Rewrite Anything Credits",
  description: "Prepaid rewrite credits. 1 credit = 1 rewrite. Never expire.",
});
const small = await stripe.prices.create({
  product: creditProduct.id,
  currency: "usd",
  unit_amount: 600, // $6.00
  nickname: "100 credits",
});
const medium = await stripe.prices.create({
  product: creditProduct.id,
  currency: "usd",
  unit_amount: 1500, // $15.00
  nickname: "300 credits",
});
const large = await stripe.prices.create({
  product: creditProduct.id,
  currency: "usd",
  unit_amount: 4000, // $40.00
  nickname: "1000 credits",
});

// --- Webhook endpoint ---
const webhook = await stripe.webhookEndpoints.create({
  url: `${appUrl}/api/stripe/webhook`,
  enabled_events: [
    "checkout.session.completed",
    "customer.subscription.updated",
    "customer.subscription.deleted",
  ],
});

console.log("✅ Created products, prices, and webhook.\n");
console.log("Paste these into Vercel env vars (and your local .env):\n");
console.log(`STRIPE_SECRET_KEY=${key}`);
console.log(`STRIPE_WEBHOOK_SECRET=${webhook.secret}`);
console.log(`STRIPE_PRICE_ID_MONTHLY=${monthly.id}`);
console.log(`STRIPE_PRICE_ID_ANNUAL=${annual.id}`);
console.log(`STRIPE_PRICE_ID_CREDITS_SMALL=${small.id}`);
console.log(`STRIPE_PRICE_ID_CREDITS_MEDIUM=${medium.id}`);
console.log(`STRIPE_PRICE_ID_CREDITS_LARGE=${large.id}`);
process.exit(0);
