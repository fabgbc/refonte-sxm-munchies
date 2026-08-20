import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/private-chef-services`;
const title = "Private Chef Services — Villa, Yacht & Events, Saint-Martin";
const description =
  "Private chef services in Saint-Martin: villa dining, yacht catering, weddings and luxury events. Discover SXM Private Chef's tailored experiences.";

const ogImage = {
  url: "/images/all-services-private-chef.jpg",
  width: 2000,
  height: 1335,
  alt: "Private chef services for villas, yachts and events in Saint-Martin",
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
