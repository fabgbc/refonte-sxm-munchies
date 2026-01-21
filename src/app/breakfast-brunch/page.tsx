"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { breakfastOptions } from "@/data/menus";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

export default function BreakfastBrunchPage() {
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
              Morning Delights
            </motion.span>
            <motion.h1 variants={heroTextItem} className="mb-6">
              Breakfast & Brunch
            </motion.h1>
            <motion.p
              variants={heroTextItem}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg"
            >
              Start your day with a gourmet breakfast experience, crafted with
              fresh ingredients and served in the comfort of your villa.
            </motion.p>
          </motion.div>
        </section>

        {/* Breakfast Options */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {breakfastOptions.map((option) => (
                <motion.div
                  key={option.id}
                  variants={staggerItem}
                  className="card p-8 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-[var(--color-accent)]">{option.name}</h3>
                    <span className="price text-2xl">{option.priceLabel}</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {option.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <span className="text-[var(--color-accent)] mt-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {option.name === "Premium Brunch" && (
                    <div className="mt-6 pt-4 border-t border-[var(--color-accent-light)]">
                      <span className="text-[var(--color-accent)] text-sm font-medium">
                        Includes Mimosas
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Customization Note */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-8">Customization</h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                All egg dishes can be prepared to your preference: scrambled,
                sunny-side up, poached, or as an omelette. Just let us know your
                preference when ordering.
              </p>
              <div className="decorative-line mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Good to Know */}
        <section className="section bg-[var(--color-bg-primary)]">
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)]">
                    48 Hours Notice
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg">
                  Orders should be placed 48 hours in advance to ensure we can
                  source the freshest ingredients and prepare your breakfast to
                  perfection.
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
