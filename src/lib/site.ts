export const WHATSAPP_NUMBER = "5531984589016";

export const CLINIC = {
  doctor: "Thebit Saúde e Estética",
  director: "Dr. Daniel Thebit",
  crm: "CRO-MG · Especialista em Dentística",
  specialty: "Clínica Odontológica e Médica",
  address: "Av. dos Bandeirantes, 466 — Anchieta / Comiteco, Belo Horizonte / MG, 30315-382",
  phone: "+55 31 98458-9016",
  hours: "Seg a sex, 09h às 20h · Sáb, 09h às 12h",
  email: "contato@thebitsaudeestetica.com.br",
  instagram: "https://www.instagram.com/clinica.thebit/",
  maps: "https://maps.app.goo.gl/d8ZuF7bmtdwbMKhF7",
  rating: "5.0",
};

export const FIRST_VISIT = {
  price: "R$ 450",
  payments: "Dinheiro, Pix, transferência, cheque ou cartão",
  steps: [
    "A avaliação inicial é feita com o Dr. Daniel Thebit, que orienta quais procedimentos são indicados para o seu caso.",
    "Não é necessário levar exames: os exames de imagem são solicitados e realizados na própria clínica.",
    "Para reservar o horário pedimos nome completo, RG, CPF, endereço com CEP e informação sobre alergias.",
    "Consulta no valor de R$ 450, com pagamento em dinheiro, Pix, transferência, cheque ou cartão.",
    "Se vier de carro, ligue ao chegar que abrimos o portão para você.",
  ],
};

export const TEAM = [
  {
    name: "Dr. Daniel Thebit",
    role: "CEO · Especialista em Dentística",
    desc: "Cirurgião-dentista com especialização em Dentística e estética avançada (KSH ILAPEO/PR): lentes de contato, laminados cerâmicos, facetas de resina e recontorno estético. Faixa preta de Jiu-Jitsu (FP Team BJJ).",
    instagram: "https://www.instagram.com/dr.danielthebit/",
  },
  {
    name: "Dra. Bianca Medeiros",
    role: "Harmonização Orofacial",
    desc: "Especialista em HOF e Odontologia Estética Restauradora: contorno facial, fios de sustentação, toxina botulínica e lipo de papada.",
    instagram: "https://www.instagram.com/drabiancamedeiros/",
  },
  {
    name: "Dra. Katielly Mendes",
    role: "Estética Orofacial",
    desc: "Foco em procedimentos injetáveis harmônicos, rinomodelação e aplicação de toxina botulínica.",
    instagram: "https://www.instagram.com/dra.katiellymendes/",
  },
  {
    name: "Dra. Fernanda Montrezor",
    role: "Clínica Geral e Estética",
    desc: "Odontologia estética e restauradora, isolamento absoluto para longevidade de restaurações, profilaxia e clareamentos.",
    instagram: "https://www.instagram.com/dra.fernandamontrezor/",
  },
  {
    name: "Luiza Francino",
    role: "Estética Restauradora",
    desc: "Dedicada à reabilitação estética e a limpezas profiláticas detalhadas.",
    instagram: "https://www.instagram.com/luizafrancino/",
  },
  {
    name: "Dra. Isabela Garzedin",
    role: "Periodontia Integrativa",
    desc: "Saúde bucal integrativa e periodontia, correlacionando saúde da gengiva e do organismo, com manejo odontológico de pacientes com doenças sistêmicas e autoimunes (artrite reumatoide, lúpus).",
    instagram: "https://www.instagram.com/isabela.garzedin/",
  },
  {
    name: "Gabriela Jardim",
    role: "Odontologia Preventiva",
    desc: "Odontologia preventiva, clínica e educacional, promovendo saúde bucal diária e técnicas corretas de higiene biológica.",
    instagram: "https://www.instagram.com/gabrielajards/",
  },
  {
    name: "Dra. Camila Attiê",
    role: "Dermatologia Clínica e Estética",
    desc: "Médica especialista em gerenciamento de pele, tratamentos injetáveis avançados e rejuvenescimento natural.",
    instagram: "https://www.instagram.com/dra.camilaattie/",
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
