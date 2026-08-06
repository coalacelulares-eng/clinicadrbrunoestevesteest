import { useEffect } from "react";

/** Ripple discreto em todos os botões e links de ação do site. */
export function useRipple() {
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const host = target?.closest<HTMLElement>(
        "button, a[href], .btn-gold-lux, .btn-slide-gold",
      );
      if (!host) return;
      if (getComputedStyle(host).position === "static") host.style.position = "relative";
      if (getComputedStyle(host).overflow === "visible") host.style.overflow = "hidden";

      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 0.6;
      const ink = document.createElement("span");
      ink.className = "ripple-ink";
      ink.style.width = `${size}px`;
      ink.style.height = `${size}px`;
      ink.style.left = `${e.clientX - rect.left - size / 2}px`;
      ink.style.top = `${e.clientY - rect.top - size / 2}px`;
      host.appendChild(ink);
      window.setTimeout(() => ink.remove(), 780);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);
}
