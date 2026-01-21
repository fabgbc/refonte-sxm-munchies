"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { fadeUp, slideInLeft, slideInRight, heroTextContainer, heroTextItem } from "@/lib/animations";
import { contactInfo } from "@/data/testimonials";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
          <div className="container relative z-10">
            <motion.div
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span variants={heroTextItem} className="section-number">
                Contact
              </motion.span>
              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,5vw,3.5rem)] mt-4 mb-6"
              >
                Contact Us
              </motion.h1>
              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-accent)] text-xl font-[family-name:var(--font-cormorant)]"
              >
                Get In Touch
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left - Info */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl mb-8">
                  Get In Touch
                </h2>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-[var(--color-text-secondary)]">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[var(--color-bg-tertiary)] text-[var(--color-accent)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">WhatsApp</h4>
                      <a
                        href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        Send a message
                      </a>
                    </div>
                  </div>
                </div>

                {/* Partner */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-12 p-6 bg-[var(--color-bg-tertiary)] border-l-2 border-[var(--color-accent)]"
                >
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">
                      Our Partner:
                    </strong>{" "}
                    {contactInfo.partner} — For cocktail and bar services
                  </p>
                </motion.div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="sr-only">Your name</label>
                    <input
                      type="text"
                      id="contact-name"
                      {...register("name")}
                      placeholder="Your name"
                      className="form-input"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="form-error" role="alert">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="contact-email" className="sr-only">Your email</label>
                      <input
                        type="email"
                        id="contact-email"
                        {...register("email")}
                        placeholder="Your email"
                        className="form-input"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="form-error" role="alert">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone" className="sr-only">Your phone</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        {...register("phone")}
                        placeholder="Your phone"
                        className="form-input"
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" className="form-error" role="alert">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="contact-subject" className="sr-only">Subject</label>
                    <select
                      id="contact-subject"
                      {...register("subject")}
                      className="form-select"
                      aria-required="true"
                      aria-invalid={errors.subject ? "true" : "false"}
                      aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    >
                      <option value="">Subject</option>
                      <option value="villa">Private Chef in Villa</option>
                      <option value="yacht">Private Chef Onboard</option>
                      <option value="week">Week Package</option>
                      <option value="event">Event / Catering</option>
                      <option value="other">Other inquiry</option>
                    </select>
                    {errors.subject && (
                      <p id="contact-subject-error" className="form-error" role="alert">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="sr-only">Your message</label>
                    <textarea
                      id="contact-message"
                      {...register("message")}
                      placeholder="Your message (optional)"
                      rows={5}
                      className="form-input resize-none"
                      aria-required="false"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>

                  {/* Success Message */}
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-center"
                    >
                      Thank you! Your message has been sent. We&apos;ll get back to
                      you shortly.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative">
          {/* Section Header */}
          <div className="bg-[var(--color-bg-secondary)] py-12">
            <div className="container">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl mb-2">
                  Find Us in Saint-Martin
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Serving the entire island — French & Dutch sides
                </p>
              </motion.div>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121543.95028378886!2d-63.12397565!3d18.0708298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e6f5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSaint-Martin!5e0!3m2!1sen!2sfr!4v1705849200000!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SXM Private Chef - Saint-Martin Location"
              className="absolute inset-0"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--color-bg-secondary)] via-transparent to-[var(--color-bg-secondary)] opacity-30" />

            {/* Info Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-10"
            >
              <div className="bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border border-[var(--color-accent)]/30 p-6 max-w-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-bg-primary)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--color-accent)]">
                      Service Area
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Saint-Martin / Sint Maarten
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Villas & Residences
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Yachts & Boats
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Private Events
                  </li>
                </ul>
                <a
                  href="https://wa.me/590690357775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-accent)] text-[var(--color-bg-primary)] text-sm font-medium hover:bg-[var(--color-accent-light)] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reservation Section */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
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

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-12">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl">Contact Us</h3>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-xl mx-auto space-y-6">
              <div className="form-group">
                <label htmlFor="reservation-name" className="sr-only">Your name</label>
                <input type="text" id="reservation-name" placeholder="Your name" className="form-input" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="reservation-email" className="sr-only">Your email</label>
                <input type="email" id="reservation-email" placeholder="Your email" className="form-input" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="reservation-phone" className="sr-only">Your phone</label>
                <input type="tel" id="reservation-phone" placeholder="Your phone" className="form-input" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="reservation-subject" className="sr-only">Subject</label>
                <input type="text" id="reservation-subject" placeholder="Subject" className="form-input" aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="reservation-message" className="sr-only">Your message</label>
                <textarea id="reservation-message" placeholder="Your message (optional)" rows={4} className="form-input resize-none" aria-required="false" />
              </div>
              <button type="button" className="btn btn-primary w-full">SUBMIT</button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
