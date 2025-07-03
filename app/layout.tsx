import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Do It Now - Brian Tracy",
  description: "A site with ideas, tools and methods against procrastination",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Brian Tracy",
    "Do It Now",
    "procrastination",
    "motivation",
    "time management",
    "21 Great Ways Book",
  ],
  authors: [{ name: "Твоя команда" }],
  openGraph: {
    title: "Do It Now - Brian Tracy",
    description: "21 methods to overcome procrastination",
    type: "website",
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="layout">
            <Header />
            <main className="content">{children}</main>
            <footer className="footer">
              <p>
                &copy; {new Date().getFullYear()} Do It Now | team НАЗВА КОМАНДИ
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
