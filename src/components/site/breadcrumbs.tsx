import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { JsonLd, breadcrumbLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

/** Migas de pan visibles + datos estructurados BreadcrumbList. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Inicio", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Migas de pan" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="rounded-sm underline-offset-4 hover:text-primary hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    {item.name}
                  </Link>
                )}
                {!last && <ChevronRight className="size-3.5" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
