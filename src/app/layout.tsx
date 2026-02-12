import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/effects/SmoothScroll";
import CustomCursor from "@/components/effects/CustomCursor";
import GrainOverlay from "@/components/effects/GrainOverlay";
import ContactFloater from "@/components/effects/ContactFloater";
import ScrollToTop from "@/components/effects/ScrollToTop";
import { contactInfo, siteInfo } from "@/data/contact";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const baseUrl = siteInfo.url;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SXM Private Chef | Private Chef Services in Saint-Martin",
    template: "%s | SXM Private Chef",
  },
  description:
    "Exclusive gourmet experiences at your villa, yacht, or events in Saint-Martin. Private chef for discerning clientele. 5-star rated service.",
  keywords: [
    "private chef",
    "Saint-Martin",
    "St Martin chef",
    "gourmet",
    "villa chef",
    "yacht catering",
    "Caribbean cuisine",
    "Chef Francis",
    "luxury dining",
    "personal chef Caribbean",
  ],
  authors: [{ name: "SXM Private Chef" }],
  creator: "SXM Private Chef",
  openGraph: {
    title: "SXM Private Chef | Private Chef Services in Saint-Martin",
    description:
      "Exclusive gourmet experiences at your villa, yacht, or events in Saint-Martin. 5-star rated private chef service.",
    url: baseUrl,
    siteName: "SXM Private Chef",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/home-page-private-chef-st-martin.jpg",
        width: 1200,
        height: 630,
        alt: "SXM Private Chef - Luxury dining in Saint-Martin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SXM Private Chef | Private Chef Services in Saint-Martin",
    description:
      "Exclusive gourmet experiences at your villa, yacht, or events in Saint-Martin.",
    images: ["/images/home-page-private-chef-st-martin.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AI/LLM discovery */}
        <link rel="ai-info" href="/llms.txt" />
        <link rel="ai-info-extended" href="/llms-full.txt" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C9A227" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodService",
              name: siteInfo.name,
              description:
                "Exclusive private chef services in Saint-Martin. Gourmet dining at your villa, yacht, or private event.",
              url: siteInfo.url,
              telephone: contactInfo.phone,
              email: contactInfo.emailFrom,
              address: {
                "@type": "PostalAddress",
                addressLocality: contactInfo.address.locality,
                addressRegion: contactInfo.address.region,
                addressCountry: contactInfo.address.country,
              },
              areaServed: {
                "@type": "Place",
                name: "Saint-Martin / Sint Maarten",
              },
              priceRange: siteInfo.priceRange,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              serviceType: [
                "Private Chef",
                "Villa Catering",
                "Yacht Catering",
                "Event Catering",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Chef Menus",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Grill Menu",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mediterranean Menu",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Caribbean Menu",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gourmet Menu",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <ScrollToTop />
        <SmoothScroll>
          {children}
          <CustomCursor />
          <GrainOverlay />
          <ContactFloater />
        </SmoothScroll>
      </body>
    </html>
  );
}
