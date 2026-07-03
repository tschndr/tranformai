import { eq, ne, and } from "drizzle-orm";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { transformations } from "@/db/schema";
import { TransformForm } from "@/components/transform-form";

// Tool content is static between re-seeds — serve from cache, revalidate hourly
// (ISR). Unknown slugs are generated on-demand and then cached.
export const revalidate = 3600;

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

function titleCase(value: string) {
  return value
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  const rows = await db.select({ slug: transformations.slug }).from(transformations);
  return rows.map((r) => ({ slug: r.slug }));
}

async function getTransformation(slug: string) {
  const [transformation] = await db
    .select()
    .from(transformations)
    .where(eq(transformations.slug, slug))
    .limit(1);
  return transformation ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const transformation = await getTransformation(slug);
  if (!transformation) return {};

  const url = `/transform/${slug}`;
  return {
    title: transformation.seoTitle,
    description: transformation.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: transformation.seoTitle,
      description: transformation.seoDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: transformation.seoTitle,
      description: transformation.seoDescription,
    },
  };
}

export default async function TransformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const transformation = await getTransformation(slug);
  if (!transformation) notFound();

  const related = await db
    .select({ slug: transformations.slug, h1: transformations.h1 })
    .from(transformations)
    .where(and(eq(transformations.category, transformation.category), ne(transformations.slug, slug)))
    .limit(4);

  const categoryLabel = titleCase(transformation.category);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: transformation.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: appUrl },
        { "@type": "ListItem", position: 2, name: "All tools", item: `${appUrl}/transform` },
        {
          "@type": "ListItem",
          position: 3,
          name: categoryLabel,
          item: `${appUrl}/transform/category/${transformation.category}`,
        },
        { "@type": "ListItem", position: 4, name: transformation.h1, item: `${appUrl}/transform/${slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: transformation.h1,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: transformation.seoDescription,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden">
        <div aria-hidden className="bg-brand-glow pointer-events-none absolute inset-x-0 top-0 h-[380px]" />
        <div className="relative mx-auto max-w-2xl px-6 pb-8 pt-10 text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
            <Link href="/" className="hover:text-neutral-600">Home</Link>
            <span>/</span>
            <Link href="/transform" className="hover:text-neutral-600">Tools</Link>
            <span>/</span>
            <Link href={`/transform/category/${transformation.category}`} className="hover:text-neutral-600">
              {categoryLabel}
            </Link>
          </nav>

          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {transformation.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-neutral-600">
            {transformation.seoDescription}
          </p>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 pb-24">
        <div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-lg shadow-neutral-900/5 sm:p-8">
            <TransformForm
              slug={transformation.slug}
              exampleInput={transformation.exampleInput}
              exampleOutput={transformation.exampleOutput}
            />
          </div>
          <p className="mt-4 text-center text-xs text-neutral-500">
            Free plan includes 2 rewrites a day.{" "}
            <Link
              href="/pricing"
              className="font-medium text-accent underline-offset-2 hover:text-accent-strong hover:underline"
            >
              Go unlimited for $8/mo →
            </Link>
          </p>
        </div>

        <section className="mx-auto max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
            About this tool
          </h2>
          <div className="mt-4 whitespace-pre-line leading-relaxed text-neutral-600">
            {transformation.introCopy}
          </div>
        </section>

        <section className="mx-auto w-full max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
            Frequently asked questions
          </h2>
          <div className="mt-6 flex flex-col divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200">
            {transformation.faq.map((item) => (
              <details key={item.question} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-neutral-900">
                  {item.question}
                  <span aria-hidden className="text-neutral-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto w-full max-w-2xl">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
              Related {categoryLabel.toLowerCase()} tools
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/transform/${item.slug}`}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                >
                  {item.h1}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
