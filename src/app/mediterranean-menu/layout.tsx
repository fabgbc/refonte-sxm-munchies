import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/mediterranean-menu`;
const title = "Mediterranean Menu — Provençal Flavors, Saint-Martin";
const description =
  "Provençal cuisine: cod with artichoke, lamb moussaka, burrata focaccia and frozen nougat. $90 per guest by SXM Private Chef in Saint-Martin.";

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
