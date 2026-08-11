import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import recepcao from "@/assets/clinica-3.webp";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Clínica | Thebit Saúde e Estética — Belo Horizonte" },
      {
        name: "description",
        content:
          "Fundada há mais de 35 anos pelo Dr. Jorge Thebit e hoje conduzida pelo Dr. Daniel Thebit: saúde bucal e estética avançada no Anchieta, BH.",
      },
      { property: "og:title", content: "A Clínica | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "35 anos de história em odontologia e estética avançada em Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  const { t } = useI18n();

  return (
    <PageShell
      eyebrow={t("about_page.eyebrow")}
      title={
        <>
          {t("about_page.title")}{" "}
          <span className="gold-text">{t("about_page.title.gold")}</span>.
        </>
      }
      intro={t("about_page.intro")}
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <img
              src={recepcao}
              alt={t("about_page.img_alt")}
              loading="lazy"
              width={1280}
              height={854}
              className="h-[26rem] w-full rounded-[2rem] border border-gold/25 object-cover shadow-[var(--shadow-luxe)]"
            />
          </div>
          <div data-reveal className="section-lede space-y-6">
            <p>{t("about_page.p1")}</p>
            <p>{t("about_page.p2")}</p>
            <p className="font-display text-xl text-foreground">
              {t("about_page.quote")}
            </p>
            <p>{t("about_page.p3")}</p>
            <ul className="grid gap-3 text-sm text-foreground">
              {[
                t("about_page.list1"),
                t("about_page.list2"),
                t("about_page.list3"),
                t("about_page.list4"),
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {i}
                </li>
              ))}
            </ul>
            <p className="font-grotesk text-[0.6rem] uppercase tracking-[0.24em]">
              {t("about_page.director")}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
