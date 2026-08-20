import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/contact`;
const title = "Contact — Book Your Private Chef in Saint-Martin";
const description =
  "Get in touch with SXM Private Chef in Saint-Martin. Call, WhatsApp or send a message to plan your villa, yacht or event dining experience.";

const ogImage = {
  url: "/images/home-page-private-chef-st-martin.jpg",
  width: 2000,
  height: 1335,
  alt: "Contact SXM Private Chef in Saint-Martin",
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
