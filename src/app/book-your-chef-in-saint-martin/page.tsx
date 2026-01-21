"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  fadeUp,
  fadeIn,
  heroTextContainer,
  heroTextItem,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { services } from "@/data/services";

const villaService = services.find(
  (s) => s.slug === "book-your-chef-in-saint-martin"
);

export default function VillaServicePage() {
  if (!villaService) {
    return null;
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/Sxmunchies-n-sweets-villa-7.jpg"
              alt={villaService.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/70 via-[#0C0A09]/50 to-[#0C0A09]/90" />
          </motion.div>

          <div className="container relative z-10 text-center">
            <motion.div
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={heroTextItem}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <span className="decorative-line" />
                <span className="section-number">{villaService.shortTitle}</span>
                <span className="decorative-line" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6"
              >
                {villaService.title}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
              >
                {villaService.longDescription}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Private Chef Fee (Excluding Menus) */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              {/* Formula Header */}
              <div className="text-center mb-16">
                <span className="section-number block mb-4">Private Chef Fee (Excluding Menus)</span>
                <div className="inline-block bg-[var(--color-bg-tertiary)] border border-[var(--color-accent)] px-8 py-6 mb-6">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl lg:text-4xl text-[var(--color-accent)]">
                    Total = Service Fee + Menu + Dishes
                  </h2>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg">
                  All pricing is confirmed during the quote process
                </p>
              </div>

              {/* Steps Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Step 1 */}
                <motion.div
                  variants={staggerItem}
                  className="relative bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 text-center group hover:border-[var(--color-accent)] transition-colors"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">1</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center text-[var(--color-accent)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    Define Your Group Size
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    The size of your group determines the base service fee for the chef.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  variants={staggerItem}
                  className="relative bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 text-center group hover:border-[var(--color-accent)] transition-colors"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">2</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center text-[var(--color-accent)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      <line x1="8" y1="6" x2="16" y2="6" />
                      <line x1="8" y1="10" x2="16" y2="10" />
                      <line x1="8" y1="14" x2="12" y2="14" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    Explore Menu Options
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Choose the type of menu: Grill, Caribbean, Gourmet...
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  variants={staggerItem}
                  className="relative bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 text-center group hover:border-[var(--color-accent)] transition-colors"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-bg-primary)] font-bold">3</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mt-4 mb-6 flex items-center justify-center text-[var(--color-accent)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    Select Your Dishes
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Pricing depends on the dishes included.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Description */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="section-number">01 - The Experience</span>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                  Fine Dining in Your Private Villa
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Transform your vacation villa into an exclusive restaurant.
                  Chef Francis brings world-class cuisine directly to your
                  doorstep, creating unforgettable dining experiences in the
                  comfort and privacy of your own space.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  From intimate dinners for two to celebrations with family and
                  friends, every meal is crafted with passion, using the finest
                  local ingredients and Caribbean flavors.
                </p>

                {villaService.features && (
                  <ul className="space-y-3">
                    {villaService.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="/images/Sxmunchies-n-sweets-villa-2.jpg"
                  alt="Private dining experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">02 - Pricing</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Chef Service Fees
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Our pricing is transparent and based on the number of guests.
                The service fee covers Chef Francis and his team, setup, service,
                and complete cleanup.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              {/* Pricing Table */}
              <div className="bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-[var(--color-bg-primary)] border-b border-[var(--color-accent-light)]">
                  <div className="p-4 md:p-6 text-center">
                    <span className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
                      Guests
                    </span>
                  </div>
                  <div className="p-4 md:p-6 text-center border-x border-[var(--color-accent-light)]">
                    <span className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
                      Service Fee
                    </span>
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <span className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
                      Note
                    </span>
                  </div>
                </div>

                {/* Table Body */}
                {villaService.pricing?.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    className={`grid grid-cols-3 ${
                      idx !== (villaService.pricing?.length || 0) - 1
                        ? "border-b border-[var(--color-accent-light)]"
                        : ""
                    }`}
                  >
                    <div className="p-4 md:p-6 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl">
                        {tier.guests}
                      </span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center border-x border-[var(--color-accent-light)]">
                      <span className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl text-[var(--color-accent)]">
                        {tier.fee}
                      </span>
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center">
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        {tier.note}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-8 p-6 bg-[var(--color-bg-tertiary)] border-l-2 border-[var(--color-accent)]"
              >
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl mb-3">
                  What is included?
                </h4>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--color-accent)] flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Chef Francis and team on-site at your villa
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--color-accent)] flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Complete setup of your dining area
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--color-accent)] flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Professional service throughout the meal
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--color-accent)] flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Complete kitchen cleanup after service
                  </li>
                </ul>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Note:</strong>{" "}
                  Menu prices are separate and depend on your selected dishes.
                  View our menus for pricing details.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">03 - How It Works</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Your Private Dining Journey
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "Contact Us",
                  description:
                    "Reach out via phone, WhatsApp, or our contact form to discuss your event",
                },
                {
                  step: "02",
                  title: "Menu Selection",
                  description:
                    "Choose from our curated menus or request a custom creation",
                },
                {
                  step: "03",
                  title: "Confirmation",
                  description:
                    "We confirm all details, dietary requirements, and timing",
                },
                {
                  step: "04",
                  title: "Enjoy",
                  description:
                    "Relax and savor an exceptional culinary experience",
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={staggerItem} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)]">
                    <span className="font-[family-name:var(--font-cormorant)] text-2xl">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Signature Themes */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <span className="section-number">04 - Our Menus</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Our Signature Themes
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {[
                { name: "Grill & Barbecue", href: "/grill-menu" },
                { name: "Bourguignon Trails", href: "/bourgogne-menu" },
                { name: "Caribbean Menu", href: "/caribbean-menu" },
                { name: "Mediterranean", href: "/mediterranean-menu" },
                { name: "Gourmet Menu", href: "/gourmet-menu" },
                { name: "Surf & Turf", href: "/surf-turf-menu" },
                { name: "Gourmet Tasting", href: "/gourmet-menu" },
                { name: "Weekly Menu", href: "/weekly-menu" },
              ].map((menu, idx) => (
                <motion.div key={idx} variants={staggerItem}>
                  <Link
                    href={menu.href}
                    className="block p-4 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] text-center transition-colors group"
                  >
                    <span className="font-[family-name:var(--font-cormorant)] text-lg group-hover:text-[var(--color-accent)] transition-colors">
                      {menu.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Wine Pairing */}
        <section className="py-16 bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-4">
                Wine Pairing Available
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Enhance your dining experience with our curated wine selection,
                perfectly paired with your chosen menu.
              </p>
              <Link href="/wine" className="text-[var(--color-accent)] hover:underline">
                View Wine Selection →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-[family-name:var(--font-cormorant)] mb-6">
                Contact Us
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Ready to book your private chef experience? Get in touch with us.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <a
                  href="tel:+590690535739"
                  className="flex items-center gap-2 text-[var(--color-accent)] hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +590 690 53 57 39
                </a>
                <a
                  href="mailto:sxmprivatechef@gmail.com"
                  className="flex items-center gap-2 text-[var(--color-accent)] hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  sxmprivatechef@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary">
                  <span>Book Now</span>
                </Link>
                <a
                  href="https://wa.me/590690535739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
