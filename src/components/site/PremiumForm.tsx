import { Check, Loader2, Send } from "lucide-react";
import { useMemo, useState } from "react";

import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

type Field = "nome" | "telefone" | "whatsapp" | "email" | "cidade" | "objetivo" | "mensagem";

const OBJETIVOS = [
  "Estética do sorriso (lentes, facetas, clareamento)",
  "Implantes e reabilitação",
  "Ortodontia e Invisalign",
  "Harmonização orofacial",
  "Dermatologia estética",
  "Consulta e limpeza de rotina",
];

const CIDADES = [
  "Belo Horizonte",
  "Nova Lima",
  "Contagem",
  "Betim",
  "Sabará",
  "Santa Luzia",
  "Ribeirão das Neves",
  "Outra cidade",
];

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, "($1");
  if (d.length <= 6) return d.replace(/(\d{2})(\d{0,4})/, "($1) $2");
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

const LABELS: Record<Field, string> = {
  nome: "form.name",
  telefone: "form.phone",
  whatsapp: "form.whatsapp",
  email: "form.email",
  cidade: "form.city",
  objetivo: "form.goal",
  mensagem: "form.message",
};

function validate(field: Field, value: string): string | null {
  const v = value.trim();
  switch (field) {
    case "nome":
      return v.length >= 3 && v.includes(" ") ? null : "Informe seu nome e sobrenome.";
    case "telefone":
    case "whatsapp":
      return v.replace(/\D/g, "").length >= 10 ? null : "Informe DDD + número.";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) ? null : "Informe um e-mail válido.";
    case "cidade":
      return v.length >= 2 ? null : "Informe a sua cidade.";
    case "objetivo":
      return v.length >= 2 ? null : "Selecione o seu objetivo.";
    case "mensagem":
      return null;
  }
}

export function PremiumForm() {
  const [values, setValues] = useState<Record<Field, string>>({
    nome: "",
    telefone: "",
    whatsapp: "",
    email: "",
    cidade: "",
    objetivo: "",
    mensagem: "",
  });
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<Field, string | null>> = {};
    (Object.keys(values) as Field[]).forEach((f) => (e[f] = validate(f, values[f])));
    return e;
  }, [values]);

  const isValid = (Object.keys(values) as Field[]).every((f) => !errors[f]);

  const set = (field: Field, raw: string) => {
    const value = field === "telefone" || field === "whatsapp" ? maskPhone(raw) : raw;
    setValues((v) => ({ ...v, [field]: value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setTouched({
        nome: true,
        telefone: true,
        whatsapp: true,
        email: true,
        cidade: true,
        objetivo: true,
      });
      return;
    }
    setSending(true);
    const message =
      `Olá! Gostaria de agendar uma avaliação na Clínica Thebit.\n\n` +
      `Nome: ${values.nome}\nTelefone: ${values.telefone}\nWhatsApp: ${values.whatsapp}\n` +
      `E-mail: ${values.email}\nCidade: ${values.cidade}\nObjetivo: ${values.objetivo}` +
      (values.mensagem ? `\nMensagem: ${values.mensagem}` : "");

    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    }, 650);
  };

  const fieldClass = (field: Field) => {
    const invalid = touched[field] && errors[field];
    const valid = touched[field] && !errors[field] && values[field];
    return [
      "peer w-full rounded-2xl border bg-transparent px-5 pb-3 pt-6 text-sm text-foreground outline-none transition-all duration-500",
      "placeholder-transparent focus:border-gold focus:shadow-[0_0_0_4px_oklch(72.5%_0.088_78/0.15)]",
      invalid ? "border-destructive/70" : valid ? "border-gold" : "border-border",
    ].join(" ");
  };

  const renderLabel = (field: Field) => {
    const { t } = useI18n();
    return (
      <label
        htmlFor={field}
        className="pointer-events-none absolute left-5 top-4 origin-left font-grotesk text-[0.72rem] font-bold uppercase tracking-[0.2em] text-text-soft transition-all duration-300 peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.6rem]"
      >
        {t(LABELS[field])}
      </label>
    );
  };

  const feedback = (field: Field) =>
    touched[field] && errors[field] ? (
      <p className="mt-1.5 pl-5 text-xs text-destructive">{errors[field]}</p>
    ) : touched[field] && values[field] ? (
      <p className="mt-1.5 flex items-center gap-1.5 pl-5 text-xs text-gold">
        <Check className="size-3" /> Tudo certo
      </p>
    ) : null;

  const textFields: { field: Field; type: string; autoComplete: string; list?: string }[] = [
    { field: "nome", type: "text", autoComplete: "name" },
    { field: "telefone", type: "tel", autoComplete: "tel" },
    { field: "whatsapp", type: "tel", autoComplete: "tel-national" },
    { field: "email", type: "email", autoComplete: "email" },
    { field: "cidade", type: "text", autoComplete: "address-level2", list: "cidades-thebit" },
  ];

  return (
    <form
      onSubmit={submit}
      data-reveal
      className="glass-lux mx-auto max-w-3xl rounded-[2rem] p-8 md:p-10"
      noValidate
    >
      <span className="eyebrow">{t("form.eyebrow")}</span>
      <h2 className="title-display mt-3 text-2xl md:text-4xl">
        {t("form.title")}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-text-soft">
        {t("form.desc")}
      </p>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        {textFields.map(({ field, type, autoComplete, list }) => (
          <div key={field} className={field === "nome" ? "sm:col-span-2" : ""}>
            <div className="relative">
              <input
                id={field}
                name={field}
                type={type}
                placeholder={t(LABELS[field])}
                autoComplete={autoComplete}
                list={list}
                value={values[field]}
                onChange={(e) => set(field, e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, [field]: true }))}
                className={fieldClass(field)}
              />
              {renderLabel(field)}
            </div>
            {feedback(field)}
          </div>
        ))}

        <datalist id="cidades-thebit">
          {CIDADES.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>

        <div>
          <div className="relative">
            <select
              id="objetivo"
              name="objetivo"
              value={values.objetivo}
              onChange={(e) => set("objetivo", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, objetivo: true }))}
              className="w-full appearance-none rounded-2xl border border-border bg-transparent px-5 pb-3 pt-6 text-sm text-foreground outline-none transition-all duration-500 focus:border-gold focus:shadow-[0_0_0_4px_oklch(72.5%_0.088_78/0.15)]"
            >
              <option value="">{t("form.select")}</option>
              {OBJETIVOS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute left-5 top-2 font-grotesk text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold">
              {t(LABELS.objetivo)}
            </span>
          </div>
          {feedback("objetivo")}
        </div>

        <div className="sm:col-span-2">
          <div className="relative">
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder={t(LABELS.mensagem)}
              value={values.mensagem}
              onChange={(e) => set("mensagem", e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, mensagem: true }))}
              className={`${fieldClass("mensagem")} resize-none`}
            />
            {renderLabel("mensagem")}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-gold-lux mt-9 w-full py-5 text-sm disabled:opacity-70"
        data-magnetic
      >
        {sending ? (
          <>
            <Loader2 className="size-4 animate-spin" /> {t("form.sending")}
          </>
        ) : sent ? (
          <>
            <Check className="size-4" /> {t("form.sent")}
          </>
        ) : (
          <>
            <Send className="size-4" /> {t("form.submit")}
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-text-soft">
        {t("form.disclaimer")}
      </p>
    </form>
  );
}
