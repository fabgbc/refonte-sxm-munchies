"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { breakfastOptions } from "@/data/menus";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

export default function BreakfastBrunchPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, serviceType: "breakfast-brunch" }),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/breakfast.png"
              alt="Breakfast & Brunch"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/70 via-[#0C0A09]/50 to-[#0C0A09]/90" />
          </motion.div>
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="container relative z-10 text-center py-32 lg:py-40"
          >
            <motion.span
              variants={heroTextItem}
              className="section-number block mb-4"
            >
              Morning Delights
            </motion.span>
            <motion.h1 variants={heroTextItem} className="mb-6">
              Breakfast & Brunch
            </motion.h1>
            <motion.p
              variants={heroTextItem}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg"
            >
              Start your day with a gourmet breakfast experience, crafted with
              fresh ingredients and served in the comfort of your villa.
            </motion.p>
          </motion.div>
        </section>

        {/* Breakfast Options */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {breakfastOptions.map((option) => (
                <motion.div
                  key={option.id}
                  variants={staggerItem}
                  className="card p-8 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-[var(--color-accent)]">{option.name}</h3>
                    <span className="price text-2xl">{option.priceLabel}</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {option.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <span className="text-[var(--color-accent)] mt-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {option.name === "Premium Brunch" && (
                    <div className="mt-6 pt-4 border-t border-[var(--color-accent-light)]">
                      <span className="text-[var(--color-accent)] text-sm font-medium">
                        Includes Mimosas
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Customization Note */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="mb-8">Customization</h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                All egg dishes can be prepared to your preference: scrambled,
                sunny-side up, poached, or as an omelette. Just let us know your
                preference when ordering.
              </p>
              <div className="decorative-line mx-auto" />
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
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)]">
                    48 Hours Notice
                  </span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-lg">
                  Orders should be placed 48 hours in advance to ensure we can
                  source the freshest ingredients and prepare your breakfast to
                  perfection.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-12">
              <h2 className="mb-4">Start your day in style - book your villa brunch</h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col items-center gap-4 mb-12">
              <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">Reservation</span>
              <a href="tel:+590690535739" className="flex items-center gap-3 text-xl hover:text-[var(--color-accent)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +590 690 53.57.39
              </a>
              <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] mt-2">Reservation</span>
              <a href="mailto:sxmprivatechef@gmail.com" className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                sxmprivatechef@gmail.com
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-12">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl">Contact Us</h3>
            </motion.div>
            <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="form-input" />
              <input type="email" placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="form-input" />
              <input type="tel" placeholder="Your phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" />
              <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-input" />
              <textarea placeholder="Your message (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="form-input resize-none" />
              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">{isSubmitting ? "Sending..." : "SUBMIT"}</button>
              {isSuccess && <p className="text-green-400 text-center">Thank you! Your message has been sent.</p>}
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
