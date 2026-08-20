import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/surf-turf-menu`;
const title = "Surf & Turf Menu — Lobster & Tenderloin, Saint-Martin";
const description =
  "Bold land-and-sea menu: lobster tail, beef tenderloin with bisque sauce, mango passion pavlova. $110 per guest by SXM Private Chef.";

const ogImage = {
  url: "/images/hero-menus/Surf-Turf.jpg",
  width: 2000,
  height: 2000,
  alt: "Surf and turf menu by SXM Private Chef",
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
