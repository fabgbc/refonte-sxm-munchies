import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/effects/SmoothScroll";
import CustomCursor from "@/components/effects/CustomCursor";
import GrainOverlay from "@/components/effects/GrainOverlay";
import WhatsAppButton from "@/components/effects/WhatsAppButton";
import ScrollToTop from "@/components/effects/ScrollToTop";

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
  title: "SXM Private Chef | Private Chef Services in Saint-Martin",
  description:
    "Exclusive gourmet experiences at your villa, yacht, or events in Saint-Martin. Private chef for discerning clientele.",
  keywords: [
    "private chef",
    "Saint-Martin",
    "gourmet",
    "villa",
    "yacht",
    "catering",
    "Caribbean",
    "Chef Francis",
  ],
  openGraph: {
    title: "SXM Private Chef | Private Chef Services in Saint-Martin",
    description:
      "Exclusive gourmet experiences at your villa, yacht, or events in Saint-Martin.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <ScrollToTop />
        <SmoothScroll>
          {children}
          <CustomCursor />
          <GrainOverlay />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
