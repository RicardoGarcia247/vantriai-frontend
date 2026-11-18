import { ImageResponse } from "next/og";

export const alt = "VantriAI · Consultoría y tecnología";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "linear-gradient(135deg, #5B1FC7 0%, #7D39EB 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="16" fill="white" />
            <path
              d="M16 18l16 28 16-28"
              fill="none"
              stroke="#7D39EB"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="18" r="4.5" fill="#7D39EB" />
          </svg>
          <div style={{ fontSize: 84, fontWeight: 700 }}>VantriAI</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 44, opacity: 0.92 }}>
          Consultoría y tecnología
        </div>
      </div>
    ),
    size,
  );
}
