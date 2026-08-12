import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

// Import asset pointers
import diastemaAsset from "@/assets/before-after/diastema-resina.jpg.asset.json";
import resinaDesignAsset from "@/assets/before-after/resina-design.jpg.asset.json";
import retratamentoAsset from "@/assets/before-after/retratamento.jpg.asset.json";
import traumaAsset from "@/assets/before-after/trauma-restauracao.jpg.asset.json";
import facetasAsset from "@/assets/before-after/facetas-resina.jpg.asset.json";
import saudeAsset from "@/assets/before-after/saude-reabilitacao.jpg.asset.json";

const CASES = [
  { id: "case1", img: diastemaAsset.url },
  { id: "case2", img: resinaDesignAsset.url },
  { id: "case3", img: retratamentoAsset.url },
  { id: "case4", img: traumaAsset.url },
  { id: "case5", img: facetasAsset.url },
  { id: "case6", img: saudeAsset.url },
];

export function SuccessCases() {
  const { t } = useI18n();
  // Double the cases for the infinite marquee effect
  const row = [...CASES, ...CASES];

  return (
    <section className="overflow-hidden py-24" id="casos">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div data-reveal className="mx-auto max-w-2xl">
          <span className="eyebrow">{t("ba.eyebrow")}</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            {t("ba.title")}
          </h2>
          <p className="section-lede-sm mt-4">
            {t("ba.disclaimer")}
          </p>
        </div>
      </div>

      <div className="marquee-mask mt-12">
        <div className="animate-marquee animate-marquee-slow flex gap-5">
          {row.map((item, i) => (
            <article
              key={`${item.id}-${i}`}
              className="tilt-card vellum relative mr-5 w-[19rem] shrink-0 overflow-hidden rounded-[2rem] p-0 sm:w-[23rem]"
            >
              <div>
                <div className="img-lux rounded-none h-72 sm:h-80 overflow-hidden">
                  <img
                    src={item.img}
                    alt={`Caso clínico ${item.id} na Clínica Thebit`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="mt-4 size-4 text-gold opacity-50" />
                  <blockquote className="mt-2 font-display text-lg leading-snug text-foreground/90 italic">
                    {t(`success.${item.id}.q`) || t("test.q1")}
                  </blockquote>
                  <div className="mt-4 h-px w-8 bg-gold/30" />
                  <p className="mt-4 text-[0.65rem] uppercase tracking-widest text-text-soft">
                    {t(`success.${item.id}.a`) || t("success.case1.a")}
                  </p>
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