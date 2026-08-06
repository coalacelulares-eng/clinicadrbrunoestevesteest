import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import { CLINIC, whatsappLink } from "@/lib/site";
import portrait from "@/assets/dra-portrait.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Dra. Jackline Félix | Trajetória e formação" },
      {
        name: "description",
        content:
          "Conheça a trajetória, formação e filosofia cirúrgica da Dra. Jackline Félix, cirurgiã plástica na Barra da Tijuca.",
      },
      { property: "og:title", content: "Sobre a Dra. Jackline Félix" },
      {
        property: "og:description",
        content: "Trajetória, formação e filosofia de uma cirurgia plástica autoral e segura.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  const { t } = useI18n();

  return (
    <PageShell eyebrow={t("about.eyebrow")} title={t("about.title")} intro={t("about.text")}>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <img
            data-reveal
            src={portrait}
            alt={CLINIC.doctor}
            loading="lazy"
            width={1024}
            height={1280}
            className="h-[26rem] w-full rounded-[2rem] border border-gold/25 object-cover object-left shadow-[var(--shadow-luxe)] md:h-[34rem]"
          />
          <div data-reveal>
            <h2 className="title-display text-3xl md:text-4xl">{t("authority.title")}</h2>
            <ul className="mt-8 space-y-4 text-sm text-foreground">
              {["about.c1", "about.c2", "about.c3", "exp.i3", "exp.i4"].map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {t(c)}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-grotesk text-[0.6rem] uppercase tracking-[0.24em] text-text-soft">
              {CLINIC.crm}
            </p>
            <a
              href={whatsappLink(t("wa.default"))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-lux mt-8"
              data-magnetic
            >
              {t("cta.book")}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
