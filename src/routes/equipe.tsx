import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Heart } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { TEAM, whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import teamGroupAsset from "@/assets/team-group.jpg.asset.json";
import { Fleur } from "@/components/site/Fleur";


export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe | Thebit Saúde e Estética — BH" },
      {
        name: "description",
        content:
          "Conheça os especialistas da Thebit: dentística, harmonização orofacial, periodontia integrativa, odontopediatria e dermatologia clínica em BH.",
      },
      { property: "og:title", content: "Equipe | Thebit Saúde e Estética" },
      {
        property: "og:description",
        content: "Oito especialistas em odontologia e medicina estética em Belo Horizonte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Equipe,
});

function Equipe() {
  const { t } = useI18n();

  return (
    <PageShell
      eyebrow={t("team.eyebrow")}
      title={
        <>
          {t("team.title").replace(/trabalham juntos|working together|trabajan juntos/gi, "").replace(/\.$/, "").trim()}{" "}
          <span className="gold-text">
            {t("team.title").toLowerCase().includes("trabalham juntos") ? "trabalham juntos." : 
             t("team.title").toLowerCase().includes("working together") ? "working together." : 
             "trabajan juntos."}
          </span>
        </>
      }
      intro={t("team.intro")}
    >
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
                <Heart className="size-3 text-gold fill-gold/20" />
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

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p) => (
            <article key={p.name} data-reveal className="vellum vellum-hover rounded-3xl p-7">
              <span className="eyebrow">{t(`team.member.${p.id}.role`)}</span>
              <h2 className="title-display mt-3 text-xl">{p.name}</h2>
              <p className="section-lede-sm mt-3">{t(`team.member.${p.id}.desc`)}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink(t("wa.team.book").replace("{name}", p.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slide-gold text-foreground"
                >
                  {t("cta.book.person")}
                </a>
                <a
                  href={p.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-grotesk text-[0.6rem] uppercase tracking-[0.24em] text-gold transition-opacity hover:opacity-80"
                >
                  <Instagram size={12} />
                  Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
