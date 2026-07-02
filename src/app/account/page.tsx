import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { getActiveSubscription } from "@/lib/subscription";
import { getCreditBalance } from "@/lib/credits";
import { BillingPortalButton } from "@/components/billing-portal-button";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");

  const userId = session.user.id;
  const subscription = userId ? await getActiveSubscription(userId) : null;
  const credits = userId && !subscription ? await getCreditBalance(userId) : 0;

  return (
    <main className="mx-auto flex w-full max-w-lg flex-col gap-6 px-6 py-16">
      <div>
        <p className="text-sm font-medium text-neutral-500">• Account</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
          {session.user.email}
        </h1>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-sm font-medium text-neutral-500">Plan</h2>
        {subscription ? (
          <>
            <p className="mt-2 text-lg font-semibold text-neutral-900">
              Unlimited — {subscription.plan === "annual" ? "Annual" : "Monthly"} plan
            </p>
            <p className="mt-1 text-sm text-neutral-600">Status: {subscription.status}</p>
            <BillingPortalButton className="mt-4 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700" />
          </>
        ) : (
          <>
            <p className="mt-2 text-neutral-600">
              You&apos;re on the free plan — 2 rewrites per day.
            </p>
            <div className="mt-3 rounded-xl bg-accent-soft px-4 py-3">
              <p className="text-sm text-neutral-500">Credit balance</p>
              <p className="text-2xl font-semibold text-neutral-900">
                {credits} <span className="text-base font-normal text-neutral-500">credits</span>
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Credits are used once your 2 free daily rewrites are spent.
              </p>
            </div>
            <a
              href="/pricing"
              className="mt-4 inline-block rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
            >
              Buy credits or go unlimited
            </a>
          </>
        )}
      </div>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit" className="text-sm text-neutral-500 underline hover:text-neutral-900">
          Sign out
        </button>
      </form>
    </main>
  );
}
