"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { saladOptions, tapasOptions } from "@/data/menus";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

export default function SaladsTapasBuffetPage() {
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
              Fresh & Flavorful
            </motion.span>
            <motion.h1 variants={heroTextItem} className="mb-6">
              Salads & Tapas Buffet
            </motion.h1>
            <motion.p
              variants={heroTextItem}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg"
            >
              A vibrant selection of fresh salads and Mediterranean-inspired
              tapas, perfect for poolside gatherings or casual celebrations.
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
                Minimum <span className="text-[var(--color-accent)] font-medium">10 guests</span> required
              </span>
            </motion.div>
          </div>
        </section>

        {/* Salads Section */}
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
              <h2>Fresh Salads</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {saladOptions.map((salad, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="card p-6"
                >
                  <h3 className="text-[var(--color-accent)] text-lg mb-3">
                    {salad.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {salad.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tapas Section */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-number block mb-4">Selection</span>
              <h2>Tapas Options</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {tapasOptions.map((tapas, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="card p-8 text-center"
                >
                  <div className="mb-4">
                    <span className="section-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[var(--color-accent)] mb-4">
                    {tapas.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {tapas.description}
                  </p>
                </motion.div>
              ))}
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
                className="card p-8 lg:p-12"
              >
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div>
                      <h4 className="text-[var(--color-accent)] mb-2">
                        Mix & Match
                      </h4>
                      <p className="text-[var(--color-text-secondary)]">
                        Create your perfect buffet by combining salads and tapas
                        to suit your event.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div>
                      <h4 className="text-[var(--color-accent)] mb-2">
                        Dietary Accommodations
                      </h4>
                      <p className="text-[var(--color-text-secondary)]">
                        Vegetarian, vegan, and gluten-free options available
                        upon request.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div>
                      <h4 className="text-[var(--color-accent)] mb-2">
                        Fresh Ingredients
                      </h4>
                      <p className="text-[var(--color-text-secondary)]">
                        All items prepared with locally-sourced, fresh
                        ingredients on the day of your event.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
