/* type: service · hero photo · moment: picture-develops en el puente hacia Gobernanza */
import { Bridge } from "@/components/site/bridge";
import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { CheckList, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { technology, technologySeo } from "@/content/technology";
import { JsonLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(technologySeo);

export default function TechnologyPage() {
  const { hero, problems, services, deliverables, rollout, bridge, start, faqs } = technology;

  return (
    <>
      <main id="contenido">
        <JsonLd data={serviceLd("Soluciones tecnológicas", technologySeo.description, technologySeo.path)} />
        <PageHero
          h1={hero.h1}
          intro={hero.intro}
          primary={hero.primary}
          secondary={hero.secondary}
          breadcrumbs={[{ name: "Tecnología", path: technologySeo.path }]}
          photo="glass"
        />

        <Section labelledBy="problemas-title">
          <SectionHeading id="problemas-title" no={1} title={problems.title} />
          <ProblemGrid items={problems.items} columns={2} />
          <p className="statement" style={{ marginTop: "var(--s-7)" }}>
            {problems.closing}
          </p>
        </Section>

        <Section id={services.id} ground="surface" labelledBy="servicios-title" h={2} hm={3}>
          <SectionHeading id="servicios-title" no={2} title={services.title} />
          <div className="plan" style={{ "--cols": 3 } as React.CSSProperties}>
            {services.items.map((s, i) => (
              <article className="card m-nolift" key={s.key}>
                <span className="plan__no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {"link" in s && s.link && (
                  <div className="plan__foot">
                    <CtaLink href={s.link.href} variant="link">
                      {s.link.label}
                    </CtaLink>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section ground="inverse" labelledBy="entregables-title" hm={2}>
          <div className="split">
            <div className="split__wide">
              <SectionHeading
                id="entregables-title"
                no={3}
                eyebrow="Entregables"
                title={deliverables.title}
                lead={deliverables.lead}
              />
              <CheckList items={deliverables.items} />
            </div>
            <div className="split__narrow stack" style={{ borderTop: "1px solid var(--line-strong)", paddingTop: "var(--s-6)" }}>
              <h3 className="statement" style={{ fontSize: "var(--t-h3)" }}>
                {rollout.title}
              </h3>
              <p className="lead">{rollout.text}</p>
            </div>
          </div>
        </Section>

        <Bridge title={bridge.title} text={bridge.text} cta={bridge.cta} photo="cantilever" no={4} />

        <Faq items={faqs} no={5} photo="steps" />
      </main>
      <SiteFooter close={start} />
    </>
  );
}
