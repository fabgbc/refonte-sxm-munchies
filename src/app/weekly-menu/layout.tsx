import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/weekly-menu`;
const title = "Weekly Menu — Seasonal Villa Stay Menus, Saint-Martin";
const description =
  "Stress-free seasonal menus for villa stays in Saint-Martin: lunch, dinner and dessert daily. Tailored weekly cuisine by SXM Private Chef.";

const ogImage = {
  url: "/images/hero-menus/Weekly.jpg",
  width: 848,
  height: 565,
  alt: "Seasonal weekly menus for villa stays in Saint-Martin",
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
