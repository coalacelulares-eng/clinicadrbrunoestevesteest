export const WHATSAPP_NUMBER = "5521999998888";

export const CLINIC = {
  doctor: "Dra. Jackline Félix",
  crm: "CRM-RJ 123456 · RQE 54321",
  specialty: "Cirurgia Plástica",
  address: "Av. das Américas, 3500 — Barra da Tijuca, Rio de Janeiro / RJ",
  email: "contato@drajacklinefelix.com",
  instagram: "https://instagram.com",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
