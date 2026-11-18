import { Closing, Hero, Rows, Sec } from "@/components/kit/kit";
import { home } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Créditos de fotografías | VantriAI",
  description: "Autores y licencias de las fotografías que ilustran el sitio de VantriAI.",
  path: "/creditos/",
  noindex: true,
});

const credits = [
  { name: "Taller de Business Model Canvas", text: "US Embassy Madrid, CC BY 2.0, Wikimedia Commons" },
  { name: "Programmer at work", text: "Crew crew, CC0, Wikimedia Commons" },
  { name: "Centro de datos de CMC Telecom", text: "Daoducquan, CC BY-SA 4.0, Wikimedia Commons" },
  { name: "Intotalo avokonttori", text: "Mediakylpy, Tuomas Kaakinen, CC BY 2.5, Wikimedia Commons" },
  { name: "TechnologyHub 2020 Office Space Cubicles", text: "Missionedit, CC BY-SA 4.0, Wikimedia Commons" },
  { name: "Bridge Global developers' bay", text: "Arunvrparavur, CC BY-SA 4.0, Wikimedia Commons" },
  { name: "Statistikaamet", text: "Liilia Moroz, CC0, Wikimedia Commons" },
  { name: "Coworking Audiovisual NOLICH", text: "Espacio Nolich, CC BY-SA 4.0, Wikimedia Commons" },
];

export default function CreditsPage() {
  return (
    <>
      <main id="top">
        <Hero h1="Créditos de fotografías" lead="Fotografías vía Wikimedia Commons, con sus autores y licencias." img="hub" />
        <Sec id="creditos" labelId="creditos-h" title="Autores y licencias">
          <Rows items={credits} />
        </Sec>
      </main>
      <Closing title={home.finalCta.title} text={home.finalCta.text} cta={home.finalCta.cta} img="desk" />
    </>
  );
}
