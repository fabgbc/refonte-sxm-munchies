import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/weekly-menu`;
const title = "Weekly Menu — Seasonal Villa Stay Menus, Saint-Martin";
const description =
  "Stress-free seasonal menus for villa stays in Saint-Martin: lunch, dinner and dessert daily. Tailored weekly cuisine by SXM Private Chef.";

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
