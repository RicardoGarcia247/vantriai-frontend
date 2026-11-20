/* type: service · hero photo · moment: picture-develops en el puente hacia Gobernanza */
import { Bridge } from "@/components/site/bridge";
import { Faq } from "@/components/site/faq";
import { CheckList, DeliverableGrid, ProblemSplit } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { software, softwareSeo } from "@/content/software";
import { technologySeo } from "@/content/technology";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(softwareSeo);

export default function SoftwarePage() {
  const { hero, problems, method, examples, deliverables, bridge, start, faqs } = software;

  return (
    <>
      <main id="contenido">
        <JsonLd data={serviceLd("Desarrollo de software a medida", softwareSeo.description, softwareSeo.path)} />
        <PageHero
          h1={hero.h1}
          intro={hero.intro}
          primary={hero.primary}
          breadcrumbs={[
            { name: "Tecnología", path: technologySeo.path },
            { name: "Desarrollo de software a medida", path: softwareSeo.path },
          ]}
          photo="grid"
          pos="50% 60%"
          short
        />

        <Section labelledBy="problemas-title" hm={2}>
          <ProblemSplit
            items={problems.items}
            photo="columns"
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
            <div className="split__narrow stack" style={{ borderTop: "1px solid var(--line-strong)", paddingTop: "var(--s-5)" }}>
              <p className="sec-no">
                <span>Se define junto al equipo que usará la solución</span>
              </p>
              <CheckList items={method.pieces} />
            </div>
          </div>
        </Section>

        <Section labelledBy="ejemplos-title" hm={2}>
          <SectionHeading id="ejemplos-title" no={3} title={examples.title} />
          <ul className="plan" style={{ "--cols": 3 } as React.CSSProperties}>
            {examples.items.map((item, i) => (
              <li className="card m-nolift" key={item}>
                <span className="plan__no">{String(i + 1).padStart(2, "0")}</span>
                <p className="statement" style={{ fontSize: "var(--t-h3)" }}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <p className="note" style={{ marginTop: "var(--s-7)" }}>
            {examples.closing}
          </p>
        </Section>

        <Section ground="surface" labelledBy="entregables-title" hm={2}>
          <SectionHeading id="entregables-title" no={4} eyebrow="Entregables" title={deliverables.title} />
          <DeliverableGrid items={deliverables.items} />
        </Section>

        <Bridge title={bridge.title} text={bridge.text} cta={bridge.cta} asLink photo="cantilever" no={5} ground="base" />

        <Faq items={faqs} no={6} ground="surface" photo="modelGarden" />
      </main>
      <SiteFooter close={start} />
    </>
  );
}
