"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  }
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav