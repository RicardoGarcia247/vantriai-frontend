import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Un pozo con título y filas: el bloque con el que se dibujan todos los diagramas de cabecera. */
function Well({
  title,
  items,
  tone = "paper",
}: {
  title: string;
  items: string[];
  tone?: "paper" | "accent";
}) {
  return (
    <div
      className={cn(
        "flex flex-col p-(--space-xl)",
        tone === "accent" ? "bg-accent text-accent-ink" : "bg-paper-3 text-ink",
        "rounded-(--radius-card)",
      )}
    >
      <p className="max-w-none text-(length:--text-title) font-bold">{title}</p>
      <ul className="mt-(--space-md) flex-1">
        {items.map((item, i) => (
          <li
            key={item}
            className={cn(
              "flex min-h-16 items-center border-t py-(--space-xs) text-(length:--text-md)",
              tone === "accent" ? "border-accent-ink/30" : "border-rule",
              i === items.length - 1 && "mb-0",
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Los dos focos de VantriAI unidos por un mismo flujo: las dos listas salen de los textos de la página. */
export function HomeArt() {
  return (
    <div className="grid items-stretch gap-(--space-md) sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <Well title="Gobernanza" items={["Prioridades", "Responsables", "Controles", "Indicadores"]} />
      <div className="flex items-center justify-center gap-(--space-xs) text-sm font-bold text-accent-deep sm:flex-col">
        <span>Flujo</span>
        <ArrowRight aria-hidden="true" className="size-5 rotate-90 sm:rotate-0" />
      </div>
      <Well title="Tecnología" tone="accent" items={["Flujos", "Software", "Integraciones", "Datos"]} />
    </div>
  );
}

/** Gobernanza y Consultoría: matriz de responsabilidades, hoja de ruta y documentos. */
export function GovernanceArt() {
  return (
    <Well title="Gobernanza" items={["Matriz de responsabilidades", "Hoja de ruta", "Documentos", "Control de versiones"]} />
  );
}

/** Tecnología: sistemas conectados. */
export function TechnologyArt() {
  return <Well tone="accent" title="Tecnología" items={["Sistemas", "Datos", "Flujos", "Tableros"]} />;
}

/** Desarrollo de software: interfaz, panel e integraciones. */
export function AppMock() {
  return <Well tone="accent" title="Software a medida" items={["Interfaz", "Tableros", "Integraciones"]} />;
}
