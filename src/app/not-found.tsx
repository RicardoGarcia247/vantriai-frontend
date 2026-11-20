import type { Metadata } from "next";

import { CtaLink } from "@/components/site/cta-link";
import { Photo } from "@/components/site/photo";
import { SiteFooter } from "@/components/site/site-footer";
import { notFound } from "@/content/contact";

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada | VantriAI" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <main id="contenido">
        <section className="hero hero--photo hero--short" data-enter="" data-calm="left" aria-labelledby="hero-h">
          <Photo id="stair" className="hero__bg" sizes="100vw" eager decorative />
          <div className="wrap">
            <div className="hero-text">
              <div className="hero__text">
                <p className="notfound__code" aria-hidden="true">
                  404
                </p>
                <h1 id="hero-h">{notFound.h1}</h1>
                <p className="hero__lead">{notFound.text}</p>
                <div className="btn-row">
                  <CtaLink href={notFound.ctas[0].href}>{notFound.ctas[0].label}</CtaLink>
                  <CtaLink href={notFound.ctas[1].href} variant="secondary">
                    {notFound.ctas[1].label}
                  </CtaLink>
                  <CtaLink href={notFound.ctas[2].href} variant="link">
                    {notFound.ctas[2].label}
                  </CtaLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
