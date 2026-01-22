"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RelatedMenus from "@/components/ui/RelatedMenus";
import { menus } from "@/data/menus";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

export default function BourgogneMenuPage() {
  const menu = menus.find((m) => m.slug === "bourgogne-menu");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, serviceType: "bourgogne-menu" }),
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

  if (!menu) {
    return null;
  }

  // Icons for each course category (Burgundy/French themed)
  const getCourseIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "first course":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
            <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <circle cx="12" cy="15" r="3" />
          </svg>
        );
      case "second course":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
            <ellipse cx="12" cy="14" rx="9" ry="5" />
            <path d="M12 9c-5 0-9 2.239-9 5" />
            <circle cx="12" cy="12" r="2" fill="var(--color-accent)" />
          </svg>
        );
      case "third course":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
            <path d="M12 2C8 2 4 6 4 10c0 3 2 5 4 6v4h8v-4c2-1 4-3 4-6 0-4-4-8-8-8z" />
            <path d="M10 22h4" />
            <path d="M9 16h6" />
          </svg>
        );
      case "interlude":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
            <path d="M8 22h8M12 11V6M12 2v2" />
            <path d="M5 11a7 7 0 0 0 14 0" />
            <circle cx="12" cy="11" r="4" />
          </svg>
        );
      case "dessert":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
            <path d="M6 18h12M9 10h6M8 14h8" />
            <path d="M12 2l2 4-2 4-2-4 2-4z" />
            <path d="M5 22l2-8h10l2 8" />
          </svg>
        );
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
            <path d="M12 3v18M8 8l4-5 4 5M8 16l4 5 4-5" />
          </svg>
        );
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
              src="/images/hero-menus/Bourguignon.jpg"
              alt="Bourguignon Menu"
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
                <span className="w-16 h-[1px] bg-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] text-xl">✦</span>
                <span className="w-16 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="mb-6 golden-glow-text"
              >
                {menu.name}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic"
              >
                {menu.description}
              </motion.p>

              <motion.div
                variants={heroTextItem}
                className="inline-block"
              >
                <div className="px-8 py-4 border border-[var(--color-accent)]/50 bg-[var(--color-bg-primary)]/30 backdrop-blur-sm">
                  <span className="price golden-glow-text">{menu.priceLabel}</span>
                </div>
              </motion.div>
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

        {/* Menu Details Section */}
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
              {/* Includes - Premium styling */}
              {menu.includes && (
                <motion.div
                  variants={staggerItem}
                  className="text-center mb-20"
                >
                  <div className="inline-block px-10 py-6 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] relative">
                    {/* Corner accents */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />
                    <p className="text-[var(--color-accent)] text-lg font-[family-name:var(--font-cormorant)] italic">
                      {menu.includes}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Elegant Menu Card */}
              <motion.div
                variants={staggerItem}
                className="relative bg-[var(--color-bg-secondary)] border border-[var(--color-accent)]/20 p-8 lg:p-16"
              >
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)]" />

                {/* Menu Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1">
                      <path d="M8 22h8M12 13v9M12 13c-4 0-6-3-6-8V2h12v3c0 5-2 8-6 8z" />
                    </svg>
                    <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl tracking-wide">
                    {menu.name}
                  </h2>
                  <p className="text-[var(--color-accent)] text-2xl lg:text-3xl mt-3 font-[family-name:var(--font-cormorant)]">
                    — {menu.priceLabel.replace('$', '').replace(' / guest', '')}$ per guest —
                  </p>
                </div>

                {/* Courses */}
                {menu.courses && (
                  <div className="space-y-10 max-w-2xl mx-auto">
                    {menu.courses.map((course, index) => (
                      <div key={index} className="text-center">
                        {/* Category Title */}
                        <h3 className="text-[var(--color-accent)] text-lg uppercase tracking-[0.3em] font-medium mb-6">
                          {course.category}
                        </h3>

                        {/* Items */}
                        <div className="space-y-3">
                          {course.items.map((item, itemIndex) => (
                            <p
                              key={itemIndex}
                              className="text-[var(--color-text-primary)] font-[family-name:var(--font-cormorant)] text-lg lg:text-xl leading-relaxed"
                            >
                              {item}
                            </p>
                          ))}
                        </div>

                        {/* Decorative separator (except for last item) */}
                        {menu.courses && index < menu.courses.length - 1 && (
                          <div className="flex items-center justify-center gap-3 mt-10">
                            <span className="w-8 h-[1px] bg-[var(--color-accent)]/40" />
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="var(--color-accent)" opacity="0.4">
                              <rect x="2" y="2" width="4" height="4" transform="rotate(45 4 4)" />
                            </svg>
                            <span className="w-8 h-[1px] bg-[var(--color-accent)]/40" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom ornament */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                  <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
                </div>
              </motion.div>

              {/* Wine Pairing Suggestion */}
              <motion.div
                variants={staggerItem}
                className="mt-20"
              >
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M8 22h8M12 13v9M12 13c-4 0-6-3-6-8V2h12v3c0 5-2 8-6 8z" />
                    </svg>
                    <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-[var(--color-accent)] text-xl font-[family-name:var(--font-cormorant)]">
                    Wine Pairings Available
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Pinot Noir", "Chardonnay", "Chablis", "Beaujolais", "Cremant de Bourgogne"].map((wine, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-6 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default"
                    >
                      {wine}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Good to Know Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)] relative overflow-hidden">
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
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Per Guest Pricing</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    All prices listed are per person
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M8 22h8M12 13v9M12 13c-4 0-6-3-6-8V2h12v3c0 5-2 8-6 8z" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Authentic Burgundy</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Traditional French recipes from the Burgundy region
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Dietary Options</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {menu.note || "Special requirements accommodated on request"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-[var(--color-bg-primary)]">
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
                Burgundy Culinary Art
              </h2>
              <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
                A glimpse into the rich traditions and refined flavors of French Burgundy cuisine
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {[
                { src: "/images/hero-menus/Bourguignon.jpg", alt: "Boeuf Bourguignon" },
                { src: "/images/grill-menu/image00001-3-950x800.jpg", alt: "French cuisine 1" },
                { src: "/images/grill-menu/image00002-4-950x800.jpg", alt: "French cuisine 2" },
                { src: "/images/grill-menu/image00003-3-950x800.jpg", alt: "French cuisine 3" },
              ].map((image, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="relative aspect-square overflow-hidden group image-premium"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay with vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Corner frame on hover */}
                  <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
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
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h2 className="mb-4 golden-glow-text">Ready to savor the Bourgogne Menu?</h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                  Let us bring the authentic flavors of Burgundy to your villa or yacht
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
                      required
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
                    placeholder="Tell us about your event..."
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
                      <span>{isSubmitting ? "Sending..." : "Request a Quote"}</span>
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

        <RelatedMenus currentSlug="bourgogne-menu" />
      </main>
      <Footer />
    </>
  );
}
