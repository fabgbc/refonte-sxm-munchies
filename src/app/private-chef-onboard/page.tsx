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
              src={yachtService.image}
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
                  src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80"
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

        {/* CTA Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-[family-name:var(--font-cormorant)] mb-6">
                Ready to Sail with Chef Francis?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Contact us to discuss your yacht charter dining needs. We will
                create a memorable culinary experience on the water.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact" className="btn btn-primary">
                  <span>Book Yacht Service</span>
                </Link>
                <a
                  href="https://wa.me/590690000000"
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
