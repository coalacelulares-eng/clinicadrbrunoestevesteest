import { createFileRoute } from "@tanstack/react-router";
import { Activity, Flower2, HeartPulse, UserRound } from "lucide-react";
import { useState } from "react";

import { PageShell } from "@/components/site/PageShell";
import { ProcedureQuizDialog } from "@/components/site/ProcedureQuizDialog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/especialidades")({
  head: () => ({
    meta: [
      { title: "Especialidades | Dra. Jackline Félix" },
      {
        name: "description",
        content:
          "Cirurgia de mama, contorno corporal, face e íntima com planejamento individual e acompanhamento completo.",
      },
      { property: "og:title", content: "Especialidades | Dra. Jackline Félix" },
      {
        property: "og:description",
        content: "Procedimentos assinados: mama, corpo, face e íntima.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Especialidades,
});

function Especialidades() {
  const { t } = useI18n();
  const [area, setArea] = useState<string | null>(null);

  const items = [
    { icon: HeartPulse, title: "spec.breast", desc: "spec.breast.d" },
    { icon: Activity, title: "spec.body", desc: "spec.body.d" },
    { icon: UserRound, title: "spec.face", desc: "spec.face.d" },
    { icon: Flower2, title: "spec.intimate", desc: "spec.intimate.d" },
  ];

  return (
    <PageShell eyebrow={t("spec.eyebrow")} title={t("spec.title")} intro={t("spec.text")}>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {items.map((s) => (
            <button
              key={s.title}
              type="button"
              data-reveal
              onClick={() => setArea(t(s.title))}
              className="vellum vellum-hover rounded-3xl p-8 text-left"
            >
              <span className="grid size-12 place-items-center rounded-full border border-gold/40">
                <s.icon className="size-5 text-gold" />
              </span>
              <h2 className="title-display mt-6 text-2xl">{t(s.title)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{t(s.desc)}</p>
            </button>
          ))}
        </div>
      </section>

      <ProcedureQuizDialog
        area={area}
        open={area !== null}
        onOpenChange={(open) => !open && setArea(null)}
      />
    </PageShell>
  );
}
