import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { whatsappLink } from "@/lib/site";

const groups = [
  {
    name: "Estética Dental e Cosmética",
    items: [
      ["Facetas e Lentes de Contato", "Correções de formato, cor e espaçamento dos dentes."],
      [
        "Restaurações em Resina Composta",
        "Fechamento de diastemas e recontorno cosmético do sorriso.",
      ],
      ["Clareamento Dental", "Remoção de manchas e restauração do brilho natural."],
    ],
  },
  {
    name: "Reabilitação Oral e Ortodontia",
    items: [
      ["Implante Dentário", "Substituição de dentes perdidos com pinos de titânio."],
      ["Prótese Protocolo", "Reabilitação total e fixa de arcadas dentárias."],
      ["Invisalign / Alinhadores", "Aparelhos ortodônticos invisíveis e removíveis."],
      ["Aparelho Ortodôntico", "Modelos convencionais e estéticos para alinhamento."],
      ["Prótese Dentária", "Opções removíveis ou fixas parciais."],
    ],
  },
  {
    name: "Harmonização e Estética Avançada",
    items: [
      [
        "Harmonização Orofacial",
        "Procedimentos injetáveis e tecnologias para equilíbrio estético facial.",
      ],
      ["Dermatologia Clínica e Estética", "Tratamentos focados na saúde e rejuvenescimento da pele."],
    ],
  },
  {
    name: "Cuidados Clínicos e Saúde Bucal",
    items: [
      ["Consulta Geral", "Avaliações de rotina e diagnóstico preventivo."],
      ["Limpeza Dental", "Profilaxia para remoção de tártaro e placa bacteriana."],
      ["Tratamento de Canal", "Procedimentos endodônticos para infecções internas."],
      ["Tratamento Periodontal", "Cuidados com a gengiva e os tecidos de suporte."],
      ["Extração de Siso", "Remoção cirúrgica de dentes inclusos ou desalinhados."],
      ["Bruxismo e DTM", "Diagnóstico e placas de mordida para disfunções na mandíbula."],
      ["Odontopediatria", "Atendimento especializado voltado para crianças."],
      ["Radiografia Odontológica", "Exames de imagem realizados na própria clínica."],
    ],
  },
];

export const Route = createFileRoute("/especialidades")({
  head: () => ({
    meta: [
      { title: "Tratamentos | Thebit Saúde e Estética — BH" },
      {
        name: "description",
        content:
          "Lentes de contato, implantes, Invisalign, harmonização orofacial, dermatologia, canal, periodontia, odontopediatria e mais no Anchieta, BH.",
      },
      { property: "og:title", content: "Tratamentos | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "Todas as especialidades da clínica Thebit em Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Especialidades,
});

function Especialidades() {
  return (
    <PageShell
      eyebrow="Tratamentos"
      title={
        <>
          Tudo em <span className="gold-text">um só lugar</span>.
        </>
      }
      intro="Odontologia estética, reabilitação, harmonização e saúde bucal integrativa em uma clínica só."
    >
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {groups.map((g) => (
            <div key={g.name} data-reveal>
              <h2 className="title-display text-2xl md:text-3xl">{g.name}</h2>
              <span className="gold-rule mt-4 block w-20" />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map(([title, desc]) => (
                  <a
                    key={title}
                    href={whatsappLink(`Olá! Gostaria de saber mais sobre: ${title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vellum vellum-hover block rounded-3xl p-6"
                  >
                    <h3 className="font-display text-lg text-foreground">{title}</h3>
                    <p className="section-lede-sm mt-2">{desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
