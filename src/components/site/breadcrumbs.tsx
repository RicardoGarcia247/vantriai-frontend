import { JsonLd, breadcrumbLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

/** Migas de pan visibles + datos estructurados BreadcrumbList. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Inicio", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Migas de pan">
        <ol className="crumbs">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={item.path}>
                {last ? <span aria-current="page">{item.name}</span> : <a href={item.path}>{item.name}</a>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
