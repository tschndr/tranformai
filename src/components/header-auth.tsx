"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

// Client-side auth state for the header so the surrounding page can be cached.
// While the session loads (and for anonymous visitors) we show the signed-out
// controls; signed-in users see "Account" once the session resolves.
export function HeaderAuth() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <Link
        href="/account"
        className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
      >
        Account
      </Link>
    );
  }

  return (
    <>
      <Link
        href="/sign-in"
        className="hidden px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:block"
      >
        Sign in
      </Link>
      <Link
        href="/transform"
        className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
      >
        Start rewriting
      </Link>
    </>
  );
}
