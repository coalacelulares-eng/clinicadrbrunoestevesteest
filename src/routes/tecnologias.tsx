import { createFileRoute } from "@tanstack/react-router";
import { Ruler, Scissors, Sparkles } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/tecnologias")({
  head: () => ({
    meta: [
      { title: "Tecnologias e técnicas | Dra. Jackline Félix" },
      {
        name: "description",
        content:
          "MILA, sutiã interno e lipo HD: técnicas cirúrgicas que sustentam resultados naturais e duradouros.",
      },
      { property: "og:title", content: "Tecnologias e técnicas cirúrgicas" },
      {
        property: "og:description",
        content: "Técnicas que sustentam o resultado a longo prazo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tecnologias,
});

function Tecnologias() {
  const { t } = useI18n();

  const items = [
    { icon: Scissors, title: "tech.mila", desc: "tech.mila.d" },
    { icon: Ruler, title: "tech.bra", desc: "tech.bra.d" },
    { icon: Sparkles, title: "tech.hd", desc: "tech.hd.d" },
  ];

  return (
    <PageShell eyebrow={t("tech.eyebrow")} title={t("tech.title")}>
      <section
        className="px-6 py-20 text-off-white"
        style={{ background: "var(--gradient-onyx)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {items.map((s) => (
            <article
              key={s.title}
              data-reveal
              className="rounded-3xl border border-gold/25 bg-off-white/5 p-8 backdrop-blur-sm"
            >
              <s.icon className="animate-float-soft size-6 text-gold" />
              <h2 className="title-display mt-6 text-2xl">{t(s.title)}</h2>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{t(s.desc)}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
