import { eq, ne, and } from "drizzle-orm";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { transformations } from "@/db/schema";
import { TransformForm } from "@/components/transform-form";
import { GradientOrb } from "@/components/gradient-orb";

export const dynamic = "force-dynamic";

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

  return {
    title: transformation.seoTitle,
    description: transformation.seoDescription,
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

  return (
    <>
      <section className="relative overflow-hidden">
        <GradientOrb className="left-1/2 top-[-220px] h-[420px] w-[620px] -translate-x-1/2" />
        <div className="mx-auto max-w-2xl px-6 pb-10 pt-12 text-center">
          <p className="text-sm font-medium text-neutral-500 capitalize">
            • {transformation.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {transformation.h1}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-neutral-600">
            {transformation.seoDescription}
          </p>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 pb-24">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <TransformForm
            slug={transformation.slug}
            exampleInput={transformation.exampleInput}
            exampleOutput={transformation.exampleOutput}
          />
        </div>

        <section className="mx-auto max-w-2xl whitespace-pre-line text-neutral-700">
          {transformation.introCopy}
        </section>

        <section className="mx-auto w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-neutral-900">FAQ</h2>
          <dl className="mt-6 flex flex-col divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
            {transformation.faq.map((item) => (
              <div key={item.question} className="p-5">
                <dt className="font-medium text-neutral-900">{item.question}</dt>
                <dd className="mt-2 text-sm text-neutral-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        {related.length > 0 && (
          <section className="mx-auto w-full max-w-2xl">
            <h2 className="text-xl font-semibold text-neutral-900">Related transformations</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/transform/${item.slug}`}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:border-neutral-400"
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
