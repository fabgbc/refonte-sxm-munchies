import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/bourgogne-menu`;
const title = "Burgundy Trails Menu — French Bourgogne Tasting";
const description =
  "Five-course Burgundy-inspired tasting menu: snail puff pastry, œuf en meurette, chicken-foie gras ballotine. $105 per guest by SXM Private Chef in Saint-Martin.";

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
