import { Link } from "@tanstack/react-router";

import { Fleur } from "./Fleur";
import { useI18n } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden bg-graphite text-off-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoThebit}
                alt="Thebit Odontologia"
                className="size-14 rounded-full bg-graphite object-cover ring-1 ring-gold/30"
              />
              <span className="font-display text-lg tracking-[0.1em] uppercase">
                Thebit Saúde e Estética
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">
              {CLINIC.specialty} · {CLINIC.crm}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed opacity-70">{CLINIC.hours}</p>
          </div>

          <div className="space-y-2">
            <p className="eyebrow">{t("nav.contact")}</p>
            <p className="text-sm leading-relaxed opacity-80">{CLINIC.address}</p>
            <p className="text-sm opacity-80">{CLINIC.phone}</p>
            <p className="text-sm opacity-80">{CLINIC.email}</p>
          </div>

          <nav className="flex flex-col gap-2">
            <p className="eyebrow">Menu</p>
            {[
              { to: "/sobre", key: "nav.about" },
              { to: "/especialidades", key: "nav.specialties" },
              { to: "/tecnologias", key: "nav.tech" },
              { to: "/equipe", key: "nav.team" },
              { to: "/estrutura", key: "nav.structure" },
              { to: "/contato", key: "nav.contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-grotesk text-[0.62rem] uppercase tracking-[0.2em] opacity-80 transition-colors hover:text-gold"
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="whisper-divider my-10" />

        <div className="flex flex-col gap-3 text-xs opacity-60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Thebit Saúde e Estética. {t("footer.rights")}
          </p>
          <p className="max-w-lg">{t("footer.disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
