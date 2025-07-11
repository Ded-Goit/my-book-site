"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./MobileMenu.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About book" },
  { href: "/insights", label: "Insights" },
  { href: "/quotes", label: "Quotes" },
  { href: "/tools", label: "Tools" },
  { href: "/checklist", label: "Check-List" },
  { href: "/team", label: "Team" },
  { href: "/resources", label: "Resources" },
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
            x
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
