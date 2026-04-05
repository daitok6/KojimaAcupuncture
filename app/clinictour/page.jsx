"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const ClinicTour = () => {
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);
  const items = t("clinicTour.items");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center"
      >
        <section className="container mx-auto" aria-labelledby="clinic-tour-heading">
          <h2 id="clinic-tour-heading" className="sr-only">
            {t("clinicTour.heading")}
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="h-[80vh] xl:h-[85vh] mb-12"
            onSlideChange={handleSlideChange}
            loop={true}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="relative flex justify-center items-center">
                  <div className="absolute inset-0 bg-black/10 z-10" aria-hidden></div>
                  <div className="relative w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={4000}
                      height={3024}
                      className="object-contain sm:object-cover w-full"
                    />
                  </div>
                  <p className="text-md xl:text-2xl font-bold text-white absolute bottom-4 xl:bottom-10 left-14 xl:left-10">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <WorkSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </section>
      </motion.div>
    </main>
  );
};

export default ClinicTour;
