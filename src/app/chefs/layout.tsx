import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/chefs`;
const title = "Our Chefs — Meet the SXM Private Chef Team";
const description =
  "Meet the chefs behind SXM Private Chef in Saint-Martin: passionate culinary artists crafting luxury villa, yacht and event dining experiences.";

const ogImage = {
  url: "/images/home-page-private-chef-st-martin.jpg",
  width: 2000,
  height: 1335,
  alt: "The SXM Private Chef team in Saint-Martin",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: siteInfo.name,
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
