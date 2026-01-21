"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

export default function BourgogneMenuPage() {
  const menu = menus.find((m) => m.slug === "bourgogne-menu");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, serviceType: "bourgogne-menu" }),
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

        {/* Booking Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Ready to savor the Bourgogne Menu?</h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center gap-4 mb-12"
            >
              <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                Reservation
              </span>
              <a
                href="tel:+590690535739"
                className="flex items-center gap-3 text-xl hover:text-[var(--color-accent)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +590 690 53.57.39
              </a>
              <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] mt-2">
                Reservation
              </span>
              <a
                href="mailto:sxmprivatechef@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                sxmprivatechef@gmail.com
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl">Contact Us</h3>
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto space-y-6"
            >
              <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="form-input" />
              <input type="email" placeholder="Your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="form-input" />
              <input type="tel" placeholder="Your phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" />
              <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-input" />
              <textarea placeholder="Your message (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="form-input resize-none" />
              <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                {isSubmitting ? "Sending..." : "SUBMIT"}
              </button>
              {isSuccess && <p className="text-green-400 text-center">Thank you! Your message has been sent.</p>}
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
