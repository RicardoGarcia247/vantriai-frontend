import {
  BarChart3,
  Bot,
  Code2,
  Database,
  ShoppingCart,
  Workflow,
} from "lucide-react";

import { TechnologyArt } from "@/components/diagrams/hero-art";
import { Bridge } from "@/components/site/bridge";
import { CtaBand } from "@/components/site/cta-band";
import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { CheckList, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { technology, technologySeo } from "@/content/technology";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata(technologySeo);

const icons: Record<string, React.ReactNode> = {
  automation: <Workflow />,
  ai: <Bot />,
  software: <Code2 />,
  analytics: <BarChart3 />,
  dataeng: <Database />,
  ecommerce: <ShoppingCart />,
};

export default function TechnologyPage() {
  const { hero, problems, services, deliverables, rollout, bridge, start, faqs } = technology;

  return (
    <>
      <JsonLd
        data={serviceLd("Soluciones tecnológicas", technologySeo.description, technologySeo.path)}
      />
      <PageHero
        h1={hero.h1}
        intro={hero.intro}
        primary={hero.primary}
        secondary={hero.secondary}
        breadcrumbs={[{ name: "Tecnología", path: technologySeo.path }]}
        art={<TechnologyArt />}
      />

      <Section labelledBy="problemas-title">
        <SectionHeading id="problemas-title" title={problems.title} />
        <ProblemGrid items={problems.items} columns={2} />
        <p className="mt-8 max-w-3xl rounded-lg bg-secondary p-6 text-lg leading-relaxed text-secondary-foreground">
          {problems.closing}
        </p>
      </Section>

      <Section id={services.id} tone="muted" labelledBy="servicios-title">
        <SectionHeading id="servicios-title" title={services.title} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s) => (
            <article
              key={s.key}
              className={cn(
                "flex flex-col rounded-lg border bg-card p-7 transition-colors",
                s.featured && "border-rule ring-1 ring-primary/10",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "mb-5 flex size-11 items-center justify-center rounded-lg [&_svg]:size-5",
                  s.featured
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-primary",
                )}
              >
                {icons[s.key]}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.text}</p>
              {"link" in s && s.link && (
                <div className="mt-6">
                  <CtaLink href={s.link.href} variant="link">
                    {s.link.label}
                  </CtaLink>
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section tone="brand" labelledBy="entregables-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="entregables-title"
             
              title={deliverables.title}
              lead={deliverables.lead}
              className="mb-6 sm:mb-8"
            />
            <CheckList items={deliverables.items} tone="onTint" />
          </div>
          <div className="self-center rounded-lg border bg-card p-8">
            <h2 className="text-2xl font-semibold tracking-tight">{rollout.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{rollout.text}</p>
          </div>
        </div>
      </Section>

      <Bridge title={bridge.title} text={bridge.text} cta={bridge.cta} />

      <CtaBand title={start.title} text={start.text} cta={start.cta} />

      <Faq items={faqs} tone="muted" />
    </>
  );
}
