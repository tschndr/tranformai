import { ImageResponse } from "next/og";

export const alt = "Rewrite Anything — 334 free AI tools to rewrite any text";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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

        <div
          style={{
            marginTop: "44px",
            fontSize: "84px",
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1.05,
            color: "#0a0a0a",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Rewrite anything,
          <br />
          in seconds.
        </div>

        <div style={{ marginTop: "36px", fontSize: "32px", color: "#525252", maxWidth: "900px" }}>
          334 focused AI tools to rewrite, summarize, and transform any text. Free to start.
        </div>

        <div style={{ marginTop: "48px", fontSize: "26px", fontWeight: 600, color: "#7c3aed" }}>
          rewrite-anything.com
        </div>
      </div>
    ),
    size
  );
}
