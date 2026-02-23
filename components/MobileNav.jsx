"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

const navKeys = ["home", "treatments", "aboutMe", "feesAppointment", "clinicTour", "qa", "contact"];
const paths = ["/", "/treatments", "/aboutme", "/fees", "/clinictour", "/qa", "/contact"];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { language } = useLanguage();
    const t = (key) => getTranslation(language, `nav.${key}`);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className='flex justify-center items-center' onClick={() => setIsOpen(true)} aria-label="Open menu">
                    <CiMenuFries className='text-[32px] text-accent' />
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-16 mb-6 text-left'>
                    <Link href="/" onClick={handleLinkClick}>
                        <h2 className='text-4xl font-semibold text-accent/70'>Kojima Acupuncture <span className='text-accent'>.</span></h2>
                    </Link>
                </div>
                <div className='mb-6'>
                    <LanguageToggle />
                </div>
                <nav className='flex flex-col justify-center items-center gap-8' aria-label="Mobile navigation">
                    {navKeys.map((key, index) => (
                        <Link
                            href={paths[index]}
                            key={key}
                            className={`${pathname === paths[index] ? "text-accent border-b-2 border-accent" : ""} text-xl hover:text-accent transition-all`}
                            onClick={handleLinkClick}
                        >
                            {t(key)}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
