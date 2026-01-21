"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { menus } from "@/data/menus";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

export default function GrillMenuPage() {
  const menu = menus.find((m) => m.slug === "grill-menu");

  if (!menu) {
    return null;
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />

          <div className="container relative z-10">
            <motion.div
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                variants={heroTextItem}
                className="section-number inline-block mb-4"
              >
                Menu {menu.number}
              </motion.span>

              <motion.h1
                variants={heroTextItem}
                className="mb-6"
              >
                {menu.name}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg lg:text-xl mb-8 max-w-2xl mx-auto"
              >
                {menu.description}
              </motion.p>

              <motion.div variants={heroTextItem}>
                <span className="price">{menu.priceLabel}</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Grill Items Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              {/* Includes */}
              {menu.includes && (
                <motion.div
                  variants={staggerItem}
                  className="text-center mb-16"
                >
                  <p className="text-[var(--color-accent)] text-lg italic">
                    {menu.includes}
                  </p>
                </motion.div>
              )}

              {/* Grill Items Grid */}
              {menu.grillItems && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Meats */}
                  <motion.div variants={staggerItem}>
                    <h3 className="text-[var(--color-accent)] mb-8 pb-4 border-b border-[var(--color-accent-light)]">
                      Meats
                    </h3>
                    <ul className="space-y-4">
                      {menu.grillItems.meats.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-start gap-4"
                        >
                          <span className="text-[var(--color-text-primary)]">
                            {item.name}
                          </span>
                          <span className="text-[var(--color-accent)] font-[family-name:var(--font-cormorant)] italic whitespace-nowrap">
                            ${item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Seafood */}
                  <motion.div variants={staggerItem}>
                    <h3 className="text-[var(--color-accent)] mb-8 pb-4 border-b border-[var(--color-accent-light)]">
                      Seafood
                    </h3>
                    <ul className="space-y-4">
                      {menu.grillItems.seafood.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-start gap-4"
                        >
                          <span className="text-[var(--color-text-primary)]">
                            {item.name}
                          </span>
                          <span className="text-[var(--color-accent)] font-[family-name:var(--font-cormorant)] italic whitespace-nowrap">
                            ${item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              )}

              {/* Sides */}
              {menu.grillItems?.sides && (
                <motion.div
                  variants={staggerItem}
                  className="mt-16"
                >
                  <h3 className="text-[var(--color-accent)] mb-8 pb-4 border-b border-[var(--color-accent-light)] text-center">
                    Available Sides
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {menu.grillItems.sides.map((side, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] text-[var(--color-text-secondary)]"
                      >
                        {side}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Good to Know Section */}
        <section className="py-16 lg:py-20 bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-[var(--color-accent)] mb-6">Good to Know</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Prices are per guest. All grill items are prepared fresh and served
                with your choice of side dish. Special dietary requirements can be
                accommodated upon request.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <h2 className="mb-6">Ready to Book?</h2>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
                Contact us to arrange your private grill experience in Saint-Martin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn btn-primary">
                  <span>Book Now</span>
                </Link>
                <Link href="/#menus" className="btn btn-outline">
                  View All Menus
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
