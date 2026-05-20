import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/book-your-chef-in-saint-martin`;
const title = "Book Your Private Chef in Saint-Martin";
const description =
  "Reserve a private chef in Saint-Martin for villas, yachts and events. Plan your gourmet experience with SXM Private Chef in St-Martin / Sint Maarten.";

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
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
