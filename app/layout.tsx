import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import LenisProvider from "@/components/lenis-provider";
import RevealObserver from "@/components/reveal-observer";
import Footer from "@/components/footer";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lavie Garden | A Green Hug from Nature — Best Restaurant in Kathmandu",
  description:
    "Lavie Garden is the most celebrated restaurant in Kathmandu, offering fresh air, an open garden, flavorful delicacies, boutique accommodation, and soul-soothing live music near Boudha Stupa.",
  openGraph: {
    title: "Lavie Garden | A Green Hug from Nature",
    description:
      "The most celebrated restaurant in Kathmandu — fresh air, open garden, flavorful delicacies & boutique stay.",
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
          <main className="relative">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
