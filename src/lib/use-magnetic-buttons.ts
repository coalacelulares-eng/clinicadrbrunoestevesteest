import { useEffect } from "react";

/** Subtle magnetic attraction on premium buttons. */
export function useMagneticButtons() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );

    const handlers: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];

    els.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.12;
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.18;
        el.style.transform = `translate(${x}px, ${y - 2}px)`;
      };
      const leave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      handlers.push([el, move, leave]);
    });

    return () => {
      handlers.forEach(([el, move, leave]) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  });
}
