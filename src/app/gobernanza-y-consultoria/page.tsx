/* type: service · hero photo · moment: picture-develops en el puente hacia Tecnología */
import { Bridge } from "@/components/site/bridge";
import { Faq } from "@/components/site/faq";
import { DeliverableGrid, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { governance, governanceSeo } from "@/content/governance";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(governanceSeo);

export default function GovernancePage() {
  const { hero, problems, services, deliverables, bridge, start, faqs } = governance;

  return (
    <>
      <main id="contenido">
        <JsonLd data={serviceLd("Consultoría de gobierno de TI", governanceSeo.description, governanceSeo.path)} />
        <PageHero
          h1={hero.h1}
          intro={hero.intro}
          primary={hero.primary}
          secondary={hero.secondary}
          breadcrumbs={[{ name: "Gobernanza y Consultoría", path: governanceSeo.path }]}
          photo="cantilever"
          legend={["Matriz de responsabilidades", "Hoja de ruta", "Documentos"]}
          pos="60% 50%"
        />

        <Section labelledBy="problemas-title" hm={2}>
          <SectionHeading id="problemas-title" no={1} title={problems.title} lead={problems.lead} />
          <ProblemGrid items={problems.items} columns={2} compact />
          <p className="note" style={{ marginTop: "var(--s-7)" }}>
            {problems.closing}
          </p>
        </Section>

        <Section ground="inverse" labelledBy="servicios-title" hm={3}>
          <SectionHeading id="servicios-title" no={2} title={services.title} />
          <div className="plan" style={{ "--cols": 2 } as React.CSSProperties}>
            {services.items.map((s, i) => (
              <article className="card m-nolift" key={s.key}>
                <span className="plan__no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </article>
            ))}
          </div>
        </Section>

        <Section id={deliverables.id} labelledBy="entregables-title" hm={2}>
          <SectionHeading
            id="entregables-title"
            no={3}
            eyebrow="Entregables"
            title={deliverables.title}
            lead={deliverables.lead}
          />
          <DeliverableGrid items={deliverables.items} />
        </Section>

        <Bridge title={bridge.title} text={bridge.text} cta={bridge.cta} photo="glass" no={4} />

        <Faq items={faqs} no={5} photo="spiral" />
      </main>
      <SiteFooter close={start} />
    </>
  );
}
