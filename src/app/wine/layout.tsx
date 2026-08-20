import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/wine`;
const title = "Fine Wines — Curated Wine List in Saint-Martin";
const description =
  "Over 750 wines curated by our sommelier — from prestigious Champagnes to rare Californian vintages. Wine pairings by SXM Private Chef.";

const ogImage = {
  url: "/images/hero-menus/Wine.jpg",
  width: 1920,
  height: 1080,
  alt: "Curated fine wine list by SXM Private Chef",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: siteInfo.name,
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
