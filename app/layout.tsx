import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Зроби це зараз — Брайан Трейсі",
  description: "Сайт з ідеями, інструментами та методами проти прокрастинації",
  keywords: [
    "Брайан Трейсі",
    "Зроби це зараз",
    "прокрастинація",
    "мотивація",
    "тайм-менеджмент",
  ],
  authors: [{ name: "Твоя команда" }],
  openGraph: {
    title: "Зроби це зараз — Брайан Трейсі",
    description: "21 метод подолання прокрастинації",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <div className="layout">
          <header className="header">
            <nav className="nav">
              <Link href="/">Головна</Link>
              <Link href="/about">Про книгу</Link>
              <Link href="/methods">Методи</Link>
              <Link href="/quotes">Цитати</Link>
              <Link href="/tools">Інструменти</Link>
              <Link href="/checklist">Чек‑лист</Link>
              <Link href="/team">Наша команда</Link>
              <Link href="/resources">Ресурси</Link>
            </nav>
          </header>
          <main className="content">{children}</main>
          <footer className="footer">
            <p>
              &copy; {new Date().getFullYear()} Зроби це зараз | Команда
              SoftSkills
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
