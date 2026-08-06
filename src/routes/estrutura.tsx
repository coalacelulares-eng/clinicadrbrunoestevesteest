import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { CLINIC, whatsappLink } from "@/lib/site";
import fachada from "@/assets/clinica-2.webp";
import recepcao from "@/assets/clinica-3.webp";
import lounge from "@/assets/clinica-4.webp";
import estar from "@/assets/clinica-1.webp";

const gallery = [
  { src: fachada, alt: "Fachada com jardim vertical da Thebit Saúde e Estética", w: 1280, h: 854 },
  { src: recepcao, alt: "Recepção em mármore com logo da Thebit", w: 1280, h: 854 },
  { src: lounge, alt: "Lounge de espera com iluminação indireta", w: 652, h: 1020 },
  { src: estar, alt: "Sala de espera com sofás claros", w: 695, h: 1020 },
];

export const Route = createFileRoute("/estrutura")({
  head: () => ({
    meta: [
      { title: "Estrutura | Thebit Saúde e Estética — Anchieta, BH" },
      {
        name: "description",
        content:
          "Conheça a estrutura da Thebit na Av. dos Bandeirantes, 466 — Anchieta, Belo Horizonte: fachada com jardim vertical, recepção ampla e consultórios modernos.",
      },
      { property: "og:title", content: "Estrutura | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "Fotos da clínica Thebit no Anchieta, Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Estrutura,
});

function Estrutura() {
  return (
    <PageShell
      eyebrow="Estrutura"
      title={
        <>
          Um espaço pensado para o seu <span className="gold-text">conforto</span>.
        </>
      }
      intro={CLINIC.address}
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {gallery.map((g) => (
            <img
              key={g.alt}
              data-reveal
              src={g.src}
              alt={g.alt}
              loading="lazy"
              width={g.w}
              height={g.h}
              className="h-80 w-full rounded-[2rem] border border-gold/25 object-cover shadow-[var(--shadow-soft)] md:h-96"
            />
          ))}
        </div>

        <div data-reveal className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-text-soft">{CLINIC.hours}</p>
          <a
            href={whatsappLink("Olá! Gostaria de conhecer a clínica e agendar uma visita.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-lux mt-8"
            data-magnetic
          >
            Agendar visita
          </a>
        </div>
      </section>
    </PageShell>
  );
}
