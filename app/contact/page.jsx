"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const MAPS_URL =
  "https://www.google.ca/maps/place/40+Wynford+Dr+Unit+%23+301,+North+York,+ON+M3C+1J5+%E3%82%AB%E3%83%8A%E3%83%80/@43.7242702,-79.3405936,17z/data=!3m1!4b1!4m10!1m2!2m1!1s40+Wynford+Dr+Unit+suite+301!3m6!1s0x89d4cd09e75cb711:0xd7390ddc0ef4ac2!8m2!3d43.7242703!4d-79.3357227!15sChw0MCBXeW5mb3JkIERyIFVuaXQgc3VpdGUgMzAxkgEQY29tcG91bmRfc2VjdGlvbuABAA!16s%2Fg%2F11lr3qjttp?hl=ja&entry=ttu";

const Contact = () => {
  const form = useRef();
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);

  const info = [
    { icon: <FaPhoneAlt />, title: t("contact.phoneLabel"), description: "(416) 486 0287", href: "tel:(416) 486 0287" },
    { icon: <FaEnvelope />, title: t("contact.emailLabel"), description: "tadashikojima89@gmail.com", href: "mailto:tadashikojima89@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: t("contact.addressLabel"), description: "40 Wynford Drive # 301 Toronto, Ontario", href: MAPS_URL },
  ];

  emailjs.init({ publicKey: "_fQKS4Q5xuad-XYUb" });

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current && form.current.tagName === "FORM") {
      emailjs
        .sendForm("service_kymn4nk", "template_8iwbgxj", form.current)
        .then(
          (result) => {
            alert(t("contact.messageSent"));
            form.current.reset();
          },
          (error) => {
            alert(t("contact.messageFailed"));
          }
        );
    } else {
      console.error("Form reference is not correctly set.");
    }
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="py-2"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 p-10 bg-sage/90 rounded-2xl shadow-premium"
                aria-labelledby="book-appointment-heading"
              >
                <h2 id="book-appointment-heading" className="text-4xl text-accent">
                  {t("contact.bookAppointment")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="firstname" type="text" placeholder={t("contact.firstname")} aria-label={t("contact.firstname")} />
                  <Input name="lastname" type="text" placeholder={t("contact.lastname")} aria-label={t("contact.lastname")} />
                  <Input name="email" type="email" placeholder={t("contact.email")} aria-label={t("contact.email")} />
                  <Input name="phone" type="tel" placeholder={t("contact.phone")} aria-label={t("contact.phone")} />
                  <Input name="appointment_date" type="date" placeholder={t("contact.selectDate")} aria-label={t("contact.selectDate")} />
                  <Input name="appointment_time" type="time" placeholder={t("contact.selectTime")} aria-label={t("contact.selectTime")} />
                </div>
                <Select name="service">
                  <SelectTrigger className="w-full" aria-label={t("contact.selectService")}>
                    <SelectValue placeholder={t("contact.selectService")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("contact.selectServiceLabel")}</SelectLabel>
                      <SelectItem value="First Visit">{t("contact.firstVisit")}</SelectItem>
                      <SelectItem value="Ongoing Treatment">{t("contact.ongoingTreatment")}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea name="message" className="h-[200px]" placeholder={t("contact.messagePlaceholder")} aria-label={t("contact.messagePlaceholder")} />
                <Button size="md" className="max-w-40" type="submit">
                  {t("common.sendMessage")}
                </Button>
              </form>
            </div>
            <aside className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-sage text-accent rounded-xl flex items-center justify-center shadow-soft transition-all duration-300 ease-out hover:scale-105 hover:shadow-premium"
                      aria-label={item.title}
                    >
                      {item.icon}
                    </a>
                    <div className="flex-1">
                      <p className="text-accent/60 text-sm tracking-wide">{item.title}</p>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
