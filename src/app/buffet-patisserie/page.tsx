"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { patisserieOptions } from "@/data/menus";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

export default function BuffetPatisseriePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-[var(--color-bg-secondary)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-transparent opacity-50" />
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="container relative text-center py-32 lg:py-40"
          >
            <motion.span
              variants={heroTextItem}
              className="section-number block mb-4"
            >
              Sweet Indulgence
            </motion.span>
            <motion.h1 variants={heroTextItem} className="mb-6">
              Buffet Patisserie
            </motion.h1>
            <motion.p
              variants={heroTextItem}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg"
            >
              An exquisite selection of French pastries and Caribbean-inspired
              desserts, crafted to create the perfect sweet ending.
            </motion.p>
          </motion.div>
        </section>

        {/* Minimum Guests Notice */}
        <section className="py-8 bg-[var(--color-bg-tertiary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-lg">
                Minimum <span className="text-[var(--color-accent)] font-medium">12 guests</span> required
              </span>
            </motion.div>
          </div>
        </section>

        {/* Desserts Grid */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-number block mb-4">Selection</span>
              <h2>Our Desserts</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {patisserieOptions.map((dessert, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="card p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-[var(--color-accent)] text-lg mb-3">
                    {dessert.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {dessert.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Good to Know */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={staggerItem} className="text-center mb-12">
                <span className="section-number block mb-4">Important</span>
                <h2>Good to Know</h2>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="card p-8 text-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    className="mx-auto mb-4"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <h4 className="text-[var(--color-accent)] mb-2">
                    Advance Order
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Please place your order at least 72 hours in advance for
                    custom pastry arrangements.
                  </p>
                </div>
                <div className="card p-8 text-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    className="mx-auto mb-4"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1="16" y1="8" x2="2" y2="22" />
                    <line x1="17.5" y1="15" x2="9" y2="15" />
                  </svg>
                  <h4 className="text-[var(--color-accent)] mb-2">
                    Custom Creations
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Special occasion cakes and custom desserts available upon
                    request.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="mt-8 text-center"
              >
                <p className="text-[var(--color-text-secondary)]">
                  All desserts are made fresh and can be tailored to accommodate
                  dietary restrictions. Let us know about any allergies.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
