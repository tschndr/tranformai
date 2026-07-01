import Link from "next/link";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/transform", label: "Browse" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/transform/email-to-professional-rewrite", label: "Email → Professional" },
      { href: "/transform", label: "All transformations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/", label: "About" },
      { href: "/", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-neutral-900" />
          <span className="text-lg font-semibold tracking-tight text-neutral-900">
            TransformAI
          </span>
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
                      className="text-sm text-neutral-500 hover:text-neutral-900"
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
        <p>© {new Date().getFullYear()} TransformAI. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-neutral-900">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-neutral-900">
            Terms of Use
          </Link>
        </div>
      </div>

      <div className="overflow-hidden pt-4">
        <p className="translate-y-1/3 text-center text-[16vw] leading-none font-bold tracking-tight text-neutral-100 select-none">
          TransformAI
        </p>
      </div>
    </footer>
  );
}
