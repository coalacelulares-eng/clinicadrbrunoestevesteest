import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "@/lib/i18n";

export function BeforeAfterSlider({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  const { t } = useI18n();
  const [value, setValue] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const peeked = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || peeked.current) return;
          peeked.current = true;
          const seq = [88, 14, 50];
          seq.forEach((v, i) => window.setTimeout(() => setValue(v), 700 + i * 950));
        });
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const setFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(98, Math.max(2, pct)));
  };

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-[20px] border border-border shadow-[var(--shadow-luxe)]"
      onMouseDown={(e) => {
        setDragging(true);
        setFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging && setFromClientX(e.clientX)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => setFromClientX(e.touches[0]!.clientX)}
      onTouchMove={(e) => setFromClientX(e.touches[0]!.clientX)}
    >
      <img
        src={image}
        alt={`${alt} — ${t("ba.before")}`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover object-left transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <img
        src={image}
        alt={`${alt} — ${t("ba.after")}`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover object-right transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        style={{ clipPath: `inset(0 0 0 ${value}%)` }}
      />

      <span className="absolute left-4 top-4 rounded-full bg-graphite/85 px-3 py-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-off-white">
        {t("ba.before")}
      </span>
      <span
        className="absolute right-4 top-4 rounded-full px-3 py-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-graphite"
        style={{ background: "var(--gradient-gold)" }}
      >
        {t("ba.after")}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-off-white/90"
        style={{ left: `${value}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-off-white/80 bg-graphite/40 backdrop-blur-sm">
          <ChevronLeft className="size-3.5 text-off-white" />
          <ChevronRight className="absolute right-1.5 size-3.5 text-off-white" />
        </span>
      </div>

      <input
        type="range"
        min={2}
        max={98}
        value={value}
        aria-label={`${t("ba.before")} / ${t("ba.after")}`}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
