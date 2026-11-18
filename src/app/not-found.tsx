import type { Metadata } from "next";

import { CtaLink } from "@/components/site/cta-link";
import { Container } from "@/components/site/section";
import { notFound } from "@/content/contact";

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada | VantriAI" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p aria-hidden="true" className="text-7xl font-semibold tracking-tight text-primary sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{notFound.h1}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{notFound.text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaLink href={notFound.ctas[0].href}>{notFound.ctas[0].label}</CtaLink>
          <CtaLink href={notFound.ctas[1].href} variant="secondary">
            {notFound.ctas[1].label}
          </CtaLink>
          <CtaLink href={notFound.ctas[2].href} variant="secondary">
            {notFound.ctas[2].label}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
