"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { menus } from "@/data/menus";

interface RelatedMenusProps {
  currentSlug: string;
  maxItems?: number;
}

const menuIcons: Record<string, React.ReactNode> = {
  "grill-menu": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
      <path d="M12 8v4M10 14h4"/>
    </svg>
  ),
  "mediterranean-menu": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),
  "caribbean-menu": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/>
    </svg>
  ),
  "gourmet-menu": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
    </svg>
  ),
  "bourgogne-menu": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V4H8v3a4 4 0 0 0 4 4z"/>
    </svg>
  ),
  "surf-turf-menu": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12h20M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"/>
    </svg>
  ),
  "weekly-menu": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  "breakfast-brunch": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>
    </svg>
  ),
};

export default function RelatedMenus({ currentSlug, maxItems = 4 }: RelatedMenusProps) {
  // Filter out current menu and menus without slugs, get random selection
  const otherMenus = menus
    .filter((m): m is typeof m & { slug: string } => !!m.slug && m.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, maxItems);

  return (
    <section className="py-16 lg:py-20 bg-[var(--color-bg-primary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
            <span className="section-number">Discover More</span>
            <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
          </div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl">
            Explore Our Other Menus
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherMenus.map((menu, index) => (
            <motion.div
              key={menu.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/${menu.slug}`}
                className="group block p-6 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-all">
                  {menuIcons[menu.slug] || (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3h18v18H3zM12 8v8M8 12h8"/>
                    </svg>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {menu.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                  {menu.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[var(--color-accent)] text-sm">
                  <span>View Menu</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Wine Pairing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/wine"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V4H8v3a4 4 0 0 0 4 4z"/>
            </svg>
            <span>Pair with Our Wine Selection</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
