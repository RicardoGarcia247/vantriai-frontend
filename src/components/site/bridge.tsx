import { CtaLink } from "@/components/site/cta-link";
import { Section } from "@/components/site/section";
import type { Cta } from "@/content/types";

/** Conexión entre los dos focos (Gobernanza y Consultoría ↔ Tecnología). */
export function Bridge({
  title,
  text,
  cta,
  asLink,
}: {
  title: string;
  text: string;
  cta: Cta;
  asLink?: boolean;
}) {
  return (
    <Section tone="muted" labelledBy="bridge-title">
      <div className="grid items-end gap-(--space-xl) lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-(--gap-columns)">
        <div>
          <h2 id="bridge-title" className="text-(length:--text-3xl)">
            {title}
          </h2>
          <p className="lead mt-(--space-md) text-muted-foreground">{text}</p>
        </div>
        <div className="lg:justify-self-end">
          <CtaLink href={cta.href} variant={asLink ? "link" : "primary"}>
            {cta.label}
          </CtaLink>
        </div>
      </div>
    </Section>
  );
}
