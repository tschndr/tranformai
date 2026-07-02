import type { ReactNode } from "react";

/**
 * Shared shell for long-form legal pages (Privacy, Terms). Keeps typography
 * consistent without pulling in a prose plugin — child element styles are
 * applied via Tailwind arbitrary variants on the content wrapper.
 */
export function LegalShell({
  title,
  updated,
  lead,
  children,
}: {
  title: string;
  updated: string;
  lead: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-neutral-500">Last updated: {updated}</p>
      <p className="mt-6 text-lg leading-relaxed text-neutral-600">{lead}</p>

      <div
        className="mt-4 text-neutral-600 leading-relaxed [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-neutral-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-neutral-900 [&_li]:list-disc [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-neutral-900 [&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6"
      >
        {children}
      </div>
    </main>
  );
}
