"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

const wineCategories = [
  {
    name: "Champagne & Sparkling",
    description:
      "Prestigious champagnes and sparkling wines for special celebrations.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
      </svg>
    ),
  },
  {
    name: "White Wines",
    description:
      "Crisp, refreshing whites perfect for seafood and lighter dishes.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M10 3h4l2 4v4h-8V7l2-4z" />
      </svg>
    ),
  },
  {
    name: "Rose Wines",
    description:
      "Elegant roses ideal for Caribbean sunsets and relaxed gatherings.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      >
        <path d="M12 3c-1.5 2-3 3.5-3 6 0 2.5 1.5 4 3 4s3-1.5 3-4c0-2.5-1.5-4-3-6z" />
        <path d="M8 22h8M12 13v9" />
      </svg>
    ),
  },
  {
    name: "Red Wines",
    description: "Full-bodied reds to complement grilled meats and rich sauces.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 15v7" />
        <path d="M17 3H7v5c0 3.5 2 5 5 7 3-2 5-3.5 5-7V3z" />
      </svg>
    ),
  },
  {
    name: "Dessert Wines",
    description: "Sweet wines and late harvests to pair with our patisserie.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M8 22h8M12 13v9" />
        <path d="M9 6l6 4M9 10l6-4" />
      </svg>
    ),
  },
  {
    name: "Premium Selection",
    description: "Rare vintages and exceptional bottles for connoisseurs.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function WinePage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, serviceType: "wine" }),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 vignette">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-menus/Wine.jpg"
              alt="Fine Wines"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/80 via-[#0C0A09]/60 to-[#0C0A09]/95" />
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-24 left-8 lg:left-16 w-20 h-20 border-t border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute top-24 right-8 lg:right-16 w-20 h-20 border-t border-r border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 left-8 lg:left-16 w-20 h-20 border-b border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 right-8 lg:right-16 w-20 h-20 border-b border-r border-[var(--color-accent)]/30 z-10" />

          <div className="container relative z-10">
            <motion.div
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              {/* Decorative line */}
              <motion.div
                variants={heroTextItem}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">Curated Selection</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="mb-6 golden-glow-text"
              >
                Fine Wines
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic"
              >
                Fine wines to pair with every dish. Our sommelier-curated
                selection complements each menu perfectly.
              </motion.p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <span className="text-xs tracking-widest uppercase text-[var(--color-text-secondary)]">
              Discover
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Wine Categories Section */}
        <section className="section bg-[var(--color-bg-primary)] relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              {/* Section Title */}
              <motion.div variants={staggerItem} className="text-center mb-12">
                <span className="section-number">Categories</span>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4">Our Wine Selection</h2>
              </motion.div>

              {/* Wine Categories Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {wineCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ y: -5 }}
                    className="group p-8 text-center bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 relative"
                  >
                    {/* Corner accents */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)]/10 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-[var(--color-accent)] text-xl font-[family-name:var(--font-cormorant)] mb-4">
                      {category.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                      {category.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pairing Section */}
        <section className="section bg-[var(--color-bg-secondary)] relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={staggerItem} className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
                  </svg>
                  <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
                </div>
                <span className="section-number block mb-4">Expert Pairing</span>
                <h2 className="font-[family-name:var(--font-cormorant)]">Perfect Pairings</h2>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 relative">
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <h4 className="text-[var(--color-accent)] text-xl font-[family-name:var(--font-cormorant)]">
                      Pre-Dinner Selection
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    Let us know your menu in advance and we will recommend the
                    perfect wines to accompany each course.
                  </p>
                </div>
                <div className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 relative">
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-[var(--color-accent)] text-xl font-[family-name:var(--font-cormorant)]">
                      Personal Consultation
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    Schedule a consultation with our chef to discuss your
                    preferences and create a custom wine list.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Good to Know Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h3 className="text-[var(--color-accent)] text-2xl font-[family-name:var(--font-cormorant)]">
                  Good to Know
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Sommelier Curated</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Expert wine selection for every palate
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Advance Notice</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Special orders require 1-2 weeks notice
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Premium Imports</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Partnered with premium importers
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <motion.div
                variants={staggerItem}
                className="mt-12 text-center p-8 lg:p-12 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] relative"
              >
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />

                <div className="flex items-center justify-center gap-4 mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)]">
                    Availability & Special Requests
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                  Wine availability may vary based on current inventory. For
                  specific vintages or rare bottles, please contact us in
                  advance so we can source them for your event.
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  We partner with premium importers to bring exceptional wines
                  to Saint-Martin. Special orders typically require 1-2 weeks
                  advance notice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <span className="section-number">Gallery</span>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4">
                Wine Collection Moments
              </h2>
              <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
                A glimpse into our carefully curated wine selection and the elegant experiences we create
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              <motion.div
                variants={staggerItem}
                className="relative aspect-[4/3] overflow-hidden group image-premium"
              >
                <Image
                  src="/images/wine/5-2.jpg"
                  alt="Wine selection"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner frame on hover */}
                <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="relative aspect-[4/3] overflow-hidden group image-premium"
              >
                <Image
                  src="/images/wine/9.jpg"
                  alt="Wine pairing"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner frame on hover */}
                <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h2 className="mb-4 golden-glow-text">Interested in Our Wine Selection?</h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                  Let us curate the perfect wine pairing for your private dining experience
                </p>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
              >
                <motion.a
                  variants={staggerItem}
                  href="tel:+590690535739"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] block mb-2">Call Us</span>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    +590 690 53.57.39
                  </span>
                </motion.a>

                <motion.a
                  variants={staggerItem}
                  href="mailto:sxmprivatechef@gmail.com"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] block mb-2">Email Us</span>
                  <span className="text-lg font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    sxmprivatechef@gmail.com
                  </span>
                </motion.a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 lg:p-12 relative"
              >
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-center mb-8">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="form-input"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <textarea
                    placeholder="Tell us about your wine preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="form-input resize-none"
                  />
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary px-12"
                    >
                      <span>{isSubmitting ? "Sending..." : "Request Wine Consultation"}</span>
                    </button>
                  </div>
                  {isSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-center"
                    >
                      Thank you! Your message has been sent.
                    </motion.p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
