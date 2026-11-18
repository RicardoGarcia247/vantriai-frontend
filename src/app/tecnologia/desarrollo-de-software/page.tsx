import { AppWindow, Database, LayoutGrid, Plug } from "lucide-react";

import { AppMock } from "@/components/diagrams/hero-art";
import { Bridge } from "@/components/site/bridge";
import { CtaBand } from "@/components/site/cta-band";
import { Faq } from "@/components/site/faq";
import { CheckList, DeliverableGrid, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { software, softwareSeo } from "@/content/software";
import { technologySeo } from "@/content/technology";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(softwareSeo);

const exampleIcons = [<AppWindow key="a" />, <Database key="b" />, <Plug key="c" />];

export default function SoftwarePage() {
  const { hero, problems, method, examples, deliverables, bridge, start, faqs } = software;

  return (
    <>
      <JsonLd
        data={serviceLd("Desarrollo de software a medida", softwareSeo.description, softwareSeo.path)}
      />
      <PageHero
        h1={hero.h1}
        intro={hero.intro}
        primary={hero.primary}
        breadcrumbs={[
          { name: "Tecnología", path: technologySeo.path },
          { name: "Desarrollo de software a medida", path: softwareSeo.path },
        ]}
        art={<AppMock />}
      />

      <Section labelledBy="problemas-title">
        <SectionHeading id="problemas-title" title={problems.title} />
        <ProblemGrid items={problems.items} columns={2} />
      </Section>

      <Section tone="muted" labelledBy="metodo-title">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <SectionHeading id="metodo-title" title={method.title} className="mb-6 sm:mb-6" />
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              {method.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="self-center rounded-3xl border bg-card p-6">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <LayoutGrid className="size-4 text-primary" aria-hidden="true" />
              Se define junto al equipo que usará la solución
            </p>
            <CheckList items={method.pieces} />
          </div>
        </div>
      </Section>

      <Section labelledBy="ejemplos-title">
        <SectionHeading id="ejemplos-title" title={examples.title} />
        <ul className="grid gap-5 md:grid-cols-3">
          {examples.items.map((item, i) => (
            <li
              key={item}
              className="rounded-2xl border bg-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span
                aria-hidden="true"
                className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25 [&_svg]:size-6"
              >
                {exampleIcons[i]}
              </span>
              <p className="text-lg leading-snug font-medium">{item}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {examples.closing}
        </p>
      </Section>

      <Section tone="brand" labelledBy="entregables-title">
        <SectionHeading id="entregables-title" eyebrow="Entregables" title={deliverables.title} />
        <DeliverableGrid items={deliverables.items} />
      </Section>

      <Bridge title={bridge.title} text={bridge.text} cta={bridge.cta} asLink />

      <CtaBand title={start.title} text={start.text} cta={start.cta} />

      <Faq items={faqs} tone="muted" />
    </>
  );
}
