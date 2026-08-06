import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { CLINIC } from "@/lib/site";
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
  return (
    <PageShell
      eyebrow="A Thebit"
      title={
        <>
          Transformar vidas, <span className="gold-text">não apenas sorrisos</span>.
        </>
      }
      intro="Estética avançada e especialistas em Dentística no coração do Anchieta, em Belo Horizonte."
    >
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <img
              src={recepcao}
              alt="Recepção da Thebit Saúde e Estética"
              loading="lazy"
              width={1280}
              height={854}
              className="h-[26rem] w-full rounded-[2rem] border border-gold/25 object-cover shadow-[var(--shadow-luxe)]"
            />
          </div>
          <div data-reveal className="section-lede space-y-6">
            <p>
              Fundada pelo Dr. Jorge Thebit há mais de 35 anos e totalmente renovada há 5 anos, a
              clínica é hoje administrada por seu filho, o Dr. Daniel Thebit, cirurgião-dentista
              com foco internacional em Estética Dental Avançada.
            </p>
            <p>
              Em conjunto com todos os colaboradores, nossa equipe utiliza o que há de mais recente
              em ciência e tecnologia para ir além dos tratamentos de dente. Abrangemos os problemas
              de cada paciente e alinhamos saúde e estética.
            </p>
            <p className="font-display text-xl text-foreground">
              “E tudo isso a fim de transformar e melhorar vidas, e não apenas sorrisos. Essa é a
              nossa missão aqui na Thebit.”
            </p>
            <p>
              O Dr. Daniel Thebit tem formação avançada em estética e reabilitação oral pelo ILAPEO
              (Instituto Latino Americano de Pesquisa e Ensino Odontológico, PR), com atuação
              focada em facetas de resina composta, laminados cerâmicos (lentes de contato dentais)
              e recontorno estético. Fora do consultório, é faixa preta de Jiu-Jitsu (FP Team BJJ).
            </p>
            <ul className="grid gap-3 text-sm text-foreground">
              {[
                "Nota máxima 5.0 nas avaliações dos pacientes",
                "Trabalhos de alta estética em facetas e resinas",
                "Estrutura moderna e tecnologias avançadas",
                "Atendimento acolhedor desde a recepção",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {i}
                </li>
              ))}
            </ul>
            <p className="font-grotesk text-[0.6rem] uppercase tracking-[0.24em]">
              {CLINIC.director} · {CLINIC.crm}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
