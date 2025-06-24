"use client";

import Link from "next/link";
import { useState } from "react";
import "./Header.module.css"; // модуль можна винести окремо

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <h1 className="logo">Зроби це зараз</h1>
        <button className="burger" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          <Link href="/">Головна</Link>
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
