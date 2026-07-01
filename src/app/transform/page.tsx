import type { Metadata } from "next";
import Link from "next/link";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { transformations } from "@/db/schema";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Text Transformations — TransformAI",
  description: "Browse every free AI text transformation, organized by category.",
};

const CARD_COLORS = [
  "bg-pink-100",
  "bg-indigo-100",
  "bg-cyan-100",
  "bg-orange-100",
  "bg-emerald-100",
  "bg-violet-100",
  "bg-amber-100",
  "bg-sky-100",
];

function colorForIndex(index: number) {
  return CARD_COLORS[index % CARD_COLORS.length];
}

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
        item.slug.toLowerCase().includes(query)
    );

    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-medium text-neutral-500">• Browse</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
            All Transformations
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            Showing results for &ldquo;{query}&rdquo; ·{" "}
            <Link href="/transform" className="underline hover:text-neutral-900">
              clear
            </Link>
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-neutral-500">
            No transformations match &ldquo;{query}&rdquo; yet.{" "}
            <Link href="/transform" className="underline hover:text-neutral-900">
              View all categories
            </Link>
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <Link
                key={item.slug}
                href={`/transform/${item.slug}`}
                className={`flex flex-col justify-between gap-6 rounded-2xl p-6 ${colorForIndex(index)}`}
              >
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{item.h1}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-700">
                    {item.seoDescription}
                  </p>
                </div>
                <span className="text-sm font-medium text-neutral-900">Try it →</span>
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
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-neutral-500">• Browse</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          All Transformations
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600">
          Pick a category below. Each tool does exactly one job, free — 2 generations a day, no
          signup required.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryCounts.map((c, index) => (
          <Link
            key={c.category}
            href={`/transform/category/${c.category}`}
            className={`flex h-32 flex-col justify-between rounded-2xl p-6 ${colorForIndex(index)}`}
          >
            <h2 className="text-lg font-semibold text-neutral-900">{titleCase(c.category)}</h2>
            <span className="text-sm font-medium text-neutral-700">
              {c.count} tool{c.count === 1 ? "" : "s"} →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
