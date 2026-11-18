import { AlertTriangle, BellRing, LayoutDashboard } from "lucide-react";

const steps = [
  { title: "Solicitud", text: "Formulario de solicitud" },
  { title: "Validación", text: "Reglas y documentos" },
  { title: "Responsable", text: "Aprobador correcto" },
  { title: "Aprobación", text: "Decisión del aprobador" },
  { title: "Cierre", text: "El equipo recibe el resultado" },
];

const support = [
  { icon: BellRing, title: "Alertas por vencimiento" },
  { icon: AlertTriangle, title: "Excepciones registradas" },
  { icon: LayoutDashboard, title: "Tablero de seguimiento" },
];

/** Recorrido de una solicitud desde su ingreso hasta su aprobación y cierre. */
export function ApprovalFlow() {
  return (
    <figure>
      <figcaption className="sr-only">
        Flujo de aprobación: solicitud, validación, responsable, aprobación y cierre, con
        alertas, registro de excepciones y tablero de seguimiento.
      </figcaption>
      <ol className="grid gap-x-(--gap-columns) [counter-reset:flow] md:grid-cols-5">
        {steps.map((s) => (
          <li
            key={s.title}
            className="border-t border-ink pt-(--space-md) [counter-increment:flow] before:mb-(--space-sm) before:block before:text-(length:--text-xl) before:font-bold before:text-accent before:tabular-nums before:content-[counter(flow)]"
          >
            <p className="max-w-none font-bold">{s.title}</p>
            <p className="max-w-none text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-(--space-xl) grid gap-x-(--gap-columns) md:grid-cols-3">
        {support.map((s) => (
          <li
            key={s.title}
            className="flex items-center gap-(--space-sm) border-t border-rule py-(--space-md) font-bold"
          >
            <s.icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
            {s.title}
          </li>
        ))}
      </ul>
    </figure>
  );
}
