import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/private-chef-onboard`;
const title = "Private Chef Onboard — Yacht Catering in Saint-Martin";
const description =
  "Hire a private chef for your yacht in Saint-Martin: onboard gourmet menus, fresh seafood and luxury dining at sea by SXM Private Chef.";

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
