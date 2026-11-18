import {
  AlertTriangle,
  BellRing,
  CheckCircle2,
  FileText,
  Flag,
  LayoutDashboard,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const steps = [
  { icon: FileText, title: "Solicitud", text: "Formulario de solicitud" },
  { icon: ShieldCheck, title: "Validación", text: "Reglas y documentos" },
  { icon: UserCheck, title: "Responsable", text: "Aprobador correcto" },
  { icon: CheckCircle2, title: "Aprobación", text: "Decisión del aprobador" },
  { icon: Flag, title: "Cierre", text: "El equipo recibe el resultado" },
];

const support = [
  { icon: BellRing, title: "Alertas por vencimiento" },
  { icon: AlertTriangle, title: "Excepciones registradas" },
  { icon: LayoutDashboard, title: "Tablero de seguimiento" },
];

/** Recorrido de una solicitud desde su ingreso hasta su aprobación y cierre. */
export function ApprovalFlow() {
  return (
    <figure className="rounded-3xl border bg-card p-5 shadow-sm sm:p-8">
      <figcaption className="sr-only">
        Flujo de aprobación: solicitud, validación, responsable, aprobación y cierre, con
        alertas, registro de excepciones y tablero de seguimiento.
      </figcaption>
      <ol className="grid gap-4 lg:grid-cols-5 lg:gap-0">
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
            {i < steps.length - 1 && (
              <>
                <span
                  aria-hidden="true"
                  className="absolute top-12 left-6 h-[calc(100%-1rem)] w-px border-l-2 border-dashed border-brand-300 lg:hidden"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] border-t-2 border-dashed border-brand-300 lg:block"
                />
              </>
            )}
            <span
              aria-hidden="true"
              className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl border [&_svg]:size-5 ${
                i === 0 || i === steps.length - 1
                  ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "border-brand-200 bg-brand-100 text-brand-700"
              }`}
            >
              <s.icon />
            </span>
            <div className="lg:mt-4">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Paso {i + 1}
              </p>
              <p className="font-semibold">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-3 border-t pt-6 sm:grid-cols-3">
        {support.map((s) => (
          <div
            key={s.title}
            className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground"
          >
            <s.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
            {s.title}
          </div>
        ))}
      </div>
    </figure>
  );
}
