import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/grill-menu`;
const title = "Grill Menu — BBQ & Open Fire Catering, Saint-Martin";
const description =
  "Premium grill menu: beef tenderloin, lobster, tuna steak and sides. From $65 per guest in your villa or yacht by SXM Private Chef.";

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
