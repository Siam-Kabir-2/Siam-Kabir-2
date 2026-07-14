import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Siam Kabir — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0c0c0e 0%, #16161a 55%, #1c1c22 100%)",
          color: "#f4f4f6",
          padding: "64px 72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#a8a8b3",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#d4d4dc",
            }}
          />
          Full-Stack Developer
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              maxWidth: 820,
              fontSize: 30,
              lineHeight: 1.45,
              color: "#c4c4cd",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Next.js · Laravel · Supabase — modern websites & apps with lasting craft.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#9a9aa6",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            letterSpacing: "0.08em",
          }}
        >
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
          <span>Available for work</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
