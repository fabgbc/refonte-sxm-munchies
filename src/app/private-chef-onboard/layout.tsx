import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/private-chef-onboard`;
const title = "Private Chef Onboard — Yacht Catering in Saint-Martin";
const description =
  "Hire a private chef for your yacht in Saint-Martin: onboard gourmet menus, fresh seafood and luxury dining at sea by SXM Private Chef.";

const ogImage = {
  url: "/images/boat-exprience-2.png",
  width: 1350,
  height: 1080,
  alt: "Private chef onboard a yacht in Saint-Martin",
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
