import type { NextRequest } from "next/server";

// Resolve the app's public base URL at request time for building Stripe
// redirect URLs. Deriving it from the incoming request's forwarded host is
// always correct for wherever the user actually is (production domain, preview
// URL, or localhost), and avoids depending on the build-time NEXT_PUBLIC_APP_URL
// being set correctly.
export function getAppUrl(req: NextRequest): string {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") ?? "https";

  if (host && !host.startsWith("localhost") && !host.startsWith("127.0.0.1")) {
    return `${proto}://${host}`;
  }

  // Local dev (or missing host): fall back to explicit env, then Vercel's
  // production URL, then a sensible localhost default.
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return host ? `http://${host}` : "http://localhost:3000";
}
