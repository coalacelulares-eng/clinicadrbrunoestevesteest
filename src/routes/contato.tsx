import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { CLINIC, FIRST_VISIT, whatsappLink } from "@/lib/site";
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
    { icon: MapPin, label: "contact.address", value: CLINIC.address },
    { icon: Phone, label: "contact.whatsapp", value: CLINIC.phone },
    { icon: Mail, label: "contact.email", value: CLINIC.email },
    { icon: Clock, label: "contact.hours", value: CLINIC.hours },
  ];

  return (
    <PageShell
      eyebrow={t("nav.contact")}
      title={
        <>
          {t("contact.title").split(" ")[0]}{" "}
          <span className="gold-text">{t("contact.title").split(" ")[1]}</span>
        </>
      }
      intro={t("contact.desc")}
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.label} data-reveal className="vellum rounded-3xl p-7">
              <span className="grid size-11 place-items-center rounded-full border border-gold/40">
                <c.icon className="size-4 text-gold" />
              </span>
              <p className="eyebrow mt-5">{t(c.label)}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{c.value}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-5xl vellum rounded-[2rem] p-8">
          <span className="eyebrow">{t("contact.visit.title")}</span>
          <h2 className="title-display mt-3 text-2xl md:text-3xl">{t("contact.visit.subtitle")}</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-text-soft">
            {[
              "contact.visit.step1",
              "contact.visit.step2",
              "contact.visit.step3",
              "contact.visit.step4",
              "contact.visit.step5",
            ].map((s) => (
              <li key={s} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {t(s)}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-gold/25">
          <iframe
            title="Mapa da Thebit Saúde e Estética"
            src="https://www.google.com/maps?q=Av.+dos+Bandeirantes,+466,+Anchieta,+Belo+Horizonte+-+MG&output=embed"
            loading="lazy"
            className="h-80 w-full border-0"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={CLINIC.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-[0.6rem] uppercase tracking-[0.24em] text-gold"
          >
            Abrir no Google Maps
          </a>
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
