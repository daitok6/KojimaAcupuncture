"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "treatments",
        path: "/treatments",
    },
    {
        name: "About Me",
        path: "/aboutme",
    },
    {
        name: "fees & appointment",
        path: "/fees",
    },
    {
        name: "clinic tour",
        path: "/clinictour",
    },
    {
        name: "Q&A",
        path: "/qa",
    },
    {
        name: "Contact",
        path: "/contact",
    }

]

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className='flex justify-center items-center' onClick={() => setIsOpen(true)}>
                    <CiMenuFries className='text-[32px] text-accent' />
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className='mt-16 mb-8 text-left text-2xl'>
                    <Link href="/" onClick={handleLinkClick} >
                        <h1 className='text-4xl font-semibold text-gray-500'>Kojima Acupuncture <span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                {/* nav */}
                {/* <nav className='flex flex-col justify-center items-center gap-8'> */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
