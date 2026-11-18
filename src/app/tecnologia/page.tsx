import { Closing, FaqList, Hero, Rows, Sec, SplitPic, TextLink } from "@/components/kit/kit";
import { technology, technologySeo } from "@/content/technology";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(technologySeo);

export default function TechnologyPage() {
  const { hero, problems, services, deliverables, rollout, bridge, start, faqs } = technology;
  const [lead, ...restIntro] = hero.intro;

  return (
    <>
      <JsonLd data={serviceLd("Soluciones tecnológicas", technologySeo.description, technologySeo.path)} />
      <JsonLd data={breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Tecnología", path: technologySeo.path }])} />
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={hero.h1} lead={lead} primary={hero.primary} secondary={hero.secondary} img="laptop" />

        <Sec id="problemas" labelId="problemas-h" title={problems.title} ground="surface" h={2}>
          <div className="grid grid--top fill">
            <Rows className="span-6" items={problems.items} />
            <SplitPic k="bay" fill />
          </div>
          <p className="t-lead">{problems.closing}</p>
          {restIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Sec>

        <Sec id={services.id} labelId="servicios-h" title={services.title} h={2}>
          <div className="grid grid--top fill">
            <Rows
              className="span-6"
              items={services.items.map((s) => ({ name: s.title, text: s.text }))}
            />
            <SplitPic k="dc" fill />
          </div>
          <div className="btn-row">
            {services.items.map((s) => ("link" in s && s.link ? <TextLink key={s.key} cta={s.link} /> : null))}
          </div>
        </Sec>

        <Sec labelId="entregables-h" title={deliverables.title} lead={deliverables.lead} ground="inverse">
          <div className="grid grid--top fill">
            <Rows className="span-6" items={deliverables.items} />
            <div className="span-5 start-8 stack-4">
              <h3>{rollout.title}</h3>
              <p>{rollout.text}</p>
            </div>
          </div>
        </Sec>

        <Sec id="gobernanza" labelId="puente-h" title={bridge.title} lead={bridge.text}>
          <div className="btn-row">
            <TextLink cta={bridge.cta} />
          </div>
          <SplitPic k="canvas" />
        </Sec>

        <FaqList items={faqs} />
      </main>
      <Closing title={start.title} text={start.text} cta={start.cta} img="hub" />
    </>
  );
}
