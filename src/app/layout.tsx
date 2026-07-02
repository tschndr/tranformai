import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Rewrite Anything — 334 Free AI Tools to Rewrite Any Text",
    template: "%s · Rewrite Anything",
  },
  description:
    "Rewrite Anything is a hub of 334 focused AI tools that rewrite, summarize, and transform any text in seconds — professional emails, resume bullets, blog posts, and more. Free to start, no signup.",
  applicationName: "Rewrite Anything",
  keywords: [
    "AI rewriter",
    "rewrite text",
    "AI writing tools",
    "email rewriter",
    "paraphrasing tool",
    "text summarizer",
    "resume bullet generator",
  ],
  authors: [{ name: "Rewrite Anything" }],
  openGraph: {
    type: "website",
    siteName: "Rewrite Anything",
    url: appUrl,
    title: "Rewrite Anything — 334 Free AI Tools to Rewrite Any Text",
    description:
      "334 focused AI tools to rewrite, summarize, and transform any text in seconds. Free to start.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewrite Anything — 334 Free AI Tools to Rewrite Any Text",
    description:
      "334 focused AI tools to rewrite, summarize, and transform any text in seconds. Free to start.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-neutral-900">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
