import { Closing, FaqList, Hero, Rows, Sec, SplitPic, TextLink } from "@/components/kit/kit";
import { governance, governanceSeo } from "@/content/governance";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(governanceSeo);

export default function GovernancePage() {
  const { hero, problems, services, deliverables, bridge, start, faqs } = governance;
  const [lead, ...restIntro] = hero.intro;

  return (
    <>
      <JsonLd data={serviceLd("Consultoría de gobierno de TI", governanceSeo.description, governanceSeo.path)} />
      <JsonLd data={breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Gobernanza y Consultoría", path: governanceSeo.path }])} />
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={hero.h1} lead={lead} primary={hero.primary} secondary={hero.secondary} img="canvas" pos="50% 40%" />

        <Sec id="problemas" labelId="problemas-h" title={problems.title} lead={problems.lead} ground="surface" h={2}>
          <div className="grid grid--top fill">
            <Rows className="span-6" items={problems.items} />
            <SplitPic k="office" />
          </div>
          <p className="t-lead">{problems.closing}</p>
          {restIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Sec>

        <Sec id="servicios" labelId="servicios-h" title={services.title} h={2}>
          <div className="grid grid--top fill">
            <Rows
              className="span-6"
              items={services.items.map((s) => ({ name: s.title, text: s.paragraphs.join(" ") }))}
            />
            <SplitPic k="hub" fill />
          </div>
        </Sec>

        <Sec id={deliverables.id} labelId="entregables-h" title={deliverables.title} lead={deliverables.lead} ground="inverse">
          <div className="grid grid--top fill">
            <Rows className="span-6" items={deliverables.items} />
            <SplitPic k="laptop" fill />
          </div>
        </Sec>

        <Sec id="tecnologia" labelId="puente-h" title={bridge.title} lead={bridge.text}>
          <div className="btn-row">
            <TextLink cta={bridge.cta} />
          </div>
          <SplitPic k="dc" />
        </Sec>

        <FaqList items={faqs} />
      </main>
      <Closing title={start.title} text={start.text} cta={start.cta} img="desk" />
    </>
  );
}
