import { signIn } from "@/auth";

export default function SignInPage() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6 px-6 py-24">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Sign in</h1>
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
          className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm shadow-sm focus:border-neutral-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-700"
        >
          Send magic link
        </button>
      </form>
    </main>
  );
}
