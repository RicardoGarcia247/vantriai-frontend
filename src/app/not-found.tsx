import type { Metadata } from "next";

import { Closing, Hero } from "@/components/kit/kit";
import { notFound } from "@/content/contact";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada | VantriAI" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <main id="top">
        <Hero h1={notFound.h1} lead={notFound.text} primary={notFound.ctas[0]} secondary={notFound.ctas[1]} img="desk" />
      </main>
      <Closing title={home.finalCta.title} text={home.finalCta.text} cta={home.finalCta.cta} img="hub" />
    </>
  );
}
