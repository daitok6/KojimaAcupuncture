"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Qa = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);

  const items = t("qa.items");

  const toggleDescription = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <main>
      <section
        className="min-h-screen flex flex-col justify-center py-2 xl:py-0"
        aria-labelledby="qa-heading"
      >
        <div className="container mx-auto">
          <h2 id="qa-heading" className="sr-only">
            {language === "ja" ? "よくある質問" : "Frequently Asked Questions"}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="grid grid-cols-1 gap-12"
          >
            {items.map((item, index) => (
              <article
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-5xl font-extrabold text-accent/40 group-hover:text-accent/60 transition-all duration-300">
                    {item.num}
                  </span>
                </div>
                <h3
                  className="text-[42px] font-bold leading-none text-accent transition-all duration-300 cursor-pointer hover:text-accent-hover"
                  onClick={() => toggleDescription(index)}
                  onKeyDown={(e) => e.key === "Enter" && toggleDescription(index)}
                  tabIndex={0}
                  role="button"
                >
                  {item.title}
                </h3>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.p
                      key={`description-${index}`}
                      className="text-accent/70 overflow-hidden leading-relaxed"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <div className="border-b border-accent/10 w-full" aria-hidden></div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Qa;
