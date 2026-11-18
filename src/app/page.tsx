import { Card, Closing, FaqList, Hero, PanelSplit, Rows, Sec, Split, Strip, TextLink } from "@/components/kit/kit";
import { JsonLd, faqLd, pageMetadata } from "@/lib/seo";
import { home, homeSeo } from "@/content/home";

export const metadata = pageMetadata(homeSeo);

export default function HomePage() {
  const { hero, pillars, problems, complement, method, sectors, audience, faqs, finalCta } = home;
  const [gov, tech] = pillars.items;
  // El titular de la página es la primera mitad del h1 original; la segunda va como primera línea del apoyo.
  const [h1, rest] = hero.h1.split(": ");
  const lead = `${rest.charAt(0).toUpperCase()}${rest.slice(1)}. 2 focos con el mismo peso y 4 etapas de trabajo.`;

  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={h1} lead={lead} primary={hero.primary} secondary={hero.secondary} img="canvas" pos="50% 40%" />

        <Sec id="focos" hm={2} labelId="focos-h" title={pillars.title} lead={hero.intro[0]}>
          <Split k="hub">
            <h3 className="t-card">{gov.title}</h3>
            <p>{gov.text}</p>
            <Rows items={gov.list} />
            <TextLink cta={gov.cta} />
          </Split>
        </Sec>

        <Sec id="tecnologia" hm={2} labelId="tecnologia-h" title={tech.title} lead={hero.intro[1]} ground="surface">
          <Strip
            k="laptop"
            pos="50% 60%"
            aside={<Rows items={tech.list} />}
          >
            <p>{tech.text}</p>
            <TextLink cta={tech.cta} />
          </Strip>
        </Sec>

        <Sec id="problemas" hm={2} labelId="problemas-h" title={problems.title} lead={problems.lead}>
          <Split k="office">
            <Rows items={problems.items} />
            <p className="t-lead">{problems.closing}</p>
          </Split>
        </Sec>

        <Sec id="complemento" labelId="complemento-h" title={complement.title} lead={complement.intro} ground="surface">
          <p className="t-lead">{complement.example}</p>
          <div className="grid">
            <Card title="Gobernanza y Consultoría" img="nolich">
              <p>{complement.governance.replace("Gobernanza y Consultoría: ", "")}</p>
            </Card>
            <Card title="Tecnología" img="dc">
              <p>{complement.technology.replace("Tecnología: ", "")}</p>
            </Card>
          </div>
          <p className="t-lead">{complement.result}</p>
        </Sec>

        <Sec id="empezar" hm={2} labelId="empezar-h" title={complement.startTitle}>
          <Strip k="room" pos="50% 55%">
            <Rows items={complement.start.map((s) => ({ name: s.label, text: s.text }))} />
            <TextLink cta={complement.cta} />
          </Strip>
        </Sec>

        <Sec id={method.id} hm={2} labelId="metodo-h" title={method.title} ground="inverse">
          <PanelSplit k="team">
            <Rows items={method.steps.map((s) => ({ name: s.title, text: s.text }))} />
          </PanelSplit>
        </Sec>

        <Sec id="sectores" hm={2} labelId="sectores-h" title={sectors.title} lead={sectors.text}>
          <PanelSplit k="bay">
            <Rows items={sectors.chips} />
            <TextLink cta={sectors.cta} />
          </PanelSplit>
        </Sec>

        <section className="section statement" id="publico" data-moment="word-highlight" aria-label={audience.title}>
          <div className="wrap">
            <p className="t-label">{audience.title}</p>
            <p className="mo-wh__text">
              A <strong>gerencias y equipos de TI</strong>, operaciones y transformación que necesitan ordenar su
              gestión, mejorar procesos o modernizar herramientas.
            </p>
          </div>
        </section>

        <FaqList items={faqs} img="work" img2="office" />
      </main>
      <Closing title={finalCta.title} text={finalCta.text} cta={finalCta.cta} img="desk" />
    </>
  );
}
