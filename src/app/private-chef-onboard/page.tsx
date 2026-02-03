"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RelatedServices from "@/components/ui/RelatedServices";
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

const yachtService = services.find((s) => s.slug === "private-chef-onboard");

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[var(--color-accent-light)]/30 hover:border-[var(--color-accent)] transition-colors">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-[family-name:var(--font-cormorant)] text-xl group-hover:text-[var(--color-accent)] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent-light)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--color-text-secondary)] pl-4 border-l-2 border-[var(--color-accent)]/30">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function YachtServicePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  if (!yachtService) {
    return null;
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden vignette">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/boat-exprience-2.png"
              alt={yachtService.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/80 via-[#0C0A09]/50 to-[#0C0A09]/95" />
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
                <span className="section-number">{yachtService.shortTitle}</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6 golden-glow-text"
              >
                {yachtService.title}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic mb-10"
              >
                {yachtService.longDescription}
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
                    <span className="text-[var(--color-accent)] font-[family-name:var(--font-cormorant)] text-2xl block mb-3">Starting from 300 EUR</span>
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
                <div className="inline-block bg-[var(--color-bg-tertiary)] border border-[var(--color-accent)] px-10 py-8 mb-6 relative">
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl lg:text-4xl text-[var(--color-accent)]">
                    Total = Service Fee + Menu (per guest)
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
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">1</span>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">2</span>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">3</span>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--color-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    Customize Your Menu
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Each menu has a set price per guest. Simply choose your favorite dishes.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Description */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-accent)]/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--color-accent)]/3 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

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
                  <span className="section-number">01 - Onboard Excellence</span>
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                  Gourmet Dining at Sea
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Whether you are chartering a yacht for a day trip around the
                  beautiful waters of Saint-Martin or hosting an intimate dinner
                  on deck under the Caribbean stars, Chef Francis brings the same
                  culinary excellence to the sea.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Our yacht service is designed to work seamlessly with the
                  unique environment of boating - from carefully planned menus
                  that travel well to professional service that adapts to the
                  rhythm of life at sea.
                </p>

                {yachtService.features && (
                  <ul className="space-y-4">
                    {yachtService.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-[var(--color-text-secondary)] group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-accent)] rounded-full flex-shrink-0 mt-0.5 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-[var(--color-accent)]"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="group-hover:text-[var(--color-accent)] transition-colors">{feature}</span>
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
                  src="/images/friends-making-fish-barbecue-on-the-yacht-2025-03-16-16-13-25-utc-2.jpg"
                  alt="Yacht dining experience"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner frame on hover */}
                <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-[var(--color-bg-secondary)] relative">
          {/* Decorative pattern background */}
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
              {/* Gradient lines decoration */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <span className="section-number">Gallery</span>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4">
                Culinary Moments at Sea
              </h2>
              <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
                A glimpse into the unforgettable dining experiences we create on the water
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
                { src: "/images/onboard1.jpg", alt: "Chef onboard experience 1" },
                { src: "/images/onboard2.jpg", alt: "Chef onboard experience 2" },
                { src: "/images/onboard3.jpg", alt: "Chef onboard experience 3" },
                { src: "/images/onboard4.jpg", alt: "Chef onboard experience 4" },
                { src: "/images/onboard5.jpg", alt: "Chef onboard experience 5" },
                { src: "/images/onboard6.jpg", alt: "Chef onboard experience 6" },
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

        {/* Private Chef Onboard Pricing */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          {/* Decorative blur circles */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto"
            >
              {/* Pricing Card */}
              <div className="text-center p-12 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] relative">
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <span className="section-number">Private Chef Onboard</span>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <div className="my-8">
                  <span className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl lg:text-8xl golden-glow-text">
                    300 EUR
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg mb-8">
                  For yacht day trips or boat excursions
                </p>
                <Link href="/contact" className="btn btn-primary btn-shine">
                  <span>Book Now</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Signature Themes */}
        <section className="section bg-[#F5F3EF] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="text-sm uppercase tracking-widest text-[var(--color-accent)]">Our Signature Themes</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
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
                    className="block bg-[#FAF9F7] p-8 text-center hover:shadow-xl transition-all duration-300 group h-full border border-transparent hover:border-[var(--color-accent-light)] relative"
                  >
                    {/* Corner accents on hover */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent-light)] rounded-full group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all">
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

        {/* Chef Onboard for the Day */}
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
              className="max-w-3xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-6 golden-glow-text">
                Chef Onboard for the Day
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-8">
                For full-day charters or extended yacht events, Chef Francis can accompany you throughout the day,
                preparing multiple meals and ensuring a seamless culinary experience from morning to evening.
              </p>
              <Link href="/contact" className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-2 group">
                <span>Contact us for pricing</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Planning Your Experience */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative pattern background */}
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
                <span className="section-number">How It Works</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-6">
                Planning Your Experience
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  step: "01",
                  title: "Contact Us",
                  description: "Share your yacht details, dates, and preferences",
                },
                {
                  step: "02",
                  title: "Menu Selection",
                  description: "Choose from our signature themes or request custom options",
                },
                {
                  step: "03",
                  title: "Set Sail",
                  description: "Enjoy gourmet dining while cruising the Caribbean waters",
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={staggerItem} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)]/10 transition-colors relative">
                    <span className="font-[family-name:var(--font-cormorant)] text-3xl">
                      {item.step}
                    </span>
                    {/* Connecting line between steps */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute left-full top-1/2 w-full h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent -translate-y-1/2" />
                    )}
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

        {/* Common Questions */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-6">
                Common Questions
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 lg:p-12 relative"
            >
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

              {yachtService.faq?.map((item, idx) => (
                <FAQItem
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === idx}
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                />
              ))}

              {/* Additional FAQs */}
              <FAQItem
                question="How far in advance should we book?"
                answer="We recommend booking at least 48-72 hours in advance for yacht services. For busy seasons or special events, earlier booking is advisable."
                isOpen={openFAQ === 100}
                onClick={() => setOpenFAQ(openFAQ === 100 ? null : 100)}
              />
              <FAQItem
                question="Can you work with any yacht size?"
                answer="Yes, we adapt our service to vessels of all sizes, from day boats to large yachts. We coordinate with your captain to ensure smooth service."
                isOpen={openFAQ === 101}
                onClick={() => setOpenFAQ(openFAQ === 101 ? null : 101)}
              />
              <FAQItem
                question="What about weather conditions?"
                answer="We monitor weather conditions closely and will communicate with you if adjustments are needed. Safety is always our priority."
                isOpen={openFAQ === 102}
                onClick={() => setOpenFAQ(openFAQ === 102 ? null : 102)}
              />
            </motion.div>
          </div>
        </section>

        {/* Wine Pairing */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative pattern background */}
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
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">06 - Wine Pairing</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                Wine Pairing Available
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Enhance your onboard dining experience with our curated wine
                selection. Our sommelier recommendations perfectly complement
                each dish.
              </p>
              <Link href="/wine" className="btn btn-outline btn-shine">
                <span>View Wine Selection</span>
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
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                  Ready to Sail with Chef Francis?
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                  Contact us to discuss your yacht charter dining needs. We will
                  create a memorable culinary experience on the water.
                </p>
              </div>

              {/* Contact Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              >
                <motion.a
                  variants={staggerItem}
                  href="tel:+590690535739"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center relative"
                >
                  {/* Corner accents on hover */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] block mb-2">Call Us</span>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    +590 690 53 57 39
                  </span>
                </motion.a>

                <motion.a
                  variants={staggerItem}
                  href="mailto:sxmprivatechef@gmail.com"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center relative"
                >
                  {/* Corner accents on hover */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
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

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact" className="btn btn-primary btn-shine">
                  <span>Book Yacht Service</span>
                </Link>
                <a
                  href="https://wa.me/590690535739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-shine"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedServices currentSlug="private-chef-onboard" />
      </main>
      <Footer />
    </>
  );
}
