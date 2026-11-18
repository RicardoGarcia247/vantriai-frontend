import {
  BarChart3,
  FileCheck2,
  FileText,
  GitBranch,
  LayoutDashboard,
  Map,
  Network,
  Scale,
  Workflow,
} from "lucide-react";

import { GovernanceArt } from "@/components/diagrams/hero-art";
import { Bridge } from "@/components/site/bridge";
import { CtaBand } from "@/components/site/cta-band";
import { Faq } from "@/components/site/faq";
import { DeliverableGrid, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { governance, governanceSeo } from "@/content/governance";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(governanceSeo);

const serviceIcons: Record<string, React.ReactNode> = {
  strategy: <Map />,
  itgov: <Scale />,
  process: <Workflow />,
  docs: <FileText />,
};

const deliverableIcons = [
  <BarChart3 key="a" />,
  <GitBranch key="b" />,
  <Map key="c" />,
  <Network key="d" />,
  <FileCheck2 key="e" />,
  <LayoutDashboard key="f" />,
];

export default function GovernancePage() {
  const { hero, problems, services, deliverables, bridge, start, faqs } = governance;

  return (
    <>
      <JsonLd
        data={serviceLd(
          "Consultoría de gobierno de TI",
          governanceSeo.description,
          governanceSeo.path,
        )}
      />
      <PageHero
        h1={hero.h1}
        intro={hero.intro}
        primary={hero.primary}
        secondary={hero.secondary}
        breadcrumbs={[{ name: "Gobernanza y Consultoría", path: governanceSeo.path }]}
        art={<GovernanceArt />}
      />

      <Section labelledBy="problemas-title">
        <SectionHeading id="problemas-title" title={problems.title} lead={problems.lead} />
        <ProblemGrid items={problems.items} />
        <p className="mt-8 max-w-3xl rounded-2xl bg-secondary p-6 text-lg leading-relaxed text-secondary-foreground">
          {problems.closing}
        </p>
      </Section>

      <Section tone="muted" labelledBy="servicios-title">
        <SectionHeading id="servicios-title" title={services.title} />
        <div className="grid gap-5 md:grid-cols-2">
          {services.items.map((s) => (
            <article
              key={s.key}
              className="rounded-2xl border bg-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <span
                aria-hidden="true"
                className="mb-5 flex size-11 items-center justify-center rounded-xl bg-secondary text-primary [&_svg]:size-5"
              >
                {serviceIcons[s.key]}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id={deliverables.id} tone="brand" labelledBy="entregables-title">
        <SectionHeading
          id="entregables-title"
          eyebrow="Entregables"
          title={deliverables.title}
          lead={deliverables.lead}
        />
        <DeliverableGrid items={deliverables.items} icons={deliverableIcons} />
      </Section>

      <Bridge title={bridge.title} text={bridge.text} cta={bridge.cta} />

      <CtaBand title={start.title} text={start.text} cta={start.cta} />

      <Faq items={faqs} tone="muted" />
    </>
  );
}
