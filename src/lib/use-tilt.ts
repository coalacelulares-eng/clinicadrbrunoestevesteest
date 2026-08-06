import { useEffect } from "react";

/**
 * Aplica um efeito 3D discreto (inclinação + brilho) em todo elemento .tilt-card.
 * Desativado em telas de toque e com prefers-reduced-motion.
 */
export function useTilt() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".tilt-card"));
    if (!cards.length) return;

    const cleanups = cards.map((card) => {
      const move = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--tilt-x", `${px * 100}%`);
        card.style.setProperty("--tilt-y", `${py * 100}%`);
        card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 5}deg) rotateY(${
          (px - 0.5) * 5
        }deg) translateY(-4px)`;
      };
      const leave = () => {
        card.style.transform = "";
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      };
    });

    return () => cleanups.forEach((fn) => fn());
  });
}
