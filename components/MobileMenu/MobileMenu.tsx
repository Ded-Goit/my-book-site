"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./MobileMenu.module.css";

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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button className={styles.burger} onClick={() => setOpen(true)}>
        ☰
      </button>
      {open && (
        <div className={styles.overlay}>
          <button className={styles.close} onClick={() => setOpen(false)}>
            ×
          </button>
          <nav className={styles.nav}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`${styles.link} ${
                  pathname === href ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
