"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { gourmetPlatters } from "@/data/menus";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

export default function GourmetPlattersPage() {
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
              Elegant Sharing
            </motion.span>
            <motion.h1 variants={heroTextItem} className="mb-6">
              Gourmet Platters
            </motion.h1>
            <motion.p
              variants={heroTextItem}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg"
            >
              Beautiful, artfully arranged platters perfect for entertaining
              guests or enjoying a sophisticated evening at your villa.
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
                Minimum <span className="text-[var(--color-accent)] font-medium">4 guests</span> required
              </span>
            </motion.div>
          </div>
        </section>

        {/* Platters Grid */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {gourmetPlatters.map((platter, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="card p-8 flex flex-col"
                >
                  <div className="mb-4">
                    <span className="section-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[var(--color-accent)] mb-4">
                    {platter.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] flex-1">
                    {platter.description}
                  </p>
                  {platter.pricePerPerson && (
                    <div className="mt-6 pt-4 border-t border-[var(--color-accent-light)]">
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        Priced per person
                      </span>
                    </div>
                  )}
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
                className="card p-8 lg:p-12 text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)]">
                    Ready to Serve
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg">
                  Delivered ready to serve, with all sauces and condiments
                  included. Simply unwrap and enjoy with your guests.
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
