import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { Nav } from "@/components/kit/kit";
import { headerCta } from "@/lib/site";
import { JsonLd, organizationLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "VantriAI · Consultoría y tecnología", template: "%s" },
  applicationName: site.name,
};

export const viewport: Viewport = {
  themeColor: "#f6f4f1",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* El bloque :root tal como lo imprime start.mjs brand (marca de VantriAI, Newsreader + Hanken Grotesk). */
const root = `
:root {
  --p-bg: #f6f4f1; --p-surface: #ece9e4; --p-ink: #1b1a1f; --p-muted: #5b5961;
  --p-accent: #7d39eb; --p-accent-ink: #f6f4f1; --p-action: #7d39eb; --p-action-ink: #f6f4f1;
  --p-inv-bg: #1b1a1f; --p-inv-surface: #27262b; --p-inv-ink: #f6f4f1; --p-inv-muted: #9a999a;
  --p-inv-accent: #7d39eb; --p-inv-accent-ink: #f6f4f1; --p-inv-action: #7d39eb; --p-inv-action-ink: #f6f4f1;
  --font-display: "Newsreader", Georgia, serif;
  --font-text: "Hanken Grotesk", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.018em;
  --display-tracking-xl: -0.025em;
  --ly-scale: 1.06;
}
@media (max-width: 639px) { .strip { aspect-ratio: 3 / 1 !important; } .faq__photo { aspect-ratio: 3 / 1 !important; } .grid.fill > .frame--photo.frame--fill { aspect-ratio: 3 / 2 !important; height: auto !important; flex: none !important; min-height: 0 !important; } }
#focos .panel, #complemento .panel { --p-h: 240px; }
@media (max-width: 639px) { #focos .panel, #complemento .panel { --p-h: 120px; } }`;

const enter = `document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)`;
const moments = `document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-type="service"
      data-radius="soft"
      data-buttons="arrow"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <meta name="site-kind" content="other" />
        <meta name="page-type" content="service" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..700&family=Hanken+Grotesk:wght@400..600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style dangerouslySetInnerHTML={{ __html: root }} />
                <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/word-highlight/moment.js" />
      </head>
      <body suppressHydrationWarning>
        <Script id="m-enter" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: enter }} />
        <Script id="m-moments" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: moments }} />
        <JsonLd data={organizationLd} />
        <Nav />
        {children}
        <nav className="actionbar" aria-label="Acciones rápidas">
          <a className="btn btn--primary" href={headerCta.href}>
            {headerCta.label}
          </a>
        </nav>
        <Script src="/assets/system.js" type="module" strategy="lazyOnload" />
        <Script src="/assets/motion/motion.js" type="module" strategy="lazyOnload" />
        <Script src="/assets/layout/layout.js" type="module" strategy="lazyOnload" />
      </body>
    </html>
  );
}
