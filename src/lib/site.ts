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
    id: "daniel",
    name: "Dr. Daniel Thebit",
    instagram: "https://www.instagram.com/dr.danielthebit/",
  },
  {
    id: "bianca",
    name: "Dra. Bianca Medeiros",
    instagram: "https://www.instagram.com/drabiancamedeiros/",
  },
  {
    id: "katielly",
    name: "Dra. Katielly Mendes",
    instagram: "https://www.instagram.com/dra.katiellymendes/",
  },
  {
    id: "fernanda",
    name: "Dra. Fernanda Montrezor",
    instagram: "https://www.instagram.com/dra.fernandamontrezor/",
  },
  {
    id: "luiza",
    name: "Luiza Francino",
    instagram: "https://www.instagram.com/luizafrancino/",
  },
  {
    id: "isabela",
    name: "Dra. Isabela Garzedin",
    instagram: "https://www.instagram.com/isabela.garzedin/",
  },
  {
    id: "gabriela",
    name: "Gabriela Jardim",
    instagram: "https://www.instagram.com/gabrielajards/",
  },
  {
    id: "camila",
    name: "Dra. Camila Attiê",
    instagram: "https://www.instagram.com/dra.camilaattie/",
  },
];

export const TECH_ITEMS = [
  { id: "lenses" },
  { id: "resin" },
  { id: "invisalign" },
  { id: "xray" },
  { id: "isolation" },
  { id: "injectables" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
