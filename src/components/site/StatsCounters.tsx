import { Star } from "lucide-react";

import { CountUp } from "./CountUp";
import { Spotlight } from "./Spotlight";

export function StatsCounters() {
  return (
    <Spotlight tone="light">
      <section
        className="px-6 py-24"
        style={{ background: "var(--gradient-champagne)" }}
        aria-labelledby="numeros-thebit"
      >
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="text-center">
            <span className="eyebrow">Números Thebit</span>
            <h2 id="numeros-thebit" className="title-display mt-4 text-3xl md:text-5xl">
              Uma trajetória que se mede em confiança.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article data-reveal="scale" className="tilt-card glass-lux relative rounded-[2rem] p-8 text-center">
              <div>
                <p className="title-display text-5xl text-gold">
                  <CountUp to={35} suffix="+" />
                </p>
                <p className="micro-label mt-3 text-text-soft">Anos de história</p>
              </div>
            </article>

            <article data-reveal="scale" className="tilt-card glass-lux relative rounded-[2rem] p-8 text-center">
              <div>
                <div className="flex justify-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-6 fill-current animate-float-soft"
                      style={{ animationDelay: `${i * 160}ms` }}
                    />
                  ))}
                </div>
                <p className="title-display mt-3 text-3xl text-gold">
                  <CountUp to={5} decimals={1} />
                </p>
                <p className="micro-label mt-2 text-text-soft">Nota máxima no Google</p>
              </div>
            </article>

            <article data-reveal="scale" className="tilt-card glass-lux relative rounded-[2rem] p-8 text-center">
              <div>
                <p className="title-display text-5xl text-gold">
                  <CountUp to={1000} suffix="+" duration={2300} />
                </p>
                <p className="micro-label mt-3 text-text-soft">Sorrisos transformados</p>
              </div>
            </article>

            <article data-reveal="scale" className="tilt-card glass-lux relative rounded-[2rem] p-8 text-center">
              <div>
                <p className="title-display text-5xl text-gold">
                  <CountUp to={100} suffix="%" />
                </p>
                <p className="micro-label mt-3 text-text-soft">Planejamento personalizado</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Spotlight>
  );
}
