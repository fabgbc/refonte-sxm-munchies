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

export default function WeeklyMenuPage() {
  const menu = menus.find((m) => m.slug === "weekly-menu");

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

        {/* Weekly Example Section */}
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

              {/* Sample Menu Header */}
              <motion.div variants={staggerItem} className="text-center mb-12">
                <h2 className="text-[var(--color-text-primary)] mb-4">
                  Sample Weekly Menu
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Here is an example of what your week could look like
                </p>
              </motion.div>

              {/* Weekly Days */}
              {menu.weeklyExample && (
                <motion.div
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  {menu.weeklyExample.map((day, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] p-8"
                    >
                      <h3 className="text-[var(--color-accent)] mb-6 pb-4 border-b border-[var(--color-accent-light)]">
                        {day.day}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Lunch */}
                        <div>
                          <span className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2 block">
                            Lunch
                          </span>
                          <p className="text-[var(--color-text-secondary)]">
                            {day.lunch}
                          </p>
                        </div>

                        {/* Dinner */}
                        <div>
                          <span className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2 block">
                            Dinner
                          </span>
                          <p className="text-[var(--color-text-secondary)]">
                            {day.dinner}
                          </p>
                          {day.alternate && (
                            <p className="text-[var(--color-text-secondary)] mt-2 text-sm italic">
                              Or: {day.alternate}
                            </p>
                          )}
                        </div>

                        {/* Dessert */}
                        <div>
                          <span className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-2 block">
                            Dessert
                          </span>
                          <p className="text-[var(--color-text-secondary)]">
                            {day.dessert}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
                Weekly menus are fully customizable based on your preferences,
                dietary restrictions, and the number of guests. Menus are updated
                seasonally to incorporate fresh, local ingredients. Contact us to
                discuss your specific requirements and receive a personalized quote.
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
              <h2 className="mb-6">Plan Your Week</h2>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
                Contact us to create a personalized weekly meal plan for your
                villa stay in Saint-Martin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn btn-primary">
                  <span>Get a Quote</span>
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
