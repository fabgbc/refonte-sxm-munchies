import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/effects/SmoothScroll";
import CustomCursor from "@/components/effects/CustomCursor";
import GrainOverlay from "@/components/effects/GrainOverlay";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chef Francis | Private Chef Saint-Martin",
  description:
    "Expériences gastronomiques exclusives en villa, yacht et événements à Saint-Martin. Chef privé pour une clientèle d'exception.",
  keywords: [
    "chef privé",
    "Saint-Martin",
    "gastronomie",
    "villa",
    "yacht",
    "catering",
    "private chef",
    "Caribbean",
  ],
  openGraph: {
    title: "Chef Francis | Private Chef Saint-Martin",
    description:
      "Expériences gastronomiques exclusives en villa, yacht et événements à Saint-Martin.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <SmoothScroll>
          {children}
          <CustomCursor />
          <GrainOverlay />
        </SmoothScroll>
      </body>
    </html>
  );
}
