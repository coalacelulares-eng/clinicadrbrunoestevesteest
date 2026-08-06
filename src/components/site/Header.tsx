import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logoThebit from "@/assets/logo-thebit.webp";
import { useI18n, type Lang } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/sobre", key: "nav.about" },
  { to: "/especialidades", key: "nav.specialties" },
  { to: "/tecnologias", key: "nav.tech" },
  { to: "/equipe", key: "nav.team" },
  { to: "/estrutura", key: "nav.structure" },
  { to: "/contato", key: "nav.contact" },
] as const;


const langs: Lang[] = ["pt", "en", "es"];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "border border-border bg-background/85 text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "border border-transparent text-off-white [text-shadow:0_1px_18px_oklch(20%_0.02_45_/_0.65)]"
        }`}
      >
        <Link to="/" className="flex items-center">
          <img
            src={logoThebit}
            alt="Thebit Odontologia"
            className="size-16 rounded-full bg-graphite object-cover ring-1 ring-gold/30 md:size-20"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-grotesk text-[0.63rem] uppercase tracking-[0.2em] transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1.5 sm:flex">
            {langs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`font-grotesk text-[0.6rem] uppercase tracking-[0.2em] transition-colors ${
                  lang === l ? "text-gold" : "opacity-60 hover:opacity-100"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={whatsappLink(t("wa.default"))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-lux hidden px-5 py-2.5 text-[0.6rem] md:inline-flex"
            data-magnetic
          >
            {t("cta.book")}
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-background/95 p-6 shadow-[var(--shadow-luxe)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-grotesk text-[0.7rem] uppercase tracking-[0.22em] text-foreground"
                activeProps={{ className: "text-gold" }}
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-3">
            {langs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`font-grotesk text-[0.65rem] uppercase tracking-[0.2em] ${
                  lang === l ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
