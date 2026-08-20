import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/caribbean-menu`;
const title = "Caribbean Menu — Island Flavors by SXM Private Chef";
const description =
  "Caribbean tasting menu: shrimp and pineapple salad, mahi-mahi with passion fruit, mango cheesecake. $90 per guest in Saint-Martin.";

const ogImage = {
  url: "/images/hero-menus/Caribbean.jpg",
  width: 1920,
  height: 1080,
  alt: "Caribbean tasting menu by SXM Private Chef",
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
