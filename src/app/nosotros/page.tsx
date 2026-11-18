import { Closing, FaqList, Hero, Rows, Sec, SplitPic, TextLink } from "@/components/kit/kit";
import { about, aboutSeo } from "@/content/about";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(aboutSeo);

export default function AboutPage() {
  const { hero, who, approach, pillars, experience, audience, faqs, finalCta } = about;

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Nosotros", path: aboutSeo.path }])} />
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={hero.h1} lead={who.text} img="office" />

        <Sec id="enfoque" labelId="enfoque-h" title={approach.title} ground="surface" h={2}>
          <div className="grid grid--top fill">
            <Rows
              className="span-6"
              items={approach.items.map((i) => ({ name: i.lead, text: i.text }))}
            />
            <SplitPic k="canvas" fill />
          </div>
        </Sec>

        <Sec id="focos" labelId="focos-h" title={pillars.title} h={2}>
          <div className="grid grid--top fill">
            <div className="span-6 stack-4">
              <p>{pillars.governance}</p>
              <TextLink cta={pillars.ctas[0]} />
              <p>{pillars.technology}</p>
              <TextLink cta={pillars.ctas[1]} />
              <p className="t-lead">{pillars.closing}</p>
            </div>
            <SplitPic k="laptop" fill />
          </div>
        </Sec>

        <Sec id="experiencia" labelId="experiencia-h" title={experience.title} lead={experience.text} ground="inverse">
          <div className="grid grid--top fill">
            <div className="span-6 stack-4">
              <Rows items={experience.chips} />
              <TextLink cta={experience.link} />
            </div>
            <SplitPic k="hub" fill />
          </div>
        </Sec>

        <Sec id="publico" labelId="publico-h" title={audience.title} lead={audience.text}>
          <SplitPic k="bay" />
        </Sec>

        <FaqList items={faqs} />
      </main>
      <Closing title={finalCta.title} text={finalCta.text} cta={finalCta.cta} img="desk" />
    </>
  );
}
