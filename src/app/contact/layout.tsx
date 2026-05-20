import type { Metadata } from "next";
import { siteInfo } from "@/data/contact";

const url = `${siteInfo.url}/contact`;
const title = "Contact — Book Your Private Chef in Saint-Martin";
const description =
  "Get in touch with SXM Private Chef in Saint-Martin. Call, WhatsApp or send a message to plan your villa, yacht or event dining experience.";

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
