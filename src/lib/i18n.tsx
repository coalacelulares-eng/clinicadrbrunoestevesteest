import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en" | "es";

type Dict = Record<string, string>;

const pt: Dict = {
  "nav.home": "Início",
  "nav.about": "Sobre",
  "nav.specialties": "Especialidades",
  "nav.tech": "Tecnologias",
  "nav.barbies": "Fábrica de Barbies",
  "nav.international": "Consulta Internacional",
  "nav.contact": "Contato",
  "cta.book": "Agendar avaliação",
  "cta.trajectory": "Conheça minha trajetória",
  "cta.whatsapp": "Falar no WhatsApp",

  "hero.eyebrow": "Cirurgia plástica de alta precisão",
  "hero.title.a": "A beleza que já",
  "hero.title.gold": "existe",
  "hero.title.b": "em você.",
  "hero.text":
    "Cirurgia plástica autoral, planejada milímetro a milímetro para respeitar a sua anatomia, o seu tempo e a sua história.",
  "hero.scroll": "Deslize",

  "about.eyebrow": "Muito prazer",
  "about.title": "Precisão cirúrgica, olhar de artista.",
  "about.text":
    "Dedico minha carreira a uma cirurgia plástica silenciosa: aquela que ninguém aponta, mas todos percebem. Cada plano cirúrgico nasce de uma conversa longa, de exames minuciosos e de um compromisso — resultado natural, seguro e duradouro.",
  "about.c1": "Membro Titular da Sociedade Brasileira de Cirurgia Plástica",
  "about.c2": "Formação complementar em cirurgia mamária e contorno corporal",
  "about.c3": "Mais de 3.000 procedimentos realizados",

  "barbies.eyebrow": "Assinatura estética",
  "barbies.title": "A nossa Fábrica de Barbies.",
  "barbies.text":
    "Não é um molde. É um método. Um protocolo próprio de harmonia entre mama, cintura e quadril que respeita proporção, movimento e a identidade de cada paciente.",
  "barbies.p1": "Planejamento 3D individual",
  "barbies.p2": "Proporção áurea aplicada ao corpo",
  "barbies.p3": "Recuperação assistida passo a passo",

  "spec.eyebrow": "Especialidades",
  "spec.title": "Procedimentos assinados.",
  "spec.text": "Escolha uma área e responda 4 perguntas rápidas para receber um direcionamento.",
  "spec.breast": "Mama",
  "spec.breast.d": "Mastopexia, prótese, sutiã interno e simetrização.",
  "spec.body": "Corpo",
  "spec.body.d": "Lipo HD, abdominoplastia e contorno corporal.",
  "spec.face": "Face",
  "spec.face.d": "Rinoplastia, deep plane e blefaroplastia.",
  "spec.intimate": "Íntima",
  "spec.intimate.d": "Ninfoplastia e rejuvenescimento íntimo.",

  "tech.eyebrow": "Técnicas cirúrgicas",
  "tech.title": "Técnicas que sustentam o resultado.",
  "tech.mila": "MILA",
  "tech.mila.d": "Mastopexia com incisão mínima e sustentação interna.",
  "tech.bra": "Sutiã Interno",
  "tech.bra.d": "Suporte estrutural que preserva o formato da mama ao longo dos anos.",
  "tech.hd": "Lipo HD",
  "tech.hd.d": "Definição muscular com preservação vascular e recuperação rápida.",

  "authority.eyebrow": "Autoridade & formação",
  "authority.title": "Números que traduzem cuidado.",
  "authority.s1": "procedimentos realizados",
  "authority.s2": "anos de prática cirúrgica",
  "authority.s3": "pacientes internacionais",
  "authority.s4": "de satisfação relatada",

  "exp.eyebrow": "Experiência",
  "exp.title": "Pensado em cada detalhe.",
  "exp.i1": "Consulta sem pressa, de 60 minutos",
  "exp.i2": "Equipe multidisciplinar dedicada",
  "exp.i3": "Centro cirúrgico de alta complexidade",
  "exp.i4": "Acompanhamento pós-operatório por 12 meses",

  "ba.eyebrow": "Antes & depois",
  "ba.title": "Resultados que respeitam a origem.",
  "ba.before": "Antes",
  "ba.after": "Depois",
  "ba.disclaimer":
    "Imagens ilustrativas e autorizadas. Cada caso é único e os resultados variam conforme anatomia e cicatrização.",

  "test.eyebrow": "Depoimentos",
  "test.title": "Quem confiou o próprio corpo.",
  "test.q1":
    "Fui ouvida antes de ser operada. O resultado é exatamente o corpo que eu já sentia ser meu.",
  "test.q2": "Cuidado do primeiro contato ao último retorno. Segurança em cada etapa.",
  "test.q3": "Natural, harmônico e discreto. Ninguém percebe a cirurgia, todos percebem a mudança.",

  "goal.eyebrow": "Diagnóstico rápido",
  "goal.title": "Qual é o seu objetivo principal hoje?",
  "goal.g1": "Harmonizar as mamas",
  "goal.g2": "Definir o contorno corporal",
  "goal.g3": "Rejuvenescer a face",
  "goal.g4": "Ainda estou pesquisando",

  "faq.eyebrow": "Perguntas frequentes",
  "faq.title": "Antes de agendar.",
  "faq.q1": "Como funciona a primeira consulta?",
  "faq.a1":
    "São 60 minutos de avaliação: história clínica, exame físico, simulação do resultado e plano cirúrgico personalizado.",
  "faq.q2": "Qual o tempo de recuperação?",
  "faq.a2":
    "Varia por procedimento. Em média, 7 a 14 dias de repouso e retorno gradual às atividades em 30 dias, com acompanhamento próximo.",
  "faq.q3": "Atende pacientes de outros estados e países?",
  "faq.a3":
    "Sim. Existe um protocolo internacional com pré-avaliação por vídeo, agenda concentrada e suporte de hospedagem.",
  "faq.q4": "As cirurgias são feitas em hospital?",
  "faq.a4":
    "Todas as cirurgias acontecem em centro cirúrgico hospitalar de alta complexidade, com anestesista da equipe.",

  "intl.eyebrow": "Consulta internacional",
  "intl.title": "Para quem vem de longe.",
  "intl.text":
    "Um protocolo desenhado para pacientes fora do Rio de Janeiro: avaliação por vídeo, exames à distância, agenda concentrada e retornos remotos.",
  "intl.b1": "Pré-avaliação por videochamada",
  "intl.b2": "Suporte em português, inglês e espanhol",
  "intl.b3": "Indicação de hospedagem e transfer",
  "intl.b4": "Retornos remotos após a alta",

  "final.title": "Sua avaliação começa com uma conversa.",
  "final.text": "Agende diretamente com a equipe e receba um direcionamento inicial.",

  "quiz.title": "Vamos entender o seu caso",
  "quiz.q1": "Você já realizou algum procedimento?",
  "quiz.q1.o1": "Nunca realizei",
  "quiz.q1.o2": "Já fiz um procedimento",
  "quiz.q1.o3": "Já fiz mais de um",
  "quiz.q2": "Quando pretende realizar?",
  "quiz.q2.o1": "Nos próximos 30 dias",
  "quiz.q2.o2": "Em 2 a 6 meses",
  "quiz.q2.o3": "Ainda estou planejando",
  "quiz.q3": "Onde você mora?",
  "quiz.q3.o1": "Rio de Janeiro",
  "quiz.q3.o2": "Outro estado do Brasil",
  "quiz.q3.o3": "Fora do Brasil",
  "quiz.q4": "Melhor forma de contato?",
  "quiz.q4.o1": "WhatsApp",
  "quiz.q4.o2": "Ligação",
  "quiz.q4.o3": "E-mail",
  "quiz.send": "Enviar no WhatsApp",
  "quiz.step": "Etapa",

  "wa.default": "Olá! Gostaria de agendar uma avaliação com a Dra. Jackline Félix.",
  "wa.goal": "Olá! Meu objetivo principal hoje é:",
  "wa.quiz": "Olá! Quero uma avaliação. Área de interesse:",

  "footer.rights": "Todos os direitos reservados.",
  "footer.disclaimer":
    "Conteúdo informativo, sem promessa de resultado. Resultados variam de paciente para paciente.",
};

const en: Dict = {
  ...pt,
  "nav.home": "Home",
  "nav.about": "About",
  "nav.specialties": "Specialties",
  "nav.tech": "Technologies",
  "nav.barbies": "Barbie Factory",
  "nav.international": "International Patients",
  "nav.contact": "Contact",
  "cta.book": "Book a consultation",
  "cta.trajectory": "Discover my journey",
  "cta.whatsapp": "Chat on WhatsApp",

  "hero.eyebrow": "High-precision plastic surgery",
  "hero.title.a": "The beauty that already",
  "hero.title.gold": "lives",
  "hero.title.b": "in you.",
  "hero.text":
    "Signature plastic surgery, planned millimeter by millimeter to respect your anatomy, your timing and your story.",
  "hero.scroll": "Scroll",

  "about.eyebrow": "Nice to meet you",
  "about.title": "Surgical precision, an artist's eye.",
  "about.text":
    "My career is devoted to quiet plastic surgery: the kind nobody points at, yet everybody notices. Every surgical plan starts with a long conversation, careful exams and one commitment — natural, safe, lasting results.",
  "about.c1": "Full member of the Brazilian Society of Plastic Surgery",
  "about.c2": "Advanced training in breast surgery and body contouring",
  "about.c3": "Over 3,000 procedures performed",

  "barbies.eyebrow": "Aesthetic signature",
  "barbies.title": "Our Barbie Factory.",
  "barbies.text":
    "Not a mold — a method. A proprietary protocol of harmony between breast, waist and hips that respects proportion, movement and each patient's identity.",
  "barbies.p1": "Individual 3D planning",
  "barbies.p2": "Golden ratio applied to the body",
  "barbies.p3": "Guided step-by-step recovery",

  "spec.eyebrow": "Specialties",
  "spec.title": "Signature procedures.",
  "spec.text": "Pick an area and answer 4 quick questions to get initial guidance.",
  "spec.breast": "Breast",
  "spec.breast.d": "Mastopexy, implants, internal bra and symmetry.",
  "spec.body": "Body",
  "spec.body.d": "HD lipo, abdominoplasty and body contouring.",
  "spec.face": "Face",
  "spec.face.d": "Rhinoplasty, deep plane and blepharoplasty.",
  "spec.intimate": "Intimate",
  "spec.intimate.d": "Labiaplasty and intimate rejuvenation.",

  "tech.eyebrow": "Surgical techniques",
  "tech.title": "Techniques that hold the result.",
  "tech.mila.d": "Mastopexy with minimal incision and internal support.",
  "tech.bra": "Internal Bra",
  "tech.bra.d": "Structural support that preserves breast shape over the years.",
  "tech.hd.d": "Muscle definition with vascular preservation and fast recovery.",

  "authority.eyebrow": "Authority & training",
  "authority.title": "Numbers that translate care.",
  "authority.s1": "procedures performed",
  "authority.s2": "years of surgical practice",
  "authority.s3": "international patients",
  "authority.s4": "reported satisfaction",

  "exp.eyebrow": "Experience",
  "exp.title": "Considered in every detail.",
  "exp.i1": "Unhurried 60-minute consultation",
  "exp.i2": "Dedicated multidisciplinary team",
  "exp.i3": "High-complexity surgical center",
  "exp.i4": "12 months of post-op follow-up",

  "ba.eyebrow": "Before & after",
  "ba.title": "Results that respect the origin.",
  "ba.before": "Before",
  "ba.after": "After",
  "ba.disclaimer":
    "Illustrative, authorized images. Every case is unique and results vary with anatomy and healing.",

  "test.eyebrow": "Testimonials",
  "test.title": "Those who trusted their own body.",
  "test.q1": "I was heard before I was operated on. The result is exactly the body I always felt was mine.",
  "test.q2": "Care from the first contact to the last follow-up. Safety at every step.",
  "test.q3": "Natural, harmonious, discreet. Nobody notices the surgery, everybody notices the change.",

  "goal.eyebrow": "Quick assessment",
  "goal.title": "What is your main goal today?",
  "goal.g1": "Harmonize my breasts",
  "goal.g2": "Define my body contour",
  "goal.g3": "Rejuvenate my face",
  "goal.g4": "Still researching",

  "faq.eyebrow": "Frequently asked",
  "faq.title": "Before you book.",
  "faq.q1": "How does the first consultation work?",
  "faq.a1":
    "60 minutes of assessment: clinical history, physical exam, result simulation and a personalized surgical plan.",
  "faq.q2": "What is the recovery time?",
  "faq.a2":
    "It varies by procedure. On average 7 to 14 days of rest and a gradual return to activities within 30 days, with close follow-up.",
  "faq.q3": "Do you see patients from other states and countries?",
  "faq.a3":
    "Yes. There is an international protocol with video pre-assessment, a concentrated schedule and accommodation support.",
  "faq.q4": "Are surgeries performed in a hospital?",
  "faq.a4":
    "All surgeries take place in a high-complexity hospital surgical center with our own anesthesiologist.",

  "intl.eyebrow": "International patients",
  "intl.title": "For those coming from afar.",
  "intl.text":
    "A protocol designed for patients outside Rio de Janeiro: video assessment, remote exams, concentrated schedule and remote follow-ups.",
  "intl.b1": "Video pre-assessment",
  "intl.b2": "Support in Portuguese, English and Spanish",
  "intl.b3": "Hotel and transfer guidance",
  "intl.b4": "Remote follow-ups after discharge",

  "final.title": "Your assessment starts with a conversation.",
  "final.text": "Book directly with our team and get initial guidance.",

  "quiz.title": "Let's understand your case",
  "quiz.q1": "Have you had any procedure before?",
  "quiz.q1.o1": "Never had one",
  "quiz.q1.o2": "One procedure",
  "quiz.q1.o3": "More than one",
  "quiz.q2": "When are you planning it?",
  "quiz.q2.o1": "Within 30 days",
  "quiz.q2.o2": "In 2 to 6 months",
  "quiz.q2.o3": "Still planning",
  "quiz.q3": "Where do you live?",
  "quiz.q3.o1": "Rio de Janeiro",
  "quiz.q3.o2": "Another Brazilian state",
  "quiz.q3.o3": "Outside Brazil",
  "quiz.q4": "Best way to reach you?",
  "quiz.q4.o1": "WhatsApp",
  "quiz.q4.o2": "Phone call",
  "quiz.q4.o3": "Email",
  "quiz.send": "Send on WhatsApp",
  "quiz.step": "Step",

  "wa.default": "Hello! I'd like to book a consultation with Dr. Jackline Félix.",
  "wa.goal": "Hello! My main goal today is:",
  "wa.quiz": "Hello! I'd like an assessment. Area of interest:",

  "footer.rights": "All rights reserved.",
  "footer.disclaimer":
    "Informational content, with no promise of results. Results vary from patient to patient.",
};

const es: Dict = {
  ...pt,
  "nav.home": "Inicio",
  "nav.about": "Sobre mí",
  "nav.specialties": "Especialidades",
  "nav.tech": "Tecnologías",
  "nav.barbies": "Fábrica de Barbies",
  "nav.international": "Pacientes internacionales",
  "nav.contact": "Contacto",
  "cta.book": "Agendar evaluación",
  "cta.trajectory": "Conoce mi trayectoria",
  "cta.whatsapp": "Hablar por WhatsApp",

  "hero.eyebrow": "Cirugía plástica de alta precisión",
  "hero.title.a": "La belleza que ya",
  "hero.title.gold": "existe",
  "hero.title.b": "en ti.",
  "hero.text":
    "Cirugía plástica de autor, planificada milímetro a milímetro para respetar tu anatomía, tu tiempo y tu historia.",
  "hero.scroll": "Desliza",

  "about.eyebrow": "Mucho gusto",
  "about.title": "Precisión quirúrgica, mirada de artista.",
  "about.text":
    "Dedico mi carrera a una cirugía plástica silenciosa: la que nadie señala, pero todos notan. Cada plan quirúrgico nace de una conversación larga, exámenes minuciosos y un compromiso: resultado natural, seguro y duradero.",
  "about.c1": "Miembro titular de la Sociedad Brasileña de Cirugía Plástica",
  "about.c2": "Formación avanzada en cirugía mamaria y contorno corporal",
  "about.c3": "Más de 3.000 procedimientos realizados",

  "barbies.eyebrow": "Firma estética",
  "barbies.title": "Nuestra Fábrica de Barbies.",
  "barbies.text":
    "No es un molde, es un método. Un protocolo propio de armonía entre mama, cintura y cadera que respeta proporción, movimiento e identidad.",
  "barbies.p1": "Planificación 3D individual",
  "barbies.p2": "Proporción áurea aplicada al cuerpo",
  "barbies.p3": "Recuperación asistida paso a paso",

  "spec.eyebrow": "Especialidades",
  "spec.title": "Procedimientos de autor.",
  "spec.text": "Elige un área y responde 4 preguntas rápidas para recibir orientación.",
  "spec.breast": "Mama",
  "spec.breast.d": "Mastopexia, prótesis, sujetador interno y simetría.",
  "spec.body": "Cuerpo",
  "spec.body.d": "Lipo HD, abdominoplastia y contorno corporal.",
  "spec.face": "Rostro",
  "spec.face.d": "Rinoplastia, deep plane y blefaroplastia.",
  "spec.intimate": "Íntima",
  "spec.intimate.d": "Ninfoplastia y rejuvenecimiento íntimo.",

  "tech.eyebrow": "Técnicas quirúrgicas",
  "tech.title": "Técnicas que sostienen el resultado.",
  "tech.mila.d": "Mastopexia con incisión mínima y sostén interno.",
  "tech.bra": "Sujetador interno",
  "tech.bra.d": "Soporte estructural que preserva la forma de la mama con los años.",
  "tech.hd.d": "Definición muscular con preservación vascular y recuperación rápida.",

  "authority.eyebrow": "Autoridad y formación",
  "authority.title": "Números que traducen cuidado.",
  "authority.s1": "procedimientos realizados",
  "authority.s2": "años de práctica quirúrgica",
  "authority.s3": "pacientes internacionales",
  "authority.s4": "de satisfacción reportada",

  "exp.eyebrow": "Experiencia",
  "exp.title": "Pensado en cada detalle.",
  "exp.i1": "Consulta sin prisa de 60 minutos",
  "exp.i2": "Equipo multidisciplinario dedicado",
  "exp.i3": "Centro quirúrgico de alta complejidad",
  "exp.i4": "12 meses de seguimiento posoperatorio",

  "ba.eyebrow": "Antes y después",
  "ba.title": "Resultados que respetan el origen.",
  "ba.before": "Antes",
  "ba.after": "Después",
  "ba.disclaimer":
    "Imágenes ilustrativas y autorizadas. Cada caso es único y los resultados varían según anatomía y cicatrización.",

  "test.eyebrow": "Testimonios",
  "test.title": "Quienes confiaron su propio cuerpo.",
  "test.q1": "Fui escuchada antes de ser operada. El resultado es el cuerpo que siempre sentí mío.",
  "test.q2": "Cuidado desde el primer contacto hasta el último control. Seguridad en cada etapa.",
  "test.q3": "Natural, armónico y discreto. Nadie nota la cirugía, todos notan el cambio.",

  "goal.eyebrow": "Diagnóstico rápido",
  "goal.title": "¿Cuál es tu objetivo principal hoy?",
  "goal.g1": "Armonizar las mamas",
  "goal.g2": "Definir el contorno corporal",
  "goal.g3": "Rejuvenecer el rostro",
  "goal.g4": "Todavía estoy investigando",

  "faq.eyebrow": "Preguntas frecuentes",
  "faq.title": "Antes de agendar.",
  "faq.q1": "¿Cómo es la primera consulta?",
  "faq.a1":
    "60 minutos de evaluación: historia clínica, examen físico, simulación del resultado y plan quirúrgico personalizado.",
  "faq.q2": "¿Cuánto dura la recuperación?",
  "faq.a2":
    "Varía según el procedimiento. En promedio 7 a 14 días de reposo y retorno gradual en 30 días, con seguimiento cercano.",
  "faq.q3": "¿Atiende pacientes de otros estados y países?",
  "faq.a3":
    "Sí. Existe un protocolo internacional con pre-evaluación por video, agenda concentrada y apoyo de alojamiento.",
  "faq.q4": "¿Las cirugías se realizan en hospital?",
  "faq.a4":
    "Todas las cirugías se realizan en un centro quirúrgico hospitalario de alta complejidad, con anestesista del equipo.",

  "intl.eyebrow": "Pacientes internacionales",
  "intl.title": "Para quienes vienen de lejos.",
  "intl.text":
    "Un protocolo diseñado para pacientes fuera de Río de Janeiro: evaluación por video, exámenes a distancia, agenda concentrada y controles remotos.",
  "intl.b1": "Pre-evaluación por videollamada",
  "intl.b2": "Atención en portugués, inglés y español",
  "intl.b3": "Orientación de alojamiento y transfer",
  "intl.b4": "Controles remotos tras el alta",

  "final.title": "Tu evaluación empieza con una conversación.",
  "final.text": "Agenda directamente con el equipo y recibe una orientación inicial.",

  "quiz.title": "Entendamos tu caso",
  "quiz.q1": "¿Ya te realizaste algún procedimiento?",
  "quiz.q1.o1": "Nunca",
  "quiz.q1.o2": "Uno",
  "quiz.q1.o3": "Más de uno",
  "quiz.q2": "¿Cuándo piensas realizarlo?",
  "quiz.q2.o1": "En los próximos 30 días",
  "quiz.q2.o2": "En 2 a 6 meses",
  "quiz.q2.o3": "Todavía lo planeo",
  "quiz.q3": "¿Dónde vives?",
  "quiz.q3.o1": "Río de Janeiro",
  "quiz.q3.o2": "Otro estado de Brasil",
  "quiz.q3.o3": "Fuera de Brasil",
  "quiz.q4": "¿Mejor forma de contacto?",
  "quiz.q4.o1": "WhatsApp",
  "quiz.q4.o2": "Llamada",
  "quiz.q4.o3": "Correo",
  "quiz.send": "Enviar por WhatsApp",
  "quiz.step": "Paso",

  "wa.default": "¡Hola! Quisiera agendar una evaluación con la Dra. Jackline Félix.",
  "wa.goal": "¡Hola! Mi objetivo principal hoy es:",
  "wa.quiz": "¡Hola! Quiero una evaluación. Área de interés:",

  "footer.rights": "Todos los derechos reservados.",
  "footer.disclaimer":
    "Contenido informativo, sin promesa de resultados. Los resultados varían de paciente a paciente.",
};

const dictionaries: Record<Lang, Dict> = { pt, en, es };

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("jf-lang");
    if (stored === "pt" || stored === "en" || stored === "es") setLang(stored);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang: (next) => {
        setLang(next);
        window.localStorage.setItem("jf-lang", next);
      },
      t: (key) => dictionaries[lang][key] ?? key,
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
