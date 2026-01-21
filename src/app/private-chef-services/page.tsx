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
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/70 via-[#0C0A09]/50 to-[#0C0A09]/90" />
          </motion.div>

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
                <span className="decorative-line" />
                <span className="section-number">Private Chef Services</span>
                <span className="decorative-line" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6"
              >
                Exceptional Culinary Experiences in Saint-Martin
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
              >
                From intimate villa dinners to yacht cuisine and week-long
                culinary journeys, discover our exclusive private chef services
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 lg:mb-20"
            >
              <span className="section-number">01 - Our Services</span>
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
                      className="card overflow-hidden h-full flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.div
                          variants={imageHover}
                          className="w-full h-full"
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center bg-[var(--color-bg-tertiary)]/80 backdrop-blur-sm text-[var(--color-accent)]">
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
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">02 - Why Us</span>
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
                    "Villa, yacht, beach - we bring exceptional dining wherever you are",
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
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2">
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
        <section className="section bg-[#F5F3EF]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
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
                    className="block bg-[#FAF9F7] p-8 text-center hover:shadow-lg transition-shadow group h-full"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[var(--color-accent)]">
                      {menu.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] mb-3 italic">
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

        {/* Services Menu */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
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

                {/* Phone & Email */}
                <div className="mt-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href="tel:+590690535739" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">590 690 53 57 39</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">E-Mail</h4>
                      <a href="mailto:sxmprivatechef@gmail.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">sxmprivatechef@gmail.com</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="section-number block mb-2">Private Chef Services by Chef Francis</span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl mb-8">Get in touch</h2>
                <p className="text-[var(--color-text-secondary)] mb-8">You have a piece of advice or a suggestion that you would like to share with us? Feel free to contact us.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="form-input" />
                  <input type="email" placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="form-input" />
                  <input type="tel" placeholder="Your phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" />
                  <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-input" />
                  <textarea placeholder="Your message (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="form-input resize-none" />
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">{isSubmitting ? "Sending..." : "SUBMIT"}</button>
                  {isSuccess && <p className="text-green-400 text-center">Thank you! Your message has been sent.</p>}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col items-center gap-4 mb-12">
              <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">Reservation</span>
              <a href="tel:+590690535739" className="flex items-center gap-3 text-xl hover:text-[var(--color-accent)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +590 690 53.57.39
              </a>
              <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] mt-2">Reservation</span>
              <a href="mailto:sxmprivatechef@gmail.com" className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                sxmprivatechef@gmail.com
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-12">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl">Contact Us</h3>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-xl mx-auto space-y-6">
              <input type="text" placeholder="Your name" className="form-input" />
              <input type="email" placeholder="Your email" className="form-input" />
              <input type="tel" placeholder="Your phone" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea placeholder="Your message (optional)" rows={4} className="form-input resize-none" />
              <button type="button" className="btn btn-primary w-full">SUBMIT</button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
