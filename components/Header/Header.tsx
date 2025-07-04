"use client";

import Link from "next/link";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Do It Now
        </Link>

        <MobileMenu />
        <nav className={styles.desktopNav}>
          <Link href="/about">Про книгу</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/quotes">Quotes</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/checklist">Check-List</Link>
          <Link href="/team">Team</Link>
          <Link href="/resources">Resources</Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
