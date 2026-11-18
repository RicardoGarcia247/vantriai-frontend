import { Bot, Cable, GitMerge, Workflow } from "lucide-react";

import { ApprovalFlow } from "@/components/diagrams/approval-flow";
import { CtaBand } from "@/components/site/cta-band";
import { Faq } from "@/components/site/faq";
import { CheckList, DeliverableGrid, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { automation, automationSeo } from "@/content/automation";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";
import { technologySeo } from "@/content/technology";

export const metadata = pageMetadata(automationSeo);

const toolIcons = [<Workflow key="a" />, <GitMerge key="b" />, <Bot key="c" />, <Cable key="d" />];

export default function AutomationPage() {
  const { hero, problems, method, automatable, example, deliverables, metrics, start, faqs } =
    automation;

  return (
    <>
      <JsonLd
        data={serviceLd("Automatización de procesos", automationSeo.description, automationSeo.path)}
      />
      <PageHero
        h1={hero.h1}
        intro={hero.intro}
        primary={hero.primary}
        breadcrumbs={[
          { name: "Tecnología", path: technologySeo.path },
          { name: "Automatización de procesos", path: automationSeo.path },
        ]}
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
          <ul aria-hidden="true" className="grid grid-cols-2 gap-3 self-center">
            {method.tools.map((t, i) => (
              <li
                key={t}
                className="flex flex-col gap-3 rounded-lg border bg-card p-5 text-sm font-medium [&_svg]:size-6 [&_svg]:text-primary"
              >
                {toolIcons[i]}
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="automatizable-title">
        <SectionHeading id="automatizable-title" title={automatable.title} />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {automatable.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border bg-card px-5 py-4 font-medium transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="brand" labelledBy="ejemplo-title">
        <SectionHeading
          id="ejemplo-title"
         
          title={example.title}
          lead={example.text}
        />
        <ApprovalFlow />
      </Section>

      <Section labelledBy="entregables-title">
        <SectionHeading id="entregables-title" title={deliverables.title} />
        <DeliverableGrid items={deliverables.items} />
      </Section>

      <Section tone="muted" labelledBy="indicadores-title" className="py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="indicadores-title" className="text-3xl font-semibold tracking-tight">
              {metrics.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{metrics.text}</p>
          </div>
          <CheckList items={metrics.items} />
        </div>
      </Section>

      <CtaBand title={start.title} text={start.text} cta={start.cta} />

      <Faq items={faqs} tone="muted" />
    </>
  );
}
