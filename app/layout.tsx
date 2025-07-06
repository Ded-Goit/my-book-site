import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Do It Now — Brian Tracy",
  description: "21 methods to overcome procrastination and boost productivity.",
  keywords: [
    "Brian Tracy",
    "Do It Now",
    "procrastination",
    "motivation",
    "time management",
    "21 Great Ways Book",
    "UAnalytica",
  ],
  authors: [{ name: "UAnalytica" }],
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://my-book-site-nine.vercel.app"),
  openGraph: {
    title: "Do It Now — Brian Tracy",
    description:
      "21 methods to overcome procrastination and boost productivity.",
    url: "https://my-book-site-nine.vercel.app/",
    siteName: "Do It Now — Brian Tracy",
    type: "website",
    images: [
      {
        url: "https://my-book-site-nine.vercel.app/og/do-it-now-cover.webp",
        width: 1200,
        height: 630,
        alt: "Do It Now — Brian Tracy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do It Now — Brian Tracy",
    description:
      "21 methods to overcome procrastination and boost productivity.",
    images: ["https://my-book-site-nine.vercel.app/og/do-it-now-cover.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical URL — корисно для SEO */}
        <link rel="canonical" href="https://my-book-site-nine.vercel.app/" />

        {/* Fallback OG — дублює metadata, якщо crawler не підтримає generateMetadata */}
        <meta property="og:title" content="Do It Now — Brian Tracy" />
        <meta
          property="og:description"
          content="21 methods to overcome procrastination and boost productivity."
        />
        <meta
          property="og:image"
          content="https://my-book-site-nine.vercel.app/og/do-it-now-cover.webp"
        />
        <meta
          property="og:url"
          content="https://my-book-site-nine.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Do It Now — Brian Tracy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Do It Now — Brian Tracy" />
        <meta
          name="twitter:description"
          content="21 methods to overcome procrastination and boost productivity."
        />
        <meta
          name="twitter:image"
          content="https://my-book-site-nine.vercel.app/og/do-it-now-cover.webp"
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="layout">
            <Header />
            <main className="content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
