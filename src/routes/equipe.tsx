import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { TEAM, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe | Thebit Saúde e Estética — BH" },
      {
        name: "description",
        content:
          "Conheça os especialistas da Thebit: dentística, harmonização orofacial, periodontia integrativa, odontopediatria e dermatologia clínica em BH.",
      },
      { property: "og:title", content: "Equipe | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "Oito especialistas em odontologia e medicina estética em Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Equipe,
});

function Equipe() {
  return (
    <PageShell
      eyebrow="Equipe"
      title={
        <>
          Especialistas que <span className="gold-text">trabalham juntos</span>.
        </>
      }
      intro="Uma equipe multidisciplinar de odontologia e medicina, reunida para cuidar do paciente por inteiro."
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <article key={p.name} data-reveal className="vellum vellum-hover rounded-3xl p-7">
              <span className="eyebrow">{p.role}</span>
              <h2 className="title-display mt-3 text-xl">{p.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">{p.desc}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink(`Olá! Gostaria de agendar com ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slide-gold text-foreground"
                >
                  Agendar
                </a>
                <a
                  href={p.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-grotesk text-[0.6rem] uppercase tracking-[0.24em] text-gold"
                >
                  Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
