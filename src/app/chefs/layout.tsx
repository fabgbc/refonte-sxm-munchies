import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/chefs`;
const title = "Our Chefs — Meet the SXM Private Chef Team";
const description =
  "Meet the chefs behind SXM Private Chef in Saint-Martin: passionate culinary artists crafting luxury villa, yacht and event dining experiences.";

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
