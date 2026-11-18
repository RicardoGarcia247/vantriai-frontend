import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

/** Lista con marcas de verificación. */
export function CheckList({
  items,
  className,
  tone = "default",
}: {
  items: string[];
  className?: string;
  tone?: "default" | "onTint";
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden="true"
            className={cn(
              "mt-1 flex size-5 shrink-0 items-center justify-center rounded-full",
              tone === "onTint" ? "bg-card text-primary" : "bg-secondary text-primary",
            )}
          >
            <Check className="size-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Tarjetas numeradas para problemas habituales. */
export function ProblemGrid({
  items,
  columns = 3,
}: {
  items: string[];
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
      )}
    >
      {items.map((item, i) => (
        <li
          key={item}
          className="group relative rounded-2xl border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
        >
          <span
            aria-hidden="true"
            className="mb-4 flex size-9 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-primary"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  );
}

/** Tarjetas de entregables ("Qué puedes recibir"). */
export function DeliverableGrid({
  items,
  icons,
}: {
  items: string[];
  icons?: React.ReactNode[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex gap-4 rounded-2xl border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
        >
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground [&_svg]:size-5"
          >
            {icons?.[i] ?? <Check strokeWidth={3} />}
          </span>
          <p className="self-center leading-snug font-medium">{item}</p>
        </li>
      ))}
    </ul>
  );
}
