import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import LenisProvider from "@/components/lenis-provider";
import RevealObserver from "@/components/reveal-observer";
import PageTransition from "@/components/page-transition";
import Footer from "@/components/footer";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayro — Premium Digital Experiences From AI-Powered Design",
  description:
    "Ayro crafts strategic apps and digital experiences using Cursor, Figma, Claude & OpenAI. Visionary app developer and designer.",
  openGraph: {
    title: "Ayro — Premium Digital Experiences From AI-Powered Design",
    description:
      "Ayro crafts strategic apps and digital experiences using Cursor, Figma, Claude & OpenAI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-ink">
        <LenisProvider>
          <RevealObserver />
          <Nav />
          <PageTransition>
            <main className="relative">{children}</main>
          </PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
