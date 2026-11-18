import { Plus } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/section";
import type { Faq as FaqItem } from "@/content/types";
import { JsonLd, faqLd } from "@/lib/seo";

/** Preguntas frecuentes desplegables (<details>, accesibles por teclado sin JS). */
export function Faq({
  items,
  tone = "default",
}: {
  items: FaqItem[];
  tone?: "default" | "muted";
}) {
  return (
    <Section id="preguntas-frecuentes" tone={tone} labelledBy="faq-title">
      <JsonLd data={faqLd(items)} />
      <div className="grid gap-(--space-xl) lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-(--gap-columns)">
        <SectionHeading id="faq-title" title="Preguntas frecuentes" className="mb-0" />
        <div className="border-t border-rule">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-(--space-md) py-(--space-lg) text-left outline-none focus-visible:outline-2 focus-visible:outline-focus [&::-webkit-details-marker]:hidden">
                <h3 className="text-(length:--text-lg) font-bold">{item.q}</h3>
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-accent transition-transform duration-(--dur-short) group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[62ch] pb-(--space-lg) text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
