import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";

import { KitBoot } from "@/components/site/kit-boot";
import { SiteHeader } from "@/components/site/site-header";
import { JsonLd, organizationLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/* Pareja tipográfica repartida por el kit para servicios: Newsreader (títulos) y Hanken Grotesk (texto). */
const display = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const text = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "VantriAI · Consultoría y tecnología", template: "%s" },
  applicationName: site.name,
  other: { "site-kind": "other", "page-type": "service" },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ef",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* Hojas del kit en orden (system, cards, motion, layout) y, al final, las del sitio. */
const KIT_CSS = [
  "/assets/system.css",
  "/assets/ui/cards.css",
  "/assets/motion/motion.css",
  "/assets/layout/layout.css",
  "/assets/icons/icon.css",
  "/assets/site.css",
];

const ENTER = `document.documentElement.classList.add('m-enter');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);document.documentElement.classList.add('mo-js');setTimeout(function(){document.documentElement.classList.add('mo-safe')},2500);`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-type="service"
      data-radius="sharp"
      data-buttons="solid"
      data-motion=""
      className={`${display.variable} ${text.variable}`}
      suppressHydrationWarning
    >
      <head>
        {KIT_CSS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <script dangerouslySetInnerHTML={{ __html: ENTER }} />
      </head>
      <body>
        <JsonLd data={organizationLd} />
        <SiteHeader />
        {children}
        <KitBoot />
      </body>
    </html>
  );
}
