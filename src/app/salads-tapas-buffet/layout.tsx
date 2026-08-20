import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/salads-tapas-buffet`;
const title = "Salads & Tapas Buffet — Catering in Saint-Martin";
const description =
  "Fresh salads and gourmet tapas buffet: Thai beef, lobster citrus, mini burgers and skewers by SXM Private Chef. Saint-Martin event catering.";

const ogImage = {
  url: "/images/hero-menus/Salads-Tapas%20.jpg",
  width: 1640,
  height: 2000,
  alt: "Salads and tapas buffet by SXM Private Chef",
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
