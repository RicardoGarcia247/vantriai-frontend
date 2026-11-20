/* type: service · hero photo · moment: picture-develops en "Cómo medimos el avance" */
import { ApprovalFlow } from "@/components/diagrams/approval-flow";
import { Faq } from "@/components/site/faq";
import { CheckList, DeliverableGrid, ProblemGrid, ProblemSplit } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { Section, SectionHeading } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { automation, automationSeo } from "@/content/automation";
import { technologySeo } from "@/content/technology";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(automationSeo);

export default function AutomationPage() {
  const { hero, problems, method, automatable, example, deliverables, metrics, start, faqs } = automation;

  return (
    <>
      <main id="contenido">
        <JsonLd data={serviceLd("Automatización de procesos", automationSeo.description, automationSeo.path)} />
        <PageHero
          h1={hero.h1}
          intro={hero.intro}
          primary={hero.primary}
          breadcrumbs={[
            { name: "Tecnología", path: technologySeo.path },
            { name: "Automatización de procesos", path: automationSeo.path },
          ]}
          photo="steps"
          short
        />

        {/* 01 · problemas + 02 · lo que se puede automatizar, como dos índices lado a lado */}
        <Section labelledBy="problemas-title" hm={2}>
          <ProblemSplit
            items={problems.items}
            photo="facade"
            head={<SectionHeading id="problemas-title" no={1} title={problems.title} />}
          />
        </Section>

        <Section ground="inverse" labelledBy="metodo-title" hm={2}>
          <div className="split">
            <div className="split__wide stack">
              <SectionHeading id="metodo-title" no={2} title={method.title} />
              {method.paragraphs.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
            </div>
            <ul className="split__narrow plan" style={{ "--cols": 1 } as React.CSSProperties} aria-label="Herramientas">
              {method.tools.map((t, i) => (
                <li className="card m-nolift" key={t}>
                  <span className="plan__no">{String(i + 1).padStart(2, "0")}</span>
                  <p className="t-lead">{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section labelledBy="automatizable-title" hm={2}>
          <div className="split">
            <div className="split__a">
              <SectionHeading id="automatizable-title" no={3} title={automatable.title} />
              <ProblemGrid items={automatable.items} columns={1} compact />
            </div>
            <div className="split__b photo-frame split__photo">
              <Photo id="stair" className="frame__img" decorative />
            </div>
          </div>
        </Section>

        <Section ground="surface" labelledBy="ejemplo-title" hm={2}>
          <SectionHeading id="ejemplo-title" no={4} eyebrow="Ejemplo visual" title={example.title} lead={example.text} />
          <ApprovalFlow />
        </Section>

        <Section labelledBy="entregables-title" hm={2}>
          <SectionHeading id="entregables-title" no={5} eyebrow="Entregables" title={deliverables.title} />
          <DeliverableGrid items={deliverables.items} cols={2} />
        </Section>

        <Section ground="surface" labelledBy="indicadores-title" hm={2}>
          <div className="split">
            <div className="split__a stack">
              <SectionHeading id="indicadores-title" no={6} title={metrics.title} lead={metrics.text} />
              <CheckList items={metrics.items} />
            </div>
            <figure
              className="split__b photo-frame split__photo develop"
              data-moment="picture-develops"
              data-moment-opts='{"look":"film"}'
            >
              <Photo id="grid" />
            </figure>
          </div>
        </Section>

        <Faq items={faqs} no={7} photo="atrium" />
      </main>
      <SiteFooter close={start} />
    </>
  );
}
