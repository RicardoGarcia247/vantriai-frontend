import { Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { Faq } from "@/components/site/faq";
import { CheckList } from "@/components/site/lists";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { contact, contactSeo } from "@/content/contact";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata(contactSeo);

export default function ContactPage() {
  const { hero, prepare, next, channels, form, faqs } = contact;

  return (
    <>
      <PageHero
        h1={hero.h1}
        intro={[hero.intro]}
        secondary={{ label: form.whatsapp, href: whatsappUrl }}
        breadcrumbs={[{ name: "Contacto", path: contactSeo.path }]}
      />

      <Section id="formulario" labelledBy="formulario-title" className="py-12 sm:py-16">
        <h2 id="formulario-title" className="sr-only">
          Formulario de contacto
        </h2>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div className="space-y-4">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-semibold tracking-tight">{prepare.title}</h2>
              <CheckList items={prepare.items} />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{prepare.closing}</p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-semibold tracking-tight">{next.title}</h2>
              <ol className="space-y-4">
                {next.items.map((item, i) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-lg border bg-accent-soft p-6">
              <h2 className="mb-4 text-xl font-semibold tracking-tight">{channels.title}</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-3 rounded-sm font-medium underline-offset-4 outline-none hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-focus"
                  >
                    <Mail className="size-5 text-primary" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Correo: </span>
                      {site.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-sm font-medium underline-offset-4 outline-none hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-focus"
                  >
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                    <span>
                      <span className="sr-only">WhatsApp: </span>
                      {site.phone}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Faq items={faqs} tone="muted" />
    </>
  );
}
