import { Award, Building2, GraduationCap, Instagram, MapPin, Sparkles } from "lucide-react";

import { Spotlight } from "./Spotlight";
import { CLINIC, whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import fachada from "@/assets/clinica-2.webp";
import lounge from "@/assets/clinica-4.webp";
import drDaniel from "@/assets/dr-daniel-thebit.jpg.asset.json";
import fachadaNoturna from "@/assets/clinica-fachada-noturna.webp.asset.json";

const getTimeline = (t: (k: string) => string) => [
  {
    year: "1989",
    icon: GraduationCap,
    title: t("timeline.1989.title"),
    desc: t("timeline.1989.desc"),
  },
  {
    year: "2005",
    icon: Building2,
    title: t("timeline.2005.title"),
    desc: t("timeline.2005.desc"),
  },
  {
    year: "2020",
    icon: Sparkles,
    title: t("timeline.2020.title"),
    desc: t("timeline.2020.desc"),
  },
  {
    year: "Hoje",
    icon: Award,
    title: t("timeline.today.title"),
    desc: t("timeline.today.desc"),
  },
];

export function ClinicStory() {
  const { t } = useI18n();
  const timeline = getTimeline(t);
  return (
    <Spotlight tone="dark">
      <section
        className="relative overflow-hidden px-6 py-24 text-off-white"
        style={{ background: "var(--gradient-onyx)" }}
        id="historia"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-2xl">
            <span className="eyebrow">{t("nav.structure")}</span>
            <h2 className="title-display title-lux-dark mt-4 text-3xl md:text-5xl">
              {t("history.title")}
            </h2>
          </div>

          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent md:block"
            />
            {timeline.map((step, i) => (
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
            <div data-reveal="left" className="img-lux border border-gold/25 overflow-hidden">
              <img
                src={fachadaNoturna.url}
                alt="Fachada noturna iluminada da Clínica Thebit"
                loading="lazy"
                width={1200}
                height={900}
                className="h-[24rem] w-full object-cover md:h-[30rem] transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div data-reveal="right">
              <span className="eyebrow">{t("history.founder.eyebrow")}</span>
              <h3 className="title-display title-lux-dark mt-4 text-3xl md:text-4xl">
                {t("history.founder.title")}
              </h3>
              <p className="mt-6 text-base leading-relaxed opacity-80">
                {t("history.founder.p1")}
              </p>
              <p className="mt-4 text-base leading-relaxed opacity-80">
                {t("history.founder.p2")}
              </p>
              <ul className="mt-7 grid gap-3 text-[17px] tracking-[0.02em]">
                {[
                  "history.founder.list1",
                  "history.founder.list2",
                  "history.founder.list3",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {t(i)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Especialista em destaque */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div data-reveal="left">
              <span className="eyebrow">{t("history.expert.eyebrow")}</span>
              <h3 className="title-display title-lux-dark mt-4 text-3xl md:text-4xl">
                Dr. Daniel Thebit
              </h3>
              <p className="micro-label mt-3 text-gold">{t("history.expert.role")}</p>
              <p className="mt-6 text-base leading-relaxed opacity-80">
                {t("history.expert.desc")}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "history.expert.seal1",
                  "history.expert.seal2",
                  "history.expert.seal3",
                  "history.expert.seal4",
                ].map((b) => (
                  <div
                    key={b}
                    className="glass-dark rounded-2xl px-5 py-3 text-[17px] font-normal uppercase tracking-[0.08em]"
                  >
                    {t(b)}
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink(t("wa.expert"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-lux"
                  data-magnetic
                >
                  {t("cta.expert")}
                </a>
                <a
                  href="https://www.instagram.com/dr.danielthebit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-label flex items-center gap-2 text-gold transition-opacity hover:opacity-80"
                >
                  <Instagram size={14} />
                  Instagram
                </a>
              </div>
            </div>
            <div data-reveal="right" className="img-lux border border-gold/25">
              <img
                src={drDaniel.url}
                alt="Dr. Daniel Thebit - CEO da Thebit Saúde e Estética"
                loading="lazy"
                width={816}
                height={1020}
                className="h-[28rem] w-full object-contain bg-graphite md:h-[38rem]"
              />
            </div>
          </div>

          <div data-reveal="scale" className="mt-16 flex flex-col items-center justify-center gap-6">
            <p className="text-center text-lg italic opacity-80">
              "{t("clinic.comfort")}"
            </p>
            <a
              href={CLINIC.maps}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="glass-dark group flex flex-col items-center gap-3 rounded-3xl border border-gold/30 px-8 py-7 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_18px_50px_-18px_rgba(197,160,89,0.55)]"
            >
              <span className="relative grid size-14 place-items-center rounded-full border border-gold/50 bg-graphite">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 animate-ping rounded-full border border-gold/40 opacity-60"
                />
                <MapPin className="size-6 text-gold transition-transform duration-500 group-hover:scale-110" aria-hidden />
              </span>
              <p
                className="micro-label max-w-md opacity-90 transition-opacity group-hover:opacity-100"
                style={{ fontSize: "17px", lineHeight: 1.4 }}
              >
                {CLINIC.address}
              </p>
              <span className="h-px w-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 group-hover:w-40" />
              <span className="micro-label mt-2 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {t("cta.maps")}
              </span>
            </a>
          </div>
        </div>
      </section>
    </Spotlight>
  );
}
