import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";

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
          <Header />
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
