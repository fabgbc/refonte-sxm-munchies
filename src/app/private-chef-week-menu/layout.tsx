import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/private-chef-week-menu`;
const title = "Weekly Private Chef — All-Inclusive Villa Stays, Saint-Martin";
const description =
  "Book a private chef for the week in Saint-Martin. Daily seasonal menus, breakfast to dinner — perfect for week-long villa stays. By SXM Private Chef.";

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
