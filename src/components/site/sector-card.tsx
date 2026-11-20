import type { Sector } from "@/content/sectors";

/** Fila de sector como lámina de plano: nombre, problema habitual y solución aplicable. */
export function SectorCard({ sector, index }: { sector: Sector; index?: number }) {
  return (
    <article className="sector">
      <div className="sector__name">
        {index !== undefined && (
          <span className="index__no" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3>{sector.title}</h3>
        <span className="sector__flow" aria-hidden="true">
          <b />
          <i />
          <b />
          <i />
          <b />
        </span>
      </div>
      <div className="sector__col">
        <h4>Problemas habituales</h4>
        <p>{sector.problem}</p>
      </div>
      <div className="sector__col">
        <h4>Soluciones aplicables</h4>
        <p>{sector.solution}</p>
      </div>
    </article>
  );
}
