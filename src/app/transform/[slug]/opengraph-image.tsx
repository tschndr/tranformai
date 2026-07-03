import { ImageResponse } from "next/og";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { transformations } from "@/db/schema";

export const alt = "Rewrite Anything — AI text tool";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 3600;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [tool] = await db
    .select({ h1: transformations.h1, seoDescription: transformations.seoDescription })
    .from(transformations)
    .where(eq(transformations.slug, slug))
    .limit(1);

  const title = tool?.h1 ?? "Rewrite anything, in seconds.";
  const description =
    tool?.seoDescription ??
    "334 focused AI tools to rewrite, summarize, and transform any text.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(1000px 520px at 100% 0%, rgba(243,88,228,0.16), transparent 60%), radial-gradient(900px 520px at 0% 100%, rgba(48,104,217,0.16), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #F358E4, #7D62DD 56%, #3068D9)",
            }}
          />
          <div style={{ fontSize: "34px", fontWeight: 600, color: "#0a0a0a" }}>
            Rewrite Anything
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.08,
              color: "#0a0a0a",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "30px",
              lineHeight: 1.35,
              color: "#525252",
              display: "flex",
            }}
          >
            {description}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "26px", fontWeight: 600, color: "#7c3aed" }}>
            rewrite-anything.com
          </div>
          <div style={{ fontSize: "24px", color: "#737373" }}>Free · No signup</div>
        </div>
      </div>
    ),
    size
  );
}
