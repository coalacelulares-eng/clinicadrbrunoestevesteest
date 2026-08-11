import { Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { TEAM, whatsappLink } from "@/lib/site";
import camilaAsset from "@/assets/dra-camila-attie.png.asset.json";
import isabelaAsset from "@/assets/isabela-garzedin.png.asset.json";
import fernandaAsset from "@/assets/dra-fernanda-montrezor.png.asset.json";
import gabrielaAsset from "@/assets/gabriela-jards.png.asset.json";
import danielAsset from "@/assets/dr-daniel-thebit.png.asset.json";
import katiellyAsset from "@/assets/dra-katielly-mendes.png.asset.json";
import luizaAsset from "@/assets/dra-luiza-francino.png.asset.json";
import biancaAsset from "@/assets/dra-bianca.png.asset.json";

const PHOTOS: Record<string, string> = {
  daniel: danielAsset.url,
  bianca: biancaAsset.url,
  katielly: katiellyAsset.url,
  fernanda: fernandaAsset.url,
  luiza: luizaAsset.url,
  isabela: isabelaAsset.url,
  gabriela: gabrielaAsset.url,
  camila: camilaAsset.url,
};

export function OurTeam() {
  const { t } = useI18n();

  return (
    <section className="px-6 py-24 bg-off-white" id="equipe">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="eyebrow">{t("team.eyebrow")}</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            {t("team.title")}
          </h2>
          <p className="section-lede mt-6 text-text-soft">
            {t("team.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div 
              key={member.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={PHOTOS[member.id]}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Instagram Overlay Icon */}
                <a 
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 translate-y-4 rounded-full bg-gold p-3 text-off-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold-dark"
                  aria-label={`Instagram de ${member.name}`}
                >
                  <Instagram size={20} />
                </a>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-graphite">
                  {member.name}
                </h3>
                <span className="mt-1 text-xs font-bold uppercase tracking-widest text-gold">
                  {t(`team.member.${member.id}.role`)}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-text-soft">
                  {t(`team.member.${member.id}.desc`)}
                </p>
                
                <div className="mt-auto pt-6">
                  <a 
                    href={whatsappLink(t("wa.team.book").replace("{name}", member.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-graphite/60 transition-colors hover:text-gold"
                  >
                    {t("nav.contact")}
                    <span className="h-px w-4 bg-gold/50" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

