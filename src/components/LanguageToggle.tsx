import { useLang } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1.5 text-sm font-medium hover:bg-gold/10 transition ${className}`}
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4 text-gold" />
      <span className={lang === "en" ? "" : "font-urdu"}>{lang === "en" ? "اردو" : "EN"}</span>
    </button>
  );
}
