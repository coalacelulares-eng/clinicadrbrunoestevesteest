import { Loader2, Sparkles, Upload } from "lucide-react";
import { useRef, useState } from "react";

import { streamImage } from "@/lib/stream-image";
import { whatsappLink } from "@/lib/site";

const GROUPS: { group: string; items: string[] }[] = [
  {
    group: "Odontologia",
    items: [
      "Clareamento dental (simulação ilustrativa)",
      "Facetas em porcelana (simulação ilustrativa)",
      "Alinhamento do sorriso (simulação ilustrativa)",
      "Fechamento de espaços (simulação ilustrativa)",
    ],
  },
  {
    group: "Dermatologia",
    items: [
      "Uniformização do tom da pele",
      "Redução ilustrativa de manchas",
      "Suavização ilustrativa de linhas finas",
      "Melhora ilustrativa da textura da pele",
    ],
  },
  {
    group: "Estética Facial",
    items: [
      "Harmonização facial (simulação ilustrativa)",
      "Preenchimento labial (simulação ilustrativa)",
      "Definição do contorno mandibular (simulação ilustrativa)",
    ],
  },
  {
    group: "Emagrecimento",
    items: ["Projeção ilustrativa de silhueta (não é previsão de resultado)"],
  },
  {
    group: "Cirurgia Plástica",
    items: [
      "Projeção ilustrativa de rinoplastia",
      "Projeção ilustrativa de mamoplastia",
      "Projeção ilustrativa de contorno corporal",
    ],
  },
];

const DISCLAIMER =
  "Importante: Esta visualização é apenas uma simulação ilustrativa criada por inteligência artificial. Ela não representa um diagnóstico, uma previsão de resultado ou uma garantia de como ficará o tratamento. A indicação e os resultados dependem de avaliação individual realizada por um profissional qualificado.";

export function AiVisualizer() {
  const inputRef = useRef<HTMLInputElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const [original, setOriginal] = useState<string | null>(null);
  const [treatment, setTreatment] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isFinal, setIsFinal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [split, setSplit] = useState(50);

  const onFile = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      setError("Envie uma imagem de até 8 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setOriginal(String(reader.result));
      setResult(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const generate = async () => {
    if (!original || !treatment) return;
    setLoading(true);
    setError(null);
    setResult(null);
    setIsFinal(false);
    try {
      await streamImage("/api/simulacao", { image: original, prompt: treatment }, (url, final) => {
        setResult(url);
        if (final) setIsFinal(true);
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Não foi possível gerar a simulação.");
    } finally {
      setLoading(false);
    }
  };

  const setFromClientX = (clientX: number) => {
    const el = compareRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSplit(Math.min(98, Math.max(2, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <section className="px-6 py-24" id="visualizador">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="max-w-2xl">
          <span className="eyebrow">Visualizador IA</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            Visualize uma possibilidade de transformação
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-soft">
            Envie uma foto, escolha o tratamento de interesse e veja uma simulação ilustrativa lado
            a lado com a imagem original.
          </p>
        </div>

        <div data-reveal className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Comparação */}
          <div
            ref={compareRef}
            className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[20px] border border-border bg-muted/40 shadow-[var(--shadow-luxe)]"
            onMouseMove={(e) => e.buttons === 1 && setFromClientX(e.clientX)}
            onMouseDown={(e) => setFromClientX(e.clientX)}
            onTouchMove={(e) => setFromClientX(e.touches[0]!.clientX)}
          >
            {original ? (
              <>
                <img
                  src={original}
                  alt="Foto enviada (antes)"
                  className="absolute inset-0 size-full object-cover"
                />
                {result && (
                  <img
                    src={result}
                    alt="Simulação ilustrativa gerada por IA"
                    className={`absolute inset-0 size-full object-cover transition-[filter] duration-500 ${
                      isFinal ? "blur-0" : "blur-xl"
                    }`}
                    style={{ clipPath: `inset(0 0 0 ${split}%)` }}
                  />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-graphite/85 px-3 py-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-off-white">
                  Antes
                </span>
                {result && (
                  <>
                    <span
                      className="absolute right-4 top-4 rounded-full px-3 py-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-graphite"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      Simulação ilustrativa
                    </span>
                    <div
                      className="pointer-events-none absolute inset-y-0 w-px bg-off-white/90"
                      style={{ left: `${split}%` }}
                    />
                    <input
                      type="range"
                      min={2}
                      max={98}
                      value={split}
                      aria-label="Comparar antes e simulação ilustrativa"
                      onChange={(e) => setSplit(Number(e.target.value))}
                      className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
                    />
                  </>
                )}
              </>
            ) : (
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="absolute inset-0 grid place-items-center gap-3 text-text-soft"
              >
                <Upload className="mx-auto size-6 text-gold" />
                <span className="font-grotesk text-[0.6rem] uppercase tracking-[0.24em]">
                  Enviar foto
                </span>
              </button>
            )}

            {loading && !result && (
              <div className="absolute inset-0 grid place-items-center bg-graphite/40">
                <Loader2 className="size-7 animate-spin text-off-white" />
              </div>
            )}
          </div>

          {/* Controles */}
          <div className="flex flex-col gap-6">
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onFile(e.target.files?.[0])}
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="btn-slide-gold self-start text-foreground"
            >
              {original ? "Trocar foto" : "Enviar foto"}
            </button>

            <div className="max-h-72 space-y-5 overflow-y-auto pr-1">
              {GROUPS.map((g) => (
                <div key={g.group}>
                  <p className="font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-text-soft">
                    {g.group}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTreatment(item)}
                        className={`rounded-full border px-3 py-1.5 text-left text-xs transition-all duration-500 ${
                          treatment === item
                            ? "border-transparent text-graphite"
                            : "border-border text-text-soft hover:text-foreground"
                        }`}
                        style={
                          treatment === item ? { background: "var(--gradient-gold)" } : undefined
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              disabled={!original || !treatment || loading}
              onClick={generate}
              className="btn-gold-lux inline-flex items-center gap-2 self-start disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Sparkles className="size-4" />
              )}
              Gerar simulação ilustrativa
            </button>

            {error && <p className="text-xs leading-relaxed text-destructive">{error}</p>}

            {result && isFinal && (
              <a
                href={whatsappLink("Olá! Fiz uma simulação ilustrativa no site e gostaria de agendar uma avaliação.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slide-gold self-start text-foreground"
              >
                Agendar avaliação
              </a>
            )}

            <p className="text-xs leading-relaxed text-text-soft">{DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </section>
  );
}