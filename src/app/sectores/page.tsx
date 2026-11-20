/* type: service · hero photo · moment: picture-develops junto a los sectores aplicables */
import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { SectorCard } from "@/components/site/sector-card";
import { Section, SectionHeading } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { sectors, sectorsSeo } from "@/content/sectors";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(sectorsSeo);

export default function SectorsPage() {
  const { hero, experience, applicable, faqs } = sectors;

  return (
    <>
      <main id="contenido">
        <PageHero
          h1={hero.h1}
          intro={[hero.intro[0]]}
          breadcrumbs={[{ name: "Sectores", path: sectorsSeo.path }]}
          photo="atrium"
        />

        <Section labelledBy="experiencia-title" h={2} hm={3}>
          <SectionHeading id="experiencia-title" no={1} title={experience.title} lead={hero.intro[1]} />
          <p className="note" style={{ marginBottom: "var(--s-7)" }}>
            {experience.note}
          </p>
          <div>
            {experience.items.map((s, i) => (
              <SectorCard key={s.key} sector={s} index={i} />
            ))}
          </div>
        </Section>

        <Section ground="inverse" labelledBy="aplicables-title" hm={2}>
          <div className="split">
            <div className="split__wide stack">
              <SectionHeading id="aplicables-title" no={2} title={applicable.title} />
              {applicable.items.map((s) => (
                <SectorCard key={s.key} sector={s} />
              ))}
              <div className="btn-row">
                <CtaLink href={applicable.cta.href}>{applicable.cta.label}</CtaLink>
              </div>
            </div>
            <figure
              className="split__narrow photo-frame split__photo--tall develop"
              data-moment="picture-develops"
              data-moment-opts='{"look":"film"}'
            >
              <Photo id="spaceframe" sizes="(min-width: 1024px) 40vw, 100vw" />
            </figure>
          </div>
        </Section>

        <Faq items={faqs} no={3} photo="facade" />
      </main>
      <SiteFooter />
    </>
  );
}
