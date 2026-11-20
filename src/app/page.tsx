/* type: service · deal: hero photo, nav nav-mega, close close-type, footer footer-dark (contacto grande),
   rhythm space, buttons solid, mark: logotipo del cliente · palette: colores de marca (#7D39EB sobre papel)
   moments: pinned-chapters en "Cómo trabajamos" (cuatro etapas en el espacio de una sola vista) */
import { ComplementDiagram } from "@/components/diagrams/complement-diagram";
import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { CheckList, ProblemGrid } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { Section, SectionHeading } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { home, homeSeo } from "@/content/home";
import type { PhotoId } from "@/lib/photos";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(homeSeo);

const stepPhotos: PhotoId[] = ["spaceframe", "model", "facade", "columns"];

export default function HomePage() {
  const { hero, pillars, problems, complement, method, sectors, audience, faqs, finalCta } = home;

  return (
    <>
      <main id="contenido">
        <PageHero
          h1={hero.h1}
          intro={[hero.intro[0]]}
          primary={hero.primary}
          secondary={hero.secondary}
          photo="stair"
          legend={["Gobernanza", "Reglas", "Controles", "Flujo", "Tablero", "Datos", "Tecnología"]}
          pos="50% 40%"
        />

        {/* 01 · Los dos focos */}
        <Section id="focos" labelledBy="focos-title" h={2} className="g2" hm={2}>
          <div className="group">
            <SectionHeading id="focos-title" no={1} eyebrow="Dos focos, el mismo peso" title={pillars.title} lead={hero.intro[1]} />
            <div className="photo-frame fill" style={{ minHeight: 240 }}>
              <Photo id="cantilever" className="frame__img" sizes="100vw" decorative />
            </div>
          </div>
          <div className="plan" style={{ "--cols": 2 } as React.CSSProperties}>
            {pillars.items.map((p, i) => (
              <article className="card m-nolift" key={p.key}>
                <span className="plan__no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <CheckList items={p.list} />
                <div className="plan__foot">
                  <CtaLink href={p.cta.href} variant="secondary" arrow>
                    {p.cta.label}
                  </CtaLink>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* 02 · Problemas */}
        <Section ground="surface" labelledBy="problemas-title" hm={2}>
          <div className="split">
            <div className="split__a stack">
              <SectionHeading id="problemas-title" no={2} title={problems.title} lead={problems.lead} />
              <p className="statement" style={{ fontSize: "clamp(22px, 1vw + 14px, 28px)" }}>
                {problems.closing}
              </p>
              <div className="photo-frame" style={{ aspectRatio: "16 / 9" }}>
                <Photo id="atrium" className="frame__img" decorative />
              </div>
            </div>
            <div className="split__b">
              <ProblemGrid items={problems.items} columns={1} compact />
            </div>
          </div>
        </Section>

        {/* 03 · Cómo se complementan (dos pantallas: el ejemplo, luego por dónde empezar) */}
        <Section labelledBy="complemento-title" h={2} className="g2" hm={2}>
          <div className="group">
            <SectionHeading id="complemento-title" no={3} title={complement.title} lead={complement.intro} />
            <p className="note" style={{ marginBottom: "var(--s-6)" }}>
              {complement.example}
            </p>
            <ComplementDiagram
              governance={complement.governance}
              technology={complement.technology}
              result={complement.result}
            />
          </div>
          <div className="group">
            <div className="split" style={{ marginBottom: "var(--s-7)" }}>
              <h3 className="split__wide statement">{complement.startTitle}</h3>
              <div className="split__narrow photo-frame" style={{ aspectRatio: "16 / 9" }}>
                <Photo id="modelGarden" className="frame__img" decorative />
              </div>
            </div>
            <ul className="plan" style={{ "--cols": 3 } as React.CSSProperties}>
              {complement.start.map((s, i) => (
                <li className="card m-nolift" key={s.label}>
                  <span className="plan__no">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.label}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "var(--s-6)" }}>
              <CtaLink href={complement.cta.href} variant="link">
                {complement.cta.label}
              </CtaLink>
            </div>
          </div>
        </Section>

        {/* 04 · Cómo trabajamos: momento pinned-chapters (dos pantallas en vivo) */}
        <section
          className="section ground-inverse"
          id={method.id}
          style={{ "--h": 2 } as React.CSSProperties}
          data-moment="pinned-chapters"
          aria-labelledby="metodo-title"
        >
          <div className="wrap mo-pc__grid">
            <div className="mo-pc__text">
              <SectionHeading id="metodo-title" no={4} eyebrow="Metodología en cuatro etapas" title={method.title} />
              <ol className="mo-pc__steps">
                {method.steps.map((step, i) => (
                  <li className="mo-pc__step" key={step.title}>
                    <h3>
                      <span className="flow__no" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}{" "}
                      </span>
                      {step.title}
                    </h3>
                    <p>{step.text}</p>
                    <figure className="mo-pc__visual">
                      <Photo id={stepPhotos[i]} sizes="(min-width: 1024px) 50vw, 100vw" />
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mo-pc__visuals frame" />
          </div>
        </section>

        {/* 05 · Sectores + a quién nos dirigimos */}
        <Section labelledBy="sectores-title" hm={2}>
          <div className="split">
            <div className="split__a stack">
              <SectionHeading id="sectores-title" no={5} title={sectors.title} lead={sectors.text} />
              <CtaLink href={sectors.cta.href}>{sectors.cta.label}</CtaLink>
            </div>
            <div className="split__b stack">
              <ul className="tags">
                {sectors.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div style={{ paddingTop: "var(--s-5)" }}>
                <h3 className="statement" style={{ fontSize: "var(--t-h3)" }}>
                  {audience.title}
                </h3>
                <p className="lead" style={{ marginTop: "var(--s-3)" }}>
                  {audience.text}
                </p>
              </div>
              <div className="photo-frame" style={{ aspectRatio: "16 / 7" }}>
                <Photo id="model" className="frame__img" decorative />
              </div>
            </div>
          </div>
        </Section>

        <Faq items={faqs} no={6} ground="surface" photo="glass" />
      </main>
      <SiteFooter close={finalCta} />
    </>
  );
}
