import { MessageCircle } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  const { t } = useI18n();

  return (
    <a
      href={whatsappLink(t("wa.default"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta.whatsapp")}
      className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full text-graphite shadow-[0_16px_40px_-14px_oklch(72.5%_0.088_78/0.9)] transition-transform duration-500 hover:-translate-y-1"
      style={{ background: "var(--gradient-gold)" }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/30" />
      <MessageCircle className="relative size-6" />
    </a>
  );
}
