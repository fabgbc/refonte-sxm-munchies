import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/gourmet-platters`;
const title = "Gourmet Platters for Events — Saint-Martin Catering";
const description =
  "Cheese, deli meats, sashimi and beef tataki platters by SXM Private Chef. Ideal for events, villas and yacht catering in Saint-Martin.";

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
