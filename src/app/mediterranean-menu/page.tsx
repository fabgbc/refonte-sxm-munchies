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

export default function MediterraneanMenuPage() {
  const menu = menus.find((m) => m.slug === "mediterranean-menu");

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

        {/* Menu Details Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
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

              {/* Courses */}
              {menu.courses && (
                <motion.div
                  variants={staggerContainer}
                  className="space-y-12"
                >
                  {menu.courses.map((course, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="border-l-2 border-[var(--color-accent)] pl-8"
                    >
                      <h3 className="text-[var(--color-accent)] mb-4">
                        {course.category}
                      </h3>
                      <ul className="space-y-2">
                        {course.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-[var(--color-text-secondary)]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Good to Know Section */}
        {menu.note && (
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
                  {menu.note}
                </p>
              </motion.div>
            </div>
          </section>
        )}

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
                Contact us to reserve this menu for your private dining experience
                in Saint-Martin.
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
