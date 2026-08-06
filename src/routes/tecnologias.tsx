import { createFileRoute } from "@tanstack/react-router";
import { Camera, Layers, Ruler, ScanLine, Smile, Syringe } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";

const items = [
  {
    icon: Smile,
    title: "Lentes de contato dental",
    desc: "Cerâmicas ultrafinas com desgaste mínimo, planejadas em prova estética antes do definitivo.",
  },
  {
    icon: Layers,
    title: "Resina composta estratificada",
    desc: "Recontorno cosmético e fechamento de diastemas com camadas que imitam o esmalte natural.",
  },
  {
    icon: Ruler,
    title: "Invisalign e alinhadores",
    desc: "Planejamento digital do movimento dentário com aparelhos invisíveis e removíveis.",
  },
  {
    icon: ScanLine,
    title: "Radiografia na clínica",
    desc: "Exames de imagem realizados no local, agilizando diagnóstico e plano de tratamento.",
  },
  {
    icon: Camera,
    title: "Isolamento absoluto",
    desc: "Protocolo que aumenta a longevidade das restaurações e a segurança do procedimento.",
  },
  {
    icon: Syringe,
    title: "Injetáveis e HOF",
    desc: "Toxina botulínica, fios de sustentação, rinomodelação e contorno facial harmônico.",
  },
];

export const Route = createFileRoute("/tecnologias")({
  head: () => ({
    meta: [
      { title: "Tecnologia | Thebit Saúde e Estética — BH" },
      {
        name: "description",
        content:
          "Lentes de contato, resina estratificada, Invisalign, radiografia na clínica, isolamento absoluto e injetáveis: a tecnologia da Thebit em BH.",
      },
      { property: "og:title", content: "Tecnologia | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "Ciência e tecnologia aplicadas à odontologia estética em Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tecnologias,
});

function Tecnologias() {
  return (
    <PageShell
      eyebrow="Tecnologia"
      title={
        <>
          Ciência que sustenta o <span className="gold-text">resultado</span>.
        </>
      }
      intro="Usamos o que há de mais recente em ciência e tecnologia para ir além do tratamento do dente."
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} data-reveal className="vellum vellum-hover rounded-3xl p-7">
              <span className="grid size-12 place-items-center rounded-full border border-gold/40">
                <i.icon className="size-5 text-gold" />
              </span>
              <h2 className="title-display mt-6 text-xl">{i.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
