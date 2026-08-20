import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/breakfast-brunch`;
const title = "Breakfast & Brunch at Your Villa — Saint-Martin";
const description =
  "Private chef breakfast and brunch at your villa in Saint-Martin. Pancakes, smoked salmon, mimosas. From $25 per guest by SXM Private Chef.";

const ogImage = {
  url: "/images/hero-menus/Breakfast.jpg",
  width: 1500,
  height: 2000,
  alt: "Breakfast and brunch at your villa by SXM Private Chef",
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
