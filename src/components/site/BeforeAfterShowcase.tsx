import { useState } from "react";

import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import beforeAfter from "@/assets/sorriso-antes-depois.jpg";

export function BeforeAfterShowcase() {
  const { t } = useI18n();
  const cases = [
    t("spec.breast"),
    t("spec.body"),
    t("spec.face"),
    t("spec.intimate"),
  ];
  const [index, setIndex] = useState(0);

  return (
    <section className="px-6 py-24" id="antes-depois">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="max-w-2xl">
          <span className="eyebrow">{t("ba.eyebrow")}</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("ba.title")}</h2>
        </div>

        <div data-reveal className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <BeforeAfterSlider image={beforeAfter} alt={cases[index] ?? ""} />

          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {cases.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full border px-4 py-2 font-grotesk text-[0.58rem] uppercase tracking-[0.2em] transition-all duration-500 ${
                    i === index
                      ? "border-transparent text-graphite"
                      : "border-border text-text-soft hover:text-foreground"
                  }`}
                  style={i === index ? { background: "var(--gradient-gold)" } : undefined}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Anterior"
                onClick={() => setIndex((i) => (i - 1 + cases.length) % cases.length)}
                className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-gold"
              >
                <ChevronLeft className="size-4 text-gold" />
              </button>
              <button
                type="button"
                aria-label="Próximo"
                onClick={() => setIndex((i) => (i + 1) % cases.length)}
                className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-gold"
              >
                <ChevronRight className="size-4 text-gold" />
              </button>
            </div>

            <p className="text-xs leading-relaxed text-text-soft">{t("ba.disclaimer")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
