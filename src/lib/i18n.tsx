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
  "wa.visit": "Olá! Gostaria de conhecer a clínica e agendar uma visita.",
  "cta.visit": "Agendar visita",

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
  "history.founder.eyebrow": "O fundador",
  "history.founder.title": "Conheça quem iniciou essa história.",
  "history.founder.p1":
    "Dr. Jorge Thebit abriu as portas da clínica há mais de 35 anos com uma convicção simples: tratar pessoas, não apenas dentes. Construiu uma clientela fiel à base de técnica minuciosa, honestidade no diagnóstico e presença constante.",
  "history.founder.p2":
    "Esse legado se traduziu em método — e hoje segue vivo na conduta de toda a equipe, sob a continuidade do seu filho, Dr. Daniel Thebit.",
  "history.founder.list1": "Fundação da clínica e formação da primeira equipe",
  "history.founder.list2": "Cultura de diagnóstico honesto e acompanhamento de longo prazo",
  "history.founder.list3": "Base de pacientes que atravessa gerações",
  "history.expert.eyebrow": "Especialista em destaque",
  "history.expert.role": "CEO · Especialista em Dentística",
  "history.expert.desc":
    "Cirurgião-dentista com formação avançada em Estética Dental pelo ILAPEO. Atua com lentes de contato, laminados cerâmicos, facetas em resina e recontorno estético, sempre buscando resultados extremamente naturais.",
  "history.expert.seal1": "Formação ILAPEO",
  "history.expert.seal2": "Estética Dental Avançada",
  "history.expert.seal3": "Resultados naturais",
  "history.expert.seal4": "Planejamento individualizado",
  "wa.expert": "Olá! Gostaria de agendar uma avaliação com o Dr. Daniel Thebit.",
  "cta.expert": "Agendar com o especialista",
  "cta.maps": "Abrir no Google Maps",

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
  "team.eyebrow": "Equipe",
  "team.title": "Especialistas que trabalham juntos.",
  "team.intro":
    "Uma equipe multidisciplinar de odontologia e medicina, reunida para cuidar do paciente por inteiro.",
  "team.member.daniel.role": "CEO · Especialista em Dentística",
  "team.member.daniel.desc":
    "Cirurgião-dentista com especialização em Dentística e estética avançada (KSH ILAPEO/PR): lentes de contato, laminados cerâmicos, facetas de resina e recontorno estético. Faixa preta de Jiu-Jitsu (FP Team BJJ).",
  "team.member.bianca.role": "Harmonização Orofacial",
  "team.member.bianca.desc":
    "Especialista em HOF e Odontologia Estética Restauradora: contorno facial, fios de sustentação, toxina botulínica e lipo de papada.",
  "team.member.katielly.role": "Estética Orofacial",
  "team.member.katielly.desc":
    "Foco em procedimentos injetáveis harmônicos, rinomodelação e aplicação de toxina botulínica.",
  "team.member.fernanda.role": "Clínica Geral e Estética",
  "team.member.fernanda.desc":
    "Odontologia estética e restauradora, isolamento absoluto para longevidade de restaurações, profilaxia e clareamentos.",
  "team.member.luiza.role": "Estética Restauradora",
  "team.member.luiza.desc": "Dedicada à reabilitação estética e a limpezas profiláticas detalhadas.",
  "team.member.isabela.role": "Periodontia Integrativa",
  "team.member.isabela.desc":
    "Saúde bucal integrativa e periodontia, correlacionando saúde da gengiva e do organismo, com manejo odontológico de pacientes com doenças sistêmicas e autoimunes (artrite reumatoide, lúpus).",
  "team.member.gabriela.role": "Odontologia Preventiva",
  "team.member.gabriela.desc":
    "Odontologia preventiva, clínica e educacional, promovendo saúde bucal diária e técnicas corretas de higiene biológica.",
  "team.member.camila.role": "Dermatologia Clínica e Estética",
  "team.member.camila.desc":
    "Médica especialista em gerenciamento de pele, tratamentos injetáveis avançados e rejuvenescimento natural.",
  "cta.book.person": "Agendar",
  "wa.team.book": "Olá! Gostaria de agendar com {name}.",

  "tech_page.eyebrow": "Tecnologia",
  "tech_page.title": "Ciência que sustenta o resultado.",
  "tech_page.intro":
    "Usamos o que há de mais recente em ciência e tecnologia para ir além do tratamento do dente.",
  "tech_page.item.lenses.title": "Lentes de contato dental",
  "tech_page.item.lenses.desc":
    "Cerâmicas ultrafinas com desgaste mínimo, planejadas em prova estética antes do definitivo.",
  "tech_page.item.resin.title": "Resina composta estratificada",
  "tech_page.item.resin.desc":
    "Recontorno cosmético e fechamento de diastemas com camadas que imitam o esmalte natural.",
  "tech_page.item.invisalign.title": "Invisalign e alinhadores",
  "tech_page.item.invisalign.desc":
    "Planejamento digital do movimento dentário com aparelhos invisíveis e removíveis.",
  "tech_page.item.xray.title": "Radiografia na clínica",
  "tech_page.item.xray.desc":
    "Exames de imagem realizados no local, agilizando diagnóstico e plano de tratamento.",
  "tech_page.item.isolation.title": "Isolamento absoluto",
  "tech_page.item.isolation.desc":
    "Protocolo que aumenta a longevidade das restaurações e a segurança do procedimento.",
  "tech_page.item.injectables.title": "Injetáveis e HOF",
  "tech_page.item.injectables.desc":
    "Toxina botulínica, fios de sustentação, rinomodelação e contorno facial harmônico.",

  "spec_page.eyebrow": "Tratamentos",
  "spec_page.title": "Tudo em um só lugar.",
  "spec_page.intro":
    "Odontologia estética, reabilitação, harmonização e saúde bucal integrativa em uma clínica só.",
  "spec_page.wa": "Olá! Gostaria de saber mais sobre:",
  "spec_page.g1.name": "Estética Dental e Cosmética",
  "spec_page.g1.i1.t": "Facetas e Lentes de Contato",
  "spec_page.g1.i1.d": "Correções de formato, cor e espaçamento dos dentes.",
  "spec_page.g1.i2.t": "Restaurações em Resina Composta",
  "spec_page.g1.i2.d": "Fechamento de diastemas e recontorno cosmético do sorriso.",
  "spec_page.g1.i3.t": "Clareamento Dental",
  "spec_page.g1.i3.d": "Remoção de manchas e restauração do brilho natural.",
  "spec_page.g2.name": "Reabilitação Oral e Ortodontia",
  "spec_page.g2.i1.t": "Implante Dentário",
  "spec_page.g2.i1.d": "Substituição de dentes perdidos com pinos de titânio.",
  "spec_page.g2.i2.t": "Prótese Protocolo",
  "spec_page.g2.i2.d": "Reabilitação total e fixa de arcadas dentárias.",
  "spec_page.g2.i3.t": "Invisalign / Alinhadores",
  "spec_page.g2.i3.d": "Aparelhos ortodônticos invisíveis e removíveis.",
  "spec_page.g2.i4.t": "Aparelho Ortodôntico",
  "spec_page.g2.i4.d": "Modelos convencionais e estéticos para alinhamento.",
  "spec_page.g2.i5.t": "Prótese Dentária",
  "spec_page.g2.i5.d": "Opções removíveis ou fixas parciais.",
  "spec_page.g3.name": "Harmonização e Estética Avançada",
  "spec_page.g3.i1.t": "Harmonização Orofacial",
  "spec_page.g3.i1.d": "Procedimentos injetáveis e tecnologias para equilíbrio estético facial.",
  "spec_page.g3.i2.t": "Dermatologia Clínica e Estética",
  "spec_page.g3.i2.d": "Tratamentos focados na saúde e rejuvenescimento da pele.",
  "spec_page.g4.name": "Cuidados Clínicos e Saúde Bucal",
  "spec_page.g4.i1.t": "Consulta Geral",
  "spec_page.g4.i1.d": "Avaliações de rotina e diagnóstico preventivo.",
  "spec_page.g4.i2.t": "Limpeza Dental",
  "spec_page.g4.i2.d": "Profilaxia para remoção de tártaro e placa bacteriana.",
  "spec_page.g4.i3.t": "Tratamento de Canal",
  "spec_page.g4.i3.d": "Procedimentos endodônticos para infecções internas.",
  "spec_page.g4.i4.t": "Tratamento Periodontal",
  "spec_page.g4.i4.d": "Cuidados com a gengiva e os tecidos de suporte.",
  "spec_page.g4.i5.t": "Extração de Siso",
  "spec_page.g4.i5.d": "Remoção cirúrgica de dentes inclusos ou desalinhados.",
  "spec_page.g4.i6.t": "Bruxismo e DTM",
  "spec_page.g4.i6.d": "Diagnóstico e placas de mordida para disfunções na mandíbula.",
  "spec_page.g4.i7.t": "Odontopediatria",
  "spec_page.g4.i7.d": "Atendimento especializado voltado para crianças.",
  "spec_page.g4.i8.t": "Radiografia Odontológica",
  "spec_page.g4.i8.d": "Exames de imagem realizados na própria clínica.",
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
  "wa.visit": "Hello! I would like to visit the clinic and schedule a tour.",
  "cta.visit": "Schedule Visit",

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
  "history.founder.eyebrow": "The Founder",
  "history.founder.title": "Meet who started this story.",
  "history.founder.p1":
    "Dr. Jorge Thebit opened the clinic's doors over 35 years ago with a simple conviction: to treat people, not just teeth. He built a loyal clientele based on meticulous technique, honesty in diagnosis and constant presence.",
  "history.founder.p2":
    "This legacy translated into method — and today remains alive in the conduct of the entire team, under the continuity of his son, Dr. Daniel Thebit.",
  "history.founder.list1": "Foundation of the clinic and formation of the first team",
  "history.founder.list2": "Culture of honest diagnosis and long-term follow-up",
  "history.founder.list3": "Patient base that spans generations",
  "history.expert.eyebrow": "Featured Specialist",
  "history.expert.role": "CEO · Restorative Dentistry Specialist",
  "history.expert.desc":
    "Dentist with advanced training in Dental Aesthetics by ILAPEO. Works with veneers, ceramic laminates, resin facets and aesthetic reshaping, always seeking extremely natural results.",
  "history.expert.seal1": "ILAPEO Training",
  "history.expert.seal2": "Advanced Dental Aesthetics",
  "history.expert.seal3": "Natural Results",
  "history.expert.seal4": "Individualized Planning",
  "wa.expert": "Hello! I would like to schedule an evaluation with Dr. Daniel Thebit.",
  "cta.expert": "Schedule with the specialist",
  "cta.maps": "Open in Google Maps",

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
  "team.eyebrow": "Team",
  "team.title": "Specialists working together.",
  "team.intro":
    "A multidisciplinary team of dentistry and medicine, gathered to care for the patient as a whole.",
  "team.member.daniel.role": "CEO · Restorative Dentistry Specialist",
  "team.member.daniel.desc":
    "Dentist specializing in Restorative and advanced aesthetics (KSH ILAPEO/PR): veneers, ceramic laminates, resin facets and aesthetic reshaping. Jiu-Jitsu black belt (FP Team BJJ).",
  "team.member.bianca.role": "Orofacial Harmonization",
  "team.member.bianca.desc":
    "Specialist in HOF and Restorative Aesthetic Dentistry: facial contouring, thread lifts, botulinum toxin and double chin lipo.",
  "team.member.katielly.role": "Orofacial Aesthetics",
  "team.member.katielly.desc":
    "Focus on harmonic injectable procedures, nose reshaping and botulinum toxin application.",
  "team.member.fernanda.role": "General and Aesthetic Dentistry",
  "team.member.fernanda.desc":
    "Aesthetic and restorative dentistry, absolute isolation for restoration longevity, prophylaxis and whitening.",
  "team.member.luiza.role": "Restorative Aesthetics",
  "team.member.luiza.desc": "Dedicated to aesthetic rehabilitation and detailed prophylactic cleanings.",
  "team.member.isabela.role": "Integrative Periodontics",
  "team.member.isabela.desc":
    "Integrative oral health and periodontics, correlating gum and body health, with dental management of patients with systemic and autoimmune diseases (rheumatoid arthritis, lupus).",
  "team.member.gabriela.role": "Preventive Dentistry",
  "team.member.gabriela.desc":
    "Preventive, clinical and educational dentistry, promoting daily oral health and correct biological hygiene techniques.",
  "team.member.camila.role": "Clinical and Aesthetic Dermatology",
  "team.member.camila.desc":
    "Medical specialist in skin management, advanced injectable treatments and natural rejuvenation.",
  "cta.book.person": "Book now",
  "wa.team.book": "Hello! I would like to schedule with {name}.",

  "tech_page.eyebrow": "Technology",
  "tech_page.title": "Science that sustains the result.",
  "tech_page.intro":
    "We use the latest in science and technology to go beyond treating teeth.",
  "tech_page.item.lenses.title": "Porcelain Veneers",
  "tech_page.item.lenses.desc":
    "Ultra-thin ceramics with minimal wear, planned in aesthetic proof before the final one.",
  "tech_page.item.resin.title": "Stratified Composite Resin",
  "tech_page.item.resin.desc":
    "Cosmetic recontouring and closing of diastemas with layers that mimic natural enamel.",
  "tech_page.item.invisalign.title": "Invisalign and Aligners",
  "tech_page.item.invisalign.desc":
    "Digital planning of tooth movement with invisible and removable appliances.",
  "tech_page.item.xray.title": "In-clinic Radiography",
  "tech_page.item.xray.desc":
    "Imaging tests performed on site, speeding up diagnosis and treatment planning.",
  "tech_page.item.isolation.title": "Absolute Isolation",
  "tech_page.item.isolation.desc":
    "Protocol that increases the longevity of restorations and the safety of the procedure.",
  "tech_page.item.injectables.title": "Injectables and HOF",
  "tech_page.item.injectables.desc":
    "Botulinum toxin, lifting threads, rhinomodeling and harmonic facial contouring.",

  "spec_page.eyebrow": "Treatments",
  "spec_page.title": "Everything in one place.",
  "spec_page.intro":
    "Aesthetic dentistry, rehabilitation, facial harmonization and integrative oral health in a single clinic.",
  "spec_page.wa": "Hello! I would like to know more about:",
  "spec_page.g1.name": "Dental and Cosmetic Aesthetics",
  "spec_page.g1.i1.t": "Veneers and Porcelain Laminates",
  "spec_page.g1.i1.d": "Corrections of tooth shape, color and spacing.",
  "spec_page.g1.i2.t": "Composite Resin Restorations",
  "spec_page.g1.i2.d": "Closing gaps and cosmetic reshaping of the smile.",
  "spec_page.g1.i3.t": "Teeth Whitening",
  "spec_page.g1.i3.d": "Stain removal and restoration of natural brightness.",
  "spec_page.g2.name": "Oral Rehabilitation and Orthodontics",
  "spec_page.g2.i1.t": "Dental Implant",
  "spec_page.g2.i1.d": "Replacement of missing teeth with titanium posts.",
  "spec_page.g2.i2.t": "Full-Arch Protocol",
  "spec_page.g2.i2.d": "Total fixed rehabilitation of dental arches.",
  "spec_page.g2.i3.t": "Invisalign / Aligners",
  "spec_page.g2.i3.d": "Invisible and removable orthodontic appliances.",
  "spec_page.g2.i4.t": "Orthodontic Braces",
  "spec_page.g2.i4.d": "Conventional and aesthetic models for alignment.",
  "spec_page.g2.i5.t": "Dental Prosthesis",
  "spec_page.g2.i5.d": "Removable or partial fixed options.",
  "spec_page.g3.name": "Harmonization and Advanced Aesthetics",
  "spec_page.g3.i1.t": "Orofacial Harmonization",
  "spec_page.g3.i1.d": "Injectable procedures and technologies for facial aesthetic balance.",
  "spec_page.g3.i2.t": "Clinical and Aesthetic Dermatology",
  "spec_page.g3.i2.d": "Treatments focused on skin health and rejuvenation.",
  "spec_page.g4.name": "Clinical Care and Oral Health",
  "spec_page.g4.i1.t": "General Consultation",
  "spec_page.g4.i1.d": "Routine assessments and preventive diagnosis.",
  "spec_page.g4.i2.t": "Dental Cleaning",
  "spec_page.g4.i2.d": "Prophylaxis to remove tartar and plaque.",
  "spec_page.g4.i3.t": "Root Canal Treatment",
  "spec_page.g4.i3.d": "Endodontic procedures for internal infections.",
  "spec_page.g4.i4.t": "Periodontal Treatment",
  "spec_page.g4.i4.d": "Care for the gums and supporting tissues.",
  "spec_page.g4.i5.t": "Wisdom Tooth Extraction",
  "spec_page.g4.i5.d": "Surgical removal of impacted or misaligned teeth.",
  "spec_page.g4.i6.t": "Bruxism and TMD",
  "spec_page.g4.i6.d": "Diagnosis and bite splints for jaw disorders.",
  "spec_page.g4.i7.t": "Pediatric Dentistry",
  "spec_page.g4.i7.d": "Specialized care for children.",
  "spec_page.g4.i8.t": "Dental Radiography",
  "spec_page.g4.i8.d": "Imaging exams performed at the clinic itself.",
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
  "wa.visit": "¡Hola! Me gustaría conocer la clínica y agendar una visita.",
  "cta.visit": "Agendar visita",

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
  "history.founder.eyebrow": "El fundador",
  "history.founder.title": "Conozca a quien inició esta historia.",
  "history.founder.p1":
    "El Dr. Jorge Thebit abrió las puertas de la clínica hace más de 35 años con una convicción sencilla: tratar a las personas, no solo a los dientes. Construyó una clientela fiel a base de técnica minuciosa, honestidad en el diagnóstico y presencia constante.",
  "history.founder.p2":
    "Este legado se tradujo en método — y hoy sigue vivo en la conducta de todo el equipo, bajo la continuidad de su hijo, el Dr. Daniel Thebit.",
  "history.founder.list1": "Fundación de la clínica y formación del primer equipo",
  "history.founder.list2": "Cultura de diagnóstico honesto y seguimiento a largo plazo",
  "history.founder.list3": "Base de pacientes que atraviesa generaciones",
  "history.expert.eyebrow": "Especialista destacado",
  "history.expert.role": "CEO · Especialista en Odontología Restauradora",
  "history.expert.desc":
    "Cirujano dentista con formación avanzada en Estética Dental por ILAPEO. Actúa con lentes de contacto, laminados cerámicos, facetas en resina y recontorno estético, siempre buscando resultados extremadamente naturales.",
  "history.expert.seal1": "Formación ILAPEO",
  "history.expert.seal2": "Estética Dental Avanzada",
  "history.expert.seal3": "Resultados naturales",
  "history.expert.seal4": "Planificación individualizada",
  "wa.expert": "¡Hola! Me gustaría programar una evaluación con el Dr. Daniel Thebit.",
  "cta.expert": "Agendar con el especialista",
  "cta.maps": "Abrir en Google Maps",

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
  "team.eyebrow": "Equipo",
  "team.title": "Especialistas que trabajan juntos.",
  "team.intro":
    "Un equipo multidisciplinario de odontología y medicina, reunido para cuidar al paciente en su totalidad.",
  "team.member.daniel.role": "CEO · Especialista en Odontología Restauradora",
  "team.member.daniel.desc":
    "Cirujano dentista especializado en Odontología Restauradora y estética avanzada (KSH ILAPEO/PR): carillas, laminados cerámicos, facetas de resina y recontorno estético. Cinturón negro de Jiu-Jitsu (FP Team BJJ).",
  "team.member.bianca.role": "Armonización Orofacial",
  "team.member.bianca.desc":
    "Especialista en HOF y Odontología Estética Restauradora: contorno facial, hilos de sustentación, toxina botulínica y lipo de papada.",
  "team.member.katielly.role": "Estética Orofacial",
  "team.member.katielly.desc":
    "Enfoque en procedimientos inyectables armónicos, rinomodelación y aplicación de toxina botulínica.",
  "team.member.fernanda.role": "Odontología General y Estética",
  "team.member.fernanda.desc":
    "Odontología estética y restauradora, aislamiento absoluto para la longevidad de las restauraciones, profilaxis y blanqueamientos.",
  "team.member.luiza.role": "Estética Restauradora",
  "team.member.luiza.desc": "Dedicada a la rehabilitación estética y limpiezas profilácticas detalladas.",
  "team.member.isabela.role": "Periodoncia Integrativa",
  "team.member.isabela.desc":
    "Salud bucal integrativa y periodoncia, correlacionando la salud de las encías y del organismo, con manejo odontológico de pacientes con enfermedades sistémicas y autoinmunes (artritis reumatoide, lupus).",
  "team.member.gabriela.role": "Odontología Preventiva",
  "team.member.gabriela.desc":
    "Odontología preventiva, clínica y educativa, promoviendo la salud bucal diaria y técnicas correctas de higiene biológica.",
  "team.member.camila.role": "Dermatología Clínica y Estética",
  "team.member.camila.desc":
    "Médica especialista en gestión de la piel, tratamientos inyectables avanzados y rejuvenecimiento natural.",
  "cta.book.person": "Agendar",
  "wa.team.book": "¡Hola! Me gustaría agendar con {name}.",

  "tech_page.eyebrow": "Tecnología",
  "tech_page.title": "Ciencia que sustenta el resultado.",
  "tech_page.intro":
    "Utilizamos lo último en ciencia y tecnología para ir más allá del tratamiento dental.",
  "tech_page.item.lenses.title": "Lentes de contacto dental",
  "tech_page.item.lenses.desc":
    "Cerámicas ultrafinas con mínimo desgaste, planificadas en prueba estética antes de la definitiva.",
  "tech_page.item.resin.title": "Resina compuesta estratificada",
  "tech_page.item.resin.desc":
    "Recontorno cosmético y cierre de diastemas con capas que imitan el esmalte natural.",
  "tech_page.item.invisalign.title": "Invisalign y alineadores",
  "tech_page.item.invisalign.desc":
    "Planificación digital del movimiento dental con aparatos invisibles y extraíbles.",
  "tech_page.item.xray.title": "Radiografía en la clínica",
  "tech_page.item.xray.desc":
    "Pruebas de imagen realizadas en el sitio, agilizando el diagnóstico y el plan de tratamiento.",
  "tech_page.item.isolation.title": "Aislamiento absoluto",
  "tech_page.item.isolation.desc":
    "Protocolo que aumenta la longevidad de las restauraciones y la seguridad del procedimiento.",
  "tech_page.item.injectables.title": "Inyectables y HOF",
  "tech_page.item.injectables.desc":
    "Toxina botulínica, hilos tensores, rinomodelación y contorno facial armónico.",

  "spec_page.eyebrow": "Tratamientos",
  "spec_page.title": "Todo en un solo lugar.",
  "spec_page.intro":
    "Odontología estética, rehabilitación, armonización y salud bucal integrativa en una sola clínica.",
  "spec_page.wa": "¡Hola! Me gustaría saber más sobre:",
  "spec_page.g1.name": "Estética Dental y Cosmética",
  "spec_page.g1.i1.t": "Carillas y Lentes de Contacto",
  "spec_page.g1.i1.d": "Correcciones de forma, color y espaciado de los dientes.",
  "spec_page.g1.i2.t": "Restauraciones en Resina Compuesta",
  "spec_page.g1.i2.d": "Cierre de diastemas y recontorno cosmético de la sonrisa.",
  "spec_page.g1.i3.t": "Blanqueamiento Dental",
  "spec_page.g1.i3.d": "Eliminación de manchas y restauración del brillo natural.",
  "spec_page.g2.name": "Rehabilitación Oral y Ortodoncia",
  "spec_page.g2.i1.t": "Implante Dental",
  "spec_page.g2.i1.d": "Sustitución de dientes perdidos con pernos de titanio.",
  "spec_page.g2.i2.t": "Prótesis Protocolo",
  "spec_page.g2.i2.d": "Rehabilitación total y fija de arcadas dentales.",
  "spec_page.g2.i3.t": "Invisalign / Alineadores",
  "spec_page.g2.i3.d": "Aparatos de ortodoncia invisibles y removibles.",
  "spec_page.g2.i4.t": "Aparato de Ortodoncia",
  "spec_page.g2.i4.d": "Modelos convencionales y estéticos para la alineación.",
  "spec_page.g2.i5.t": "Prótesis Dental",
  "spec_page.g2.i5.d": "Opciones removibles o fijas parciales.",
  "spec_page.g3.name": "Armonización y Estética Avanzada",
  "spec_page.g3.i1.t": "Armonización Orofacial",
  "spec_page.g3.i1.d": "Procedimientos inyectables y tecnologías para el equilibrio estético facial.",
  "spec_page.g3.i2.t": "Dermatología Clínica y Estética",
  "spec_page.g3.i2.d": "Tratamientos enfocados en la salud y el rejuvenecimiento de la piel.",
  "spec_page.g4.name": "Cuidados Clínicos y Salud Bucal",
  "spec_page.g4.i1.t": "Consulta General",
  "spec_page.g4.i1.d": "Evaluaciones de rutina y diagnóstico preventivo.",
  "spec_page.g4.i2.t": "Limpieza Dental",
  "spec_page.g4.i2.d": "Profilaxis para la eliminación de sarro y placa bacteriana.",
  "spec_page.g4.i3.t": "Tratamiento de Conducto",
  "spec_page.g4.i3.d": "Procedimientos endodónticos para infecciones internas.",
  "spec_page.g4.i4.t": "Tratamiento Periodontal",
  "spec_page.g4.i4.d": "Cuidado de las encías y los tejidos de soporte.",
  "spec_page.g4.i5.t": "Extracción de Muelas del Juicio",
  "spec_page.g4.i5.d": "Extracción quirúrgica de dientes incluidos o desalineados.",
  "spec_page.g4.i6.t": "Bruxismo y ATM",
  "spec_page.g4.i6.d": "Diagnóstico y férulas de descarga para disfunciones mandibulares.",
  "spec_page.g4.i7.t": "Odontopediatría",
  "spec_page.g4.i7.d": "Atención especializada para niños.",
  "spec_page.g4.i8.t": "Radiografía Dental",
  "spec_page.g4.i8.d": "Exámenes de imagen realizados en la propia clínica.",
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
