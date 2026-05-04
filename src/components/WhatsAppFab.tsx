import { MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { waLink } from "@/lib/translations";

export function WhatsAppFab() {
  const { t } = useLang();
  return (
    <a
      href={waLink(t.misc.whatsappPrompt)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant animate-pulse-gold hover:scale-110 transition-transform floating-control"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
