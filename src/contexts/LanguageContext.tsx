import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "@/lib/translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof translations)[Lang];
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("shama-lang") as Lang | null;
      if (saved === "en" || saved === "ur") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("shama-lang", l); } catch {}
  };

  const value: Ctx = {
    lang,
    setLang,
    toggle: () => setLang(lang === "en" ? "ur" : "en"),
    t: translations[lang],
    dir: lang === "ur" ? "rtl" : "ltr",
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
