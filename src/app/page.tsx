import { Compass, Cpu } from "lucide-react";

import { ComplementDiagram } from "@/components/diagrams/complement-diagram";
import { HomeArt } from "@/components/diagrams/hero-art";
import { ProcessSteps } from "@/components/diagrams/process-steps";
import { CtaBand } from "@/components/site/cta-band";
import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { CheckList, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { home, homeSeo } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(homeSeo);

const pillarIcons = { governance: Compass, technology: Cpu } as const;

export default function HomePage() {
  const { hero, pillars, problems, complement, method, sectors, audience, faqs, finalCta } = home;

  return (
    <>
      <PageHero
        size="large"
        h1={hero.h1}
        intro={hero.intro}
        primary={hero.primary}
        secondary={hero.secondary}
        art={<HomeArt />}
      />

      <Section labelledBy="focos-title">
        <SectionHeading id="focos-title" eyebrow="Dos focos, el mismo peso" title={pillars.title} />
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.items.map((p) => {
            const Icon = pillarIcons[p.key as keyof typeof pillarIcons];
            return (
              <article
                key={p.key}
                className="group flex flex-col rounded-3xl border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              >
                <span
                  aria-hidden="true"
                  className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/25"
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                <CheckList items={p.list} className="mt-6 flex-1" />
                <div className="mt-8">
                  <CtaLink href={p.cta.href} variant="secondary" arrow className="w-full sm:w-auto">
                    {p.cta.label}
                  </CtaLink>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="muted" labelledBy="problemas-title">
        <SectionHeading id="problemas-title" title={problems.title} lead={problems.lead} />
        <ProblemGrid items={problems.items} />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed">{problems.closing}</p>
      </Section>

      <Section labelledBy="complemento-title">
        <SectionHeading id="complemento-title" title={complement.title} lead={complement.intro} />
        <p className="mb-6 font-medium">{complement.example}</p>
        <ComplementDiagram
          governance={complement.governance}
          technology={complement.technology}
          result={complement.result}
        />

        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-semibold tracking-tight">{complement.startTitle}</h3>
          <ul className="grid gap-4 md:grid-cols-3">
            {complement.start.map((s) => (
              <li key={s.label} className="rounded-2xl border bg-card p-6">
                <p className="font-semibold text-primary">{s.label}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaLink href={complement.cta.href} variant="link">
              {complement.cta.label}
            </CtaLink>
          </div>
        </div>
      </Section>

      <Section id={method.id} tone="brand" labelledBy="metodo-title">
        <SectionHeading id="metodo-title" eyebrow="Metodología en cuatro etapas" title={method.title} />
        <ProcessSteps steps={method.steps} />
      </Section>

      <Section labelledBy="sectores-title">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <SectionHeading id="sectores-title" title={sectors.title} lead={sectors.text} className="mb-6 sm:mb-8" />
            <CtaLink href={sectors.cta.href}>{sectors.cta.label}</CtaLink>
          </div>
          <ul className="flex flex-wrap gap-3">
            {sectors.chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-brand-200 bg-brand-50 px-5 py-2.5 font-medium text-brand-800 dark:bg-brand-900/20 dark:text-brand-100"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="muted" labelledBy="publico-title" className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="publico-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {audience.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{audience.text}</p>
        </div>
      </Section>

      <Faq items={faqs} />

      <CtaBand title={finalCta.title} text={finalCta.text} cta={finalCta.cta} />
    </>
  );
}
