"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const MAPS_URL = "https://www.google.ca/maps/place/40+Wynford+Dr+Unit+%23+301,+North+York,+ON+M3C+1J5+%E3%82%AB%E3%83%8A%E3%83%80/@43.7242702,-79.3405936,17z/data=!3m1!4b1!4m10!1m2!2m1!1s40+Wynford+Dr+Unit+suite+301!3m6!1s0x89d4cd09e75cb711:0xd7390ddc0ef4ac2!8m2!3d43.7242703!4d-79.3357227!15sChw0MCBXeW5mb3JkIERyIFVuaXQgc3VpdGUgMzAxkgEQY29tcG91bmRfc2VjdGlvbuABAA!16s%2Fg%2F11lr3qjttp?hl=ja&entry=ttu";

export default function HomePage() {
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);

  return (
    <main>
      <section className="h-full" aria-labelledby="clinic-title">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 id="clinic-title" className="h1 mb-6 [word-break:normal]">
                {t("home.title")}
              </h1>
              <p className="text-accent text-2xl">{t("home.subtitle")}</p>
              <p className="text-xs mb-4 ml-4 tracking-widest uppercase text-accent/60">
                {t("home.credential")}
              </p>
              <p className="max-w-[500px] xl:mx-0 mb-3 text-accent/80 leading-relaxed text-left">
                {t("home.intro")}
              </p>
              <ul className="max-w-[500px] xl:mx-0 mb-5 flex flex-col gap-2 text-left">
                {t("home.introBullets").map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-accent/80">
                    <span className="text-lg leading-snug">{item.icon}</span>
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full flex gap-2">
                <a href="/contact" className="flex flex-col mx-auto xl:mx-0 xl:flex-row items-center gap-8">
                  <Button variant="default" size="lg" className="uppercase flex items-center gap-2 mb-5">
                    <span>{t("common.bookAppointment")}</span>
                  </Button>
                </a>
              </div>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Stats />
              </div>
            </div>
            <div>
              <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
            </div>
          </div>
          <div className="w-full h-9 xl:mt-10">
            <div className="flex-1 flex items-center order-1 xl:order-none mb-2">
              <ul className="flex flex-col gap-10">
                <li className="flex items-center gap-6">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-sage text-accent rounded-xl flex items-center justify-center shadow-soft transition-all duration-300 ease-out hover:scale-105 hover:shadow-premium"
                    aria-label={t("home.location")}
                  >
                    <FaMapMarkerAlt aria-hidden />
                  </a>
                  <div className="flex-1">
                    <p className="text-accent/60 text-sm tracking-wide">{t("home.location")}</p>
                    <h2 className="text-xl">{t("home.address")}</h2>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              width={2000}
              height={1000}
              src="/assets/building.png"
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Kojima Acupuncture Clinic building exterior at 40 Wynford Drive Toronto"
              className="pb-14"
            />
            <div className="flex-1">
              <p className="text-accent/60 text-sm tracking-wide">{t("home.parking")}</p>
              <p className="text-md leading-6 mb-2">{t("home.parkingInfo")}</p>
            </div>
            <Image
              width={2000}
              height={1000}
              src="/assets/parking.png"
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Parking lot and visitor parking at Kojima Acupuncture Clinic"
              className="pb-14"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
