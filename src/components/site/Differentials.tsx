import {
  Cpu,
  HeartHandshake,
  Landmark,
  Leaf,
  Microscope,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const ITEMS = [
  { icon: Microscope, title: "Ciência", desc: "Protocolos baseados em evidência e literatura atual." },
  { icon: Cpu, title: "Tecnologia", desc: "Planejamento digital e radiografia na própria clínica." },
  { icon: Workflow, title: "Planejamento", desc: "Cada etapa desenhada antes de qualquer procedimento." },
  { icon: Leaf, title: "Naturalidade", desc: "Resultados que respeitam a sua anatomia e expressão." },
  { icon: Users, title: "Equipe multidisciplinar", desc: "Odontologia e medicina trabalhando em conjunto." },
  { icon: Landmark, title: "35 anos de tradição", desc: "Uma história construída em Belo Horizonte." },
  { icon: HeartHandshake, title: "Atendimento personalizado", desc: "Escuta atenta do início ao acompanhamento." },
  { icon: Sparkles, title: "Resultados naturais", desc: "Estética discreta, sem parecer artificial." },
];

export function Differentials() {
  return (
    <section className="px-6 py-24" id="diferenciais">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="max-w-2xl">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            O que sustenta cada resultado.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              data-reveal="scale"
              className="tilt-card vellum relative rounded-3xl p-7"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-full border border-gold/40">
                  <item.icon className="size-5 text-gold" />
                </span>
                <h3 className="title-display mt-6 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-soft">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
