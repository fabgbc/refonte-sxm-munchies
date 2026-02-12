"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServiceContactForm from "@/components/ui/ServiceContactForm";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

const buffetTypes = [
  {
    title: "Buffet Patisserie",
    description:
      "An exquisite selection of French pastries and Caribbean-inspired desserts, crafted to create the perfect sweet ending for your event.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
        <path d="M2 21h20" />
        <path d="M7 8v3" />
        <path d="M12 8v3" />
        <path d="M17 8v3" />
      </svg>
    ),
  },
  {
    title: "Salads & Tapas",
    description:
      "Fresh, flavorful salads and Mediterranean-inspired tapas, perfect for private events, villa gatherings, or yacht celebrations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Gourmet Platters",
    description:
      "A refined selection of cold platters for sharing — perfect for cocktail hours, boat days, or elegant villa receptions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <ellipse cx="12" cy="14" rx="10" ry="4" />
        <path d="M2 14v-2a10 4 0 0 1 20 0v2" />
        <path d="M12 6V2" />
        <path d="M9 3h6" />
      </svg>
    ),
  },
  {
    title: "Breakfast & Brunch",
    description:
      "Start your day with a refined breakfast or brunch prepared just for you — from fresh tropical fruits to house-made pastries.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

export default function BuffetsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 vignette">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-menus/Buffet-patisserie.jpg"
              alt="Buffet & Catering Services"
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
              <motion.div
                variants={heroTextItem}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">Catering</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="mb-6 golden-glow-text"
              >
                Buffet & Catering Services
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic"
              >
                From elegant pastry spreads to gourmet platters and fresh tapas,
                we bring exceptional catering to your villa, yacht, or private event
                in Saint-Martin.
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

        {/* Buffet Types Section */}
        <section className="section bg-[var(--color-bg-primary)] relative">
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
              <span className="section-number">Our Offerings</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Tailored Catering for Every Occasion
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Whether you&apos;re hosting an intimate gathering or a grand celebration,
                our chef crafts bespoke buffet experiences delivered directly to your location.
                Contact us to discuss your needs and receive a personalized quote.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {buffetTypes.map((buffet) => (
                <motion.div
                  key={buffet.title}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 relative"
                >
                  {/* Corner accents on hover */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-16 h-16 mb-5 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    {buffet.icon}
                  </div>
                  <h3 className="text-[var(--color-accent)] text-xl mb-3 font-[family-name:var(--font-cormorant)]">
                    {buffet.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {buffet.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Good to Know Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)] relative overflow-hidden">
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

              <ul className="space-y-4 max-w-md mx-auto">
                <li className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Available for villas, yachts, and private events
                </li>
                <li className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Customizable menus to suit your preferences
                </li>
                <li className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Orders must be confirmed 48h in advance
                </li>
                <li className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Contact us for pricing and availability
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="container relative">
            <div className="max-w-3xl mx-auto">
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h2 className="mb-4 golden-glow-text">Get in Touch</h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                  Tell us about your event and we&apos;ll create the perfect buffet experience for you
                </p>
              </motion.div>

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
                  Request a Quote
                </h3>

                <ServiceContactForm serviceType="buffets" placeholder="Tell us about your event — number of guests, date, preferred buffet type..." buttonText="Send Request" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
