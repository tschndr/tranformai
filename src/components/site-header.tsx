import Link from "next/link";
import { auth } from "@/auth";

const NAV_LINKS = [
  { href: "/transform", label: "Browse" },
  { href: "/pricing", label: "Pricing" },
];

export async function SiteHeader() {
  const session = await auth();

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-neutral-900" />
        <span className="text-lg font-semibold tracking-tight text-neutral-900">
          TransformAI
        </span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 sm:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-neutral-900">
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href={session?.user ? "/account" : "/sign-in"}
        className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
      >
        {session?.user ? "Account" : "Sign in"}
      </Link>
    </header>
  );
}
