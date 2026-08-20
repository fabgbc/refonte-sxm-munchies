import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/private-chef-week-menu`;
const title = "Weekly Private Chef — All-Inclusive Villa Stays, Saint-Martin";
const description =
  "Book a private chef for the week in Saint-Martin. Daily seasonal menus, breakfast to dinner — perfect for week-long villa stays. By SXM Private Chef.";

const ogImage = {
  url: "/images/home-page-chef-week.jpg",
  width: 848,
  height: 565,
  alt: "Weekly private chef service for villa stays in Saint-Martin",
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
