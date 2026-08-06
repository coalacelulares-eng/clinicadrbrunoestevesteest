import { Award, Building2, GraduationCap, MapPin, Sparkles } from "lucide-react";

import { Spotlight } from "./Spotlight";
import { CLINIC, whatsappLink } from "@/lib/site";
import fachada from "@/assets/clinica-2.webp";
import lounge from "@/assets/clinica-4.webp";

const TIMELINE = [
  {
    year: "1989",
    icon: GraduationCap,
    title: "O começo com Dr. Jorge Thebit",
    desc: "Um consultório em Belo Horizonte fundado sobre técnica apurada e relação de confiança com cada paciente.",
  },
  {
    year: "2005",
    icon: Building2,
    title: "Uma clínica que cresce",
    desc: "A demanda por odontologia de alta estética consolida a Thebit como referência no Anchieta.",
  },
  {
    year: "2020",
    icon: Sparkles,
    title: "Nova estrutura",
    desc: "Reforma completa: fachada com jardim vertical, recepção ampla e consultórios com tecnologia atualizada.",
  },
  {
    year: "Hoje",
    icon: Award,
    title: "Nova gestão · Dr. Daniel Thebit",
    desc: "A segunda geração amplia o propósito: unir saúde bucal, estética facial e medicina em um só lugar.",
  },
];

export function ClinicStory() {
  return (
    <Spotlight tone="dark">
      <section
        className="relative overflow-hidden px-6 py-24 text-off-white"
        style={{ background: "var(--gradient-onyx)" }}
        id="historia"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-2xl">
            <span className="eyebrow">Nossa história</span>
            <h2 className="title-display title-lux-dark mt-4 text-3xl md:text-5xl">
              Uma história construída há mais de 35 anos.
            </h2>
          </div>

          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent md:block"
            />
            {TIMELINE.map((step, i) => (
              <li
                key={step.year}
                data-reveal="scale"
                data-reveal-delay={i * 140}
                className="tilt-card glass-dark relative rounded-3xl p-7"
              >
                <div>
                  <span className="grid size-12 place-items-center rounded-full border border-gold/50 bg-graphite">
                    <step.icon className="size-5 text-gold" />
                  </span>
                  <p className="micro-label mt-5 text-gold">{step.year}</p>
                  <h3 className="title-display title-lux-dark mt-2 text-lg">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Fundador */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
            <div data-reveal="left" className="img-lux border border-gold/25">
              <img
                src={fachada}
                alt="Fachada histórica da Clínica Thebit em Belo Horizonte"
                loading="lazy"
                width={1280}
                height={854}
                className="h-[24rem] w-full object-cover md:h-[30rem]"
              />
            </div>
            <div data-reveal="right">
              <span className="eyebrow">O fundador</span>
              <h3 className="title-display title-lux-dark mt-4 text-3xl md:text-4xl">
                Conheça quem iniciou essa história.
              </h3>
              <p className="mt-6 text-base leading-relaxed opacity-80">
                Dr. Jorge Thebit abriu as portas da clínica há mais de 35 anos com uma convicção
                simples: tratar pessoas, não apenas dentes. Construiu uma clientela fiel à base de
                técnica minuciosa, honestidade no diagnóstico e presença constante.
              </p>
              <p className="mt-4 text-base leading-relaxed opacity-80">
                Esse legado se traduziu em método — e hoje segue vivo na conduta de toda a equipe,
                sob a continuidade do seu filho, Dr. Daniel Thebit.
              </p>
              <ul className="mt-7 grid gap-3 text-sm uppercase tracking-[0.08em]">
                {[
                  "Fundação da clínica e formação da primeira equipe",
                  "Cultura de diagnóstico honesto e acompanhamento de longo prazo",
                  "Base de pacientes que atravessa gerações",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Especialista em destaque */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal="left">
              <span className="eyebrow">Especialista em destaque</span>
              <h3 className="title-display title-lux-dark mt-4 text-3xl md:text-4xl">
                Dr. Daniel Thebit
              </h3>
              <p className="micro-label mt-3 text-gold">CEO · Especialista em Dentística</p>
              <p className="mt-6 text-base leading-relaxed opacity-80">
                Cirurgião-dentista com formação avançada em Estética Dental pelo ILAPEO. Atua com
                lentes de contato, laminados cerâmicos, facetas em resina e recontorno estético,
                sempre buscando resultados extremamente naturais.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Formação ILAPEO",
                  "Estética Dental Avançada",
                  "Resultados naturais",
                  "Planejamento individualizado",
                ].map((b) => (
                  <div
                    key={b}
                    className="glass-dark rounded-2xl px-5 py-3 text-sm uppercase tracking-[0.08em]"
                  >
                    {b}
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink("Olá! Gostaria de agendar uma avaliação com o Dr. Daniel Thebit.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-lux"
                  data-magnetic
                >
                  Agendar com o especialista
                </a>
                <a
                  href="https://www.instagram.com/dr.danielthebit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-label text-gold"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div data-reveal="right" className="img-lux border border-gold/25">
              <img
                src={lounge}
                alt="Ambiente de atendimento da Clínica Thebit"
                loading="lazy"
                width={652}
                height={1020}
                className="h-[26rem] w-full object-cover md:h-[34rem]"
              />
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <MapPin className="h-8 w-8 text-gold" aria-hidden />
            <p className="micro-label opacity-80" style={{ fontSize: "17px", lineHeight: 1.4 }}>
              {CLINIC.address}
            </p>
          </div>
        </div>
      </section>
    </Spotlight>
  );
}
