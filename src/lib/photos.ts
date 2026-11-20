/**
 * Fotografías de arquitectura (Wikimedia Commons, licencias CC0 / CC BY / CC BY-SA / dominio público).
 * Son imágenes de referencia ("stand-ins") hasta contar con fotografías propias; los créditos van en el pie.
 * Todas se muestran en blanco y negro (clase .bw) para mantener un solo tono en el sitio.
 */
export type PhotoId =
  | "stair"
  | "cantilever"
  | "glass"
  | "steps"
  | "grid"
  | "columns"
  | "atrium"
  | "spiral"
  | "spaceframe"
  | "model"
  | "modelGarden"
  | "facade";

type PhotoDef = { file: string; w: number; h: number; widths: number[]; alt: string };

export const photos: Record<PhotoId, PhotoDef> = {
  stair: { file: "f101622414", w: 4745, h: 3663, widths: [500, 960], alt: "Escalera de hormigón vista desde arriba, con barandas metálicas en zigzag" },
  cantilever: { file: "f136254545", w: 6000, h: 4000, widths: [500, 960, 1280], alt: "Edificio de hormigón con un volumen circular en voladizo sobre columnas" },
  glass: { file: "f13340436", w: 2000, h: 1333, widths: [500, 960, 1280], alt: "Fachada de vidrio con montantes regulares que refleja el cielo" },
  steps: { file: "f61901197", w: 4896, h: 3264, widths: [500, 960, 1280], alt: "Escalinata de hormigón junto a un muro de paneles perforados" },
  grid: { file: "f75110342", w: 4000, h: 3000, widths: [500, 960, 1280], alt: "Muro cortina de vidrio en retícula visto desde abajo" },
  columns: { file: "f51000164", w: 5184, h: 3456, widths: [500, 960], alt: "Galería con columnas de hormigón abujardado en ritmo regular" },
  atrium: { file: "f26487103", w: 4320, h: 3240, widths: [500, 960, 1280], alt: "Atrio en penumbra con un lucernario rectangular en lo alto" },
  spiral: { file: "f83150193", w: 5304, h: 7952, widths: [500, 960, 1280], alt: "Escalera de caracol de hormigón visto con pasamanos de acero" },
  spaceframe: { file: "f47983975", w: 1677, h: 2500, widths: [500], alt: "Estructura espacial de acero de un lucernario, vista desde abajo" },
  model: { file: "f40606779", w: 2136, h: 1414, widths: [500, 960], alt: "Maqueta de arquitectura en madera y acrílico sobre una base" },
  modelGarden: { file: "f151572530", w: 5184, h: 3456, widths: [500, 960], alt: "Maqueta a escala de una casa con piscina y jardín" },
  facade: { file: "f199176426", w: 2048, h: 1153, widths: [500, 960], alt: "Fachada de paneles geométricos plegados" },
};

const src = (file: string, w: number) => `/assets/img/photo-${file}-${w}.jpg`;

export function photoProps(id: PhotoId) {
  const p = photos[id];
  const widths = p.widths;
  return {
    src: src(p.file, widths[widths.length - 1]),
    srcSet: widths.map((w) => `${src(p.file, w)} ${w}w`).join(", "),
    width: widths[widths.length - 1],
    height: Math.round((widths[widths.length - 1] * p.h) / p.w),
    alt: p.alt,
  };
}
