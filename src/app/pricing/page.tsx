import type { Metadata } from "next";
import { CheckoutButton } from "@/components/checkout-button";

export const metadata: Metadata = {
  title: "Pricing — TransformAI",
  description:
    "2 free generations a day. Buy a credit pack for occasional use, or subscribe for unlimited access to every AI text transformation tool.",
};

const CREDIT_PACKS = [
  { pack: "small" as const, credits: "100 credits", price: "$6", per: "$0.06 / generation" },
  { pack: "medium" as const, credits: "300 credits", price: "$15", per: "$0.05 / generation", popular: true },
  { pack: "large" as const, credits: "1000 credits", price: "$40", per: "$0.04 / generation" },
];

export default function PricingPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-neutral-500">• Pricing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          Pay as you go, or go unlimited
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600">
          Everyone gets 2 free generations a day, no signup required. Need more? Buy a pack of
          credits that never expire, or subscribe for unlimited use of every tool.
        </p>
      </div>

      {/* Free + Unlimited */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 p-8">
          <h2 className="text-lg font-semibold text-neutral-900">Free</h2>
          <p className="mt-2 text-3xl font-semibold text-neutral-900">$0</p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-neutral-600">
            <li>2 free generations per day</li>
            <li>No signup required</li>
            <li>Access to every tool on the site</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-neutral-900 p-8 text-white">
          <h2 className="text-lg font-semibold">Unlimited</h2>
          <p className="mt-2 text-3xl font-semibold">
            $8<span className="text-base font-normal text-neutral-400">/mo</span>
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-neutral-300">
            <li>Unlimited generations, every tool</li>
            <li>No daily caps</li>
            <li>Cancel anytime</li>
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <CheckoutButton
              request={{ plan: "monthly" }}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
            >
              Subscribe monthly — $8/mo
            </CheckoutButton>
            <CheckoutButton
              request={{ plan: "annual" }}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Subscribe annually — $64/yr (save 33%)
            </CheckoutButton>
          </div>
        </div>
      </div>

      {/* Credit packs */}
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Or buy credits
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-neutral-600">
            1 credit = 1 generation. Credits never expire and work across every tool. Great if
            you only need the tools now and then. Requires a free account to use.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CREDIT_PACKS.map((p) => (
            <div
              key={p.pack}
              className={`flex flex-col rounded-3xl border p-6 ${
                p.popular ? "border-neutral-900" : "border-neutral-200"
              }`}
            >
              {p.popular && (
                <span className="mb-2 w-fit rounded-full bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-neutral-900">{p.credits}</h3>
              <p className="mt-1 text-2xl font-semibold text-neutral-900">{p.price}</p>
              <p className="mt-1 text-xs text-neutral-500">{p.per}</p>
              <CheckoutButton
                request={{ kind: "credits", pack: p.pack }}
                className="mt-6 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
              >
                Buy {p.credits}
              </CheckoutButton>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
