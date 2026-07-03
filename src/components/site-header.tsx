import Link from "next/link";
import { Logo } from "@/components/logo";
import { CategoryIcon, ChevronDown } from "@/components/icons";
import { MobileMenu } from "@/components/mobile-menu";
import { HeaderAuth } from "@/components/header-auth";

const POPULAR_CATEGORIES: { slug: string; label: string }[] = [
  { slug: "email", label: "Email" },
  { slug: "resume", label: "Resume" },
  { slug: "blog", label: "Blog" },
  { slug: "code", label: "Code" },
  { slug: "customer-support", label: "Support" },
  { slug: "social-caption", label: "Social" },
  { slug: "cover-letter", label: "Cover letters" },
  { slug: "ad-copy", label: "Ad copy" },
  { slug: "newsletter", label: "Newsletter" },
  { slug: "academic", label: "Academic" },
  { slug: "legal", label: "Legal" },
  { slug: "review", label: "Reviews" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3.5">
        <Logo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm font-medium text-neutral-600 md:flex">
          {/* Categories mega-dropdown (CSS hover/focus, no JS) */}
          <div className="group relative">
            <Link
              href="/transform"
              className="flex items-center gap-1 py-2 transition-colors hover:text-neutral-900 group-hover:text-neutral-900"
            >
              Tools
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-[540px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-xl shadow-neutral-900/10">
                <div className="grid grid-cols-2 gap-1">
                  {POPULAR_CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/transform/category/${c.slug}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-neutral-50"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <CategoryIcon slug={c.slug} className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-neutral-800">{c.label}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/transform"
                  className="mt-1 flex items-center justify-center rounded-xl border-t border-neutral-100 py-2.5 text-sm font-medium text-accent hover:text-accent-strong"
                >
                  Browse all 334 tools →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/pricing" className="py-2 transition-colors hover:text-neutral-900">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <HeaderAuth />
          <MobileMenu categories={POPULAR_CATEGORIES} />
        </div>
      </div>
    </header>
  );
}
