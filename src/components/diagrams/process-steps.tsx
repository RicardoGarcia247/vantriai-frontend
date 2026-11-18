/** Proceso secuencial numerado (metodología de trabajo). */
export function ProcessSteps({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <span
        aria-hidden="true"
        className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px border-t-2 border-dashed border-brand-300 lg:block"
      />
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative rounded-2xl border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
        >
          <span
            aria-hidden="true"
            className="relative z-10 mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground shadow-md shadow-primary/25"
          >
            {i + 1}
          </span>
          <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
          <p className="leading-relaxed text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
