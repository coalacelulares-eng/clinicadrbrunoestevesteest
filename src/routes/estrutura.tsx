import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import portrait from "@/assets/dra-portrait.jpg";

export const Route = createFileRoute("/estrutura")({
  head: () => ({
    meta: [
      { title: "Consulta internacional | Dra. Jackline Félix" },
      {
        name: "description",
        content:
          "Protocolo para pacientes de outros estados e países: avaliação por vídeo, agenda concentrada e retornos remotos.",
      },
      { property: "og:title", content: "Consulta internacional" },
      {
        property: "og:description",
        content: "Atendimento em português, inglês e espanhol para pacientes de fora do Rio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Internacional,
});

function Internacional() {
  const { t } = useI18n();

  return (
    <PageShell eyebrow={t("intl.eyebrow")} title={t("intl.title")} intro={t("intl.text")}>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <img
            data-reveal
            src={portrait}
            alt="Atendimento internacional"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-[26rem] w-full rounded-[2rem] border border-gold/25 object-cover object-left shadow-[var(--shadow-luxe)]"
          />
          <div data-reveal>
            <ul className="grid gap-4 text-sm text-foreground">
              {["intl.b1", "intl.b2", "intl.b3", "intl.b4"].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {t(b)}
                </li>
              ))}
            </ul>
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
