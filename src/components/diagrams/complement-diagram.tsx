type Props = {
  governance: string;
  technology: string;
  result: string;
};

const govChips = ["Quién aprueba", "Bajo qué reglas", "Con qué documentos", "En qué tiempos"];
const techChips = ["Formulario de solicitud", "Flujo de aprobación", "Tablero de seguimiento"];

/** Ejemplo visual como lámina de plano: diseño (gobernanza) → herramienta (tecnología) = resultado. */
export function ComplementDiagram({ governance, technology, result }: Props) {
  return (
    <figure className="plate" data-visual="" style={{ margin: 0 }}>
      <p className="plate__title">Aprobación de un contrato o de una compra</p>
      <div className="plate__row">
        <div className="plate__cell">
          <span className="plate__label">Gobernanza y Consultoría</span>
          <p>{governance}</p>
          <ul aria-hidden="true" className="plate__chips">
            {govChips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="plate__arrow" aria-hidden="true">
          <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 14h22M17 7l7 7-7 7" />
          </svg>
        </div>
        <div className="plate__cell">
          <span className="plate__label">Tecnología</span>
          <p>{technology}</p>
          <ul aria-hidden="true" className="plate__chips">
            {techChips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="plate__result">{result}</p>
    </figure>
  );
}
