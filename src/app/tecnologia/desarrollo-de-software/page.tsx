import { Closing, FaqList, Hero, Rows, Sec, SplitPic, TextLink } from "@/components/kit/kit";
import { software, softwareSeo } from "@/content/software";
import { technologySeo } from "@/content/technology";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(softwareSeo);

export default function SoftwarePage() {
  const { hero, problems, method, examples, deliverables, bridge, start, faqs } = software;
  const [lead, ...restIntro] = hero.intro;

  return (
    <>
      <JsonLd data={serviceLd("Desarrollo de software a medida", softwareSeo.description, softwareSeo.path)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Tecnología", path: technologySeo.path },
          { name: "Desarrollo de software a medida", path: softwareSeo.path },
        ])}
      />
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={hero.h1} lead={lead} primary={hero.primary} img="laptop" />

        <Sec id="problemas" labelId="problemas-h" title={problems.title} ground="surface">
          <div className="grid grid--top fill">
            <Rows className="span-6" items={problems.items} />
            <SplitPic k="bay" fill />
          </div>
          {restIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Sec>

        <Sec id="metodo" labelId="metodo-h" title={method.title} h={2}>
          <div className="grid grid--top fill">
            <div className="span-6 stack-4">
              {method.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <h3 className="t-card">Se define junto al equipo que usará la solución</h3>
              <Rows items={method.pieces} />
            </div>
            <SplitPic k="canvas" fill />
          </div>
        </Sec>

        <Sec id="ejemplos" labelId="ejemplos-h" title={examples.title} ground="surface">
          <div className="grid grid--top fill">
            <div className="span-6 stack-4">
              <Rows items={examples.items} />
              <p>{examples.closing}</p>
            </div>
            <SplitPic k="dc" fill />
          </div>
        </Sec>

        <Sec id="entregables" labelId="entregables-h" title={deliverables.title} ground="inverse">
          <div className="grid grid--top fill">
            <Rows className="span-6" items={deliverables.items} />
            <SplitPic k="hub" fill />
          </div>
        </Sec>

        <Sec id="automatizacion" labelId="puente-h" title={bridge.title} lead={bridge.text}>
          <div className="btn-row">
            <TextLink cta={bridge.cta} />
          </div>
          <SplitPic k="office" />
        </Sec>

        <FaqList items={faqs} />
      </main>
      <Closing title={start.title} text={start.text} cta={start.cta} img="desk" />
    </>
  );
}
