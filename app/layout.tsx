import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import LenisProvider from "@/components/lenis-provider";
import RevealObserver from "@/components/reveal-observer";
import PageTransition from "@/components/page-transition";
import Footer from "@/components/footer";

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayro — Digital Experiences Shaped by Intention",
  description:
    "Ayro is an app developer and designer crafting strategy-led digital experiences for forward-thinking brands.",
  openGraph: {
    title: "Ayro — Digital Experiences Shaped by Intention",
    description:
      "Strategy-led development for forward-thinking brands.",
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
      className={`${serif.variable} ${sans.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-charcoal">
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
