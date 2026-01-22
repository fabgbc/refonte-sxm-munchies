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

export default function GourmetMenuPage() {
  const menu = menus.find((m) => m.slug === "gourmet-menu");
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
        body: JSON.stringify({ ...formData, serviceType: "gourmet-menu" }),
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

  // Icons for each course category
  const getCourseIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("appetizer") || lowerCategory.includes("amuse")) {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    }
    if (lowerCategory.includes("starter")) {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
          <path d="M3 11h18M3 15h18M3 19h18M3 7h18" />
          <circle cx="12" cy="4" r="1" fill="var(--color-accent)" />
        </svg>
      );
    }
    if (lowerCategory.includes("main")) {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
          <ellipse cx="12" cy="14" rx="9" ry="5" />
          <path d="M3 14v1c0 2.76 4.03 5 9 5s9-2.24 9-5v-1" />
          <path d="M12 4v4M8 6l4 2 4-2" />
        </svg>
      );
    }
    if (lowerCategory.includes("dessert")) {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
          <path d="M12 2v2" />
          <path d="M5 12a7 7 0 0 1 14 0" />
          <path d="M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
          <path d="M5 12H3M21 12h-2" />
          <circle cx="12" cy="4" r="1" fill="var(--color-accent)" />
        </svg>
      );
    }
    // Default elegant icon
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
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
              src="/images/hero-menus/Gourmet.jpg"
              alt="Gourmet Menu"
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
                <span className="section-number">Menu {menu.number}</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
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
                      <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" />
                    </svg>
                    <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl tracking-wide">
                    {menu.name}
                  </h2>
                  <p className="text-[var(--color-accent)] text-xl mt-2 font-[family-name:var(--font-cormorant)]">
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
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Fine Dining Experience</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    A curated four-course journey crafted by our chef
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Customizable</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Adapted to allergies and dietary preferences
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M16 12l-4-4-4 4M12 16V8" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Vegetarian Options</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Pescatarian and vegetarian variations available
                  </p>
                </div>
              </div>

              {menu.note && (
                <motion.p
                  variants={fadeUp}
                  className="text-[var(--color-text-secondary)] text-center mt-10 max-w-2xl mx-auto leading-relaxed"
                >
                  {menu.note}
                </motion.p>
              )}
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
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h2 className="mb-4 golden-glow-text">Book Your Gourmet Experience</h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                  Let us bring an unforgettable fine dining experience to your villa or yacht
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
                  className="group p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
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
                  className="group p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
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
                className="bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] p-8 lg:p-12 relative"
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

        <RelatedMenus currentSlug="gourmet-menu" />
      </main>
      <Footer />
    </>
  );
}
