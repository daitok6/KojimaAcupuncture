"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Treatments = () => {
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);

  const services = t("treatments.services");
  const procedureItems = t("treatments.procedureItems");
  const equipment = t("treatments.equipment");

  const [project, setProject] = useState(equipment[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(equipment[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-0"
    >
      <section className="min-h[80vh] flex flex-col justify-center py-2 xl:py-4" aria-labelledby="how-to-get-treated">
        <div className="container mx-auto">
          <h2 id="how-to-get-treated" className="text-4xl font-bold mb-6 text-accent">
            {t("treatments.howToGetTreated")}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="grid grid-cols-1 gap-[20px]"
          >
            {services.map((service, index) => (
              <article
                key={index}
                className="flex-1 flex flex-col justify-center gap-2 group rounded-2xl border border-accent/10 bg-primary/50 p-6 shadow-soft hover:shadow-premium transition-shadow duration-300"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-2xl font-extrabold transition-all duration-300">{service.num}</div>
                  {service.hasButton && (
                    <Link
                      href="/contact"
                      className="p-3 rounded-full bg-sage/80 group-hover:bg-sage shadow-soft hover:shadow-premium transition-all duration-300 flex justify-center items-center"
                    >
                      <p className="text-accent text-sm font-medium">{t("common.bookAppointment")}</p>
                    </Link>
                  )}
                </div>
                <h3 className="text-3xl font-bold leading-none text-accent">{service.title}</h3>
                <p className="text-accent/70">{service.description}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-4" aria-labelledby="treatment-procedures">
        <div className="container mx-auto">
          <h2 id="treatment-procedures" className="text-4xl font-bold mb-6 text-accent">
            {t("treatments.treatmentProcedures")}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="grid grid-cols-1 gap-[20px]"
          >
            {procedureItems.map((item, index) => (
              <article
                key={index}
                className="flex-1 flex flex-col justify-center gap-2 group rounded-2xl border border-accent/10 bg-primary/50 p-6 shadow-soft hover:shadow-premium transition-shadow duration-300"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-2xl font-extrabold transition-all duration-300">{item.num}</div>
                </div>
                <p className="text-accent/70">{item.description}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto" aria-labelledby="equipment-used">
        <h2 id="equipment-used" className="text-4xl font-bold my-10 text-accent">
          {t("treatments.equipmentUsed")}
        </h2>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <h3 className="text-3xl font-bold leading-none text-accent transition-all duration-500 capitalize">
                {project.category}
              </h3>
              <p className="text-accent/70 leading-relaxed">{project.description}</p>
              <div className="border border-accent/10"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="xl:h-[520px] mb-4 xl:mb-12"
              onSlideChange={handleSlideChange}
            >
              {equipment.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-primary/30 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover"
                        alt={item.alt}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Treatments;
