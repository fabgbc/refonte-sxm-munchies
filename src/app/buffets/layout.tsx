import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/buffets`;
const title = "Luxury Buffets in Saint-Martin — Private Chef Catering";
const description =
  "Gourmet buffets for events, weddings and villa parties in Saint-Martin: tapas, salads, pastries and platters. Tailored catering by SXM Private Chef.";

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
