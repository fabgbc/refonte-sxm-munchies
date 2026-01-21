"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const yachtService = services.find((s) => s.slug === "private-chef-onboard");

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[var(--color-accent-light)]">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-[family-name:var(--font-cormorant)] text-xl group-hover:text-[var(--color-accent)] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 flex items-center justify-center text-[var(--color-accent)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--color-text-secondary)]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function YachtServicePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  if (!yachtService) {
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
              src="/images/boat-exprience-2.png"
              alt={yachtService.title}
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
                <span className="section-number">{yachtService.shortTitle}</span>
                <span className="decorative-line" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6"
              >
                {yachtService.title}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
              >
                {yachtService.longDescription}
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
                <span className="section-number">01 - Onboard Excellence</span>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                  Gourmet Dining at Sea
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Whether you are chartering a yacht for a day trip around the
                  beautiful waters of Saint-Martin or hosting an intimate dinner
                  on deck under the Caribbean stars, Chef Francis brings the same
                  culinary excellence to the sea.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Our yacht service is designed to work seamlessly with the
                  unique environment of boating - from carefully planned menus
                  that travel well to professional service that adapts to the
                  rhythm of life at sea.
                </p>

                {yachtService.features && (
                  <ul className="space-y-3">
                    {yachtService.features.map((feature, idx) => (
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
                  src="/images/friends-making-fish-barbecue-on-the-yacht-2025-03-16-16-13-25-utc-2.jpg"
                  alt="Yacht dining experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
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
                Yacht Service Options
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Flexible options to suit your sailing plans
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {yachtService.pricing?.map((tier, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 text-center"
                >
                  <span className="text-sm uppercase tracking-wider text-[var(--color-accent)]">
                    {tier.guests}
                  </span>
                  <div className="my-6">
                    <span className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[var(--color-accent)]">
                      {tier.fee}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">{tier.note}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 max-w-2xl mx-auto text-center"
            >
              <p className="text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">
                  All yacht services include:
                </strong>{" "}
                Fresh ingredients, meal preparation, service, and cleanup.
                Contact us to discuss your specific requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">03 - What to Expect</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Your Onboard Experience
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: "4-Hour Service",
                  description:
                    "Our chef joins you aboard for a dedicated service window, preparing and serving your meal fresh",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  title: "Sea-Friendly Menu",
                  description:
                    "Specially curated dishes designed to be prepared and served at sea without compromise",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                  title: "Premium Service",
                  description:
                    "Professional service adapted to the yacht environment, ensuring an exceptional experience",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="bg-[var(--color-bg-secondary)] p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3">
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

        {/* FAQ Section */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">04 - FAQ</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto"
            >
              {yachtService.faq?.map((item, idx) => (
                <FAQItem
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === idx}
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                />
              ))}

              {/* Additional FAQs */}
              <FAQItem
                question="How far in advance should we book?"
                answer="We recommend booking at least 48-72 hours in advance for yacht services. For busy seasons or special events, earlier booking is advisable."
                isOpen={openFAQ === 100}
                onClick={() => setOpenFAQ(openFAQ === 100 ? null : 100)}
              />
              <FAQItem
                question="Can you work with any yacht size?"
                answer="Yes, we adapt our service to vessels of all sizes, from day boats to large yachts. We coordinate with your captain to ensure smooth service."
                isOpen={openFAQ === 101}
                onClick={() => setOpenFAQ(openFAQ === 101 ? null : 101)}
              />
              <FAQItem
                question="What about weather conditions?"
                answer="We monitor weather conditions closely and will communicate with you if adjustments are needed. Safety is always our priority."
                isOpen={openFAQ === 102}
                onClick={() => setOpenFAQ(openFAQ === 102 ? null : 102)}
              />
            </motion.div>
          </div>
        </section>

        {/* Our Signature Themes */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">05 - Our Signature Themes</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Explore Our Menus
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Discover our carefully crafted menus, each designed to offer a
                unique culinary experience onboard
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {[
                { name: "Gourmet Menu", href: "/gourmet-menu" },
                { name: "Surf & Turf", href: "/surf-turf-menu" },
                { name: "Bourguignon Trails", href: "/bourgogne-menu" },
                { name: "Caribbean", href: "/caribbean-menu" },
                { name: "Mediterranean", href: "/mediterranean-menu" },
                { name: "Grill Menu", href: "/grill-menu" },
                { name: "Weekly Menu", href: "/weekly-menu" },
              ].map((menu, idx) => (
                <motion.div key={idx} variants={staggerItem}>
                  <Link
                    href={menu.href}
                    className="block p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] text-center hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)] transition-all group"
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
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="section-number">06 - Wine Pairing</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Wine Pairing Available
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Enhance your onboard dining experience with our curated wine
                selection. Our sommelier recommendations perfectly complement
                each dish.
              </p>
              <Link href="/wine" className="btn btn-outline">
                <span>View Wine Selection</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="section-number">07 - Contact Us</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Ready to Sail with Chef Francis?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Contact us to discuss your yacht charter dining needs. We will
                create a memorable culinary experience on the water.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <a
                  href="tel:+590690535739"
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--color-accent)]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +590 690 53 57 39
                </a>
                <a
                  href="mailto:sxmprivatechef@gmail.com"
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[var(--color-accent)]"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  sxmprivatechef@gmail.com
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact" className="btn btn-primary">
                  <span>Book Yacht Service</span>
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
