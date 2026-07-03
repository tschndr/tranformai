import type { Metadata } from "next";
import { CheckoutButton } from "@/components/checkout-button";

export const metadata: Metadata = {
  title: "Pricing — Free to Start, Credits or Unlimited",
  description:
    "2 free rewrites a day, no signup. Buy a credit pack for occasional use, or subscribe for unlimited access to all 334 AI rewriting tools.",
  alternates: { canonical: "/pricing" },
};

const CREDIT_PACKS = [
  { pack: "small" as const, credits: "100 credits", price: "$6", per: "$0.06 / rewrite" },
  { pack: "medium" as const, credits: "300 credits", price: "$15", per: "$0.05 / rewrite", popular: true },
  { pack: "large" as const, credits: "1000 credits", price: "$40", per: "$0.04 / rewrite" },
];

export default function PricingPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-accent">Pricing</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          Pay as you go, or go unlimited
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600">
          Everyone gets 2 free rewrites a day, no signup required. Need more? Buy credits that
          never expire, or subscribe for unlimited use of every tool.
        </p>
      </div>

      {/* Free + Unlimited */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 p-8">
          <h2 className="text-lg font-semibold text-neutral-900">Free</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900">$0</p>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-neutral-600">
            {["2 free rewrites per day", "Standard AI model", "Inputs up to 4,000 characters", "All 334 tools"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-accent">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 p-8 text-white">
          <div aria-hidden className="bg-brand-gradient pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full opacity-40 blur-2xl" />
          <div className="relative">
            <h2 className="text-lg font-semibold">Unlimited</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight">
              $8<span className="text-base font-normal text-neutral-400">/mo</span>
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-neutral-300">
              {["Unlimited rewrites, every tool", "Highest-quality AI model", "Longer inputs — up to 12,000 characters", "Cancel anytime"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-white">✓</span> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <CheckoutButton
                request={{ plan: "monthly" }}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
              >
                Subscribe monthly — $8/mo
              </CheckoutButton>
              <CheckoutButton
                request={{ plan: "annual" }}
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Subscribe annually — $80/yr (2 months free)
              </CheckoutButton>
            </div>
          </div>
        </div>
      </div>

      {/* Credit packs */}
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Or buy credits</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-neutral-600">
            1 credit = 1 rewrite. Credits never expire and work across every tool. Requires a free
            account to use.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CREDIT_PACKS.map((p) => (
            <div
              key={p.pack}
              className={`flex flex-col rounded-3xl border bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-neutral-900/5 ${
                p.popular ? "border-accent ring-1 ring-accent/20" : "border-neutral-200"
              }`}
            >
              {p.popular && (
                <span className="mb-2 w-fit rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-neutral-900">{p.credits}</h3>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-neutral-900">{p.price}</p>
              <p className="mt-1 text-xs text-neutral-500">{p.per}</p>
              <CheckoutButton
                request={{ kind: "credits", pack: p.pack }}
                className="mt-6 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
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
