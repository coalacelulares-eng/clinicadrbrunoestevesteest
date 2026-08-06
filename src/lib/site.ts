export const WHATSAPP_NUMBER = "5531984589016";

export const CLINIC = {
  doctor: "Thebit Saúde e Estética",
  director: "Dr. Daniel Thebit",
  crm: "CRO-MG · Especialista em Dentística",
  specialty: "Clínica Odontológica e Médica",
  address: "Av. dos Bandeirantes, 466 — Anchieta, Belo Horizonte / MG, 30315-382",
  phone: "+55 31 98458-9016",
  hours: "Seg a sex, 09h às 20h · Sáb, 09h às 12h",
  email: "contato@thebitsaudeestetica.com.br",
  instagram: "https://instagram.com",
};

export const TEAM = [
  {
    name: "Dr. Daniel Thebit",
    role: "CEO · Especialista em Dentística",
    desc: "Cirurgião-dentista com foco internacional em Estética Dental Avançada: lentes de contato, facetas de resina e reabilitação do sorriso.",
  },
  {
    name: "Dra. Bianca Medeiros",
    role: "Harmonização Orofacial",
    desc: "Especialista em HOF e Odontologia Estética Restauradora: contorno facial, fios de sustentação, toxina botulínica e lipo de papada.",
  },
  {
    name: "Dra. Katielly Mendes",
    role: "Estética Orofacial",
    desc: "Foco em procedimentos injetáveis harmônicos, rinomodelação e aplicação de toxina botulínica.",
  },
  {
    name: "Dra. Fernanda Montrezor",
    role: "Clínica Geral e Estética",
    desc: "Odontologia estética e restauradora, isolamento absoluto para longevidade de restaurações, profilaxia e clareamentos.",
  },
  {
    name: "Luiza Francino",
    role: "Estética Restauradora",
    desc: "Dedicada à reabilitação estética e a limpezas profiláticas detalhadas.",
  },
  {
    name: "Dra. Isabela Garzedin",
    role: "Periodontia Integrativa",
    desc: "Saúde bucal integrativa e periodontia, com manejo odontológico de pacientes com doenças sistêmicas e autoimunes.",
  },
  {
    name: "Gabriela Jardim",
    role: "Odontologia Preventiva",
    desc: "Odontologia preventiva, clínica e educacional, promovendo higiene biológica diária.",
  },
  {
    name: "Dra. Camila Attiê",
    role: "Dermatologia Clínica e Estética",
    desc: "Médica especialista em gerenciamento de pele, injetáveis avançados e rejuvenescimento natural.",
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
