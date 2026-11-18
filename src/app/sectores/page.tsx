import { Closing, FaqList, Hero, Sec, SplitPic, TextLink } from "@/components/kit/kit";
import { home } from "@/content/home";
import { sectors, sectorsSeo } from "@/content/sectors";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(sectorsSeo);

type SectorItem = (typeof sectors.experience.items)[number];

function SectorList({ items }: { items: readonly SectorItem[] }) {
  return (
    <ul className="rows span-6">
      {items.map((s) => (
        <li key={s.key}>
          <span className="rows__name">{s.title}</span>
          <p>
            <strong>Problemas habituales: </strong>
            {s.problem}
          </p>
          <p>
            <strong>Soluciones aplicables: </strong>
            {s.solution}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function SectorsPage() {
  const { hero, experience, applicable, faqs } = sectors;
  const [lead, ...restIntro] = hero.intro;

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Sectores", path: sectorsSeo.path }])} />
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={hero.h1} lead={lead} img="office" />

        <Sec id="experiencia" labelId="experiencia-h" title={experience.title} lead={experience.note} ground="surface" h={2}>
          <div className="grid grid--top fill">
            <SectorList items={experience.items} />
            <SplitPic k="hub" fill />
          </div>
          {restIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Sec>

        <Sec id="aplicables" labelId="aplicables-h" title={applicable.title} h={2}>
          <div className="grid grid--top fill">
            <SectorList items={applicable.items} />
            <SplitPic k="bay" fill />
          </div>
          <div className="btn-row">
            <TextLink cta={applicable.cta} />
          </div>
        </Sec>

        <FaqList items={faqs} />
      </main>
      <Closing title={home.finalCta.title} text={home.finalCta.text} cta={home.finalCta.cta} img="desk" />
    </>
  );
}
