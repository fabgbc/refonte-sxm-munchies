import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/book-your-chef-in-saint-martin`;
const title = "Book Your Private Chef in Saint-Martin";
const description =
  "Reserve a private chef in Saint-Martin for villas, yachts and events. Plan your gourmet experience with SXM Private Chef in St-Martin / Sint Maarten.";

const ogImage = {
  url: "/images/Sxmunchies-n-sweets-villa-7.jpg",
  width: 848,
  height: 565,
  alt: "Book a private chef in Saint-Martin — villa dining by SXM Private Chef",
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
