"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Fees = () => {
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);

  const services = t("fees.services");

  return (
    <main>
      <section className="min-h[80vh] flex flex-col justify-center py-2 xl:py-0" aria-labelledby="fees-heading">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[20px]"
          >
            <article className="md:col-span-2 w-full flex flex-col justify-center gap-4 group rounded-2xl border border-accent/10 bg-primary/50 p-6 shadow-soft hover:shadow-premium transition-shadow duration-300">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold transition-all duration-300">
                  {t("fees.businessHours")}
                </div>
              </div>
              <div className="flex-col">
                <h2 id="fees-heading" className="text-[42px] font-bold leading-none text-accent">
                  {t("fees.open")}
                </h2>
                <p className="text-accent/90">{t("fees.hoursWeekday")}</p>
                <p className="text-accent/90">{t("fees.hoursSaturday")}</p>
                <p className="text-accent/60">{t("fees.closed")}</p>
              </div>
            </article>
            {services.map((service, index) => (
              <article
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group rounded-2xl border border-accent/10 bg-primary/50 p-6 shadow-soft hover:shadow-premium transition-shadow duration-300"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold transition-all duration-300">{service.num}</div>
                  <Link
                    href={service.href}
                    className="p-3 rounded-full bg-sage/80 group-hover:bg-sage shadow-soft hover:shadow-premium transition-all duration-300 flex justify-center items-center"
                  >
                    <p className="text-accent text-sm font-medium">{t("common.bookAppointment")}</p>
                  </Link>
                </div>
                <h3 className="text-[42px] font-bold leading-none text-accent">{service.title}</h3>
                <p className="text-accent/70">{service.description}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Fees;
