import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  HeartPulse,
  Quote,
  Ruler,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

import { Fleur } from "@/components/site/Fleur";
import { ProcedureQuizDialog } from "@/components/site/ProcedureQuizDialog";
import { BeforeAfterShowcase } from "@/components/site/BeforeAfterShowcase";
import { SmileConsultant } from "@/components/site/SmileConsultant";
import { FacialConsultant } from "@/components/site/FacialConsultant";
import { Spotlight } from "@/components/site/Spotlight";
import { Marquee } from "@/components/site/Marquee";
import { StatsCounters } from "@/components/site/StatsCounters";
import { Differentials } from "@/components/site/Differentials";
import { ClinicStory } from "@/components/site/ClinicStory";
import { SuccessCases } from "@/components/site/SuccessCases";
import { PremiumForm } from "@/components/site/PremiumForm";
import { OurTeam } from "@/components/site/OurTeam";
import { DENTAL_GOALS } from "@/lib/smile-consultant";
import { Faq, GoalQuiz } from "@/components/site/HomeExtraSections";
import { useI18n } from "@/lib/i18n";
import { CLINIC, whatsappLink } from "@/lib/site";
import fachada from "@/assets/clinica-2.webp";
import recepcao from "@/assets/clinica-3.webp";
import lounge from "@/assets/clinica-4.webp";
import estar from "@/assets/clinica-1.webp";
import clinicaVideo from "@/assets/clinicathebit.mp4.asset.json";
import teamGroupAsset from "@/assets/team-group.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thebit Saúde e Estética | Odontologia em Belo Horizonte" },
      {
        name: "description",
        content:
          "Clínica odontológica e médica no Anchieta, BH. Lentes de contato, implantes, Invisalign, harmonização orofacial e dermatologia. Mais de 35 anos de história.",
      },
      { property: "og:title", content: "Thebit Saúde e Estética | Odontologia em BH" },
      {
        property: "og:description",
        content:
          "Estética avançada e especialistas em Dentística no Anchieta, Belo Horizonte. Agende sua avaliação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  const [area, setArea] = useState<string | null>(null);

  const specialties = [
    { icon: Smile, title: "spec.breast", desc: "spec.breast.d" },
    { icon: Activity, title: "spec.body", desc: "spec.body.d" },
    { icon: Sparkles, title: "spec.face", desc: "spec.face.d" },
    { icon: HeartPulse, title: "spec.intimate", desc: "spec.intimate.d" },
  ];

  const techniques = [
    { icon: Scissors, title: "tech.mila", desc: "tech.mila.d" },
    { icon: Ruler, title: "tech.bra", desc: "tech.bra.d" },
    { icon: Stethoscope, title: "tech.hd", desc: "tech.hd.d" },
  ];


  return (
    <main>
      {/* Hero */}
      <Spotlight className="relative overflow-hidden">
        <img
          src={fachada}
          alt="Fachada da Thebit Saúde e Estética com jardim vertical"
          width={1280}
          height={854}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-graphite/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/30 via-graphite/50 to-graphite/85" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:pt-44 lg:grid-cols-2">
          <div className="animate-fade-up text-off-white">
            <div className="flex items-center gap-4">
              <span className="gold-rule w-12" />
              <span className="eyebrow" style={{ ["--lux-alt" as string]: "var(--off-white)" }}>{t("hero.eyebrow")}</span>
            </div>
            <h1 className="title-display mt-6 text-5xl md:text-7xl">
              {t("hero.title.a")} <span className="gold-text">{t("hero.title.gold")}</span>{" "}
              {t("hero.title.b")}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-80">{t("hero.text")}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink(t("wa.default"))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-lux"
                data-magnetic
              >
                {t("cta.book")}
              </a>
              <Link to="/sobre" className="btn-slide-gold text-off-white">
                {t("cta.trajectory")}
              </Link>
            </div>
            <div className="mt-14 hidden items-center gap-3 md:flex">
              <span className="animate-scroll-hint text-gold">↓</span>
              <span className="font-grotesk text-[0.55rem] uppercase tracking-[0.32em] opacity-70">
                {t("hero.scroll")}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem] border border-gold/40 p-1.5">
              <video
                src={clinicaVideo.url}
                poster={lounge}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Vídeo institucional da Clínica Thebit"
                className="h-[26rem] w-full rounded-[1.7rem] object-cover md:h-[34rem]"
              />
            </div>
            <Fleur className="animate-fleur absolute -bottom-6 -left-6 size-12 text-gold" />
          </div>
        </div>
      </Spotlight>

      <Marquee tone="light" />

      {/* A clínica */}
      <section className="px-6 py-24" id="sobre">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal className="order-2 lg:order-1">
            <img
              src={recepcao}
              alt="Recepção da Thebit Saúde e Estética"
              loading="lazy"
              width={1280}
              height={854}
              className="h-[24rem] w-full rounded-[2rem] border border-gold/25 object-cover shadow-[var(--shadow-luxe)] md:h-[32rem]"
            />
          </div>
          <div data-reveal className="order-1 lg:order-2">
            <span className="eyebrow">{t("about.eyebrow")}</span>
            <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("about.title")}</h2>
            <p className="drop-cap section-lede mt-6">
              {t("about.text")}
            </p>
            <ul className="mt-8 space-y-3">
              {["about.c1", "about.c2", "about.c3"].map((c) => (
                <li key={c} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {t(c)}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-grotesk text-[0.6rem] uppercase tracking-[0.24em] text-text-soft">
              {CLINIC.director} · {CLINIC.crm}
            </p>
            <Link to="/sobre" className="btn-slide-gold mt-8 text-foreground">
              {t("cta.trajectory")}
            </Link>
          </div>
        </div>
      </section>

      <ClinicStory />

      {/* Método */}
      <section
        className="relative overflow-hidden px-6 py-24 text-off-white"
        style={{ background: "var(--gradient-onyx)" }}
        id="metodo"
      >
        <span className="animate-spin-glow absolute -right-24 top-1/4 size-72 rounded-full border border-gold/20" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <span className="eyebrow">{t("barbies.eyebrow")}</span>
            <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("barbies.title")}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-80">
              {t("barbies.text")}
            </p>
            <div className="mt-8 grid gap-3">
              {["barbies.p1", "barbies.p2", "barbies.p3"].map((p) => (
                <div
                  key={p}
                  className="rounded-2xl border border-gold/25 bg-off-white/5 px-5 py-3 text-[17px] uppercase tracking-[0.08em]"
                >
                  {t(p)}
                </div>
              ))}
            </div>
            <Link to="/tecnologias" className="btn-slide-gold mt-8 text-off-white">
              {t("nav.tech")}
            </Link>
          </div>
          <div data-reveal className="relative">
            <img
              src={estar}
              alt="Sala de espera da clínica"
              loading="lazy"
              width={695}
              height={1020}
              className="h-72 w-full rounded-[2rem] border border-gold/25 object-cover md:h-96"
            />
          </div>
        </div>
      </section>


      <Differentials />

      {/* Técnicas */}
      <section
        className="px-6 py-24 text-off-white"
        style={{ background: "var(--gradient-onyx)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="max-w-2xl">
            <span className="eyebrow">{t("tech.eyebrow")}</span>
            <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("tech.title")}</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {techniques.map((s) => (
              <div
                key={s.title}
                data-reveal
                className="rounded-3xl border border-gold/25 bg-off-white/5 p-7 backdrop-blur-sm"
              >
                <s.icon className="animate-float-soft size-6 text-gold" />
                <h3 className="title-display mt-6 text-xl">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{t(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounters />

      {/* Experiência */}
      <section className="relative overflow-hidden">
        <img
          src={recepcao}
          alt="Ambiente da clínica Thebit"
          loading="lazy"
          width={1280}
          height={854}
          className="h-[30rem] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/60 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="mx-auto w-full max-w-6xl text-off-white">
            <span className="eyebrow">{t("exp.eyebrow")}</span>
            <h2 className="title-display mt-4 max-w-md text-3xl md:text-5xl">{t("exp.title")}</h2>
            <ul className="mt-7 grid max-w-lg gap-3 text-sm">
              {["exp.i1", "exp.i2", "exp.i3", "exp.i4"].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {t(i)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      
      <section className="px-6 py-20 bg-graphite text-off-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal="fade-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-gold/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 aspect-video lg:aspect-[4/3]">
                  <img
                    src={teamGroupAsset.url}
                    alt="Equipe Thebit Saúde e Estética"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
                  <Fleur className="absolute bottom-6 right-6 size-10 text-gold opacity-80" />
                </div>
              </div>
            </div>
            
            <div data-reveal="fade-left" className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                <HeartPulse className="size-3 text-gold fill-gold/20" />
                <span className="font-grotesk text-[0.6rem] uppercase tracking-[0.2em] text-gold">{t("team.eyebrow")}</span>
              </div>
              
              <h2 className="title-display text-3xl md:text-4xl leading-tight">
                {t("team.manifesto.title")}
              </h2>
              
              <div className="space-y-6 text-off-white/80 font-display text-lg leading-relaxed italic">
                <p>{t("team.manifesto.p1")}</p>
                <p>{t("team.manifesto.p2")}</p>
              </div>

              <div className="pt-6 border-t border-gold/20">
                <p className="font-grotesk text-sm uppercase tracking-[0.25em] text-gold">
                  {t("team.manifesto.p3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessCases />

      <SmileConsultant goals={DENTAL_GOALS} />

      <FacialConsultant />

      <OurTeam />

      {/* Depoimentos */}
      <section className="px-6 pb-24" id="depoimentos">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="text-center">
            <span className="eyebrow">{t("test.eyebrow")}</span>
            <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("test.title")}</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["test.q1", "test.q2", "test.q3"].map((q) => (
              <figure key={q} data-reveal className="vellum vellum-hover rounded-3xl p-7">
                <Quote className="size-5 text-gold" />
                <blockquote className="mt-5 font-display text-lg leading-snug text-foreground">
                  {t(q)}
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <GoalQuiz />
      <Faq />

      {/* Estrutura */}
      <section
        className="px-6 py-24"
        style={{ background: "var(--gradient-champagne)" }}
        id="estrutura"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <img
              src={estar}
              alt="Sala de espera da Thebit Saúde e Estética"
              loading="lazy"
              width={695}
              height={1020}
              className="h-[24rem] w-full rounded-[2rem] border border-gold/25 object-cover md:h-[30rem]"
            />
          </div>
          <div data-reveal>
            <span className="eyebrow">{t("intl.eyebrow")}</span>
            <h2 className="title-display mt-4 text-3xl md:text-5xl">{t("intl.title")}</h2>
            <p className="section-lede mt-6">{t("intl.text")}</p>
            <ul className="mt-7 grid gap-3 text-sm">
              {["intl.b1", "intl.b2", "intl.b3", "intl.b4"].map((b) => (
                <li key={b} className="flex gap-3 text-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {t(b)}
                </li>
              ))}
            </ul>
            <Link to="/estrutura" className="btn-slide-gold mt-8 text-foreground">
              {t("nav.structure")}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24" id="agendar">
        <PremiumForm />
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden">
        <img
          src={fachada}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1280}
          height={854}
          className="h-[28rem] w-full object-cover"
        />
        <div className="absolute inset-0 bg-graphite/80" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-2xl text-off-white">
            <Fleur className="animate-fleur mx-auto size-9 text-gold" />
            <h2 className="title-display mt-6 text-3xl md:text-5xl">{t("final.title")}</h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{t("final.text")}</p>
            <a
              href={whatsappLink(t("wa.default"))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-lux mt-8"
              data-magnetic
            >
              {t("cta.book")}
            </a>
          </div>
        </div>
      </section>

      <ProcedureQuizDialog
        area={area}
        open={area !== null}
        onOpenChange={(open) => !open && setArea(null)}
      />
    </main>
  );
}
