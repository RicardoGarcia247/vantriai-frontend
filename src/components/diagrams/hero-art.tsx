import {
  Boxes,
  CheckCircle2,
  Database,
  FileText,
  GitBranch,
  LayoutDashboard,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

/** Decorativo: red de nodos que une los dos focos (gobernanza + tecnología). */
export function HomeArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" fill="none">
        <g stroke="var(--brand-300)" strokeWidth="2" className="animate-flow">
          <path d="M88 88 C 168 88, 168 200, 248 200" />
          <path d="M88 312 C 168 312, 168 200, 248 200" />
          <path d="M88 88 L88 312" />
          <path d="M248 200 C 296 200, 344 150, 344 88" />
          <path d="M248 200 C 296 200, 344 250, 344 312" />
        </g>
      </svg>

      <Node x={22} y={22} tone="soft" icon={<FileText />} label="Reglas" />
      <Node x={22} y={78} tone="soft" icon={<ShieldCheck />} label="Controles" />
      <Node x={62} y={50} tone="solid" icon={<Workflow />} label="Flujo" big />
      <Node x={86} y={22} tone="outline" icon={<LayoutDashboard />} label="Tablero" />
      <Node x={86} y={78} tone="outline" icon={<Database />} label="Datos" />

      <div className="absolute bottom-0 left-0 flex w-full justify-between px-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        <span>Gobernanza</span>
        <span>Tecnología</span>
      </div>
    </div>
  );
}

function Node({
  x,
  y,
  icon,
  label,
  tone,
  big,
}: {
  x: number;
  y: number;
  icon: React.ReactNode;
  label: string;
  tone: "soft" | "solid" | "outline";
  big?: boolean;
}) {
  const tones = {
    soft: "bg-brand-100 text-brand-700 border-brand-200",
    solid: "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30",
    outline: "bg-card text-primary border-brand-300",
  } as const;
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span
        className={`flex items-center justify-center rounded-2xl border ${tones[tone]} ${
          big ? "size-20 [&_svg]:size-9" : "size-14 [&_svg]:size-6"
        }`}
      >
        {icon}
      </span>
      <span className="absolute top-full left-1/2 mt-1.5 -translate-x-1/2 text-xs font-medium whitespace-nowrap text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/** Decorativo: matriz de responsabilidades + hoja de ruta + control de versiones. */
export function GovernanceArt() {
  const matrix = [
    [2, 0, 1, 0],
    [0, 2, 0, 1],
    [1, 0, 2, 0],
    [0, 1, 0, 2],
  ];
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Network className="size-4 text-primary" /> Matriz de responsabilidades
        </div>
        <div className="grid grid-cols-4 gap-2">
          {matrix.flat().map((v, i) => (
            <span
              key={i}
              className={`h-9 rounded-lg ${
                v === 2 ? "bg-primary" : v === 1 ? "bg-brand-200" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <GitBranch className="size-4 text-primary" /> Hoja de ruta
          </div>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="flex flex-1 items-center">
                <span
                  className={`size-3 rounded-full ${i < 2 ? "bg-primary" : "bg-brand-200"}`}
                />
                {i < 3 && <span className="h-0.5 flex-1 bg-brand-200" />}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <FileText className="size-4 text-primary" /> Documentos
          </div>
          <div className="space-y-2">
            <span className="block h-2 w-full rounded bg-brand-200" />
            <span className="block h-2 w-4/5 rounded bg-muted" />
            <span className="block h-2 w-3/5 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Decorativo: arquitectura de sistemas conectados. */
export function TechnologyArt() {
  const nodes = [
    { x: 50, y: 12, i: <Boxes /> },
    { x: 14, y: 16, i: <Database /> },
    { x: 86, y: 16, i: <LayoutDashboard /> },
    { x: 14, y: 84, i: <GitBranch /> },
    { x: 86, y: 84, i: <CheckCircle2 /> },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" fill="none">
        <g stroke="var(--brand-300)" strokeWidth="2" className="animate-flow">
          {nodes.map((n) => (
            <path key={`${n.x}-${n.y}`} d={`M200 200 L${n.x * 4} ${n.y * 4}`} />
          ))}
        </g>
      </svg>
      <div className="absolute top-1/2 left-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/30 [&_svg]:size-10">
        <Workflow />
      </div>
      {nodes.map((n) => (
        <span
          key={`${n.x}-${n.y}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          className="absolute flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand-200 bg-card text-primary shadow-sm [&_svg]:size-6"
        >
          {n.i}
        </span>
      ))}
    </div>
  );
}

/** Decorativo: maqueta de aplicación empresarial (interfaz, panel e integraciones). */
export function AppMock() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-xl shadow-primary/10">
      <div className="flex items-center gap-1.5 border-b bg-muted/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-brand-200" />
        <span className="size-2.5 rounded-full bg-brand-200" />
        <span className="size-2.5 rounded-full bg-brand-200" />
        <span className="ml-3 h-4 w-40 rounded bg-background" />
      </div>
      <div className="grid grid-cols-[3.5rem_1fr]">
        <div className="space-y-3 border-r bg-muted/40 p-3">
          <span className="block size-8 rounded-lg bg-primary" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="block size-8 rounded-lg bg-brand-100" />
          ))}
        </div>
        <div className="space-y-4 p-4">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border p-3">
                <span className="block h-2 w-1/2 rounded bg-muted" />
                <span className="mt-3 block h-4 w-2/3 rounded bg-brand-300" />
              </div>
            ))}
          </div>
          <div className="flex h-24 items-end gap-2 rounded-xl border p-3">
            {[40, 62, 48, 78, 58, 90, 70].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t ${i === 5 ? "bg-primary" : "bg-brand-200"}`}
              />
            ))}
          </div>
          <div className="space-y-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border px-3 py-2">
                <span className="size-3 rounded-full bg-brand-300" />
                <span className="h-2 flex-1 rounded bg-muted" />
                <span className="h-5 w-14 rounded-full bg-brand-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
