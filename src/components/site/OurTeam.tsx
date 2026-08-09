import { Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import camilaAsset from "@/assets/dra-camila-attie.png.asset.json";
import isabelaAsset from "@/assets/isabela-garzedin.png.asset.json";
import fernandaAsset from "@/assets/dra-fernanda-montrezor.png.asset.json";
import gabrielaAsset from "@/assets/gabriela-jards.png.asset.json";
import danielAsset from "@/assets/dr-daniel-thebit.png.asset.json";

interface TeamMember {
  name: string;
  instagram: string;
  specialty: string;
  description: string;
  photo: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Dra. Fernanda Montrezor",
    instagram: "https://www.instagram.com/dra.fernandamontrezor/",
    specialty: "Odontologia Estética",
    description: "Especialista em reabilitação oral e estética dental avançada.",
    photo: fernandaAsset.url,
  },
  {
    name: "Dra. Camila Attie",
    instagram: "https://www.instagram.com/dra.camilaattie/",
    specialty: "Dermatologia Clínica & Estética",
    description: "Referência em Beleza natural com elegância",
    photo: camilaAsset.url,
  },
  {
    name: "Dra. Gabriela Jardim",
    instagram: "https://www.instagram.com/gabrielajards/",
    specialty: "Odontologia Estética",
    description: "Especialista em reabilitação oral e estética dental avançada.",
    photo: gabrielaAsset.url,
  },
  {
    name: "Dr. Daniel Thebit",
    instagram: "https://www.instagram.com/dr.danielthebit/",
    specialty: "CEO Thebit & Implantodontia",
    description: "CEO Thebit, e especialista em implantes de alta complexidade e carga imediata.",
    photo: danielAsset.url,
  },
  {
    name: "Dra. Katielly Mendes",
    instagram: "https://www.instagram.com/dra.katiellymendes/",
    specialty: "Harmonização FACIAL & CORPORAL",
    description: "Especialista em procedimentos faciais e corporáis injetáveis e rejuvenescimento.",
    photo: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Luiza Francino",
    instagram: "https://www.instagram.com/luizafrancino/",
    specialty: "Estética Avançada",
    description: "Focada em tratamentos de pele e tecnologias regenerativas.",
    photo: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Isabela Garzedin",
    instagram: "https://www.instagram.com/isabela.garzedin/",
    specialty: "Consultoria Estética",
    description: "Planejamento personalizado e acompanhamento de resultados.",
    photo: isabelaAsset.url,
  },
  {
    name: "Dra. Bianca Medeiros",
    instagram: "https://www.instagram.com/drabiancamedeiros/",
    specialty: "Dermatologia",
    description: "Especialista em saúde da pele e protocolos premium de skincare.",
    photo: "https://images.unsplash.com/photo-1622902046580-2b47f47f0871?q=80&w=800&auto=format&fit=crop",
  },
];

export function OurTeam() {
  const { t } = useI18n();

  return (
    <section className="px-6 py-24 bg-off-white" id="equipe">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="eyebrow">Nossa Equipe</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            Profissionais que fazem a diferença
          </h2>
          <p className="section-lede mt-6 text-text-soft">
            Conheça os especialistas dedicados a transformar sorrisos e elevar a autoestima 
            através de um atendimento personalizado, técnico e profundamente humano.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div 
              key={member.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.photo}
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
                  {member.specialty}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-text-soft">
                  {member.description}
                </p>
                
                <div className="mt-auto pt-6">
                  <a 
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-graphite/60 transition-colors hover:text-gold"
                  >
                    Conheça o perfil
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
