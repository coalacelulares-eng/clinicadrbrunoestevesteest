import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

const groups = [
  { id: "g1", items: ["i1", "i2", "i3"] },
  { id: "g2", items: ["i1", "i2", "i3", "i4", "i5"] },
  { id: "g3", items: ["i1", "i2"] },
  { id: "g4", items: ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"] },
];

export const Route = createFileRoute("/especialidades")({
  head: () => ({
    meta: [
      { title: "Tratamentos | Thebit Saúde e Estética — BH" },
      {
        name: "description",
        content:
          "Lentes de contato, implantes, Invisalign, harmonização orofacial, dermatologia, canal, periodontia, odontopediatria e mais no Anchieta, BH.",
      },
      { property: "og:title", content: "Tratamentos | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "Todas as especialidades da clínica Thebit em Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Especialidades,
});

function Especialidades() {
  const { t } = useI18n();
  const title = t("spec_page.title");
  const highlight = title.toLowerCase().includes("um só lugar")
    ? "um só lugar"
    : title.toLowerCase().includes("one place")
      ? "one place"
      : "un solo lugar";
  const baseTitle = title.replace(new RegExp(highlight, "gi"), "").trim();

  return (
    <PageShell
      eyebrow={t("spec_page.eyebrow")}
      title={
        <>
          {baseTitle.replace(/\.$/, "")}{" "}
          <span className="gold-text">{highlight}.</span>
        </>
      }
      intro={t("spec_page.intro")}
    >
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {groups.map((g) => (
            <div key={g.id} data-reveal>
              <h2 className="title-display text-2xl md:text-3xl">{t(`spec_page.${g.id}.name`)}</h2>
              <span className="gold-rule mt-4 block w-20" />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => {
                  const itemTitle = t(`spec_page.${g.id}.${item}.t`);
                  return (
                  <a
                    key={item}
                    href={whatsappLink(`${t("spec_page.wa")} ${itemTitle}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vellum vellum-hover block rounded-3xl p-6"
                  >
                    <h3 className="font-display text-lg text-foreground">{itemTitle}</h3>
                    <p className="section-lede-sm mt-2">{t(`spec_page.${g.id}.${item}.d`)}</p>
                  </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
