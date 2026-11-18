import { ArrowRight, ArrowDown, Compass, Cpu } from "lucide-react";

type Props = {
  governance: string;
  technology: string;
  result: string;
};

const govChips = ["Quién aprueba", "Bajo qué reglas", "Con qué documentos", "En qué tiempos"];
const techChips = ["Formulario de solicitud", "Flujo de aprobación", "Tablero de seguimiento"];

/** Ejemplo visual: aprobación de un contrato o de una compra (diseño → herramienta). */
export function ComplementDiagram({ governance, technology, result }: Props) {
  return (
    <figure className="rounded-3xl border bg-card p-5 shadow-sm sm:p-8">
      <figcaption className="mb-6 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
        Aprobación de un contrato o de una compra
      </figcaption>
      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 dark:bg-brand-900/20">
          <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-card text-primary shadow-sm">
            <Compass className="size-5" aria-hidden="true" />
          </span>
          <p className="leading-relaxed">{governance}</p>
          <ul aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
            {govChips.map((c) => (
              <li key={c} className="rounded-full bg-card px-3 py-1 text-xs font-medium text-brand-700 dark:text-brand-200">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="flex items-center justify-center text-primary">
          <ArrowRight className="hidden size-7 lg:block" />
          <ArrowDown className="size-7 lg:hidden" />
        </div>

        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
            <Cpu className="size-5" aria-hidden="true" />
          </span>
          <p className="leading-relaxed">{technology}</p>
          <ul aria-hidden="true" className="mt-5 flex flex-wrap gap-2">
            {techChips.map((c) => (
              <li key={c} className="rounded-full bg-card px-3 py-1 text-xs font-medium text-primary">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 rounded-xl bg-secondary px-5 py-4 text-center font-medium text-secondary-foreground">
        {result}
      </p>
    </figure>
  );
}
