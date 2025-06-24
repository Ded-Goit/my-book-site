"use client";

import Link from "next/link";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Показується завжди */}
        <Link href="/" className={styles.logo}>
          Зроби це зараз
        </Link>

        {/* Бургер меню завжди на мобайлі */}
        <MobileMenu />

        {/* Навігація тільки для десктопу */}
        <nav className={styles.desktopNav}>
          <Link href="/about">Про книгу</Link>
          <Link href="/methods">Методи</Link>
          <Link href="/quotes">Цитати</Link>
          <Link href="/tools">Інструменти</Link>
          <Link href="/checklist">Чек‑лист</Link>
          <Link href="/team">Команда</Link>
          <Link href="/resources">Ресурси</Link>
        </nav>
      </div>
    </header>
  );
}
