import type { Metadata } from "next";
import { CheckoutButton } from "@/components/checkout-button";

export const metadata: Metadata = {
  title: "Pricing — TransformAI",
  description: "3 free generations a day per tool, or subscribe for unlimited access to every AI text transformation tool.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-neutral-500">• Pricing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          Simple, unlimited access
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600">
          3 free generations a day per tool, no signup required. Subscribe for unlimited
          generations across every tool on the site.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 p-8">
          <h2 className="text-lg font-semibold text-neutral-900">Free</h2>
          <p className="mt-2 text-3xl font-semibold text-neutral-900">$0</p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-neutral-600">
            <li>3 free generations per day, per tool</li>
            <li>No signup required</li>
            <li>Access to every tool on the site</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-neutral-900 p-8 text-white">
          <h2 className="text-lg font-semibold">Unlimited</h2>
          <p className="mt-2 text-3xl font-semibold">
            $9<span className="text-base font-normal text-neutral-400">/mo</span>
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-neutral-300">
            <li>Unlimited generations, every tool</li>
            <li>No daily caps</li>
            <li>Cancel anytime</li>
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <CheckoutButton
              plan="monthly"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
            >
              Subscribe monthly — $9/mo
            </CheckoutButton>
            <CheckoutButton
              plan="annual"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Subscribe annually — $79/yr (save 27%)
            </CheckoutButton>
          </div>
        </div>
      </div>
    </main>
  );
}
