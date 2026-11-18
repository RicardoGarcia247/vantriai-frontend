import { Plus } from "lucide-react";

import { Section, SectionHeading } from "@/components/site/section";
import { JsonLd, faqLd } from "@/lib/seo";
import type { Faq as FaqItem } from "@/content/types";

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
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading id="faq-title" title="Preguntas frecuentes" />
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border bg-card transition-colors open:border-primary/40 open:shadow-sm hover:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-left font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-medium">{item.q}</h3>
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
