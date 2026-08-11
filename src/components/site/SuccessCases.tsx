import { Quote, Star } from "lucide-react";

import beforeAfter from "@/assets/sorriso-antes-depois.jpg";
import clinica1 from "@/assets/clinica-1.webp";
import clinica3 from "@/assets/clinica-3.webp";
import clinica4 from "@/assets/clinica-4.webp";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const CASES_IDS = ["case1", "case2", "case3", "case4"];
const IMAGES: Record<string, string> = {
  case1: beforeAfter,
  case2: clinica4,
  case3: clinica1,
  case4: clinica3,
};

export function SuccessCases() {
  const { t } = useI18n();
  const row = [...CASES_IDS, ...CASES_IDS];

  return (
    <section className="overflow-hidden py-24" id="casos">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="max-w-2xl">
          <span className="eyebrow">{t("success.eyebrow")}</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            {t("success.title")}
          </h2>
          <p className="section-lede-sm mt-4">
            {t("success.disclaimer")}
          </p>
        </div>
      </div>

      <div className="marquee-mask mt-12">
        <div className="animate-marquee animate-marquee-slow gap-5">
          {row.map((id, i) => (
            <article
              key={`${id}-${i}`}
              className="tilt-card vellum relative mr-5 w-[19rem] shrink-0 overflow-hidden rounded-[2rem] p-0 sm:w-[23rem]"
            >
              <div>
                <div className="img-lux rounded-none">
                  <img
                    src={IMAGES[id]}
                    alt={`Caso de ${t(`success.${id}.t`)} na Clínica Thebit`}
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
                  <p className="micro-label mt-4 text-gold">{t(`success.${id}.t`)}</p>
                  <Quote className="mt-4 size-4 text-gold" />
                  <blockquote className="mt-3 font-display text-lg leading-snug text-foreground">
                    {t(`success.${id}.q`)}
                  </blockquote>
                  <p className="mt-4 text-xs text-text-soft">{t(`success.${id}.a`)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href={whatsappLink(t("wa.default"))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-lux"
          data-magnetic
        >
          {t("success.cta")}
        </a>
      </div>
    </section>
  );
}
