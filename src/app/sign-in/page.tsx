import type { Metadata } from "next";
import { signIn } from "@/auth";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Rewrite Anything with a magic link — no password required.",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6 px-6 py-24">
      <div className="text-center">
        <LogoMark className="mx-auto h-9 w-9" />
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">Sign in</h1>
        <p className="mt-2 text-sm text-neutral-600">
          We&apos;ll email you a magic link — no password required.
        </p>
      </div>

      <form
        action={async (formData) => {
          "use server";
          const email = formData.get("email");
          if (typeof email !== "string" || !email) return;
          await signIn("resend", { email, redirectTo: "/account" });
        }}
        className="flex flex-col gap-3"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm shadow-sm transition-colors focus:border-neutral-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Send magic link
        </button>
      </form>

      <p className="text-center text-xs text-neutral-400">
        New here? Signing in creates your account automatically.
      </p>
    </main>
  );
}
