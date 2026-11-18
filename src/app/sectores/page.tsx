import { Users } from "lucide-react";

import { CtaLink } from "@/components/site/cta-link";
import { Faq } from "@/components/site/faq";
import { PageHero } from "@/components/site/page-hero";
import { SectorCard } from "@/components/site/sector-card";
import { Section, SectionHeading } from "@/components/site/section";
import { sectors, sectorsSeo } from "@/content/sectors";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(sectorsSeo);

export default function SectorsPage() {
  const { hero, experience, applicable, faqs } = sectors;

  return (
    <>
      <PageHero
        h1={hero.h1}
        intro={hero.intro}
        breadcrumbs={[{ name: "Sectores", path: sectorsSeo.path }]}
      />

      <Section labelledBy="experiencia-title">
        <SectionHeading id="experiencia-title" title={experience.title} />
        <p className="-mt-6 mb-10 flex max-w-3xl items-start gap-3 rounded-2xl bg-secondary p-5 text-secondary-foreground">
          <Users className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          {experience.note}
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {experience.items.map((s) => (
            <SectorCard key={s.key} sector={s} />
          ))}
        </div>
      </Section>

      <Section tone="muted" labelledBy="aplicables-title">
        <SectionHeading id="aplicables-title" title={applicable.title} />
        <div className="grid gap-6">
          {applicable.items.map((s) => (
            <SectorCard key={s.key} sector={s} />
          ))}
        </div>
        <div className="mt-10">
          <CtaLink href={applicable.cta.href}>{applicable.cta.label}</CtaLink>
        </div>
      </Section>

      <Faq items={faqs} />
    </>
  );
}
