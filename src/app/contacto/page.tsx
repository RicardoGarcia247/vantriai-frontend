/* type: service · hero photo · moment: picture-develops junto a las preguntas frecuentes */
import { ContactForm } from "@/components/site/contact-form";
import { CheckList } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { Section } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { contact, contactSeo } from "@/content/contact";
import { JsonLd, faqLd, pageMetadata } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata(contactSeo);

export default function ContactPage() {
  const { hero, prepare, next, channels, form, faqs } = contact;

  return (
    <>
      <main id="contenido">
        <PageHero
          h1={hero.h1}
          intro={[hero.intro]}
          primary={{ label: "Enviar consulta", href: "#formulario" }}
          secondary={{ label: form.whatsapp, href: whatsappUrl }}
          breadcrumbs={[{ name: "Contacto", path: contactSeo.path }]}
          photo="spiral"
          pos="50% 35%"
          short
        />

        <Section id="formulario" labelledBy="formulario-title" hm={3}>
          <div className="split">
            <div className="split__wide">
              <div className="section-head">
                <p className="sec-no">
                  <b>01</b>
                </p>
                <h2 id="formulario-title">Formulario de contacto</h2>
              </div>
              <ContactForm />
            </div>
            <aside className="split__narrow stack" style={{ display: "grid", gap: "var(--s-7)" }}>
              <div className="stack-sm">
                <h3 className="statement" style={{ fontSize: "var(--t-h3)" }}>
                  {prepare.title}
                </h3>
                <CheckList items={prepare.items} />
                <p className="t-small muted">{prepare.closing}</p>
              </div>
              <div className="stack-sm">
                <h3 className="statement" style={{ fontSize: "var(--t-h3)" }}>
                  {next.title}
                </h3>
                <ol className="index index--compact">
                  {next.items.map((item, i) => (
                    <li key={item}>
                      <span className="index__no" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="index__body" style={{ fontSize: "var(--t-body)" }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="stack-sm">
                <h3 className="statement" style={{ fontSize: "var(--t-h3)" }}>
                  {channels.title}
                </h3>
                <ul className="footer__contact" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  <li>
                    <a href={`mailto:${site.email}`}>
                      <span className="sr-only">Correo: </span>
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">WhatsApp: </span>
                      {site.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Section>

        <section id="preguntas-frecuentes" className="section ground-surface" aria-labelledby="faq-title">
          <JsonLd data={faqLd(faqs)} />
          <div className="wrap">
            <div className="split">
              <div className="split__a stack">
                <div className="section-head">
                  <p className="sec-no">
                    <b>02</b>
                  </p>
                  <h2 id="faq-title">Preguntas frecuentes</h2>
                </div>
                <figure
                  className="photo-frame split__photo develop"
                  data-moment="picture-develops"
                  data-moment-opts='{"look":"film"}'
                >
                  <Photo id="steps" />
                </figure>
              </div>
              <div className="split__b faq-list">
                {faqs.map((item) => (
                  <details key={item.q}>
                    <summary>
                      <h3>{item.q}</h3>
                      <span className="faq-plus" aria-hidden="true" />
                    </summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
