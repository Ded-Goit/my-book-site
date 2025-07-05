"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About book" },
    { href: "/insights", label: "Insights" },
    { href: "/quotes", label: "Quotes" },
    { href: "/tools", label: "Tools" },
    { href: "/checklist", label: "Check-List" },
    { href: "/team", label: "Team" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Do It Now
        </Link>

        <MobileMenu />
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? `${styles.activeLink}` : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
