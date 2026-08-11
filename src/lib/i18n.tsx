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
  "nav.about": "A Clínica",
  "nav.specialties": "Tratamentos",
  "nav.tech": "Tecnologia",
  "nav.team": "Equipe",
  "nav.structure": "Estrutura",
  "nav.contact": "Contato",
  "cta.book": "Agendar avaliação",
  "cta.trajectory": "Conheça a clínica",
  "cta.whatsapp": "Falar no WhatsApp",

  "hero.eyebrow": "Odontologia e estética avançada em BH",
  "hero.title.a": "Transformamos vidas,",
  "hero.title.gold": "não apenas",
  "hero.title.b": "sorrisos.",
  "hero.text":
    "Há mais de 35 anos em Belo Horizonte. Ciência, tecnologia e um olhar integrativo que alinha saúde bucal, estética facial e bem-estar.",
  "hero.scroll": "Deslize",

  "about.eyebrow": "A Thebit",
  "about.title": "35 anos de história, uma clínica renovada.",
  "about.text":
    "Fundada pelo Dr. Jorge Thebit há mais de 35 anos e hoje administrada por seu filho, o Dr. Daniel Thebit, a Thebit Saúde e Estética une toda a equipe em torno de um propósito: ir além do tratamento do dente. Entendemos o paciente por inteiro e alinhamos saúde e estética.",
  "about.c1": "Especialistas em Dentística e Estética Dental Avançada",

  "about.c2": "Equipe multidisciplinar de odontologia e medicina",
  "about.c3": "Nota máxima 5.0 nas avaliações dos pacientes",

  "barbies.eyebrow": "Nosso método",
  "barbies.title": "Saúde e estética no mesmo plano.",
  "barbies.text":
    "Cada sorriso é planejado com diagnóstico completo, fotografia, radiografia na própria clínica e prova estética antes de qualquer procedimento definitivo.",
  "barbies.p1": "Diagnóstico integrado e planejamento digital",
  "barbies.p2": "Prova estética antes do definitivo",
  "barbies.p3": "Acompanhamento e manutenção contínua",

  "spec.eyebrow": "Tratamentos",
  "spec.title": "Especialidades da casa.",
  "spec.text": "Escolha uma área e responda 4 perguntas rápidas para receber um direcionamento.",
  "spec.breast": "Estética Dental",
  "spec.breast.d": "Lentes de contato, facetas em resina e clareamento dental.",
  "spec.body": "Reabilitação e Ortodontia",
  "spec.body.d": "Implantes, protocolo, Invisalign e aparelhos estéticos.",
  "spec.face": "Harmonização e Dermatologia",
  "spec.face.d": "HOF, toxina botulínica, rinomodelação e saúde da pele.",
  "spec.intimate": "Saúde Bucal",
  "spec.intimate.d": "Limpeza, canal, periodontia, siso, bruxismo e odontopediatria.",

  "tech.eyebrow": "Tecnologia e técnicas",
  "tech.title": "O que sustenta o resultado.",
  "tech.mila": "Lentes de Contato",
  "tech.mila.d": "Correção de formato, cor e espaçamento com mínimo desgaste dental.",
  "tech.bra": "Invisalign",
  "tech.bra.d": "Alinhadores invisíveis e removíveis com planejamento digital do movimento.",
  "tech.hd": "Implante e Protocolo",
  "tech.hd.d": "Reabilitação fixa com pinos de titânio e radiografia realizada na clínica.",

  "authority.eyebrow": "Autoridade",
  "authority.title": "Números que traduzem cuidado.",
  "authority.s1": "anos de história em BH",
  "authority.s2": "nas avaliações dos pacientes",
  "authority.s3": "especialistas na equipe",
  "authority.s4": "de tratamentos em uma só clínica",

  "exp.eyebrow": "Experiência",
  "exp.title": "Pensado em cada detalhe.",
  "exp.i1": "Recepção acolhedora e ambiente reservado",
  "exp.i2": "Equipe multidisciplinar dedicada",
  "exp.i3": "Radiografia odontológica na própria clínica",
  "exp.i4": "Seg a sex, 09h às 20h · Sáb, 09h às 12h",

  "ba.eyebrow": "Antes & depois",
  "ba.title": "Sorrisos que respeitam a naturalidade.",
  "ba.before": "Antes",
  "ba.after": "Depois",
  "ba.disclaimer":
    "Imagens ilustrativas e autorizadas. Cada caso é único e os resultados variam conforme anatomia e indicação clínica.",

  "test.eyebrow": "Depoimentos",
  "test.title": "Quem confiou o próprio sorriso.",
  "test.q1":
    "Trabalho minucioso. As facetas ficaram perfeitas e ninguém percebe que não são meus dentes naturais.",
  "test.q2": "Estrutura moderna e atendimento acolhedor desde a recepção. Nota 10.",
  "test.q3": "Cuidaram da minha saúde bucal como um todo, não só do problema que me levou lá.",

  "goal.eyebrow": "Diagnóstico rápido",
  "goal.title": "Qual é o seu objetivo hoje?",
  "goal.g1": "Melhorar a estética do meu sorriso",
  "goal.g2": "Repor ou alinhar dentes",
  "goal.g3": "Harmonização facial ou pele",
  "goal.g4": "Consulta e limpeza de rotina",

  "faq.eyebrow": "Perguntas frequentes",
  "faq.title": "Antes de agendar.",
  "faq.q1": "Como funciona a primeira consulta?",
  "faq.a1":
    "É uma avaliação completa: histórico de saúde, exame clínico, radiografia na própria clínica e um plano de tratamento com prioridades e valores.",
  "faq.q2": "Lentes de contato desgastam o dente?",
  "faq.a2":
    "No nosso protocolo o desgaste é mínimo ou inexistente na maioria dos casos. Antes do definitivo você aprova o formato em uma prova estética.",
  "faq.q3": "A clínica atende convênios e formas de pagamento?",
  "faq.a3":
    "Trabalhamos com pagamento particular e opções de parcelamento. Fale com a recepção pelo WhatsApp para simular seu tratamento.",
  "faq.q4": "Atendem pacientes com doenças sistêmicas ou autoimunes?",
  "faq.a4":
    "Sim. Temos atendimento voltado à saúde bucal integrativa e periodontia, com manejo odontológico de pacientes com artrite reumatoide, lúpus e outras condições.",

  "intl.eyebrow": "Estrutura",
  "intl.title": "Uma clínica no Anchieta feita para receber você.",
  "intl.text":
    "Av. dos Bandeirantes, 466 — Anchieta, Belo Horizonte. Fachada com jardim vertical, recepção ampla e consultórios equipados com tecnologia de ponta.",
  "intl.b1": "Fachada e jardim vertical no Anchieta",
  "intl.b2": "Recepção reservada e confortável",
  "intl.b3": "Consultórios com tecnologia atualizada",
  "intl.b4": "Estacionamento no local",

  "final.title": "Sua avaliação começa com uma conversa.",
  "final.text": "Fale com a nossa recepção pelo WhatsApp e agende o melhor horário.",

  "quiz.title": "Vamos entender o seu caso",
  "quiz.q1": "Você já realizou algum tratamento estético dental?",
  "quiz.q1.o1": "Nunca realizei",
  "quiz.q1.o2": "Já fiz um tratamento",
  "quiz.q1.o3": "Já fiz mais de um",
  "quiz.q2": "Quando pretende começar?",
  "quiz.q2.o1": "Nos próximos 30 dias",
  "quiz.q2.o2": "Em 2 a 6 meses",
  "quiz.q2.o3": "Ainda estou planejando",
  "quiz.q3": "Onde você mora?",
  "quiz.q3.o1": "Belo Horizonte",
  "quiz.q3.o2": "Interior de Minas",
  "quiz.q3.o3": "Outro estado",
  "quiz.q4": "Melhor forma de contato?",
  "quiz.q4.o1": "WhatsApp",
  "quiz.q4.o2": "Ligação",
  "quiz.q4.o3": "E-mail",
  "quiz.send": "Enviar no WhatsApp",
  "quiz.step": "Etapa",

  "wa.default": "Olá! Gostaria de agendar uma avaliação na Thebit Saúde e Estética.",
  "wa.goal": "Olá! Meu objetivo hoje é:",
  "wa.quiz": "Olá! Quero uma avaliação. Área de interesse:",

  "footer.rights": "Todos os direitos reservados.",
  "footer.disclaimer":
    "Conteúdo informativo, sem promessa de resultado. Resultados variam de paciente para paciente.",

  "contact.eyebrow": "Contato",
  "contact.title": "Vamos conversar.",
  "contact.desc":
    "Nossa recepção responde pelo WhatsApp e ajuda você a escolher o melhor horário.",
  "contact.address": "Endereço",
  "history.title": "Uma história construída há mais de 35 anos.",
  "timeline.1989.title": "O começo com Dr. Jorge Thebit",
  "timeline.1989.desc": "Um consultório em Belo Horizonte fundado sobre técnica apurada e relação de confiança com cada paciente.",
  "timeline.2005.title": "Uma clínica que cresce",
  "timeline.2005.desc": "A demanda por odontologia de alta estética consolida a Thebit como referência no Anchieta.",
  "timeline.2020.title": "Nova estrutura",
  "timeline.2020.desc": "Reforma completa: fachada com jardim vertical, recepção ampla e consultórios com tecnologia atualizada.",
  "timeline.today.title": "Nova gestão · Dr. Daniel Thebit",
  "timeline.today.desc": "A segunda geração amplia o propósito: unir saúde bucal, estética facial e medicina em um só lugar.",
  "clinic.comfort": "Um espaço pensado para o seu conforto.",
  "contact.whatsapp": "WhatsApp",
  "contact.email": "E-mail",
  "contact.hours": "Horários",
  "contact.visit.title": "Primeira consulta",
  "contact.visit.subtitle": "Como funciona a sua avaliação",
  "contact.visit.step1":
    "A avaliação inicial é feita com o Dr. Daniel Thebit, que orienta quais procedimentos são indicados para o seu caso.",
  "contact.visit.step2":
    "Não é necessário levar exames: os exames de imagem são solicitados e realizados na própria clínica.",
  "contact.visit.step3":
    "Para reservar o horário pedimos nome completo, RG, CPF, endereço com CEP e informação sobre alergias.",
  "contact.visit.step4":
    "Consulta no valor de R$ 450, com pagamento em dinheiro, Pix, transferência, cheque ou cartão.",
  "contact.visit.step5":
    "Se vier de carro, ligue ao chegar que abrimos o portão para você.",

  "form.eyebrow": "Agendamento",
  "form.title": "Reserve a sua avaliação.",
  "form.desc":
    "Preencha os dados abaixo e a nossa recepção continua o atendimento pelo WhatsApp.",
  "form.name": "Nome completo",
  "form.phone": "Telefone",
  "form.whatsapp": "WhatsApp",
  "form.email": "E-mail",
  "form.city": "Cidade",
  "form.goal": "Objetivo",
  "form.message": "Mensagem",
  "form.select": "Selecione",
  "form.submit": "Agendar Avaliação",
  "form.sending": "Enviando",
  "form.sent": "Enviado — continue no WhatsApp",
  "form.disclaimer": "Seus dados são usados apenas para o contato do agendamento.",
};

const en: Dict = {
  ...pt,
  "nav.home": "Home",
  "nav.about": "The Clinic",
  "nav.specialties": "Treatments",
  "nav.tech": "Technology",
  "nav.team": "Team",
  "nav.structure": "Facilities",
  "nav.contact": "Contact",
  "cta.book": "Book an assessment",
  "cta.trajectory": "Discover the clinic",
  "cta.whatsapp": "Chat on WhatsApp",

  "hero.eyebrow": "Advanced dentistry and aesthetics in Belo Horizonte",
  "hero.title.a": "We transform lives,",
  "hero.title.gold": "not only",
  "hero.title.b": "smiles.",
  "hero.text":
    "More than 35 years in Belo Horizonte. Science, technology and an integrative approach that aligns oral health, facial aesthetics and wellbeing.",
  "hero.scroll": "Scroll",

  "about.eyebrow": "About Thebit",
  "about.title": "35 years of history, a renewed clinic.",
  "about.text":
    "Founded by Dr. Jorge Thebit over 35 years ago and now led by his son, Dr. Daniel Thebit, Thebit Saúde e Estética unites the whole team around one purpose: to go beyond treating teeth. We look at the whole patient and align health with aesthetics.",
  "about.c1": "Specialists in restorative and advanced dental aesthetics",
  "about.c2": "Multidisciplinary dental and medical team",
  "about.c3": "Perfect 5.0 patient rating",

  "barbies.eyebrow": "Our method",
  "barbies.title": "Health and aesthetics in the same plan.",
  "barbies.text":
    "Every smile is planned with a full diagnosis, photography, in-house radiography and an aesthetic try-in before any definitive procedure.",
  "barbies.p1": "Integrated diagnosis and digital planning",
  "barbies.p2": "Aesthetic try-in before the final result",
  "barbies.p3": "Ongoing follow-up and maintenance",

  "spec.eyebrow": "Treatments",
  "spec.title": "Our specialties.",
  "spec.text": "Pick an area and answer 4 quick questions to get initial guidance.",
  "spec.breast": "Dental Aesthetics",
  "spec.breast.d": "Porcelain veneers, composite facets and teeth whitening.",
  "spec.body": "Rehabilitation & Orthodontics",
  "spec.body.d": "Implants, full-arch protocol, Invisalign and aesthetic braces.",
  "spec.face": "Facial Harmonization & Dermatology",
  "spec.face.d": "Injectables, botulinum toxin, nose reshaping and skin health.",
  "spec.intimate": "Oral Health",
  "spec.intimate.d": "Cleaning, root canal, periodontics, wisdom teeth, bruxism, kids.",

  "tech.eyebrow": "Technology & techniques",
  "tech.title": "What holds the result.",
  "tech.mila": "Porcelain Veneers",
  "tech.mila.d": "Shape, color and spacing corrected with minimal tooth reduction.",
  "tech.bra": "Invisalign",
  "tech.bra.d": "Invisible removable aligners with digital movement planning.",
  "tech.hd": "Implants & Full Arch",
  "tech.hd.d": "Fixed rehabilitation with titanium implants and in-house radiography.",

  "authority.eyebrow": "Authority",
  "authority.title": "Numbers that translate care.",
  "authority.s1": "years of history in Belo Horizonte",
  "authority.s2": "patient rating",
  "authority.s3": "specialists on the team",
  "authority.s4": "of treatments under one roof",

  "exp.eyebrow": "Experience",
  "exp.title": "Considered in every detail.",
  "exp.i1": "Welcoming reception and private setting",
  "exp.i2": "Dedicated multidisciplinary team",
  "exp.i3": "Dental radiography on site",
  "exp.i4": "Mon–Fri 9am–8pm · Sat 9am–12pm",

  "ba.eyebrow": "Before & after",
  "ba.title": "Smiles that respect what is natural.",
  "ba.before": "Before",
  "ba.after": "After",
  "ba.disclaimer":
    "Illustrative, authorized images. Every case is unique and results vary with anatomy and clinical indication.",

  "test.eyebrow": "Testimonials",
  "test.title": "Those who trusted their smile to us.",
  "test.q1": "Meticulous work. The veneers look perfect and nobody can tell they aren't natural.",
  "test.q2": "Modern facilities and warm care from the very first hello.",
  "test.q3": "They took care of my whole oral health, not just the problem I came in with.",

  "goal.eyebrow": "Quick assessment",
  "goal.title": "What is your goal today?",
  "goal.g1": "Improve my smile's aesthetics",
  "goal.g2": "Replace or align teeth",
  "goal.g3": "Facial harmonization or skin",
  "goal.g4": "Routine check-up and cleaning",

  "faq.eyebrow": "Frequently asked",
  "faq.title": "Before you book.",
  "faq.q1": "How does the first consultation work?",
  "faq.a1":
    "A full assessment: health history, clinical exam, in-house radiography and a treatment plan with priorities and pricing.",
  "faq.q2": "Do veneers damage the tooth?",
  "faq.a2":
    "In our protocol reduction is minimal or none in most cases. You approve the shape in an aesthetic try-in before the final result.",
  "faq.q3": "What payment options are available?",
  "faq.a3":
    "We work with private payment and installment options. Message our reception on WhatsApp for a simulation.",
  "faq.q4": "Do you treat patients with systemic or autoimmune conditions?",
  "faq.a4":
    "Yes. We offer integrative oral health and periodontics, including dental management of patients with rheumatoid arthritis, lupus and other conditions.",

  "intl.eyebrow": "Facilities",
  "intl.title": "A clinic in Anchieta built to welcome you.",
  "intl.text":
    "Av. dos Bandeirantes, 466 — Anchieta, Belo Horizonte. Vertical garden façade, spacious reception and treatment rooms with up-to-date technology.",
  "intl.b1": "Vertical garden façade in Anchieta",
  "intl.b2": "Private, comfortable reception",
  "intl.b3": "Rooms with updated technology",
  "intl.b4": "On-site parking",

  "final.title": "Your assessment starts with a conversation.",
  "final.text": "Message our reception on WhatsApp and book the best time for you.",

  "quiz.title": "Let's understand your case",
  "quiz.q1": "Have you had any cosmetic dental treatment before?",
  "quiz.q1.o1": "Never had one",
  "quiz.q1.o2": "One treatment",
  "quiz.q1.o3": "More than one",
  "quiz.q2": "When would you like to start?",
  "quiz.q2.o1": "Within 30 days",
  "quiz.q2.o2": "In 2 to 6 months",
  "quiz.q2.o3": "Still planning",
  "quiz.q3": "Where do you live?",
  "quiz.q3.o1": "Belo Horizonte",
  "quiz.q3.o2": "Inland Minas Gerais",
  "quiz.q3.o3": "Another state",
  "quiz.q4": "Best way to reach you?",
  "quiz.q4.o1": "WhatsApp",
  "quiz.q4.o2": "Phone call",
  "quiz.q4.o3": "Email",
  "quiz.send": "Send on WhatsApp",
  "quiz.step": "Step",

  "wa.default": "Hello! I'd like to book an assessment at Thebit Saúde e Estética.",
  "wa.goal": "Hello! My goal today is:",
  "wa.quiz": "Hello! I'd like an assessment. Area of interest:",

  "footer.rights": "All rights reserved.",
  "footer.disclaimer":
    "Informational content, with no promise of results. Results vary from patient to patient.",

  "contact.eyebrow": "Contact",
  "contact.title": "Let's talk.",
  "contact.desc":
    "Our reception answers via WhatsApp and helps you choose the best time.",
  "contact.address": "Address",
  "history.title": "A story built over more than 35 years.",
  "timeline.1989.title": "The beginning with Dr. Jorge Thebit",
  "timeline.1989.desc": "A clinic in Belo Horizonte founded on refined technique and a relationship of trust with each patient.",
  "timeline.2005.title": "A growing clinic",
  "timeline.2005.desc": "The demand for high-aesthetic dentistry consolidates Thebit as a reference in Anchieta.",
  "timeline.2020.title": "New structure",
  "timeline.2020.desc": "Complete renovation: vertical garden facade, spacious reception and rooms with updated technology.",
  "timeline.today.title": "New management · Dr. Daniel Thebit",
  "timeline.today.desc": "The second generation expands the purpose: uniting oral health, facial aesthetics and medicine in one place.",
  "clinic.comfort": "A space designed for your comfort.",
  "contact.whatsapp": "WhatsApp",
  "contact.email": "Email",
  "contact.hours": "Hours",
  "contact.visit.title": "First consultation",
  "contact.visit.subtitle": "How your evaluation works",
  "contact.visit.step1":
    "The initial evaluation is done with Dr. Daniel Thebit, who guides which procedures are indicated for your case.",
  "contact.visit.step2":
    "No need to bring exams: image exams are requested and performed at the clinic itself.",
  "contact.visit.step3":
    "To reserve the time, we ask for full name, ID, Social Security Number (CPF), address with ZIP code, and information about allergies.",
  "contact.visit.step4":
    "Consultation valued at R$ 450, with payment in cash, Pix, wire transfer, check, or card.",
  "contact.visit.step5":
    "If you come by car, call upon arrival and we will open the gate for you.",

  "form.eyebrow": "Scheduling",
  "form.title": "Book your evaluation.",
  "form.desc": "Fill in the details below and our reception will continue the service via WhatsApp.",
  "form.name": "Full name",
  "form.phone": "Phone",
  "form.whatsapp": "WhatsApp",
  "form.email": "Email",
  "form.city": "City",
  "form.goal": "Goal",
  "form.message": "Message",
  "form.select": "Select",
  "form.submit": "Schedule Evaluation",
  "form.sending": "Sending",
  "form.sent": "Sent — continue on WhatsApp",
  "form.disclaimer": "Your data is only used for the scheduling contact.",
};

const es: Dict = {
  ...pt,
  "nav.home": "Inicio",
  "nav.about": "La Clínica",
  "nav.specialties": "Tratamientos",
  "nav.tech": "Tecnología",
  "nav.team": "Equipo",
  "nav.structure": "Instalaciones",
  "nav.contact": "Contacto",
  "cta.book": "Agendar evaluación",
  "cta.trajectory": "Conoce la clínica",
  "cta.whatsapp": "Hablar por WhatsApp",

  "hero.eyebrow": "Odontología y estética avanzada en Belo Horizonte",
  "hero.title.a": "Transformamos vidas,",
  "hero.title.gold": "no solo",
  "hero.title.b": "sonrisas.",
  "hero.text":
    "Más de 35 años en Belo Horizonte. Ciencia, tecnología y una mirada integrativa que alinea salud bucal, estética facial y bienestar.",
  "hero.scroll": "Desliza",

  "about.eyebrow": "Sobre Thebit",
  "about.title": "35 años de historia, una clínica renovada.",
  "about.text":
    "Fundada por el Dr. Jorge Thebit hace más de 35 años y hoy dirigida por su hijo, el Dr. Daniel Thebit, Thebit Saúde e Estética une a todo el equipo con un propósito: ir más allá del diente. Miramos al paciente completo y alineamos salud y estética.",
  "about.c1": "Especialistas en dentística y estética dental avanzada",
  "about.c2": "Equipo multidisciplinario odontológico y médico",
  "about.c3": "Calificación máxima 5.0 de los pacientes",

  "barbies.eyebrow": "Nuestro método",
  "barbies.title": "Salud y estética en el mismo plan.",
  "barbies.text":
    "Cada sonrisa se planifica con diagnóstico completo, fotografía, radiografía en la propia clínica y prueba estética antes de cualquier procedimiento definitivo.",
  "barbies.p1": "Diagnóstico integrado y planificación digital",
  "barbies.p2": "Prueba estética antes del definitivo",
  "barbies.p3": "Seguimiento y mantenimiento continuo",

  "spec.eyebrow": "Tratamientos",
  "spec.title": "Nuestras especialidades.",
  "spec.text": "Elige un área y responde 4 preguntas rápidas para recibir orientación.",
  "spec.breast": "Estética Dental",
  "spec.breast.d": "Carillas, facetas de resina y blanqueamiento dental.",
  "spec.body": "Rehabilitación y Ortodoncia",
  "spec.body.d": "Implantes, protocolo, Invisalign y brackets estéticos.",
  "spec.face": "Armonización y Dermatología",
  "spec.face.d": "Inyectables, toxina botulínica, rinomodelación y salud de la piel.",
  "spec.intimate": "Salud Bucal",
  "spec.intimate.d": "Limpieza, endodoncia, periodoncia, cordales, bruxismo y niños.",

  "tech.eyebrow": "Tecnología y técnicas",
  "tech.title": "Lo que sostiene el resultado.",
  "tech.mila": "Carillas",
  "tech.mila.d": "Forma, color y espacios corregidos con mínimo desgaste dental.",
  "tech.bra": "Invisalign",
  "tech.bra.d": "Alineadores invisibles y removibles con planificación digital.",
  "tech.hd": "Implantes y Protocolo",
  "tech.hd.d": "Rehabilitación fija con titanio y radiografía en la clínica.",

  "authority.eyebrow": "Autoridad",
  "authority.title": "Números que traducen cuidado.",
  "authority.s1": "años de historia en Belo Horizonte",
  "authority.s2": "en las evaluaciones de pacientes",
  "authority.s3": "especialistas en el equipo",
  "authority.s4": "de tratamientos en un solo lugar",

  "exp.eyebrow": "Experiencia",
  "exp.title": "Pensado en cada detalle.",
  "exp.i1": "Recepción acogedora y ambiente reservado",
  "exp.i2": "Equipo multidisciplinario dedicado",
  "exp.i3": "Radiografía dental en la propia clínica",
  "exp.i4": "Lun a vie 09–20h · Sáb 09–12h",

  "ba.eyebrow": "Antes y después",
  "ba.title": "Sonrisas que respetan lo natural.",
  "ba.before": "Antes",
  "ba.after": "Después",
  "ba.disclaimer":
    "Imágenes ilustrativas y autorizadas. Cada caso es único y los resultados varían según anatomía e indicación clínica.",

  "test.eyebrow": "Testimonios",
  "test.title": "Quienes confiaron su sonrisa.",
  "test.q1": "Trabajo minucioso. Las carillas quedaron perfectas y nadie nota que no son naturales.",
  "test.q2": "Instalaciones modernas y atención cálida desde la recepción.",
  "test.q3": "Cuidaron toda mi salud bucal, no solo el problema por el que fui.",

  "goal.eyebrow": "Diagnóstico rápido",
  "goal.title": "¿Cuál es tu objetivo hoy?",
  "goal.g1": "Mejorar la estética de mi sonrisa",
  "goal.g2": "Reponer o alinear dientes",
  "goal.g3": "Armonización facial o piel",
  "goal.g4": "Consulta y limpieza de rutina",

  "faq.eyebrow": "Preguntas frecuentes",
  "faq.title": "Antes de agendar.",
  "faq.q1": "¿Cómo es la primera consulta?",
  "faq.a1":
    "Una evaluación completa: historia de salud, examen clínico, radiografía en la clínica y un plan de tratamiento con prioridades y valores.",
  "faq.q2": "¿Las carillas desgastan el diente?",
  "faq.a2":
    "En nuestro protocolo el desgaste es mínimo o inexistente en la mayoría de los casos. Apruebas la forma en una prueba estética antes del definitivo.",
  "faq.q3": "¿Qué formas de pago aceptan?",
  "faq.a3":
    "Trabajamos con pago particular y opciones de financiación. Escríbenos por WhatsApp para simular tu tratamiento.",
  "faq.q4": "¿Atienden pacientes con enfermedades sistémicas o autoinmunes?",
  "faq.a4":
    "Sí. Contamos con salud bucal integrativa y periodoncia, con manejo odontológico de pacientes con artritis reumatoide, lupus y otras condiciones.",

  "intl.eyebrow": "Instalaciones",
  "intl.title": "Una clínica en Anchieta hecha para recibirte.",
  "intl.text":
    "Av. dos Bandeirantes, 466 — Anchieta, Belo Horizonte. Fachada con jardín vertical, recepción amplia y consultorios con tecnología actualizada.",
  "intl.b1": "Fachada y jardín vertical en Anchieta",
  "intl.b2": "Recepción reservada y cómoda",
  "intl.b3": "Consultorios con tecnología actualizada",
  "intl.b4": "Estacionamiento en el lugar",

  "final.title": "Tu evaluación empieza con una conversación.",
  "final.text": "Escribe a nuestra recepción por WhatsApp y agenda el mejor horario.",

  "quiz.title": "Entendamos tu caso",
  "quiz.q1": "¿Ya realizaste algún tratamiento estético dental?",
  "quiz.q1.o1": "Nunca",
  "quiz.q1.o2": "Un tratamiento",
  "quiz.q1.o3": "Más de uno",
  "quiz.q2": "¿Cuándo quieres empezar?",
  "quiz.q2.o1": "En los próximos 30 días",
  "quiz.q2.o2": "En 2 a 6 meses",
  "quiz.q2.o3": "Todavía lo estoy planeando",
  "quiz.q3": "¿Dónde vives?",
  "quiz.q3.o1": "Belo Horizonte",
  "quiz.q3.o2": "Interior de Minas",
  "quiz.q3.o3": "Otro estado",
  "quiz.q4": "¿Mejor forma de contacto?",
  "quiz.q4.o1": "WhatsApp",
  "quiz.q4.o2": "Llamada",
  "quiz.q4.o3": "Email",
  "quiz.send": "Enviar por WhatsApp",
  "quiz.step": "Etapa",

  "wa.default": "¡Hola! Quisiera agendar una evaluación en Thebit Saúde e Estética.",
  "wa.goal": "¡Hola! Mi objetivo hoy es:",
  "wa.quiz": "¡Hola! Quiero una evaluación. Área de interés:",

  "footer.rights": "Todos los derechos reservados.",
  "footer.disclaimer":
    "Contenido informativo, sin promesa de resultado. Los resultados varían de paciente a paciente.",

  "contact.eyebrow": "Contacto",
  "contact.title": "Vamos conversar.",
  "contact.desc":
    "Nuestra recepción responde por WhatsApp y te ayuda a elegir el mejor horario.",
  "contact.address": "Dirección",
  "history.title": "Una historia construida hace más de 35 años.",
  "timeline.1989.title": "El comienzo con el Dr. Jorge Thebit",
  "timeline.1989.desc": "Un consultorio en Belo Horizonte fundado sobre técnica depurada y relación de confianza con cada paciente.",
  "timeline.2005.title": "Una clínica que crece",
  "timeline.2005.desc": "La demanda de odontología de alta estética consolida a Thebit como referente en Anchieta.",
  "timeline.2020.title": "Nueva estructura",
  "timeline.2020.desc": "Reforma completa: fachada con jardín vertical, recepción amplia y consultorios con tecnología actualizada.",
  "timeline.today.title": "Nueva gestión · Dr. Daniel Thebit",
  "timeline.today.desc": "La segunda generación amplía el propósito: unir salud bucal, estética facial y medicina en un solo lugar.",
  "clinic.comfort": "Un espacio pensado para su comodidad.",
  "contact.whatsapp": "WhatsApp",
  "contact.email": "Email",
  "contact.hours": "Horarios",
  "contact.visit.title": "Primera consulta",
  "contact.visit.subtitle": "Cómo funciona su evaluación",
  "contact.visit.step1":
    "La evaluación inicial se realiza con el Dr. Daniel Thebit, quien orienta qué procedimientos están indicados para su caso.",
  "contact.visit.step2":
    "No es necesario traer exámenes: los exámenes de imagen se solicitan y realizan en la propia clínica.",
  "contact.visit.step3":
    "Para reservar el horario solicitamos nombre completo, identificación, número de documento (CPF), dirección con código postal e información sobre alergias.",
  "contact.visit.step4":
    "Consulta por valor de R$ 450, con pago en efectivo, Pix, transferencia, cheque o tarjeta.",
  "contact.visit.step5":
    "Si viene en coche, llame al llegar y le abriremos el portón.",

  "form.eyebrow": "Cita",
  "form.title": "Reserve su evaluación.",
  "form.desc":
    "Complete los datos a continuación y nuestra recepción continuará la atención por WhatsApp.",
  "form.name": "Nombre completo",
  "form.phone": "Teléfono",
  "form.whatsapp": "WhatsApp",
  "form.email": "Email",
  "form.city": "Ciudad",
  "form.goal": "Objetivo",
  "form.message": "Mensaje",
  "form.select": "Seleccionar",
  "form.submit": "Agendar Evaluación",
  "form.sending": "Enviando",
  "form.sent": "Enviado — continúe por WhatsApp",
  "form.disclaimer": "Sus datos solo se utilizan para el contacto de la cita.",
};

const dicts: Record<Lang, Dict> = { pt, en, es };

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("thebit-lang") as Lang | null;
    if (stored && stored in dicts) setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("thebit-lang", lang);
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key: string) => dicts[lang][key] ?? dicts.pt[key] ?? key,
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
