"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const buffetOptions = [
  {
    title: "Breakfast & Brunch",
    description: "Start your day with a refined breakfast prepared just for you",
    href: "/breakfast-brunch",
    price: "From $25",
  },
  {
    title: "Gourmet Platters",
    description: "A refined selection of cold platters for sharing",
    href: "/gourmet-platters",
    price: "Min 4 guests",
  },
  {
    title: "Salads & Tapas",
    description: "Fresh, flavorful options perfect for private events",
    href: "/salads-tapas-buffet",
    price: "Min 10 guests",
  },
  {
    title: "Buffet Pâtisserie",
    description: "Sweet treats perfect for sharing with your guests",
    href: "/buffet-patisserie",
    price: "Min 12 guests",
  },
];

export default function Buffets() {
  return (
    <section
      id="buffets"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0C0A09]/85" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="section-number">03 — Buffets & More</span>
            <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
              Catering Services
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              For your events, brunches, and special occasions, we offer a range of
              catering options delivered to your villa or yacht.
            </p>
          </motion.div>

          {/* Options Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {buffetOptions.map((option) => (
              <motion.div key={option.title} variants={staggerItem}>
                <Link
                  href={option.href}
                  className="block p-6 bg-[var(--color-bg-tertiary)]/50 backdrop-blur-sm border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl group-hover:text-[var(--color-accent)] transition-colors">
                      {option.title}
                    </h3>
                    <span className="text-[var(--color-accent)] text-sm">
                      {option.price}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                    {option.description}
                  </p>
                  <span className="text-sm text-[var(--color-accent)] inline-flex items-center gap-2">
                    View options
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Wine Selection CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[var(--color-text-secondary)] mb-6">
              Pair your meal with our curated wine selection
            </p>
            <Link href="/wine" className="btn btn-outline">
              <span>View Wine Selection</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
