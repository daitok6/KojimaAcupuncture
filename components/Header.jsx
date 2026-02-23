"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Header = () => {
  const { language } = useLanguage();
  const t = (path) => getTranslation(language, path);

  return (
    <header className="sticky top-0 z-50 py-6 xl:py-8 text-accent/70 bg-primary/95 backdrop-blur-md border-b border-accent/5">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="group transition-colors duration-300">
          <h1 className="text-3xl xl:text-3xl font-semibold group-hover:text-accent transition-colors">
            Kojima Acupuncture<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <LanguageToggle />
          <Link href="/contact">
            <Button>{t("common.contact")}</Button>
          </Link>
        </div>

        <div className="xl:hidden flex items-center gap-4">
          <LanguageToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
