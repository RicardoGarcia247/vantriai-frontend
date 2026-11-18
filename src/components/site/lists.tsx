import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

/** Lista con filas separadas por filetes y una marca de verificación en línea. */
export function CheckList({
  items,
  className,
}: {
  items: string[];
  className?: string;
  tone?: "default" | "onTint";
}) {
  return (
    <ul className={cn("border-t border-rule", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-(--space-sm) border-b border-rule py-(--space-sm) leading-snug">
          <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Lista numerada de problemas habituales: una fila por problema, el número lo pone la lista. */
export function ProblemGrid({
  items,
  columns = 3,
}: {
  items: string[];
  columns?: 2 | 3;
}) {
  return (
    <ol
      className={cn(
        "grid gap-x-(--gap-columns) border-t border-rule [counter-reset:problem] md:grid-cols-2",
        columns === 3 && "lg:grid-cols-1",
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-(--space-md) border-b border-rule py-(--space-lg) text-(length:--text-md) leading-snug [counter-increment:problem] before:min-w-8 before:font-bold before:text-accent before:tabular-nums before:content-[counter(problem)]"
        >
          <p className="max-w-none">{item}</p>
        </li>
      ))}
    </ol>
  );
}

/** Entregables ("Qué puedes recibir"): columnas con filete superior y un icono en línea. */
export function DeliverableGrid({
  items,
  icons,
}: {
  items: string[];
  icons?: React.ReactNode[];
}) {
  return (
    <ul className="grid gap-x-(--gap-columns) sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-start gap-(--space-sm) border-t border-rule py-(--space-lg) text-accent [&_svg]:mt-0.5 [&_svg]:size-5 [&_svg]:shrink-0"
        >
          {icons?.[i] ?? <Check aria-hidden="true" strokeWidth={2.5} />}
          <p className="max-w-none font-bold leading-snug text-ink">{item}</p>
        </li>
      ))}
    </ul>
  );
}
