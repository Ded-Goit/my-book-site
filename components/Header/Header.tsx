"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Головна" },
  { href: "/about", label: "Про книгу" },
  { href: "/methods", label: "Методи" },
  { href: "/quotes", label: "Цитати" },
  { href: "/tools", label: "Інструменти" },
  { href: "/checklist", label: "Чек‑лист" },
  { href: "/team", label: "Команда" },
  { href: "/resources", label: "Ресурси" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Зроби це зараз</h1>
        <MobileMenu />

        <nav className={styles.desktopNav}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${
                pathname === href ? styles.active : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
