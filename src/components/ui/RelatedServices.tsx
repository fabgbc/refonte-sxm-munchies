"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Service {
  name: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    name: "Villa Private Chef",
    slug: "book-your-chef-in-saint-martin",
    description: "Exclusive dining experience at your private villa in Saint-Martin",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    name: "Chef Onboard",
    slug: "private-chef-onboard",
    description: "Professional chef service for your yacht or boat charter",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-5H2v17z"/>
        <path d="M12 3v5l7 5"/>
      </svg>
    ),
  },
  {
    name: "Weekly Chef Service",
    slug: "private-chef-week-menu",
    description: "Dedicated chef for your entire stay with daily gourmet meals",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    name: "All Services",
    slug: "private-chef-services",
    description: "Discover our complete range of private chef services",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
  },
];

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  // Filter out current service
  const otherServices = services.filter((s) => s.slug !== currentSlug);

  return (
    <section className="py-16 lg:py-20 bg-[var(--color-bg-secondary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
            <span className="section-number">Our Services</span>
            <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl">
            Explore Our Other Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/${service.slug}`}
                className="group block p-6 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 h-full text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-all">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-[var(--color-accent)] text-sm">
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-light)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>Book Your Experience</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
