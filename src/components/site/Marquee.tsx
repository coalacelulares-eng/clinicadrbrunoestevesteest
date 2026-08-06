const ITEMS = [
  "🏆 35 anos de tradição",
  "🦷 Especialistas em Dentística",
  "💎 Harmonização Orofacial",
  "✨ Dermatologia Estética",
  "😁 Facetas",
  "🔎 Lentes de Contato",
  "🪄 Invisalign",
  "⚙️ Implantes",
  "🧬 Tecnologia",
  "🔬 Ciência",
  "🌿 Naturalidade",
  "🤍 Atendimento Humanizado",
  "📐 Planejamento Individualizado",
  "👑 Excelência Clínica",
];

/** Faixa premium em movimento contínuo. */
export function Marquee({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  const row = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-hidden="true"
      className={`overflow-hidden border-y border-gold/25 py-5 ${
        dark ? "text-off-white" : "text-foreground"
      }`}
      style={{ background: dark ? "var(--gradient-onyx)" : "var(--gradient-champagne)" }}
    >
      <div className="marquee-mask">
        <div className="animate-marquee">
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex shrink-0 items-center">
              <span className="micro-label px-6 text-[0.8rem] opacity-90 md:text-[0.95rem]">
                {item}
              </span>
              <span className="size-1.5 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
