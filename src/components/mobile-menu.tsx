"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { CategoryIcon, Menu, X } from "@/components/icons";

type Category = { slug: string; label: string };

export function MobileMenu({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const signedIn = status === "authenticated";
  const containerRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  // Close on Escape and on clicks outside the menu.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu-panel"
          className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl shadow-neutral-900/10"
        >
          <Link
            href="/transform"
            onClick={close}
            className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            All tools
          </Link>

          <p className="px-3 pb-1 pt-2 text-xs font-medium tracking-wide text-neutral-500 uppercase">
            Popular categories
          </p>
          <div className="grid grid-cols-2 gap-1">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/transform/category/${c.slug}`}
                onClick={close}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <CategoryIcon slug={c.slug} className="h-4 w-4" />
                </span>
                {c.label}
              </Link>
            ))}
          </div>

          <div className="my-1 border-t border-neutral-100" />
          <Link
            href="/pricing"
            onClick={close}
            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Pricing
          </Link>
          {!signedIn && (
            <Link
              href="/sign-in"
              onClick={close}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              Sign in
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
