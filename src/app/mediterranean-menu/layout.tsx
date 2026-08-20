import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/mediterranean-menu`;
const title = "Mediterranean Menu — Provençal Flavors, Saint-Martin";
const description =
  "Provençal cuisine: cod with artichoke, lamb moussaka, burrata focaccia and frozen nougat. $90 per guest by SXM Private Chef in Saint-Martin.";

const ogImage = {
  url: "/images/hero-menus/Mediterranean.jpg",
  width: 1920,
  height: 1080,
  alt: "Mediterranean Provencal menu by SXM Private Chef",
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
