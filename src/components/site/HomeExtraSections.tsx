import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import reception from "@/assets/clinica-3.webp";

export function GoalQuiz() {
  const { t } = useI18n();
  const goals = ["goal.g1", "goal.g2", "goal.g3", "goal.g4"];

  return (
    <section className="relative overflow-hidden px-6 py-24 grain">
      <img
        src={reception}
        alt="Recepção da clínica"
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-graphite/85" />
      <span className="absolute -left-16 top-10 size-64 rounded-full bg-gold/10 blur-3xl animate-float-soft" />
      <span className="absolute -right-10 bottom-0 size-72 rounded-full bg-gold/10 blur-3xl animate-float-soft" />

      <div className="relative mx-auto max-w-5xl text-center text-off-white">
        <span className="eyebrow">{t("goal.eyebrow")}</span>
        <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("goal.title")}</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((g, i) => (
            <a
              key={g}
              href={whatsappLink(`${t("wa.goal")} ${t(g)}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative animate-goal-in overflow-hidden rounded-3xl border border-gold/25 bg-off-white/5 p-6 text-left backdrop-blur-md transition-transform duration-500 hover:-translate-y-1.5"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-off-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="font-grotesk text-[0.55rem] uppercase tracking-[0.26em] text-gold">
                0{i + 1}
              </span>
              <p className="mt-4 font-display text-lg leading-snug">{t(g)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useI18n();
  const items = [
    ["faq.q1", "faq.a1"],
    ["faq.q2", "faq.a2"],
    ["faq.q3", "faq.a3"],
    ["faq.q4", "faq.a4"],
  ];

  return (
    <section className="px-6 py-24" id="faq">
      <div className="mx-auto max-w-3xl">
        <div data-reveal className="text-center">
          <span className="eyebrow">{t("faq.eyebrow")}</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("faq.title")}</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {items.map(([q, a]) => (
            <AccordionItem key={q} value={q!} className="border-b border-gold/25">
              <AccordionTrigger className="text-left font-display text-lg tracking-tight">
                {t(q!)}
              </AccordionTrigger>
              <AccordionContent className="section-lede-sm">
                {t(a!)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
