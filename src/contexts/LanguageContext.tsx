import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "PL" | "EN";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "PL";
    const stored = localStorage.getItem("lang");
    return stored === "EN" ? "EN" : "PL";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "EN" ? "en" : "pl";
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

// Convenience helper: pick PL or EN string
export const useT = () => {
  const { lang } = useLanguage();
  return <T,>(pl: T, en: T): T => (lang === "EN" ? en : pl);
};
