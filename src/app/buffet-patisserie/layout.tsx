import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/buffet-patisserie`;
const title = "Pastry Buffet — Macarons, Cakes & French Desserts";
const description =
  "Indulgent pastry buffet for events in Saint-Martin: macarons, financiers, fresh fruit cups, mango cheesecake. Catering by SXM Private Chef.";

const ogImage = {
  url: "/images/hero-menus/Buffet-patisserie.jpg",
  width: 2000,
  height: 2000,
  alt: "Pastry buffet for events in Saint-Martin by SXM Private Chef",
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
