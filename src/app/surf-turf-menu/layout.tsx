import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/surf-turf-menu`;
const title = "Surf & Turf Menu — Lobster & Tenderloin, Saint-Martin";
const description =
  "Bold land-and-sea menu: lobster tail, beef tenderloin with bisque sauce, mango passion pavlova. $110 per guest by SXM Private Chef.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: siteInfo.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
