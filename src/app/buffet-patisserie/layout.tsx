import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/buffet-patisserie`;
const title = "Pastry Buffet — Macarons, Cakes & French Desserts";
const description =
  "Indulgent pastry buffet for events in Saint-Martin: macarons, financiers, fresh fruit cups, mango cheesecake. Catering by SXM Private Chef.";

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
