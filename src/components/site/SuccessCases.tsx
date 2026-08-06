import { Quote, Star } from "lucide-react";

import beforeAfter from "@/assets/sorriso-antes-depois.jpg";
import clinica1 from "@/assets/clinica-1.webp";
import clinica3 from "@/assets/clinica-3.webp";
import clinica4 from "@/assets/clinica-4.webp";
import { whatsappLink } from "@/lib/site";

const CASES = [
  {
    image: beforeAfter,
    treatment: "Lentes de Contato",
    quote: "O resultado ficou absolutamente natural. Ninguém percebe que não são meus dentes.",
    author: "Paciente · Belo Horizonte",
  },
  {
    image: clinica4,
    treatment: "Clareamento + Recontorno",
    quote: "Em duas sessões meu sorriso mudou completamente, sem parecer artificial.",
    author: "Paciente · Anchieta",
  },
  {
    image: clinica1,
    treatment: "Harmonização Orofacial",
    quote: "Um trabalho discreto, exatamente o que eu queria. Continuo parecendo eu mesma.",
    author: "Paciente · Comiteco",
  },
  {
    image: clinica3,
    treatment: "Implantes e Reabilitação",
    quote: "Voltei a mastigar e a sorrir sem medo. Mudou a minha autoestima por completo.",
    author: "Paciente · BH",
  },
];

export function SuccessCases() {
  const row = [...CASES, ...CASES];

  return (
    <section className="overflow-hidden py-24" id="casos">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="max-w-2xl">
          <span className="eyebrow">Casos de sucesso</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            Resultados que falam por si.
          </h2>
          <p className="section-lede-sm mt-4">
            Imagens ilustrativas e autorizadas. Cada caso é único e os resultados variam conforme
            anatomia e indicação clínica.
          </p>
        </div>
      </div>

      <div className="marquee-mask mt-12">
        <div className="animate-marquee animate-marquee-slow gap-5">
          {row.map((c, i) => (
            <article
              key={`${c.treatment}-${i}`}
              className="tilt-card vellum relative mr-5 w-[19rem] shrink-0 overflow-hidden rounded-[2rem] p-0 sm:w-[23rem]"
            >
              <div>
                <div className="img-lux rounded-none">
                  <img
                    src={c.image}
                    alt={`Caso de ${c.treatment} na Clínica Thebit`}
                    loading="lazy"
                    width={900}
                    height={600}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="micro-label mt-4 text-gold">{c.treatment}</p>
                  <Quote className="mt-4 size-4 text-gold" />
                  <blockquote className="mt-3 font-display text-lg leading-snug text-foreground">
                    {c.quote}
                  </blockquote>
                  <p className="mt-4 text-xs text-text-soft">{c.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href={whatsappLink("Olá! Vi os casos de sucesso e gostaria de agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-lux"
          data-magnetic
        >
          Quero um resultado assim
        </a>
      </div>
    </section>
  );
}
