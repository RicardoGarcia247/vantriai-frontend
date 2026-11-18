import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  FileText,
  Files,
  Gauge,
  Inbox,
  Landmark,
  LayoutDashboard,
  Network,
  RadioTower,
  ScanSearch,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Umbrella,
} from "lucide-react";

import type { Sector } from "@/content/sectors";

const visuals: Record<
  Sector["key"],
  { icon: React.ReactNode; flow: React.ReactNode[] }
> = {
  banking: { icon: <Landmark />, flow: [<FileText key="1" />, <ShieldCheck key="2" />, <LayoutDashboard key="3" />] },
  telecom: { icon: <RadioTower />, flow: [<Inbox key="1" />, <Network key="2" />, <Gauge key="3" />] },
  retail: { icon: <ShoppingCart />, flow: [<ShoppingCart key="1" />, <Boxes key="2" />, <Truck key="3" />] },
  food: { icon: <Truck />, flow: [<ClipboardList key="1" />, <CheckCircle2 key="2" />, <Truck key="3" />] },
  insurance: { icon: <Umbrella />, flow: [<Files key="1" />, <ScanSearch key="2" />, <CheckCircle2 key="3" />] },
};

/** Bloque visual de un sector: nombre, problema habitual, solución aplicable y gráfico de flujo. */
export function SectorCard({ sector }: { sector: Sector }) {
  const v = visuals[sector.key];
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex items-center gap-4 bg-brand-50 px-7 py-6 dark:bg-brand-900/20">
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/25 [&_svg]:size-6"
        >
          {v.icon}
        </span>
        <h3 className="text-xl leading-snug font-semibold tracking-tight">{sector.title}</h3>
      </div>

      <div aria-hidden="true" className="flex items-center justify-center gap-3 border-y px-7 py-5 text-primary [&_svg]:size-5">
        {v.flow.map((node, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl border border-brand-200 bg-card">
              {node}
            </span>
            {i < v.flow.length - 1 && <ArrowRight className="text-brand-300" />}
          </span>
        ))}
      </div>

      <div className="grid flex-1 gap-6 p-7 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Problemas habituales
          </h4>
          <p className="leading-relaxed">{sector.problem}</p>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
            Soluciones aplicables
          </h4>
          <p className="leading-relaxed">{sector.solution}</p>
        </div>
      </div>
    </article>
  );
}
