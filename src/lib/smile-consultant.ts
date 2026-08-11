export type Goal = {
  id: string;
  icon: string;
  /** Instrução específica enviada à IA de imagem - as prompts de sistema não são traduzidas pois a IA entende PT */
  edit: string;
  specialistId: string;
};

export const GOALS: Goal[] = [
  {
    id: "clareamento",
    icon: "🦷",
    edit:
      "Altere APENAS a tonalidade, o brilho, as manchas e a luminosidade dos dentes, deixando-os mais claros de forma natural. " +
      "Não altere formato, tamanho, posição, gengiva, lábios ou qualquer traço facial.",
    specialistId: "fernanda",
  },
  {
    id: "espacos",
    icon: "😁",
    edit:
      "Altere APENAS os diastemas (espaços entre os dentes), o alinhamento sutil e a simetria, fechando os espaços de forma natural. " +
      "Mantenha cor, gengiva, lábios e traços faciais inalterados.",
    specialistId: "daniel",
  },
  {
    id: "alinhamento",
    icon: "✨",
    edit:
      "Altere APENAS o alinhamento e o nivelamento dos dentes, corrigindo pequenas rotações e desníveis de forma conservadora. " +
      "Mantenha cor, formato geral e todos os traços faciais.",
    specialistId: "daniel",
  },
  {
    id: "facetas",
    icon: "💎",
    edit:
      "Simule facetas cerâmicas: altere formato, proporção, largura, altura e simetria dos dentes anteriores, com cor levemente mais clara e natural. " +
      "Preserve integralmente lábios, pele, gengiva e identidade facial.",
    specialistId: "daniel",
  },
  {
    id: "implantes",
    icon: "🦷",
    edit:
      "Reconstrua visualmente os dentes ausentes, com gengiva harmônica e integração natural aos dentes vizinhos em cor e formato. " +
      "Não altere nenhum outro elemento da face.",
    specialistId: "daniel",
  },
  {
    id: "hof",
    icon: "😊",
    edit:
      "Simule harmonização orofacial sutil: contorno mandibular, queixo, contorno facial, lábios e perfil, de forma conservadora e realista. " +
      "Preserve a identidade, idade, etnia e expressão da pessoa.",
    specialistId: "katielly",
  },
  {
    id: "pele",
    icon: "✨",
    edit:
      "Melhore visualmente a textura da pele, reduza manchas, uniformize o tom e aumente a luminosidade de forma natural. " +
      "Não altere formato do rosto, dentes ou identidade.",
    specialistId: "camila",
  },
  {
    id: "avaliacao",
    icon: "🤔",
    edit:
      "Analise o sorriso e aplique um protocolo estético conservador combinando clareamento, recontorno e simetria conforme o que a foto indicar. " +
      "Mantenha a identidade, a iluminação e as proporções naturais da pessoa.",
    specialistId: "daniel",
  },
];

export const PROGRESS_STEPS = [
  "progress.step.0",
  "progress.step.1",
  "progress.step.2",
  "progress.step.3",
  "progress.step.4",
];

export const PHOTO_TIPS = [
  "tips.photo",
  "tips.light",
  "tips.front",
  "tips.filter",
  "tips.teeth",
];

export const TESTIMONIALS = [
  {
    quote: "test.smile.q1",
    author: "test.smile.author1",
  },
  {
    quote: "test.smile.q2",
    author: "test.smile.author2",
  },
  {
    quote: "test.smile.q3",
    author: "test.smile.author3",
  },
  {
    quote: "test.smile.q4",
    author: "test.smile.author4",
  },
];

export const LEGAL_NOTICE = "consultant.legal";

export const DENTAL_GOAL_IDS = [
  "clareamento",
  "espacos",
  "alinhamento",
  "facetas",
  "implantes",
  "avaliacao",
];

export const DENTAL_GOALS = GOALS.filter((g) => DENTAL_GOAL_IDS.includes(g.id));
export const FACIAL_GOALS = GOALS.filter((g) => !DENTAL_GOAL_IDS.includes(g.id));
