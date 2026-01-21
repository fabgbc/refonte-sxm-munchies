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
              src={villaService.image}
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
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
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

        {/* CTA Section */}
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
                Book Your Private Chef Experience
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Ready to transform your villa into a gourmet destination?
                Contact us to plan your perfect dining experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact" className="btn btn-primary">
                  <span>Book Now</span>
                </Link>
                <Link href="/#menus" className="btn btn-outline">
                  <span>View Menus</span>
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
