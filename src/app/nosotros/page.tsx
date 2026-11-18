import { Compass, Cpu } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { about, aboutSeo } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(aboutSeo);

export default function AboutPage() {
  const { hero, who, approach, pillars, experience, audience, faqs, finalCta } = about;

  return (
    <>
      <PageHero
        h1={hero.h1}
        breadcrumbs={[{ name: "Nosotros", path: aboutSeo.path }]}
      />

      <Section labelledBy="quienes-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading id="quienes-title" title={who.title} className="mb-0 sm:mb-0" />
          <p className="text-xl leading-relaxed text-muted-foreground">{who.text}</p>
        </div>
      </Section>

      <Section tone="muted" labelledBy="enfoque-title">
        <SectionHeading id="enfoque-title" title={approach.title} />
        <ul className="grid gap-5 sm:grid-cols-2">
          {approach.items.map((item, i) => (
            <li
              key={item.lead}
              className="flex gap-4 rounded-lg border bg-card p-6 transition-colors"
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-primary"
              >
                {i + 1}
              </span>
              <p className="leading-relaxed">
                <strong className="font-semibold">{item.lead}</strong> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="focos-title">
        <SectionHeading id="focos-title" title={pillars.title} />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border bg-card p-8">
            <span aria-hidden="true" className="mb-5 flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Compass className="size-6" />
            </span>
            <p className="leading-relaxed">{pillars.governance}</p>
            <div className="mt-6">
              <CtaLink href={pillars.ctas[0].href} variant="secondary" arrow>
                {pillars.ctas[0].label}
              </CtaLink>
            </div>
          </article>
          <article className="rounded-lg border bg-card p-8">
            <span aria-hidden="true" className="mb-5 flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Cpu className="size-6" />
            </span>
            <p className="leading-relaxed">{pillars.technology}</p>
            <div className="mt-6">
              <CtaLink href={pillars.ctas[1].href} variant="secondary" arrow>
                {pillars.ctas[1].label}
              </CtaLink>
            </div>
          </article>
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{pillars.closing}</p>
      </Section>

      <Section tone="brand" labelledBy="experiencia-title">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <SectionHeading id="experiencia-title" title={experience.title} lead={experience.text} className="mb-6 sm:mb-6" />
            <CtaLink href={experience.link.href} variant="link">
              {experience.link.label}
            </CtaLink>
          </div>
          <ul aria-hidden="true" className="flex flex-wrap gap-3">
            {experience.chips.map((c) => (
              <li key={c} className="rounded-full border border-brand-200 bg-card px-5 py-2.5 font-medium text-brand-800">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="publico-title" className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="publico-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {audience.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{audience.text}</p>
        </div>
      </Section>

      <Faq items={faqs} tone="muted" />

      <CtaBand title={finalCta.title} text={finalCta.text} cta={finalCta.cta} />
    </>
  );
}
