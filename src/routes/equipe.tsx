import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { BeforeAfterShowcase } from "@/components/site/BeforeAfterShowcase";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import silk from "@/assets/silk-texture.jpg";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "A Fábrica de Barbies | Dra. Jackline Félix" },
      {
        name: "description",
        content:
          "O método de harmonia entre mama, cintura e quadril: proporção, movimento e identidade em cada plano cirúrgico.",
      },
      { property: "og:title", content: "A Fábrica de Barbies" },
      {
        property: "og:description",
        content: "Um método autoral de harmonia corporal, não um molde.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Barbies,
});

function Barbies() {
  const { t } = useI18n();

  return (
    <PageShell
      eyebrow={t("barbies.eyebrow")}
      title={t("barbies.title")}
      intro={t("barbies.text")}
    >
      <section
        className="px-6 py-20 text-off-white"
        style={{ background: "var(--gradient-onyx)" }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div data-reveal className="grid gap-3">
            {["barbies.p1", "barbies.p2", "barbies.p3"].map((p) => (
              <div
                key={p}
                className="rounded-2xl border border-gold/25 bg-off-white/5 px-6 py-4 text-sm"
              >
                {t(p)}
              </div>
            ))}
            <a
              href={whatsappLink(t("wa.default"))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-lux mt-4 w-fit"
              data-magnetic
            >
              {t("cta.book")}
            </a>
          </div>
          <img
            data-reveal
            src={silk}
            alt="Assinatura estética"
            loading="lazy"
            width={1600}
            height={900}
            className="h-80 w-full rounded-[2rem] border border-gold/25 object-cover"
          />
        </div>
      </section>

      <BeforeAfterShowcase />
    </PageShell>
  );
}
