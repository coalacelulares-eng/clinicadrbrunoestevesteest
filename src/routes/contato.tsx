import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import { CLINIC, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e agendamento | Dra. Jackline Félix" },
      {
        name: "description",
        content:
          "Agende sua avaliação na Barra da Tijuca, Rio de Janeiro. Atendimento por WhatsApp em português, inglês e espanhol.",
      },
      { property: "og:title", content: "Contato | Dra. Jackline Félix" },
      {
        property: "og:description",
        content: "Fale com a equipe e agende sua avaliação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  const { t } = useI18n();

  return (
    <PageShell eyebrow={t("nav.contact")} title={t("final.title")} intro={t("final.text")}>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          <div data-reveal className="vellum rounded-3xl p-7">
            <MapPin className="size-5 text-gold" />
            <p className="mt-5 text-sm leading-relaxed text-text-soft">{CLINIC.address}</p>
          </div>
          <div data-reveal className="vellum rounded-3xl p-7">
            <Mail className="size-5 text-gold" />
            <p className="mt-5 text-sm text-text-soft">{CLINIC.email}</p>
          </div>
          <a
            data-reveal
            href={whatsappLink(t("wa.default"))}
            target="_blank"
            rel="noopener noreferrer"
            className="vellum vellum-hover rounded-3xl p-7"
          >
            <MessageCircle className="size-5 text-gold" />
            <p className="mt-5 font-grotesk text-[0.6rem] uppercase tracking-[0.22em] text-foreground">
              {t("cta.whatsapp")}
            </p>
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <a
            href={whatsappLink(t("wa.default"))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-lux"
            data-magnetic
          >
            {t("cta.book")}
          </a>
          <p className="mt-6 text-xs leading-relaxed text-text-soft">{t("footer.disclaimer")}</p>
        </div>
      </section>
    </PageShell>
  );
}
