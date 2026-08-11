import { useI18n } from "@/lib/i18n";

const ITEMS = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
  "item11",
  "item12",
  "item13",
  "item14",
];

/** Faixa premium em movimento contínuo. */
export function Marquee({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { t } = useI18n();
  const dark = tone === "dark";
  const row = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-hidden="true"
      className={`overflow-hidden border-y border-gold/25 py-5 ${
        dark ? "text-off-white" : "text-foreground"
      }`}
      style={
        {
          background: dark ? "var(--gradient-onyx)" : "var(--gradient-champagne)",
          "--lux-alt": dark ? "var(--off-white)" : "var(--foreground)",
        } as Record<string, string>
      }
    >
      <div className="marquee-mask">
        <div className="animate-marquee">
          {row.map((itemId, i) => {
            const translated = t(`marquee.${itemId}`);
            const icon = translated.slice(0, translated.indexOf(" "));
            const text = translated.slice(translated.indexOf(" ") + 1);
            
            return (
              <span key={`${itemId}-${i}`} className="flex shrink-0 items-center">
                <span className="micro-label flex items-center gap-2 px-6 text-[0.85rem] md:text-[1rem]">
                  <span>{icon}</span>
                  <span 
                    className="marquee-lux" 
                    style={{ "--lux-delay": `${(i % 7) * 0.35}s` } as Record<string, string>}
                  >
                    {text}
                  </span>
                </span>
                <span className="size-1.5 rounded-full bg-gold" />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
