export type Goal = {
  id: string;
  icon: string;
  label: string;
  simulation: string;
  /** Instrução específica enviada à IA de imagem */
  edit: string;
  improvements: string[];
  specialist: string;
};

export const GOALS: Goal[] = [
  {
    id: "clareamento",
    icon: "🦷",
    label: "Clarear meus dentes",
    simulation: "Clareamento Dental",
    edit:
      "Altere APENAS a tonalidade, o brilho, as manchas e a luminosidade dos dentes, deixando-os mais claros de forma natural. " +
      "Não altere formato, tamanho, posição, gengiva, lábios ou qualquer traço facial.",
    improvements: [
      "Clareamento da tonalidade",
      "Uniformização da cor",
      "Redução visual de manchas",
      "Mais luminosidade no sorriso",
    ],
    specialist: "Dra. Fernanda Montrezor",
  },
  {
    id: "espacos",
    icon: "😁",
    label: "Fechar espaços entre os dentes",
    simulation: "Fechamento de Espaços",
    edit:
      "Altere APENAS os diastemas (espaços entre os dentes), o alinhamento sutil e a simetria, fechando os espaços de forma natural. " +
      "Mantenha cor, gengiva, lábios e traços faciais inalterados.",
    improvements: [
      "Fechamento de diastemas",
      "Alinhamento sutil",
      "Simetria do sorriso",
      "Harmonia visual",
    ],
    specialist: "Dr. Daniel Thebit",
  },
  {
    id: "alinhamento",
    icon: "✨",
    label: "Melhorar o alinhamento",
    simulation: "Alinhamento do Sorriso",
    edit:
      "Altere APENAS o alinhamento e o nivelamento dos dentes, corrigindo pequenas rotações e desníveis de forma conservadora. " +
      "Mantenha cor, formato geral e todos os traços faciais.",
    improvements: [
      "Nivelamento das bordas",
      "Correção de rotações",
      "Simetria do arco",
      "Harmonia do sorriso",
    ],
    specialist: "Dr. Daniel Thebit",
  },
  {
    id: "facetas",
    icon: "💎",
    label: "Facetas ou Lentes de Contato",
    simulation: "Facetas / Lentes de Contato",
    edit:
      "Simule facetas cerâmicas: altere formato, proporção, largura, altura e simetria dos dentes anteriores, com cor levemente mais clara e natural. " +
      "Preserve integralmente lábios, pele, gengiva e identidade facial.",
    improvements: [
      "Proporção áurea dos dentes",
      "Formato e contorno refinados",
      "Simetria entre os incisivos",
      "Cor natural e uniforme",
    ],
    specialist: "Dr. Daniel Thebit",
  },
  {
    id: "implantes",
    icon: "🦷",
    label: "Implantes Dentários",
    simulation: "Implantes Dentários",
    edit:
      "Reconstrua visualmente os dentes ausentes, com gengiva harmônica e integração natural aos dentes vizinhos em cor e formato. " +
      "Não altere nenhum outro elemento da face.",
    improvements: [
      "Reposição visual de ausências",
      "Contorno gengival harmônico",
      "Integração com dentes vizinhos",
      "Sorriso completo",
    ],
    specialist: "Dr. Daniel Thebit",
  },
  {
    id: "hof",
    icon: "😊",
    label: "Harmonização Orofacial",
    simulation: "Harmonização Orofacial",
    edit:
      "Simule harmonização orofacial sutil: contorno mandibular, queixo, contorno facial, lábios e perfil, de forma conservadora e realista. " +
      "Preserve a identidade, idade, etnia e expressão da pessoa.",
    improvements: [
      "Contorno mandibular definido",
      "Projeção sutil do queixo",
      "Lábios mais harmônicos",
      "Equilíbrio do perfil",
    ],
    specialist: "Dra. Bianca Medeiros",
  },
  {
    id: "pele",
    icon: "✨",
    label: "Melhorar minha pele",
    simulation: "Dermatologia Estética",
    edit:
      "Melhore visualmente a textura da pele, reduza manchas, uniformize o tom e aumente a luminosidade de forma natural. " +
      "Não altere formato do rosto, dentes ou identidade.",
    improvements: [
      "Textura mais uniforme",
      "Redução visual de manchas",
      "Tom homogêneo",
      "Viço e luminosidade",
    ],
    specialist: "Dra. Camila Attiê",
  },
  {
    id: "avaliacao",
    icon: "🤔",
    label: "Não sei qual tratamento preciso. Quero uma avaliação inteligente.",
    simulation: "Avaliação Estética Inteligente",
    edit:
      "Analise o sorriso e aplique um protocolo estético conservador combinando clareamento, recontorno e simetria conforme o que a foto indicar. " +
      "Mantenha a identidade, a iluminação e as proporções naturais da pessoa.",
    improvements: [
      "Análise de cor e alinhamento",
      "Simetria e proporção",
      "Contorno gengival",
      "Harmonia global do sorriso",
    ],
    specialist: "Dr. Daniel Thebit",
  },
];

export const SPECIALISTS: Record<
  string,
  { name: string; role: string; bio: string; instagram: string }
> = {
  "Dr. Daniel Thebit": {
    name: "Dr. Daniel Thebit",
    role: "CEO · Especialista em Dentística",
    bio: "Estética dental avançada, lentes de contato e laminados cerâmicos. Formação ILAPEO. 35 anos de tradição familiar.",
    instagram: "https://www.instagram.com/dr.danielthebit/",
  },
  "Dra. Bianca Medeiros": {
    name: "Dra. Bianca Medeiros",
    role: "Harmonização Orofacial",
    bio: "Contorno facial, fios de sustentação, toxina botulínica e lipo de papada.",
    instagram: "https://www.instagram.com/drabiancamedeiros/",
  },
  "Dra. Camila Attiê": {
    name: "Dra. Camila Attiê",
    role: "Dermatologia Clínica e Estética",
    bio: "Gerenciamento de pele, injetáveis avançados e rejuvenescimento natural.",
    instagram: "https://www.instagram.com/dra.camilaattie/",
  },
  "Dra. Fernanda Montrezor": {
    name: "Dra. Fernanda Montrezor",
    role: "Clínica Geral e Estética",
    bio: "Odontologia estética e restauradora, profilaxia e clareamentos.",
    instagram: "https://www.instagram.com/dra.fernandamontrezor/",
  },
};

export const PROGRESS_STEPS = [
  "Analisando seu sorriso...",
  "Comparando proporções...",
  "Aplicando protocolos estéticos...",
  "Gerando simulação ilustrativa...",
  "Aguarde alguns segundos...",
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
