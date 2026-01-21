"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

const wineCategories = [
  {
    name: "Champagne & Sparkling",
    description:
      "Prestigious champagnes and sparkling wines for special celebrations.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
      </svg>
    ),
  },
  {
    name: "White Wines",
    description:
      "Crisp, refreshing whites perfect for seafood and lighter dishes.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M10 3h4l2 4v4h-8V7l2-4z" />
      </svg>
    ),
  },
  {
    name: "Rose Wines",
    description:
      "Elegant roses ideal for Caribbean sunsets and relaxed gatherings.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M10 3h4l2 4v4h-8V7l2-4z" />
      </svg>
    ),
  },
  {
    name: "Red Wines",
    description: "Full-bodied reds to complement grilled meats and rich sauces.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M10 3h4l2 4v4h-8V7l2-4z" />
      </svg>
    ),
  },
  {
    name: "Dessert Wines",
    description: "Sweet wines and late harvests to pair with our patisserie.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 22h8M12 11v11M10 3h4l2 4v4h-8V7l2-4z" />
      </svg>
    ),
  },
  {
    name: "Premium Selection",
    description: "Rare vintages and exceptional bottles for connoisseurs.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function WinePage() {
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
              Curated Selection
            </motion.span>
            <motion.h1 variants={heroTextItem} className="mb-6">
              Fine Wines
            </motion.h1>
            <motion.p
              variants={heroTextItem}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg"
            >
              Fine wines to pair with every dish. Our sommelier-curated
              selection complements each menu perfectly.
            </motion.p>
          </motion.div>
        </section>

        {/* Wine Categories */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-number block mb-4">Categories</span>
              <h2>Our Wine Selection</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {wineCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="card p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)]">
                    {category.icon}
                  </div>
                  <h3 className="text-[var(--color-accent)] mb-4">
                    {category.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pairing Section */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={staggerItem} className="text-center mb-12">
                <span className="section-number block mb-4">Expert Pairing</span>
                <h2>Perfect Pairings</h2>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="card p-8">
                  <h4 className="text-[var(--color-accent)] mb-4 flex items-center gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Pre-Dinner Selection
                  </h4>
                  <p className="text-[var(--color-text-secondary)]">
                    Let us know your menu in advance and we will recommend the
                    perfect wines to accompany each course.
                  </p>
                </div>
                <div className="card p-8">
                  <h4 className="text-[var(--color-accent)] mb-4 flex items-center gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Personal Consultation
                  </h4>
                  <p className="text-[var(--color-text-secondary)]">
                    Schedule a consultation with our chef to discuss your
                    preferences and create a custom wine list.
                  </p>
                </div>
              </motion.div>
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
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)]">
                    Availability & Special Requests
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                  Wine availability may vary based on current inventory. For
                  specific vintages or rare bottles, please contact us in
                  advance so we can source them for your event.
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  We partner with premium importers to bring exceptional wines
                  to Saint-Martin. Special orders typically require 1-2 weeks
                  advance notice.
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
