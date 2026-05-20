import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/salads-tapas-buffet`;
const title = "Salads & Tapas Buffet — Catering in Saint-Martin";
const description =
  "Fresh salads and gourmet tapas buffet: Thai beef, lobster citrus, mini burgers and skewers by SXM Private Chef. Saint-Martin event catering.";

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
