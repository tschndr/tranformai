import Link from "next/link";
import { Logo } from "@/components/logo";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/transform", label: "All tools" },
      { href: "/pricing", label: "Pricing" },
      { href: "/transform/email-to-professional-rewrite", label: "Email rewriter" },
    ],
  },
  {
    title: "Popular categories",
    links: [
      { href: "/transform/category/email", label: "Email" },
      { href: "/transform/category/resume", label: "Resume" },
      { href: "/transform/category/blog", label: "Blog" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/sign-in", label: "Sign in" },
      { href: "/account", label: "Your account" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-neutral-500">
            334 focused AI tools to rewrite, summarize, and transform any text — in seconds.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-neutral-900">{col.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 pb-6 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Rewrite Anything. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="transition-colors hover:text-neutral-900">
            Privacy
          </Link>
          <Link href="/" className="transition-colors hover:text-neutral-900">
            Terms
          </Link>
        </div>
      </div>

      <div aria-hidden className="overflow-hidden pt-4">
        <p className="translate-y-1/4 text-center text-[15vw] leading-none font-bold tracking-tighter text-neutral-100 select-none">
          rewrite&#8202;anything
        </p>
      </div>
    </footer>
  );
}
