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
  imageHover,
} from "@/lib/animations";
import { services, serviceCategories } from "@/data/services";

const icons = {
  villa: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  yacht: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" x2="12" y1="22" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  ),
  event: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export default function PrivateChefServicesPage() {
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
        body: JSON.stringify({ ...formData, serviceType: "private-chef-services" }),
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
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden vignette">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/all-services-private-chef.jpg"
              alt="Private Chef Services in Saint-Martin"
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
                <span className="section-number">Private Chef Services</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6 golden-glow-text"
              >
                Exceptional Culinary Experiences in Saint-Martin
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic mb-10"
              >
                From intimate villa dinners to yacht cuisine and week-long
                culinary journeys, discover our exclusive private chef services
              </motion.p>

              {/* Backdrop blur info box with CTA */}
              <motion.div
                variants={heroTextItem}
                className="inline-block"
              >
                <a
                  href="#services"
                  className="block group"
                >
                  <div className="px-8 py-5 border border-[var(--color-accent)]/50 bg-[var(--color-bg-primary)]/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-bg-primary)]/50">
                    <span className="text-[var(--color-accent)] font-[family-name:var(--font-cormorant)] text-lg italic block mb-3">Tailored experiences for unforgettable moments</span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                        Discover Our Services
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

        {/* Services Overview */}
        <section id="services" className="section bg-[var(--color-bg-primary)] relative">
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
              className="text-center mb-16 lg:mb-20"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">01 - Our Services</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Choose Your Experience
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Chef Francis brings world-class gastronomy directly to you,
                wherever you are in Saint-Martin
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.article
                  key={service.id}
                  variants={staggerItem}
                  className="group"
                >
                  <Link href={service.link} className="block h-full">
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="card overflow-hidden h-full flex flex-col relative border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 hover:-translate-y-1"
                    >
                      {/* Corner accents */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative aspect-[4/3] overflow-hidden image-premium">
                        <motion.div
                          variants={imageHover}
                          className="w-full h-full"
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/80 via-[#0C0A09]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center bg-[var(--color-bg-tertiary)]/80 backdrop-blur-sm text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                          {icons[service.icon]}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
                          {service.shortTitle}
                        </span>
                        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow">
                          {service.longDescription || service.description}
                        </p>

                        {service.features && (
                          <ul className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}

                        <span className="text-sm text-[var(--color-accent)] flex items-center gap-2 mt-auto">
                          Discover more
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
                      </div>
                    </motion.div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
                <span className="section-number">02 - Why Us</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                The Chef Francis Experience
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "Personalized Menus",
                  description:
                    "Every menu is tailored to your preferences, dietary needs, and special requests",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  ),
                },
                {
                  title: "Fresh & Local",
                  description:
                    "We source the finest local ingredients and freshest seafood from Caribbean waters",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
                {
                  title: "Full Service",
                  description:
                    "From shopping and preparation to serving and cleanup - we handle everything",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
                {
                  title: "Flexible Locations",
                  description:
                    "Villa or yacht — we bring exceptional dining wherever you are",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="text-center group p-6 hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 border border-transparent hover:border-[var(--color-accent-light)]"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-all duration-300">
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
        <section className="section bg-[#F5F3EF] relative overflow-hidden">
          {/* Decorative gradient lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
          <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <span className="text-sm uppercase tracking-widest text-[var(--color-accent)]">Our Signature Themes</span>
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
                    className="block bg-[#FAF9F7] p-8 text-center hover:shadow-xl transition-all duration-500 group h-full relative border border-transparent hover:border-[var(--color-accent)]/30 hover:-translate-y-1"
                  >
                    {/* Corner accents on hover */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/5 transition-all duration-300">
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

        {/* Services Menu & Contact Form */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative dotted pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left - Services Links */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-8">
                  <Link href="/private-chef-services" className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    All Services
                  </Link>
                </div>
                <nav className="space-y-4">
                  <span className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-4 block">All Services</span>
                  <Link href="/private-chef-services" className="block text-lg hover:text-[var(--color-accent)] transition-colors">Private Chef Services</Link>
                  <Link href="/private-chef-onboard" className="block text-lg hover:text-[var(--color-accent)] transition-colors">Private Chef Onboard</Link>
                  <Link href="/private-chef-week-menu" className="block text-lg hover:text-[var(--color-accent)] transition-colors">Private Chef Week Menu</Link>
                </nav>

                {/* Phone & Email - Premium styled */}
                <div className="mt-12 space-y-6">
                  <a href="tel:+590690535739" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-[var(--color-accent)] transition-colors">Phone</h4>
                      <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors">590 690 53 57 39</span>
                    </div>
                  </a>
                  <a href="mailto:sxmprivatechef@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-[var(--color-accent)] transition-colors">E-Mail</h4>
                      <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors">sxmprivatechef@gmail.com</span>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Right - Form with corner accents */}
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

                <span className="section-number block mb-2">Private Chef Services by Chef Francis</span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl mb-8">Get in touch</h2>
                <p className="text-[var(--color-text-secondary)] mb-8">You have a piece of advice or a suggestion that you would like to share with us? Feel free to contact us.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="form-input" />
                  <input type="email" placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="form-input" />
                  <input type="tel" placeholder="Your phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="form-input" />
                  <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-input" />
                  <textarea placeholder="Your message (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="form-input resize-none" />
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full btn-shine">{isSubmitting ? "Sending..." : "SUBMIT"}</button>
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

        {/* Reservation Section */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative dotted pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Decorative blur circles */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
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
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl mb-4 golden-glow-text">Book Your Experience</h2>
            </motion.div>

            {/* Contact Cards - Premium styled */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16"
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

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
