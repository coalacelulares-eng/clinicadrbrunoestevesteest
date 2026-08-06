import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fundo vivo: um feixe de luz suave acompanha o cursor (desktop)
 * ou o movimento do aparelho (celular).
 */
export function Spotlight({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const set = (x: number, y: number) => {
      host.style.setProperty("--spot-x", `${x}%`);
      host.style.setProperty("--spot-y", `${y}%`);
    };

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100);
    };

    const onTilt = (e: DeviceOrientationEvent) => {
      const gamma = Math.max(-30, Math.min(30, e.gamma ?? 0));
      const beta = Math.max(-30, Math.min(30, (e.beta ?? 0) - 45));
      set(50 + gamma * 1.2, 45 + beta * 0.8);
    };

    host.addEventListener("pointermove", onMove);
    window.addEventListener("deviceorientation", onTilt);
    return () => {
      host.removeEventListener("pointermove", onMove);
      window.removeEventListener("deviceorientation", onTilt);
    };
  }, []);

  return (
    <div ref={hostRef} className={`spotlight-host ${className}`}>
      <span
        aria-hidden="true"
        className="spotlight-beam"
        style={{ opacity: tone === "dark" ? 0.85 : 0.55 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
