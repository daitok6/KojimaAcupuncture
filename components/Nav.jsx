"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const navKeys = ["home", "treatments", "aboutMe", "feesAppointment", "clinicTour", "qa"];

const paths = ["/", "/treatments", "/aboutme", "/fees", "/clinictour", "/qa"];

const Nav = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, `nav.${key}`);

  return (
    <nav className="flex gap-8" aria-label="Main navigation">
      {navKeys.map((key, index) => (
        <Link
          href={paths[index]}
          key={key}
          className={`font-medium text-sm pb-0.5 border-b-2 transition-all duration-300 ${pathname === paths[index] ? "text-accent border-accent" : "text-accent/70 border-transparent hover:text-accent hover:border-accent/30"}`}
        >
          {t(key)}
        </Link>
      ))}
    </nav>
  );
};

export default Nav