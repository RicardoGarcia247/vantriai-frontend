import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { pageMetadata } from "@/lib/seo";

// Mientras el texto legal oficial no esté validado, la página no debe indexarse.
export const metadata = pageMetadata({
  title: "Política de privacidad | VantriAI",
  description: "Política de privacidad de VantriAI.",
  path: "/politica-de-privacidad/",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <main id="contenido">
        <PageHero
          h1="Política de privacidad"
          breadcrumbs={[{ name: "Política de privacidad", path: "/politica-de-privacidad/" }]}
          photo="atrium"
          short
        />
        <Section labelledBy="contenido-pendiente">
          <div className="split">
            <div className="split__wide">
              <div className="section-head">
                <h2 id="contenido-pendiente">Contenido pendiente</h2>
              </div>
              <p className="note">El texto de esta política debe ser proporcionado y validado antes de publicar.</p>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
