const steps = [
  { title: "Solicitud", text: "Formulario de solicitud" },
  { title: "Validación", text: "Reglas y documentos" },
  { title: "Responsable", text: "Aprobador correcto" },
  { title: "Aprobación", text: "Decisión del aprobador" },
  { title: "Cierre", text: "El equipo recibe el resultado" },
];

const support = ["Alertas por vencimiento", "Excepciones registradas", "Tablero de seguimiento"];

/** Recorrido de una solicitud como línea de estaciones sobre un plano. */
export function ApprovalFlow() {
  return (
    <figure data-visual="" style={{ margin: 0 }}>
      <figcaption className="sr-only">
        Flujo de aprobación: solicitud, validación, responsable, aprobación y cierre, con alertas, registro de
        excepciones y tablero de seguimiento.
      </figcaption>
      <ol className="flow">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="flow__no">Paso {i + 1}</span>
            <span className="flow__title">{s.title}</span>
            <span className="flow__text">{s.text}</span>
          </li>
        ))}
      </ol>
      <ul className="flow-support">
        {support.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </figure>
  );
}
