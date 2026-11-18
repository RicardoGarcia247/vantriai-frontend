import { FileWarning } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
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
      <PageHero
        h1="Política de privacidad"
        breadcrumbs={[{ name: "Política de privacidad", path: "/politica-de-privacidad/" }]}
      />
      <Section labelledBy="contenido-pendiente">
        <div className="mx-auto max-w-3xl">
          <div className="flex gap-4 rounded-2xl border border-dashed border-primary/40 bg-brand-50 p-6 dark:bg-brand-900/20">
            <FileWarning className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 id="contenido-pendiente" className="font-semibold">
                Contenido pendiente
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                El texto de esta política debe ser proporcionado y validado antes de publicar.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
