import { ArrowRight, Layers, Palette, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Next.js",
    description: "App Router, TypeScript y Turbopack listos para usar.",
  },
  {
    icon: Layers,
    title: "shadcn/ui",
    description: "Componentes accesibles que viven en tu propio código.",
  },
  {
    icon: Palette,
    title: "Tema en HSL",
    description: "Color primario #7D39EB y tonos derivados con variables CSS.",
  },
];

const tones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="text-lg font-semibold tracking-tight">
            Vantri<span className="text-primary">AI</span>
          </span>
          <Button size="sm">Comenzar</Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <section className="flex flex-col items-center gap-6 py-24 text-center">
          <Badge variant="secondary">Proyecto base</Badge>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Construye tu próxima idea con{" "}
            <span className="text-primary">rapidez</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Una base sencilla con Next.js y shadcn/ui, lista para que
            empieces a diseñar.
          </p>
          <div className="flex gap-3">
            <Button size="lg">
              Empezar <ArrowRight />
            </Button>
            <Button size="lg" variant="outline">
              Documentación
            </Button>
          </div>
        </section>

        <section className="grid gap-4 pb-16 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="pb-24">
          <h2 className="mb-4 text-sm font-medium text-muted-foreground">
            Paleta primaria · hsl(263 82% 57%)
          </h2>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
            {tones.map((tone) => (
              <div key={tone} className="space-y-1.5">
                <div
                  className="h-12 rounded-md border"
                  style={{ backgroundColor: `var(--brand-${tone})` }}
                />
                <p className="text-center text-xs text-muted-foreground">
                  {tone}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © VantriAI
      </footer>
    </div>
  );
}
