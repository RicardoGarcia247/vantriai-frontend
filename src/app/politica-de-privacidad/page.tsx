import { Closing, Hero, Sec } from "@/components/kit/kit";
import { home } from "@/content/home";
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
      <main id="top">
        <Hero h1="Política de privacidad" lead="El texto de esta política debe ser proporcionado y validado antes de publicar." img="desk" />
        <Sec id="contenido-pendiente" labelId="contenido-pendiente-h" title="Contenido pendiente">
          <p>El texto de esta política debe ser proporcionado y validado antes de publicar.</p>
        </Sec>
      </main>
      <Closing title={home.finalCta.title} text={home.finalCta.text} cta={home.finalCta.cta} img="office" />
    </>
  );
}
