"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  fadeUp,
  fadeIn,
  heroTextContainer,
  heroTextItem,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { services } from "@/data/services";

const villaService = services.find(
  (s) => s.slug === "book-your-chef-in-saint-martin"
);

export default function VillaServicePage() {
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
        body: JSON.stringify({ ...formData, serviceType: "villa-chef" }),
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

  if (!villaService) {
    return null;
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 vignette">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/Sxmunchies-n-sweets-villa-7.jpg"
              alt={villaService.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/80 via-[#0C0A09]/60 to-[#0C0A09]/95" />
          </motion.div>

          {/* Decorative corner elements */}
          <div className="absolute top-24 left-8 lg:left-16 w-20 h-20 border-t border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute top-24 right-8 lg:right-16 w-20 h-20 border-t border-r border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 left-8 lg:left-16 w-20 h-20 border-b border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 right-8 lg:right-16 w-20 h-20 border-b border-r border-[var(--color-accent)]/30 z-10" />

          <div className="container relative z-10 text-center">
            <motion.div
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={heroTextItem}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">{villaService.shortTitle}</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6 golden-glow-text"
              >
                {villaService.title}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-[family-name:var(--font-cormorant)] italic"
              >
                {villaService.longDescription}
              </motion.p>

              {/* Backdrop blur info box with CTA */}
              <motion.div
                variants={heroTextItem}
                className="inline-block"
              >
                <a
                  href="#service"
                  className="block group"
                >
                  <div className="px-8 py-5 border border-[var(--color-accent)]/50 bg-[var(--color-bg-primary)]/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-bg-primary)]/50">
                    <span className="text-[var(--color-accent)] font-[family-name:var(--font-cormorant)] text-xl block mb-3">
                      Exclusive Private Chef Service
                    </span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                        Discover Our Service
                      </span>
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-[var(--color-accent)]"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Private Chef Fee (Excluding Menus) */}
        <section id="service" className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative blur circles */}
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
              {/* Formula Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <span className="section-number">Private Chef Fee (Excluding Menus)</span>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <div className="inline-block bg-[var(--color-bg-tertiary)] border border-[var(--color-accent)] px-8 py-6 mb-6 relative">
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl lg:text-4xl text-[var(--color-accent)]">
                    Total = Service Fee + Menu + Dishes
                  </h2>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg">
                  All pricing is confirmed during the quote process
                </p>
              </div>

              {/* Steps Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Step 1 */}
                <motion.div
                  variants={staggerItem}
                  className="relative bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 text-center group hover:border-[var(--color-accent)] transition-colors"
                >
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">1</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    Define Your Group Size
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    The size of your group determines the base service fee for the chef.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  variants={staggerItem}
                  className="relative bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 text-center group hover:border-[var(--color-accent)] transition-colors"
                >
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">2</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      <line x1="8" y1="6" x2="16" y2="6" />
                      <line x1="8" y1="10" x2="16" y2="10" />
                      <line x1="8" y1="14" x2="12" y2="14" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    Explore Menu Options
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Choose the type of menu: Grill, Caribbean, Gourmet...
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  variants={staggerItem}
                  className="relative bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 text-center group hover:border-[var(--color-accent)] transition-colors"
                >
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">3</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    Select Your Dishes
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Pricing depends on the dishes included.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Description */}
        <section className="section bg-[var(--color-bg-primary)] relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <span className="section-number">01 - The Experience</span>
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                  Fine Dining in Your Private Villa
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Transform your vacation villa into an exclusive restaurant.
                  Chef Francis brings world-class cuisine directly to your
                  doorstep, creating unforgettable dining experiences in the
                  comfort and privacy of your own space.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  From intimate dinners for two to celebrations with family and
                  friends, every meal is crafted with passion, using the finest
                  local ingredients and Caribbean flavors.
                </p>

                {villaService.features && (
                  <ul className="space-y-4">
                    {villaService.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)] group"
                      >
                        <div className="w-6 h-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full flex-shrink-0 mt-0.5 group-hover:bg-[var(--color-accent)] transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative aspect-[4/5] overflow-hidden group image-premium"
              >
                <Image
                  src="/images/Sxmunchies-n-sweets-villa-2.jpg"
                  alt="Private dining experience"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner frame on hover */}
                <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
                {/* Gradient lines decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

          <div className="container relative">
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
                Private Villa Dining Experiences
              </h2>
              <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
                A glimpse into the exceptional culinary moments we create in your private villa
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { src: "/images/Sxmunchies-n-sweets-villa-7.jpg", alt: "Villa dining experience" },
                { src: "/images/Sxmunchies-n-sweets-villa-2.jpg", alt: "Private chef service" },
                { src: "/images/Sxmunchies-n-sweets-villa-4.jpg", alt: "Gourmet cuisine" },
                { src: "/images/Sxmunchies-n-sweets-villa-6.jpg", alt: "Fine dining setup" },
                { src: "/images/Sxmunchies-n-sweets-villa-1-680x800.jpg", alt: "Chef at work" },
                { src: "/images/villa-service.jpg", alt: "Villa service" },
              ].map((image, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="relative aspect-[4/3] overflow-hidden group image-premium"
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

        {/* Pricing Table */}
        <section className="section bg-[var(--color-bg-primary)] relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">02 - Pricing</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                Chef Service Fees
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Our pricing is transparent and based on the number of guests.
                The service fee covers Chef Francis and his team, setup, service,
                and complete cleanup.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              {/* Pricing Table */}
              <div className="bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] overflow-hidden relative">
                {/* Corner accents on table */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

                {/* Table Header */}
                <div className="grid grid-cols-3 bg-[var(--color-bg-primary)] border-b border-[var(--color-accent-light)]">
                  <div className="p-4 md:p-6 text-center">
                    <span className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
                      Guests
                    </span>
                  </div>
                  <div className="p-4 md:p-6 text-center border-x border-[var(--color-accent-light)]">
                    <span className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
                      Service Fee
                    </span>
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <span className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
                      Note
                    </span>
                  </div>
                </div>

                {/* Table Body */}
                {villaService.pricing?.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    className={`grid grid-cols-3 group hover:bg-[var(--color-bg-primary)]/50 transition-colors ${
                      idx !== (villaService.pricing?.length || 0) - 1
                        ? "border-b border-[var(--color-accent-light)]"
                        : ""
                    }`}
                  >
                    <div className="p-4 md:p-6 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl group-hover:text-[var(--color-accent)] transition-colors">
                        {tier.guests}
                      </span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center border-x border-[var(--color-accent-light)]">
                      <span className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-[var(--color-accent)]">
                        {tier.fee}
                      </span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center">
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        {tier.note}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-8 p-6 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] relative"
              >
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />

                <div className="flex items-center gap-4 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-accent)]">
                    What is included?
                  </h4>
                </div>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-3 group">
                    <div className="w-5 h-5 flex items-center justify-center border border-[var(--color-accent)] rounded-full flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--color-accent)]"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Chef Francis and team on-site at your villa
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="w-5 h-5 flex items-center justify-center border border-[var(--color-accent)] rounded-full flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--color-accent)]"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Complete setup of your dining area
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="w-5 h-5 flex items-center justify-center border border-[var(--color-accent)] rounded-full flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--color-accent)]"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Professional service throughout the meal
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="w-5 h-5 flex items-center justify-center border border-[var(--color-accent)] rounded-full flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--color-accent)]"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Complete kitchen cleanup after service
                  </li>
                </ul>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)] border-t border-[var(--color-accent-light)] pt-4">
                  <strong className="text-[var(--color-accent)]">Note:</strong>{" "}
                  Menu prices are separate and depend on your selected dishes.
                  View our menus for pricing details.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">03 - How It Works</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                Your Private Dining Journey
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            >
              {/* Connecting line (hidden on mobile) */}
              <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

              {[
                {
                  step: "01",
                  title: "Contact Us",
                  description:
                    "Reach out via phone, WhatsApp, or our contact form to discuss your event",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "Menu Selection",
                  description:
                    "Choose from our curated menus or request a custom creation",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Confirmation",
                  description:
                    "We confirm all details, dietary requirements, and timing",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
                {
                  step: "04",
                  title: "Enjoy",
                  description:
                    "Relax and savor an exceptional culinary experience",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={staggerItem} className="text-center group relative">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[var(--color-accent)] rounded-full relative z-10 group-hover:scale-110 transition-transform">
                    <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-bg-primary)] font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Signature Themes */}
        <section className="section bg-[#F5F3EF] relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <span className="text-sm uppercase tracking-widest text-[var(--color-accent)]">Our Signature Themes</span>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  name: "Grill & Barbecue",
                  href: "/grill-menu",
                  description: "Premium meats, fresh seafood, and grilled vegetables with Caribbean spices.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  )
                },
                {
                  name: "Caribbean Fusion",
                  href: "/caribbean-menu",
                  description: "Bold flavors, local produce, and traditional island dishes with a twist.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                      <line x1="6" x2="18" y1="17" y2="17" />
                    </svg>
                  )
                },
                {
                  name: "Gourmet Tasting Menu",
                  href: "/gourmet-menu",
                  description: "Refined and artistic plates for a high-end culinary journey.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" x2="6" y1="2" y2="4" />
                      <line x1="10" x2="10" y1="2" y2="4" />
                      <line x1="14" x2="14" y1="2" y2="4" />
                    </svg>
                  )
                },
                {
                  name: "Bourguignon Menu",
                  href: "/bourgogne-menu",
                  description: "A French classic with slow-cooked beef, rich wine sauce, and comforting sides.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M8 2h8l4 10H4L8 2Z" />
                      <path d="M12 12v6" />
                      <path d="M8 22h8" />
                      <path d="M12 18h.01" />
                    </svg>
                  )
                },
                {
                  name: "Mediterranean",
                  href: "/mediterranean-menu",
                  description: "Olive oil, herbs, and sun-soaked flavors from Italy, Greece, and beyond.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                  )
                },
                {
                  name: "Caribbean Surf & Turf",
                  href: "/surf-turf-menu",
                  description: "A bold mix of grilled lobster and tender meat cuts — island-style and full of flavor.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  )
                },
                {
                  name: "Breakfast",
                  href: "/breakfast-brunch",
                  description: "Enjoy a chef-prepared breakfast or brunch, served in your villa for the perfect start to your day in Saint-Martin.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" x2="6" y1="2" y2="4" />
                      <line x1="10" x2="10" y1="2" y2="4" />
                      <line x1="14" x2="14" y1="2" y2="4" />
                    </svg>
                  )
                },
              ].map((menu, idx) => (
                <motion.div key={idx} variants={staggerItem}>
                  <Link
                    href={menu.href}
                    className="block bg-[#FAF9F7] p-8 text-center hover:shadow-lg transition-all duration-300 group h-full border border-transparent hover:border-[var(--color-accent)]/30 relative"
                  >
                    {/* Corner accents on hover */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/5 transition-all">
                      {menu.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] mb-3 italic group-hover:text-[var(--color-accent)] transition-colors">
                      {menu.name}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {menu.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Wine Pairing */}
        <section className="py-20 bg-[var(--color-bg-primary)] relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                  <path d="M8 2h8l4 10H4L8 2Z" />
                  <path d="M12 12v6" />
                  <path d="M8 22h8" />
                </svg>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-4 golden-glow-text">
                Wine Pairing Available
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Enhance your dining experience with our curated wine selection,
                perfectly paired with your chosen menu.
              </p>
              <Link href="/wine" className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline group">
                View Wine Selection
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative dotted pattern background */}
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
                <h2 className="font-[family-name:var(--font-cormorant)] mb-4 golden-glow-text">
                  Contact Us
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                  Ready to book your private chef experience? Get in touch with us.
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

              {/* WhatsApp Card */}
              <motion.a
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                href="https://wa.me/590690535739"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center mb-16"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <span className="text-lg font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    Message us on WhatsApp
                  </span>
                </div>
              </motion.a>

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
                      className="btn btn-primary btn-shine px-12"
                    >
                      <span>{isSubmitting ? "Sending..." : "Book Now"}</span>
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
