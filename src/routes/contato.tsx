import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { CLINIC, whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Thebit Saúde e Estética — Belo Horizonte" },
      {
        name: "description",
        content:
          "Fale com a Thebit Saúde e Estética: Av. dos Bandeirantes, 466 — Anchieta, BH. WhatsApp +55 31 98458-9016. Seg a sex 09h–20h, sáb 09h–12h.",
      },
      { property: "og:title", content: "Contato | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "Endereço, horários e WhatsApp da clínica Thebit em Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  const { t } = useI18n();

  const cards = [
    { icon: MapPin, label: "Endereço", value: CLINIC.address },
    { icon: Phone, label: "WhatsApp", value: CLINIC.phone },
    { icon: Mail, label: "E-mail", value: CLINIC.email },
    { icon: Clock, label: "Horários", value: CLINIC.hours },
  ];

  return (
    <PageShell
      eyebrow={t("nav.contact")}
      title={
        <>
          Vamos <span className="gold-text">conversar</span>.
        </>
      }
      intro="Nossa recepção responde pelo WhatsApp e ajuda você a escolher o melhor horário."
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.label} data-reveal className="vellum rounded-3xl p-7">
              <span className="grid size-11 place-items-center rounded-full border border-gold/40">
                <c.icon className="size-4 text-gold" />
              </span>
              <p className="eyebrow mt-5">{c.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{c.value}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-gold/25">
          <iframe
            title="Mapa da Thebit Saúde e Estética"
            src="https://www.google.com/maps?q=Av.+dos+Bandeirantes,+466,+Anchieta,+Belo+Horizonte+-+MG&output=embed"
            loading="lazy"
            className="h-80 w-full border-0"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink(t("wa.default"))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-lux"
            data-magnetic
          >
            {t("cta.whatsapp")}
          </a>
        </div>
      </section>
    </PageShell>
  );
}
