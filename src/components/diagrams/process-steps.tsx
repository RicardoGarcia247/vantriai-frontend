/** Proceso secuencial numerado (metodología de trabajo): una lista ordenada, el número lo pone el contador. */
export function ProcessSteps({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="grid gap-x-(--gap-columns) gap-y-(--space-xl) [counter-reset:step] sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li
          key={step.title}
          className="border-t border-rule pt-(--space-lg) [counter-increment:step] before:mb-(--space-lg) before:block before:text-(length:--text-display-s) before:leading-none before:font-bold before:text-accent-soft before:tabular-nums before:content-[counter(step)]"
        >
          <h3 className="mb-(--space-sm) text-(length:--text-title)">{step.title}</h3>
          <p className="text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
