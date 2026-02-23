"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`flex items-center rounded-lg border border-accent/10 bg-primary/50 p-0.5 ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="English"
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === "en"
            ? "bg-accent text-primary"
            : "text-accent/70 hover:text-accent hover:bg-accent/5"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ja")}
        aria-pressed={language === "ja"}
        aria-label="日本語"
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === "ja"
            ? "bg-accent text-primary"
            : "text-accent/70 hover:text-accent hover:bg-accent/5"
        }`}
      >
        JP
      </button>
    </div>
  );
}
