import { Landmark, RadioTower, ShoppingCart, Truck, Umbrella } from "lucide-react";

import type { Sector } from "@/content/sectors";

const icons: Record<Sector["key"], React.ReactNode> = {
  banking: <Landmark />,
  telecom: <RadioTower />,
  retail: <ShoppingCart />,
  food: <Truck />,
  insurance: <Umbrella />,
};

/** Un sector: su nombre y, en dos columnas, el problema habitual y la solución aplicable. */
export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <article className="border-t border-ink pt-(--space-lg)">
      <h3 className="flex items-center gap-(--space-sm) text-(length:--text-2xl) [&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-accent">
        <span aria-hidden="true" className="inline-flex">
          {icons[sector.key]}
        </span>
        {sector.title}
      </h3>
      <dl className="mt-(--space-lg) grid gap-(--space-lg) md:grid-cols-2 md:gap-(--gap-columns)">
        <div>
          <dt className="mb-(--space-2xs) text-sm font-bold text-muted-foreground">Problemas habituales</dt>
          <dd className="leading-relaxed">{sector.problem}</dd>
        </div>
        <div>
          <dt className="mb-(--space-2xs) text-sm font-bold text-accent-deep">Soluciones aplicables</dt>
          <dd className="leading-relaxed">{sector.solution}</dd>
        </div>
      </dl>
    </article>
  );
}
