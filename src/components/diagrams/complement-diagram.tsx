import { ArrowDown, ArrowRight } from "lucide-react";

type Props = {
  governance: string;
  technology: string;
  result: string;
};

const govChips = ["Quién aprueba", "Bajo qué reglas", "Con qué documentos", "En qué tiempos"];
const techChips = ["Formulario de solicitud", "Flujo de aprobación", "Tablero de seguimiento"];

function Chips({ items }: { items: string[] }) {
  return (
    <ul aria-hidden="true" className="mt-(--space-lg) border-t border-rule">
      {items.map((c) => (
        <li key={c} className="border-b border-rule py-(--space-xs) text-sm font-bold">
          {c}
        </li>
      ))}
    </ul>
  );
}

/** Ejemplo: aprobación de un contrato o de una compra, del diseño a la herramienta. */
export function ComplementDiagram({ governance, technology, result }: Props) {
  return (
    <figure>
      <figcaption className="mb-(--space-md) font-bold text-muted-foreground">
        Aprobación de un contrato o de una compra
      </figcaption>
      <div className="grid items-stretch gap-(--space-md) lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="rounded-(--radius-card) bg-paper-3 p-(--space-lg)">
          <p className="max-w-none text-(length:--text-lg) leading-snug">{governance}</p>
          <Chips items={govChips} />
        </div>

        <div aria-hidden="true" className="flex items-center justify-center text-accent">
          <ArrowRight className="hidden size-7 lg:block" />
          <ArrowDown className="size-7 lg:hidden" />
        </div>

        <div className="rounded-(--radius-card) bg-accent p-(--space-lg) text-accent-ink">
          <p className="max-w-none text-(length:--text-lg) leading-snug">{technology}</p>
          <ul aria-hidden="true" className="mt-(--space-lg) border-t border-accent-ink/30">
            {techChips.map((c) => (
              <li key={c} className="border-b border-accent-ink/30 py-(--space-xs) text-sm font-bold">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-(--space-lg) max-w-none text-(length:--text-xl) font-bold">{result}</p>
    </figure>
  );
}
