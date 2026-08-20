import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/gourmet-menu`;
const title = "Gourmet Menu — Fine Dining at Your Villa, Saint-Martin";
const description =
  "Four-course gourmet menu: tuna tartar, foie gras gyoza, beef tenderloin with truffle, Baked Alaska. $145 per guest by SXM Private Chef.";

const ogImage = {
  url: "/images/hero-menus/Gourmet.jpg",
  width: 1920,
  height: 1080,
  alt: "Gourmet fine dining menu by SXM Private Chef",
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
