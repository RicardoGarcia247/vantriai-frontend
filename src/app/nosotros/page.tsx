/* type: service · hero photo · moment: picture-develops en "Quiénes somos" */
import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { Section, SectionHeading } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { about, aboutSeo } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(aboutSeo);

export default function AboutPage() {
  const { hero, who, approach, pillars, experience, audience, faqs, finalCta } = about;

  return (
    <>
      <main id="contenido">
        <PageHero h1={hero.h1} breadcrumbs={[{ name: "Nosotros", path: aboutSeo.path }]} photo="columns" short />

        <Section labelledBy="quienes-title" hm={2}>
          <div className="split">
            <div className="split__a stack">
              <SectionHeading id="quienes-title" no={1} title={who.title} />
              <p className="statement" style={{ fontSize: "clamp(22px, 1vw + 14px, 28px)" }}>
                {who.text}
              </p>
            </div>
            <figure
              className="split__b photo-frame split__photo develop"
              data-moment="picture-develops"
              data-moment-opts='{"look":"film"}'
            >
              <Photo id="spiral" />
            </figure>
          </div>
        </Section>

        <Section ground="inverse" labelledBy="enfoque-title" hm={2}>
          <SectionHeading id="enfoque-title" no={2} title={approach.title} />
          <ol className="index index--2">
            {approach.items.map((item, i) => (
              <li key={item.lead}>
                <span className="index__no" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="index__body">
                  <h3>{item.lead}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section labelledBy="focos-title" hm={2}>
          <SectionHeading id="focos-title" no={3} title={pillars.title} />
          <div className="plan" style={{ "--cols": 2 } as React.CSSProperties}>
            {[pillars.governance, pillars.technology].map((text, i) => (
              <article className="card m-nolift" key={text}>
                <span className="plan__no">{String(i + 1).padStart(2, "0")}</span>
                <p className="t-lead">{text}</p>
                <div className="plan__foot">
                  <CtaLink href={pillars.ctas[i].href} variant="secondary" arrow>
                    {pillars.ctas[i].label}
                  </CtaLink>
                </div>
              </article>
            ))}
          </div>
          <p className="note" style={{ marginTop: "var(--s-7)" }}>
            {pillars.closing}
          </p>
        </Section>

        <Section ground="surface" labelledBy="experiencia-title" hm={2}>
          <div className="split">
            <div className="split__a stack">
              <SectionHeading id="experiencia-title" no={4} title={experience.title} lead={experience.text} />
              <CtaLink href={experience.link.href} variant="link">
                {experience.link.label}
              </CtaLink>
            </div>
            <div className="split__b stack">
              <ul className="tags" aria-hidden="true">
                {experience.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div style={{ paddingTop: "var(--s-6)" }}>
                <h3 className="statement" style={{ fontSize: "var(--t-h3)" }}>
                  {audience.title}
                </h3>
                <p className="lead" style={{ marginTop: "var(--s-3)" }}>
                  {audience.text}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Faq items={faqs} no={5} photo="stair" />
      </main>
      <SiteFooter close={finalCta} />
    </>
  );
}
