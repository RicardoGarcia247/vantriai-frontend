import { ImageResponse } from "next/og";

export const alt = "VantriAI · Consultoría y tecnología";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El motor de imágenes no lee variables CSS: el violeta de marca vive aquí, igual que --color-accent en tokens.css.
const brand = "#7D39EB";
const onBrand = "#FFFFFF";

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
          background: brand,
          color: onBrand,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg aria-hidden="true" width="96" height="96" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="16" fill={onBrand} />
            <path
              d="M16 18l16 28 16-28"
              fill="none"
              stroke={brand}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="18" r="4.5" fill={brand} />
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
