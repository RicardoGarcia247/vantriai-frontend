import { Closing, FaqList, Hero, Rows, Sec, SplitPic } from "@/components/kit/kit";
import { ContactForm } from "@/components/site/contact-form";
import { contact, contactSeo } from "@/content/contact";
import { home } from "@/content/home";
import { JsonLd, breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata(contactSeo);

export default function ContactPage() {
  const { hero, prepare, next, channels, form, faqs } = contact;

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Contacto", path: contactSeo.path }])} />
      <JsonLd data={faqLd(faqs)} />
      <main id="top">
        <Hero h1={hero.h1} lead={hero.intro} secondary={{ label: form.whatsapp, href: whatsappUrl }} img="office" />

        <Sec id="formulario" labelId="formulario-h" title="Formulario de contacto" ground="surface" h={2}>
          <div className="grid grid--top">
            <div className="span-6">
              <ContactForm />
            </div>
            <div className="span-5 start-8 stack-4">
              <h3>{prepare.title}</h3>
              <Rows items={prepare.items} />
              <p className="t-small muted">{prepare.closing}</p>
            </div>
          </div>
        </Sec>

        <Sec id="siguiente" labelId="siguiente-h" title={next.title}>
          <div className="grid grid--top fill">
            <Rows className="span-6" items={next.items} />
            <SplitPic k="hub" fill />
          </div>
          <h3>{channels.title}</h3>
          <p>
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            {"  "}
            <a className="link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {site.phone}
            </a>
          </p>
        </Sec>

        <FaqList items={faqs} />
      </main>
      <Closing title={home.finalCta.title} text={home.finalCta.text} cta={home.finalCta.cta} img="desk" />
    </>
  );
}
