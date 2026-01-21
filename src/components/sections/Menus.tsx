"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { menus } from "@/data/menus";

export default function Menus() {
  // Filter out special menus for the main display
  const mainMenus = menus.filter(m => !m.isGrillMenu && !m.isWeeklyMenu);

  return (
    <section id="menus" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-number">02 — Our Menus</span>
          <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
            Gourmet Menus
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Choose from our curated selection of gourmet menus, each crafted to deliver
            an exceptional dining experience. All menus can be customized to your preferences.
          </p>
        </motion.div>

        {/* Menus Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0"
        >
          {mainMenus.map((menu, index) => (
            <motion.article
              key={menu.id}
              variants={staggerItem}
              className={`group p-8 lg:p-10 border-b border-[var(--color-accent-light)] ${
                index % 2 === 0 ? "lg:border-r" : ""
              } ${index >= mainMenus.length - 2 ? "lg:border-b-0" : ""} ${
                index === mainMenus.length - 1 ? "border-b-0" : ""
              }`}
            >
              <Link href={`/${menu.slug}`} className="block">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 group-hover:translate-x-2 transition-transform duration-500">
                  {/* Menu Number */}
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-[var(--color-accent)] font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl italic opacity-50"
                  >
                    {menu.number}
                  </motion.span>

                  {/* Menu Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl lg:text-2xl group-hover:text-[var(--color-accent)] transition-colors">
                        {menu.name}
                      </h3>
                      <span className="price text-lg lg:text-xl">
                        {menu.priceLabel}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                      {menu.description}
                    </p>
                    <span className="text-sm text-[var(--color-accent)] inline-flex items-center gap-2">
                      View menu details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Additional Menus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Grill Menu */}
          <Link
            href="/grill-menu"
            className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-colors"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl group-hover:text-[var(--color-accent)] transition-colors">
                Grill Menu
              </h3>
              <span className="price text-lg">From $65</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">
              The perfect way to enjoy quality time with friends around expertly grilled meats and seafood.
            </p>
          </Link>

          {/* Weekly Menu */}
          <Link
            href="/weekly-menu"
            className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-colors"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl group-hover:text-[var(--color-accent)] transition-colors">
                Weekly Menu
              </h3>
              <span className="price text-lg">Contact us</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Seasonal, gourmet, and stress-free meals. Perfect for week-long villa stays.
            </p>
          </Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-[var(--color-text-secondary)] mb-6">
            All menus can be customized based on dietary preferences or restrictions.
          </p>
          <Link href="/contact" className="btn btn-outline">
            <span>Book Your Menu</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
