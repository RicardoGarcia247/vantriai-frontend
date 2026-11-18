import { Closing, FaqList, Hero, Rows, Sec, SplitPic } from "@/components/kit/kit";
import { automation, automationSeo } from "@/content/automation";
import { technologySeo } from "@/content/technology";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata(automationSeo);

const flow = [
  { name: "Solicitud", text: "Formulario de solicitud" },
  { name: "Validación", text: "Reglas y documentos" },
  { name: "Responsable", text: "Aprobador correcto" },
  { name: "Aprobación", text: "Decisión del aprobador" },
  { name: "Cierre", text: "El equipo recibe el resultado" },
];

export default function AutomationPage() {
  const { hero, problems, method, automatable, example, deliverables, metrics, start, faqs } = automation;
  const [lead, ...restIntro] = hero.intro;

  return (
    <>
      <JsonLd data={serviceLd("Automatización de procesos", automationSeo.description, automationSeo.path)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Tecnología", path: technologySeo.path },
          { name: "Automatización de procesos", path: automationSeo.path },
        ])}
      />
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={hero.h1} lead={lead} primary={hero.primary} img="bay" />

        <Sec id="problemas" labelId="problemas-h" title={problems.title} ground="surface">
          <div className="grid grid--top fill">
            <Rows className="span-6" items={problems.items} />
            <SplitPic k="office" fill />
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
              <Rows items={method.tools} />
            </div>
            <SplitPic k="laptop" fill />
          </div>
        </Sec>

        <Sec id="automatizable" labelId="automatizable-h" title={automatable.title} ground="surface">
          <div className="grid grid--top fill">
            <Rows className="span-6" items={automatable.items} />
            <SplitPic k="hub" fill />
          </div>
        </Sec>

        <Sec id="ejemplo" labelId="ejemplo-h" title={example.title} lead={example.text} ground="inverse">
          <Rows items={flow} />
        </Sec>

        <Sec id="entregables" labelId="entregables-h" title={deliverables.title}>
          <div className="grid grid--top fill">
            <Rows className="span-6" items={deliverables.items} />
            <SplitPic k="dc" fill />
          </div>
        </Sec>

        <Sec id="indicadores" labelId="indicadores-h" title={metrics.title} lead={metrics.text} ground="surface">
          <div className="grid grid--top fill">
            <Rows className="span-6" items={metrics.items} />
            <SplitPic k="canvas" fill />
          </div>
        </Sec>

        <FaqList items={faqs} />
      </main>
      <Closing title={start.title} text={start.text} cta={start.cta} img="desk" />
    </>
  );
}
