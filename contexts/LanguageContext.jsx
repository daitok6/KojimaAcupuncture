"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LANGUAGE_KEY = "kojima-acupuncture-lang";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    if (stored === "ja" || stored === "en") {
      setLanguageState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language === "ja" ? "ja" : "en";
  }, [language, mounted]);

  const setLanguage = (lang) => {
    setLanguageState(lang === "ja" ? "ja" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
