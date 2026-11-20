import { Photo } from "@/components/site/photo";
import type { PhotoId } from "@/lib/photos";

/** Lista con marcas (cuadro de cota). */
export function CheckList({ items, className }: { items: string[]; className?: string; tone?: string }) {
  return (
    <ul className={["ticks", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const no = (i: number) => String(i + 1).padStart(2, "0");

/** Índice numerado de problemas, como el cuadro de un plano: número en serif y filete por fila. */
export function ProblemGrid({ items, columns = 2, compact }: { items: string[]; columns?: 1 | 2 | 3; compact?: boolean }) {
  return (
    <ol className={["index", columns > 1 && "index--2", compact && "index--compact"].filter(Boolean).join(" ")}>
      {items.map((item, i) => (
        <li key={item}>
          <span className="index__no" aria-hidden="true">
            {no(i)}
          </span>
          <p className="index__body">{item}</p>
        </li>
      ))}
    </ol>
  );
}

/** Entregables ("Qué puedes recibir") como cuadro de plano en dos o tres columnas. */
export function DeliverableGrid({ items, cols = 3 }: { items: string[]; cols?: 2 | 3; icons?: React.ReactNode[] }) {
  return (
    <ul className="plan" style={{ "--cols": cols } as React.CSSProperties}>
      {items.map((item, i) => (
        <li className="card m-nolift" key={item}>
          <span className="plan__no" aria-hidden="true">
            {no(i)}
          </span>
          <p className="t-lead">{item}</p>
        </li>
      ))}
    </ul>
  );
}

/** Índice de problemas en una columna con una fotografía a la derecha (listas cortas). */
export function ProblemSplit({ items, photo, head }: { items: string[]; photo: PhotoId; head: React.ReactNode }) {
  return (
    <div className="split">
      <div className="split__wide">
        {head}
        <ProblemGrid items={items} columns={1} />
      </div>
      <div className="split__narrow photo-frame split__photo--tall">
        <Photo id={photo} className="frame__img" decorative sizes="(min-width: 1024px) 40vw, 100vw" />
      </div>
    </div>
  );
}
