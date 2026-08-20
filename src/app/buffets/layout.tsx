import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/buffets`;
const title = "Luxury Buffets in Saint-Martin — Private Chef Catering";
const description =
  "Gourmet buffets for events, weddings and villa parties in Saint-Martin: tapas, salads, pastries and platters. Tailored catering by SXM Private Chef.";

const ogImage = {
  url: "/images/hero-menus/Buffet-patisserie.jpg",
  width: 2000,
  height: 2000,
  alt: "Luxury buffets and event catering in Saint-Martin",
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
