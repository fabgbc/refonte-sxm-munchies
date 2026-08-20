import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/gourmet-platters`;
const title = "Gourmet Platters for Events — Saint-Martin Catering";
const description =
  "Cheese, deli meats, sashimi and beef tataki platters by SXM Private Chef. Ideal for events, villas and yacht catering in Saint-Martin.";

const ogImage = {
  url: "/images/hero-menus/Gourmet-Platters.jpg",
  width: 800,
  height: 560,
  alt: "Gourmet platters for events in Saint-Martin",
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
