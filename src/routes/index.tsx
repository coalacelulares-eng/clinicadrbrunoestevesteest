import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-gemini.jpg";

const WHATSAPP =
  "https://wa.me/552139509590?text=Ol%C3%A1!%20Quero%20ativar%20o%20Google%20AI%20Pro%20por%2018%20meses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Google AI Pro por 18 meses — R$ 97 único | Ativação Oficial" },
      {
        name: "description",
        content:
          "Google AI Pro por 18 meses com um pagamento único de R$ 97. Ativação automática em até 3 minutos na sua conta Google, sem mensalidade e sem renovação.",
      },
      { property: "og:title", content: "Google AI Pro por 18 meses — R$ 97 único" },
      {
        property: "og:description",
        content:
          "Um pagamento de R$ 97, 18 meses de Google AI Pro ativados de uma vez na sua conta Google. Garantia total de ativação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const perks = [
  "18 meses de uma vez",
  "R$ 97 único",
  "Nano Banana Pro ilimitado",
  "Conta Google oficial",
  "Sem renovação",
];

const testimonials = [
  {
    quote:
      "Achei que era pegadinha. Paguei e em poucos minutos já estava tudo ativo na minha conta. Hoje uso o Gemini todo santo dia.",
    name: "Camila Nunes",
    role: "Designer",
  },
  {
    quote:
      "O que eu pagava todo mês em ferramenta, aqui paguei uma vez só. Já indiquei pra metade do meu time.",
    name: "Thiago Ramalho",
    role: "Analista de marketing",
  },
  {
    quote:
      "Gero imagem o dia inteiro pros clientes sem me preocupar com crédito. Só isso já pagou o investimento.",
    name: "Priscila Gomes",
    role: "Social media",
  },
];

const stats = [
  { value: "120+", label: "Ativações entregues", note: "em tempo real" },
  { value: "5,0★", label: "Avaliação dos clientes", note: "nota máxima" },
  { value: "até 3 min", label: "Ativação automática", note: "sem espera" },
  { value: "100%", label: "Reembolso se não ativar", note: "garantia" },
];

const included = [
  "Gemini Pro por 18 meses",
  "5 TB de armazenamento no Google One",
  "Nano Banana Pro, Veo 3, Flow e Whisk",
  "NotebookLM, Deep Research e Code Assist",
  "Antigravity 4× para máxima produtividade",
  "Ativação segura na sua conta Google",
  "Suporte especializado durante todo o período",
];

const features = [
  "Gemini Pro",
  "Nano Banana Pro",
  "Veo 3",
  "Flow",
  "Whisk",
  "NotebookLM",
  "Deep Research",
  "Code Assist",
  "Antigravity 4×",
  "Google One 5 TB",
];

const steps = [
  {
    tag: "2 min",
    num: "01",
    title: "Você garante o plano",
    text: "R$ 97 únicos por Pix ou cartão. Sem assinatura, sem fidelidade.",
  },
  {
    tag: "até 3 min",
    num: "02",
    title: "Ativação automática",
    text: "Assim que o pagamento confirma, o sistema ativa e envia seu acesso por WhatsApp e e-mail.",
  },
  {
    tag: "1 clique",
    num: "03",
    title: "Ativado na sua conta",
    text: "Você aceita logado e os 18 meses aparecem no Google One e no app Gemini.",
  },
];

const faqs = [
  {
    q: "Esse é o Google AI Pro oficial?",
    a: "Sim. É o mesmo plano vendido em gemini.google, ativado na sua conta Google com todos os recursos oficiais.",
  },
  {
    q: "Preciso informar minha senha?",
    a: "Nunca. Você mesmo autoriza a ativação já logado na sua conta Google. Sua senha não é pedida em nenhum momento.",
  },
  {
    q: "O que significa 18 meses de uma vez?",
    a: "Os 18 meses entram no seu plano em uma única ativação. Não existe cobrança mensal, renovação automática ou cartão preso.",
  },
  {
    q: "Em quanto tempo recebo?",
    a: "A ativação é automática e normalmente leva até 3 minutos após a confirmação do pagamento. Você recebe o acesso por WhatsApp e e-mail.",
  },
  {
    q: "Vocês são parceiros do Google?",
    a: "Não. Somos um revendedor independente. O que segura o preço é a compra em grande volume somada a parcerias com fornecedores — a ativação acontece nos servidores do próprio Google.",
  },
];

function CtaButton({ children, className = "" }: { children: string; className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-lg bg-secondary text-sm font-bold">
              G
            </span>
            <span className="text-sm font-semibold tracking-tight">AI Pro Brasil</span>
          </div>
          <div className="hidden items-center gap-3 text-xs text-muted-foreground sm:flex">
            <span className="text-foreground">Gemini AI Pro</span>
            <span>18 meses ·</span>
            <span className="font-semibold text-foreground">R$ 97</span>
          </div>
          <CtaButton className="px-5 py-2 text-xs">Ativar</CtaButton>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Luz abstrata representando o Google AI Pro"
          width={1600}
          height={1200}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-border bg-card/70 px-3 py-1 text-muted-foreground">
              Plano oficial Google
            </span>
            <span className="rounded-full bg-chart-2/15 px-3 py-1 font-semibold text-chart-2">
              −94%
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Google <span className="text-muted-foreground">AI Pro,</span>
            <br />
            por 18 meses.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Um pagamento de <span className="font-semibold text-foreground">R$ 97</span>, ativado de
            uma vez na sua conta Google. Sem mensalidade, sem renovação, sem cartão preso.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaButton>Ativar 18 meses</CtaButton>
            <a href="#preco" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Por que R$ 97?
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-end gap-x-8 gap-y-3 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">No Google</p>
              <p className="mt-1 text-lg text-muted-foreground line-through">R$ 1.745,82</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight">R$ 97</p>
              <p className="text-xs text-muted-foreground">único · R$ 5,39/mês</p>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>Ativação automática, até 3 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b border-border bg-card/40 py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-xs uppercase tracking-widest text-muted-foreground">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-10">
              {perks.map((p) => (
                <span key={p} className="flex items-center gap-3">
                  <span className="size-1 rounded-full bg-chart-3" />
                  {p}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Quem já ativou</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Antes de explicar, veja quem já confiou.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-input"
            >
              <div className="text-sm text-chart-4">★★★★★</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-secondary text-xs font-semibold">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-6">
              <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-chart-2/25 bg-chart-2/5 p-6">
            <h3 className="text-base font-semibold">Ativou, ou seu dinheiro de volta.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Se o plano não puder ser ativado na sua conta, devolvemos 100% do valor. Sem perguntas.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-6">
            <h3 className="text-base font-semibold">Sua senha nunca é pedida.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Você mesmo autoriza, logado no Google. Ninguém entra na sua conta.
            </p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="oferta" className="border-y border-border bg-card/30 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">A oferta</p>
            <p className="mt-4 text-6xl font-semibold tracking-tighter text-foreground/15 md:text-8xl">
              18MESES
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              No Google são R$ 96,99 todo mês, pra sempre. Aqui, R$ 97 uma vez, e os 18 meses
              inteiros ficam seus.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <span className="rounded-full bg-destructive/15 px-3 py-1 text-xs font-medium text-destructive">
              Oferta por tempo limitado
            </span>
            <div className="mt-6 flex items-end gap-3">
              <p className="text-5xl font-semibold tracking-tight">R$97</p>
              <p className="pb-2 text-sm text-muted-foreground">pagamento único</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Pague 1 vez e use por <span className="text-foreground">18 meses</span>
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {included.map((i) => (
                <li key={i} className="flex gap-3 text-foreground/90">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-chart-2" />
                  {i}
                </li>
              ))}
            </ul>
            <CtaButton className="mt-8 w-full">Ativar por R$ 97 no WhatsApp</CtaButton>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Reembolso total se a ativação não for concluída
            </p>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">O que está incluso</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Tudo que o Google entrega no AI Pro.
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/90"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Google Flow</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Cinema gerado por descrição.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              O estúdio de vídeo com IA do Google. Cenas cinematográficas com Nano Banana Pro
              incluso.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <p className="text-xl font-semibold">1.000</p>
                <p className="text-xs text-muted-foreground">créditos / mês</p>
              </div>
              <div>
                <p className="text-xl font-semibold">18.000</p>
                <p className="text-xs text-muted-foreground">no total</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">NotebookLM</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Sua pesquisa vira áudio.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Resumos em áudio 5× maiores e notebooks ilimitados para estudo, escrita e pesquisa.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <p className="text-xl font-semibold">5×</p>
                <p className="text-xs text-muted-foreground">mais áudio</p>
              </div>
              <div>
                <p className="text-xl font-semibold">∞</p>
                <p className="text-xs text-muted-foreground">notebooks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price explained */}
      <section id="preco" className="border-y border-border bg-card/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Por que esse preço existe
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            O preço, explicado. Sem pegadinha.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Aqui não tem truque. Trabalhamos com compra de planos Google AI Pro em{" "}
              <span className="text-foreground">grande quantidade</span>, direto e dentro das regras,
              e mantemos <span className="text-foreground">parcerias com fornecedores</span> que
              abrem condições impossíveis pra quem tenta comprar sozinho.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Esse desconto de volume a gente passa adiante. Você recebe{" "}
              <span className="text-foreground">exatamente o mesmo plano</span> que o Google vende,
              ativado nos servidores do próprio Google, dentro da conta que já é sua. O que muda é só
              quanto sai do seu bolso.
            </p>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Não somos parceiros nem afiliados do Google. É a escala da compra somada às parcerias que
            segura o preço lá embaixo.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { n: "1", t: "Compra em escala", s: "custo cai" },
              { n: "2", t: "Parcerias com fornecedores", s: "oferta melhor" },
              { n: "3", t: "Ativação pelos servidores do Google", s: "oficial" },
            ].map((c) => (
              <div key={c.n} className="rounded-2xl border border-border bg-card p-6">
                <span className="text-xs text-muted-foreground">{c.n}</span>
                <p className="mt-3 text-sm font-medium">{c.t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.s}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-chart-2/25 bg-chart-2/5 p-6">
              <span className="text-xs text-chart-2">→</span>
              <p className="mt-3 text-sm font-medium">Seu preço final</p>
              <p className="mt-1 text-xs text-muted-foreground">R$ 97, uma vez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Como funciona</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Três passos. Uma ativação só.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold text-foreground/20">{s.num}</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Perguntas frequentes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            O essencial antes de ativar.
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Ative seus 18 meses.</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          R$ 97 únicos, ativados de uma vez na sua conta Google. Ativação automática em até 3
          minutos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton>Comprar por R$ 97</CtaButton>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-input px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            Falar com suporte
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Pagamento seguro · Sem fidelidade · Garantia de ativação
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-xs text-muted-foreground">
          <span>AI Pro Brasil · Revendedor independente</span>
          <span>
            <span className="line-through">R$ 1.745,82</span> · −94%
          </span>
          <span className="text-foreground">R$ 97 / 18 meses</span>
        </div>
      </footer>
    </div>
  );
}
