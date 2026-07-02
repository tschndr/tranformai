import Link from "next/link";

// Emblem only — for favicons, small marks, and section accents.
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/emblem.svg" alt="" aria-hidden="true" className={className} />;
}

// Full wordmark lockup (emblem + "Rewrite Anything") — for the header & footer.
export function Logo({ className = "", height = "h-7" }: { className?: string; height?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Rewrite Anything — home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/wordmark.svg" alt="Rewrite Anything" className={`${height} w-auto`} />
    </Link>
  );
}
