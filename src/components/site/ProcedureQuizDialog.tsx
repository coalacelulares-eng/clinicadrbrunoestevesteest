import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

const questions = [
  { q: "quiz.q1", options: ["quiz.q1.o1", "quiz.q1.o2", "quiz.q1.o3"] },
  { q: "quiz.q2", options: ["quiz.q2.o1", "quiz.q2.o2", "quiz.q2.o3"] },
  { q: "quiz.q3", options: ["quiz.q3.o1", "quiz.q3.o2", "quiz.q3.o3"] },
  { q: "quiz.q4", options: ["quiz.q4.o1", "quiz.q4.o2", "quiz.q4.o3"] },
];

export function ProcedureQuizDialog({
  area,
  open,
  onOpenChange,
}: {
  area: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const close = () => {
    onOpenChange(false);
    setStep(0);
    setAnswers([]);
  };

  const pick = (value: string) => {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    const lines = questions.map((item, i) => `${t(item.q)} ${next[i] ?? "-"}`);
    const message = [`${t("wa.quiz")} ${area ?? "-"}`, "", ...lines].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    close();
  };

  const current = questions[step]!;
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? onOpenChange(true) : close())}>
      <DialogContent className="max-w-md rounded-3xl border-border bg-card">
        <DialogHeader>
          <p className="eyebrow">{area ?? t("spec.eyebrow")}</p>
          <DialogTitle className="title-display text-2xl">{t("quiz.title")}</DialogTitle>
        </DialogHeader>

        <div className="h-px w-full bg-border">
          <div
            className="h-px transition-all duration-500"
            style={{ width: `${progress}%`, background: "var(--gradient-gold)" }}
          />
        </div>
        <p className="font-grotesk text-[0.6rem] uppercase tracking-[0.28em] text-text-soft">
          {t("quiz.step")} {step + 1}/{questions.length}
        </p>

        <p className="text-base leading-relaxed text-foreground">{t(current.q)}</p>

        <div className="mt-2 grid gap-2">
          {current.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => pick(t(opt))}
              className="vellum vellum-hover rounded-2xl px-5 py-3 text-left text-sm text-foreground"
            >
              {t(opt)}
            </button>
          ))}
        </div>

        <p className="mt-1 text-center font-grotesk text-[0.55rem] uppercase tracking-[0.24em] text-text-soft">
          {t("quiz.send")}
        </p>
      </DialogContent>
    </Dialog>
  );
}
