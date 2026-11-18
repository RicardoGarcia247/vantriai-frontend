import { ArrowLeftRight } from "lucide-react";

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
    <Section tone="muted" labelledBy="bridge-title" className="py-14 sm:py-20">
      <div className="flex flex-col gap-8 rounded-3xl border bg-card p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-5">
          <span
            aria-hidden="true"
            className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary sm:flex"
          >
            <ArrowLeftRight className="size-6" />
          </span>
          <div className="max-w-2xl">
            <h2 id="bridge-title" className="text-2xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
          </div>
        </div>
        <div className="shrink-0">
          <CtaLink href={cta.href} variant={asLink ? "link" : "primary"}>
            {cta.label}
          </CtaLink>
        </div>
      </div>
    </Section>
  );
}
