import { CtaLink } from "@/components/site/cta-link";
import { Container } from "@/components/site/section";
import type { Cta } from "@/content/types";

/** Banda de cierre: el titular, una línea y la acción de la página. */
export function CtaBand({
  title,
  text,
  cta,
  id,
}: {
  title: string;
  text: string;
  cta: Cta;
  id?: string;
}) {
  return (
    <section id={id} className="bg-accent py-(--section-gap-s) text-accent-ink">
      <Container className="grid items-end gap-(--space-xl) lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-(--gap-columns)">
        <h2 className="max-w-[18ch] text-(length:--text-display-s)">{title}</h2>
        <div className="grid gap-(--space-lg)">
          <p className="lead max-w-[40ch]">{text}</p>
          <div>
            <CtaLink href={cta.href} variant="onField" className="bg-accent-ink text-accent-deep hover:bg-brand-100">
              {cta.label}
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
