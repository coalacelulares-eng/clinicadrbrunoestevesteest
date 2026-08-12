import { createFileRoute } from "@tanstack/react-router";
import { Camera, Layers, Ruler, ScanLine, Smile, Syringe } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import { TECH_ITEMS } from "@/lib/site";

const ICON_MAP = {
  lenses: Smile,
  resin: Layers,
  invisalign: Ruler,
  xray: ScanLine,
  isolation: Camera,
  injectables: Syringe,
};

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
  const { t } = useI18n();

  return (
    <PageShell
      eyebrow={t("tech_page.eyebrow")}
      title={
        <>
          {t("tech_page.title").replace(/resultado|result|resultado/gi, "").trim()}{" "}
          <span className="gold-text">
            {t("tech_page.title").toLowerCase().includes("resultado") ? "resultado" : "result"}
          </span>
        </>
      }
      intro={t("tech_page.intro")}
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.id as keyof typeof ICON_MAP];
            return (
              <div key={item.id} data-reveal className="vellum vellum-hover rounded-3xl p-7">
                <span className="grid size-12 place-items-center rounded-full border border-gold/40">
                  <Icon className="size-5 text-gold" />
                </span>
                <h2 className="title-display mt-6 text-xl">{t(`tech_page.item.${item.id}.title`)}</h2>
                <p className="section-lede-sm mt-2">{t(`tech_page.item.${item.id}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
