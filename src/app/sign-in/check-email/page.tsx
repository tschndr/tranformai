import type { Metadata } from "next";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "Check your email",
  robots: { index: false, follow: false },
};

export default function CheckEmailPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center gap-3 px-6 py-24 text-center">
      <LogoMark className="h-9 w-9" />
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">Check your email</h1>
      <p className="text-sm text-neutral-600">
        We sent you a sign-in link. Click it to finish signing in — you can close this tab.
      </p>
    </main>
  );
}
