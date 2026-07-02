import type { Metadata } from "next";
import Link from "next/link";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { transformations } from "@/db/schema";
import { CategoryIcon } from "@/components/icons";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All AI Rewriting Tools — Browse 334 Free Tools",
  description:
    "Browse every free AI rewriting tool on Rewrite Anything, organized by category — email, resume, blog, code, support, and more.",
  alternates: { canonical: "/transform" },
};

function titleCase(value: string) {
  return value
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function TransformHubPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase();

  if (query) {
    const all = await db
      .select({
        slug: transformations.slug,
        h1: transformations.h1,
        category: transformations.category,
        seoDescription: transformations.seoDescription,
      })
      .from(transformations);

    const filtered = all.filter(
      (item) =>
        item.h1.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.slug.toLowerCase().includes(query) ||
        item.seoDescription.toLowerCase().includes(query)
    );

    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {filtered.length} {filtered.length === 1 ? "tool" : "tools"} for
            &ldquo;{query}&rdquo;
          </h1>
          <p className="mt-3 text-sm text-neutral-500">
            <Link href="/transform" className="underline-offset-4 hover:text-neutral-900 hover:underline">
              ← Back to all categories
            </Link>
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-neutral-500">
            No tools match &ldquo;{query}&rdquo; yet.{" "}
            <Link href="/transform" className="underline-offset-4 hover:text-neutral-900 hover:underline">
              View all categories
            </Link>
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                href={`/transform/${item.slug}`}
                className="group flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/5"
              >
                <div>
                  <h2 className="text-base font-semibold text-neutral-900">{item.h1}</h2>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-500">{item.seoDescription}</p>
                </div>
                <span className="text-sm font-medium text-neutral-900 transition-colors group-hover:text-accent">
                  Try it →
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>
    );
  }

  const categoryCounts = await db
    .select({
      category: transformations.category,
      count: sql<number>`count(*)::int`,
    })
    .from(transformations)
    .groupBy(transformations.category)
    .orderBy(transformations.category);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-accent">Browse</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          All tools
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600">
          {categoryCounts.length} categories. Each tool does exactly one job — free, 2 rewrites a
          day, no signup required.
        </p>
      </div>

      <form action="/transform" method="GET" className="mx-auto flex w-full max-w-md items-center gap-2 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm focus-within:border-neutral-400">
        <input
          name="q"
          aria-label="Search tools"
          placeholder="Search tools…"
          className="w-full bg-transparent px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none"
        />
        <button type="submit" className="shrink-0 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">
          Search
        </button>
      </form>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryCounts.map((c) => (
          <Link
            key={c.category}
            href={`/transform/category/${c.category}`}
            className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <CategoryIcon slug={c.category} className="h-[18px] w-[18px]" />
              </span>
              <span className="font-semibold text-neutral-900">{titleCase(c.category)}</span>
            </div>
            <span className="text-sm text-neutral-400 transition-colors group-hover:text-accent">
              {c.count} →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
