import {
  Camera,
  Check,
  CircleHelp,
  Download,
  Gem,
  Loader2,
  Maximize2,
  Scan,
  Smile,
  Share2,
  Sparkles,
  Star,
  Sun,
  Upload,
  Wand2,
  X,
  ZoomIn,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { streamImage } from "@/lib/stream-image";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import {
  GOALS,
  LEGAL_NOTICE,
  PHOTO_TIPS,
  PROGRESS_STEPS,
  TESTIMONIALS,
  type Goal,
} from "@/lib/smile-consultant";
import { TEAM } from "@/lib/site";


type Report = { resumo?: string; observacoes?: string[]; protocolo?: string[] };
type ViewMode = "comparar" | "antes" | "depois" | "lado";

const GOAL_ICONS: Record<string, LucideIcon> = {
  clareamento: Sun,
  espacos: Smile,
  alinhamento: Scan,
  facetas: Gem,
  implantes: Wand2,
  hof: Sparkles,
  pele: Star,
  avaliacao: CircleHelp,
};

export type ConsultantProps = {
  id?: string;
  goals?: Goal[];
  type?: "smile" | "facial";
};

export function SmileConsultant({
  id = "consultor",
  goals = GOALS,
  type = "smile",
}: ConsultantProps) {
  const { t } = useI18n();
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);

  const prefix = type === "smile" ? "consultant" : "facial";

  const eyebrow = t(`${prefix}.eyebrow`);
  const title = (
    <>
      {t(`${prefix}.title.a`)}{" "}
      <span className="gold-text">{t(`${prefix}.title.gold`)}</span>.
    </>
  );
  const description = t(`${prefix}.description`);
  const stepLabel = t(`${prefix}.step1`);
  const reportTitle = t(`${prefix}.reportTitle`);
  const ctaTitle = t(`${prefix}.ctaTitle`);

  const [goal, setGoal] = useState<Goal | null>(null);
  const [original, setOriginal] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isFinal, setIsFinal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressStep, setProgressStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<Report | null>(null);
  const [split, setSplit] = useState(50);
  const [mode, setMode] = useState<ViewMode>("comparar");
  const [zoom, setZoom] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!loading) return;
    setProgress(6);
    setProgressStep(0);
    const bar = setInterval(() => setProgress((p) => (p < 92 ? p + Math.random() * 4 : p)), 420);
    const steps = setInterval(
      () => setProgressStep((s) => Math.min(s + 1, PROGRESS_STEPS.length - 1)),
      2600,
    );
    return () => {
      clearInterval(bar);
      clearInterval(steps);
    };
  }, [loading]);

  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFullscreen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreen]);

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
      setReport(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const generate = async () => {
    if (!original || !goal) return;
    setLoading(true);
    setError(null);
    setResult(null);
    setReport(null);
    setIsFinal(false);
    setMode("comparar");
    setZoom(1);

    const analysis = fetch("/api/analise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: original, goal: t(goal.id) }),
    })
      .then((r) => (r.ok ? (r.json() as Promise<Report>) : null))
      .catch(() => null);

    try {
      await streamImage(
        "/api/simulacao",
        { image: original, prompt: t(`goal.${goal.id}.simulation`), instruction: goal.edit },
        (url, final) => {
          setResult(url);
          if (final) setIsFinal(true);
        },
      );
      setProgress(100);
      setReport(await analysis);
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

  const download = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = "simulacao-thebit.png";
    a.click();
  };

  const share = async () => {
    if (!result) return;
    try {
      const blob = await (await fetch(result)).blob();
      const file = new File([blob], "simulacao-thebit.png", { type: blob.type });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "Simulação ilustrativa — Clínica Thebit" });
        return;
      }
    } catch {
      /* fallback abaixo */
    }
    download();
  };

  const specialist = goal ? TEAM.find((m) => m.id === goal.specialistId) : undefined;
  const waMessage = t(`wa.${type}.message`).replace(
    "{simulation}",
    goal ? t(`goal.${goal.id}.simulation`) : "",
  );


  const comparator = (
    <div
      ref={compareRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[24px] border border-gold/25 bg-muted/40 shadow-[var(--shadow-luxe)]"
      onMouseMove={(e) => mode === "comparar" && e.buttons === 1 && setFromClientX(e.clientX)}
      onMouseDown={(e) => mode === "comparar" && setFromClientX(e.clientX)}
      onTouchMove={(e) => mode === "comparar" && setFromClientX(e.touches[0]!.clientX)}
    >
      {original && mode === "lado" ? (
        <div className="grid size-full grid-cols-2 gap-px">
          <img src={original} alt="Foto enviada (antes)" className="size-full object-cover" />
          {result && (
            <img
              src={result}
              alt="Simulação ilustrativa gerada por IA"
              className="size-full object-cover"
            />
          )}
        </div>
      ) : (
        original && (
          <>
            <img
              src={original}
              alt="Foto enviada (antes)"
              className="absolute inset-0 size-full object-cover transition-transform duration-500"
              style={{ transform: `scale(${zoom})` }}
            />
            {result && mode !== "antes" && (
              <img
                src={result}
                alt="Simulação ilustrativa gerada por IA"
                className={`absolute inset-0 size-full object-cover transition-[filter,transform] duration-500 ${
                  isFinal ? "blur-0" : "blur-xl"
                }`}
                style={{
                  transform: `scale(${zoom})`,
                  clipPath: mode === "comparar" ? `inset(0 0 0 ${split}%)` : undefined,
                }}
              />
            )}
            <span className="absolute left-4 top-4 rounded-full bg-graphite/85 px-3 py-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-off-white backdrop-blur-sm">
              Antes
            </span>
            {result && (
              <span
                className="absolute right-4 top-4 rounded-full px-3 py-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-graphite"
                style={{ background: "var(--gradient-gold)" }}
              >
                {t("consultant.after_tag")}
              </span>
            )}
            {result && mode === "comparar" && (
              <>
                <div
                  className="pointer-events-none absolute inset-y-0 w-px bg-off-white/90 shadow-[0_0_18px_rgba(255,255,255,0.6)]"
                  style={{ left: `${split}%` }}
                />
                <span
                  className="pointer-events-none absolute top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-off-white/70 bg-graphite/60 text-[0.6rem] text-off-white backdrop-blur-sm"
                  style={{ left: `${split}%` }}
                >
                  ↔
                </span>
                <input
                  type="range"
                  min={2}
                  max={98}
                  value={split}
                  aria-label="Comparar antes e depois"
                  onChange={(e) => setSplit(Number(e.target.value))}
                  className="absolute inset-0 size-full cursor-ew-resize opacity-0"
                />
              </>
            )}
          </>
        )
      )}

      {!original && (
        <div className="absolute inset-0 grid place-items-center gap-2 text-center text-text-soft">
          <div>
            <Sparkles className="mx-auto size-6 text-gold" />
            <p className="mt-3 font-grotesk text-[0.6rem] uppercase tracking-[0.24em]">
              {t("consultant.placeholder")}
            </p>
          </div>
        </div>
      )}

      {loading && !result && (
        <div className="absolute inset-0 grid place-items-center bg-graphite/55 px-8 backdrop-blur-sm">
          <div className="w-full max-w-xs text-center text-off-white">
            <Loader2 className="mx-auto size-7 animate-spin text-gold" />
            <p className="mt-4 font-grotesk text-[0.6rem] uppercase tracking-[0.24em]">
              {PROGRESS_STEPS[progressStep]}
            </p>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-off-white/20">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "var(--gradient-gold)" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative overflow-hidden px-6 py-24" id={id}>
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">{title}</h2>
          <p className="section-lede-sm mt-5">{description}</p>
        </div>

        {/* Passo 1 */}
        <div data-reveal className="mt-14">
          <p className="font-grotesk text-[0.55rem] uppercase tracking-[0.32em] text-text-soft">
            {stepLabel}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g) => {
              const active = goal?.id === g.id;
              const Icon = GOAL_ICONS[g.id] ?? Sparkles;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`vellum vellum-hover rounded-3xl p-5 text-left transition-all duration-500 ${
                    active ? "ring-2 ring-gold" : ""
                  }`}
                >
                  <span
                    className={`grid size-10 place-items-center rounded-full border transition-colors duration-500 ${
                      active ? "border-gold bg-gold/10 text-gold" : "border-border text-text-soft"
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <p className="mt-3 text-sm leading-snug text-foreground">{t(g.id)}</p>

                  {active && (
                    <span className="mt-3 inline-flex items-center gap-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-gold">
                      <Check className="size-3" /> {t("consultant.selected")}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Passo 2 + resultado */}
        <div data-reveal className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          {comparator}

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-grotesk text-[0.55rem] uppercase tracking-[0.32em] text-text-soft">
                {t("consultant.step2")}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onFile(e.target.files?.[0])}
                />
                <input
                  ref={cameraRef}
                  type="file"
                  accept="image/*"
                  capture="user"
                  className="hidden"
                  onChange={(e) => onFile(e.target.files?.[0])}
                />
                <button
                  type="button"
                  onClick={() => cameraRef.current?.click()}
                  className="btn-slide-gold text-foreground md:hidden"
                >
                  <Camera className="size-4" /> {t("consultant.btn.camera")}
                </button>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="btn-slide-gold text-foreground"
                >
                  <Upload className="size-4" /> {original ? t("consultant.btn.change") : t("consultant.btn.upload")}
                </button>
              </div>
              <ul className="mt-5 grid gap-2 text-xs text-text-soft">
                {PHOTO_TIPS.map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-gold" />
                    {t(tip)}
                  </li>
                ))}
              </ul>

            </div>

            <button
              type="button"
              disabled={!original || !goal || loading}
              onClick={generate}
              className="btn-gold-lux self-start disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Sparkles className="size-4" />
              )}
              {t("consultant.btn.generate")}
            </button>

            {error && <p className="text-xs leading-relaxed text-destructive">{error}</p>}

            {result && (
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["comparar", t("consultant.view.compare")],
                    ["antes", t("consultant.view.before")],
                    ["depois", t("consultant.view.after")],
                    ["lado", t("consultant.view.side")],
                  ] as [ViewMode, string][]
                ).map(([m, label]) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-500 ${
                      mode === m
                        ? "border-transparent text-graphite"
                        : "border-border text-text-soft hover:text-foreground"
                    }`}
                    style={mode === m ? { background: "var(--gradient-gold)" } : undefined}
                  >
                    {label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setZoom((z) => (z >= 1.6 ? 1 : z + 0.2))}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-text-soft hover:text-foreground"
                >
                  <ZoomIn className="inline size-3.5" /> {t("consultant.view.zoom")}
                </button>
                <button
                  type="button"
                  onClick={() => setFullscreen(true)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-text-soft hover:text-foreground"
                >
                  <Maximize2 className="inline size-3.5" /> {t("consultant.view.fullscreen")}
                </button>
                <button
                  type="button"
                  onClick={download}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-text-soft hover:text-foreground"
                >
                  <Download className="inline size-3.5" /> {t("consultant.view.download")}
                </button>
                <button
                  type="button"
                  onClick={share}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-text-soft hover:text-foreground"
                >
                  <Share2 className="inline size-3.5" /> {t("consultant.view.share")}
                </button>
              </div>
            )}

            {result && goal && (
              <div>
                <p className="font-grotesk text-[0.55rem] uppercase tracking-[0.32em] text-text-soft">
                  {t(`${prefix}.simulation`)}
                </p>
                <p className="title-display mt-2 text-2xl text-foreground">{t(`goal.${goal.id}.simulation`)}</p>
              </div>
            )}
          </div>
        </div>

        {/* O que foi melhorado */}
        {result && goal && (
          <div data-reveal className="mt-14">
            <p className="font-grotesk text-[0.55rem] uppercase tracking-[0.32em] text-text-soft">
              {t(`${prefix}.analysis`)}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[...[0, 1, 2, 3].map((i) => t(`goal.${goal.id}.imp.${i}`)), t("consultant.view.simulation_tag")].map((i) => (
                <div key={i} className="vellum rounded-2xl px-5 py-4 text-sm text-foreground">
                  <Check className="mb-2 size-4 text-gold" />
                  {i}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Relatório */}
        {result && (
          <div data-reveal className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="vellum rounded-3xl p-8">
              <span className="eyebrow">{t(`${prefix}.reportEyebrow`)}</span>
              <h3 className="title-display mt-3 text-2xl">{reportTitle}</h3>
              {report ? (
                <>
                  <p className="mt-4 text-sm leading-relaxed text-text-soft">{report.resumo}</p>
                  {!!report.observacoes?.length && (
                    <ul className="mt-5 grid gap-2 text-sm text-foreground sm:grid-cols-2">
                      {report.observacoes.map((o) => (
                        <li key={o} className="flex items-start gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  )}
                  {!!report.protocolo?.length && (
                    <>
                      <p className="mt-6 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-text-soft">
                        Protocolo sugerido
                      </p>
                      <ul className="mt-3 grid gap-2 text-sm text-foreground">
                        {report.protocolo.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-gold" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              ) : (
                <div className="mt-5 space-y-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-3 animate-pulse rounded-full bg-muted" />
                  ))}
                </div>
              )}
              <p className="mt-6 text-xs leading-relaxed text-text-soft">
                {t(`${prefix}.reportDisclaimer`)}
              </p>
            </div>

            {specialist && (
              <div className="vellum vellum-hover rounded-3xl p-8">
                <span className="eyebrow">{t(`${prefix}.specialistEyebrow`)}</span>
                <h3 className="title-display mt-3 text-2xl">{specialist.name}</h3>
                <p className="mt-1 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-text-soft">
                  {t(`team.member.${specialist.id}.role`)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-soft">{t(`team.member.${specialist.id}.desc`)}</p>

                <a
                  href={specialist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slide-gold mt-6 text-foreground"
                >
                  {t(`${prefix}.specialistBtn`)}
                </a>
              </div>
            )}
          </div>
        )}

        {/* Prova social */}
        <div data-reveal className="mt-16 text-center">
          <div className="flex items-center justify-center gap-1 text-gold">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <p className="mt-3 text-sm text-foreground">{t(`${prefix}.statsText`)}</p>
          <p className="text-sm text-text-soft">
            {t(`${prefix}.statsSub`)}
          </p>
          <div className="relative mx-auto mt-8 h-32 max-w-2xl">
            {TESTIMONIALS.map((te, i) => (
              <figure
                key={te.quote}
                className={`vellum absolute inset-0 rounded-3xl p-7 transition-all duration-700 ${
                  i === slide ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <blockquote className="font-display text-base leading-snug text-foreground">
                  {t(te.quote)}
                </blockquote>
                <figcaption className="mt-3 font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-text-soft">
                  {t(te.author)}
                </figcaption>
              </figure>
            ))}

          </div>
          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.quote}
                type="button"
                aria-label={`Depoimento ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`size-1.5 rounded-full transition-all ${
                  i === slide ? "w-5 bg-gold" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          data-reveal
          className="mt-16 rounded-[28px] border border-gold/25 p-10 text-center"
          style={{ background: "var(--gradient-champagne)" }}
        >
          <h3 className="title-display text-2xl md:text-4xl">{ctaTitle}</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-soft">
            {t(`${prefix}.ctaDesc`)}
          </p>
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-lux mt-7"
            data-magnetic
          >
            {t(`${prefix}.ctaBtn`)}
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-text-soft">
          {t(LEGAL_NOTICE)}
        </p>

      </div>

      {fullscreen && result && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-graphite/95 p-6">
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            aria-label="Fechar tela cheia"
            className="absolute right-6 top-6 grid size-10 place-items-center rounded-full border border-off-white/30 text-off-white"
          >
            <X className="size-4" />
          </button>
          <img
            src={result}
            alt="Simulação ilustrativa em tela cheia"
            className="max-h-[85vh] w-auto rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}