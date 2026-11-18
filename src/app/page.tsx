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
  const [heroIntro, ...restIntro] = hero.intro;

  return (
    <>
      <PageHero
        size="large"
        h1={hero.h1}
        intro={[heroIntro]}
        primary={hero.primary}
        secondary={hero.secondary}
        art={<HomeArt />}
      />

      {/* Los dos focos: la cabecera a la izquierda, los dos focos en columnas separadas por un filete. */}
      <Section labelledBy="focos-title">
        <div className="grid gap-(--space-xl) lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-(--gap-columns)">
          <div>
            <SectionHeading id="focos-title" title={pillars.title} className="mb-(--space-lg)" />
            {restIntro.map((p) => (
              <p key={p} className="text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="grid gap-(--space-2xl) md:grid-cols-2 md:gap-(--gap-columns)">
            {pillars.items.map((p) => {
              const Icon = pillarIcons[p.key as keyof typeof pillarIcons];
              return (
                <article key={p.key} className="flex flex-col border-t border-ink pt-(--space-lg)">
                  <Icon aria-hidden="true" className="mb-(--space-md) size-7 text-accent" />
                  <h3 className="text-(length:--text-2xl)">{p.title}</h3>
                  <p className="mt-(--space-md) text-muted-foreground">{p.text}</p>
                  <CheckList items={p.list} className="mt-(--space-lg) flex-1" />
                  <div className="mt-(--space-lg)">
                    <CtaLink href={p.cta.href} variant="link">
                      {p.cta.label}
                    </CtaLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Problemas: filas numeradas junto a la cabecera. */}
      <Section tone="muted" labelledBy="problemas-title">
        <div className="grid gap-(--space-xl) lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-(--gap-columns)">
          <div className="lg:sticky lg:top-(--space-3xl) lg:self-start">
            <SectionHeading id="problemas-title" title={problems.title} lead={problems.lead} className="mb-0" />
          </div>
          <div>
            <ProblemGrid items={problems.items} columns={2} />
            <p className="lead mt-(--space-xl) max-w-none font-bold">{problems.closing}</p>
          </div>
        </div>
      </Section>

      {/* El ejemplo de los dos focos trabajando juntos y las tres formas de empezar. */}
      <Section labelledBy="complemento-title">
        <SectionHeading id="complemento-title" title={complement.title} lead={complement.intro} />
        <p className="mb-(--space-lg) max-w-none text-(length:--text-lg) font-bold">{complement.example}</p>
        <ComplementDiagram
          governance={complement.governance}
          technology={complement.technology}
          result={complement.result}
        />

        <div className="mt-(--space-3xl)">
          <h3 className="mb-(--space-xl) text-(length:--text-2xl)">{complement.startTitle}</h3>
          <ul className="grid md:grid-cols-3">
            {complement.start.map((s) => (
              <li
                key={s.label}
                className="border-t border-ink py-(--space-lg) md:border-l md:border-t-0 md:px-(--space-lg) md:first:border-l-0 md:first:pl-0"
              >
                <p className="max-w-none text-(length:--text-title) font-bold">{s.label}</p>
                <p className="mt-(--space-sm) text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-(--space-xl)">
            <CtaLink href={complement.cta.href} variant="link">
              {complement.cta.label}
            </CtaLink>
          </div>
        </div>
      </Section>

      <Section id={method.id} tone="brand" labelledBy="metodo-title">
        <SectionHeading id="metodo-title" title={method.title} />
        <ProcessSteps steps={method.steps} />
      </Section>

      {/* Sectores: la lista a la izquierda como filas, la cabecera y la acción a la derecha. */}
      <Section labelledBy="sectores-title">
        <div className="grid items-start gap-(--space-xl) lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-(--gap-columns)">
          <ul className="order-2 border-t border-ink lg:order-1">
            {sectors.chips.map((c) => (
              <li
                key={c}
                className="border-b border-rule py-(--space-md) text-(length:--text-xl) font-bold"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="order-1 lg:order-2">
            <SectionHeading id="sectores-title" title={sectors.title} lead={sectors.text} className="mb-(--space-lg)" />
            <CtaLink href={sectors.cta.href}>{sectors.cta.label}</CtaLink>
          </div>
        </div>
      </Section>

      {/* Público: una afirmación a tamaño de sección. */}
      <Section tone="muted" labelledBy="publico-title">
        <div className="grid gap-(--space-lg) lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:items-end lg:gap-(--gap-columns)">
          <h2 id="publico-title" className="max-w-[24ch] text-(length:--text-display-s)">
            {audience.title}
          </h2>
          <p className="text-muted-foreground">{audience.text}</p>
        </div>
      </Section>

      <Faq items={faqs} />

      <CtaBand title={finalCta.title} text={finalCta.text} cta={finalCta.cta} />
    </>
  );
}
