import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { paths } from "@/lib/site";

// La política de privacidad se añadirá al sitemap cuando su contenido esté validado.
const entries: { path: string; priority: number }[] = [
  { path: paths.home, priority: 1 },
  { path: paths.governance, priority: 0.9 },
  { path: paths.technology, priority: 0.9 },
  { path: paths.automation, priority: 0.8 },
  { path: paths.software, priority: 0.8 },
  { path: paths.about, priority: 0.6 },
  { path: paths.sectors, priority: 0.7 },
  { path: paths.contact, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority,
  }));
}
