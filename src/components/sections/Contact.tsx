"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { contactInfo } from "@/data/contact";
import TurnstileWidget from "@/components/ui/TurnstileWidget";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  date: z.string().min(1, "Veuillez sélectionner une date"),
  serviceType: z.string().min(1, "Veuillez sélectionner un type de prestation"),
  guests: z.string().min(1, "Veuillez indiquer le nombre de convives"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState<number>(Date.now());
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  // Track when the form is loaded (for spam detection)
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

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
    setIsError(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          _honeypot: honeypot,
          _timestamp: formLoadTime,
          _turnstileToken: turnstileToken,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setHoneypot("");
        setFormLoadTime(Date.now());
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-[var(--color-bg-secondary)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-number">06 — Contact</span>
            <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
              Book Your Experience
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Every request is handled personally. We will get back to you
              within 24 hours to discuss your project and create a
              tailor-made experience.
            </p>

            {/* Info Cards */}
            <div className="space-y-6">
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
                    href={`tel:${contactInfo.phoneClean}`}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

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
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    Send a message
                  </a>
                </div>
              </div>

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
            </div>

            {/* Note */}
            <div className="mt-8 p-6 bg-[var(--color-bg-tertiary)] border-l-2 border-[var(--color-accent)]">
              <p className="text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">
                  Booking Notice:
                </strong>{" "}
                We recommend booking at least 48 hours in advance.
                For events with more than 20 guests, please allow 1 week.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field - hidden from humans, visible to bots */}
              <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="contact-name" className="sr-only">Votre nom</label>
                <input
                  type="text"
                  id="contact-name"
                  {...register("name")}
                  placeholder="Votre nom"
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
                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    {...register("email")}
                    placeholder="Email"
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
                  <label htmlFor="contact-phone" className="sr-only">Téléphone</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    {...register("phone")}
                    placeholder="Téléphone"
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

              {/* Date & Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="contact-date" className="sr-only">Date souhaitée</label>
                  <input
                    type="date"
                    id="contact-date"
                    {...register("date")}
                    className="form-input"
                    aria-required="true"
                    aria-invalid={errors.date ? "true" : "false"}
                    aria-describedby={errors.date ? "contact-date-error" : undefined}
                  />
                  {errors.date && (
                    <p id="contact-date-error" className="form-error" role="alert">{errors.date.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="contact-service" className="sr-only">Type de prestation</label>
                  <select
                    id="contact-service"
                    {...register("serviceType")}
                    className="form-select"
                    aria-required="true"
                    aria-invalid={errors.serviceType ? "true" : "false"}
                    aria-describedby={errors.serviceType ? "contact-service-error" : undefined}
                  >
                    <option value="">Type de prestation</option>
                    <option value="villa">Villa privée</option>
                    <option value="yacht">Yacht / Bateau</option>
                    <option value="event">Événement</option>
                    <option value="buffet">Buffet / Réception</option>
                  </select>
                  {errors.serviceType && (
                    <p id="contact-service-error" className="form-error" role="alert">{errors.serviceType.message}</p>
                  )}
                </div>
              </div>

              {/* Guests */}
              <div className="form-group">
                <label htmlFor="contact-guests" className="sr-only">Nombre de convives</label>
                <select
                  id="contact-guests"
                  {...register("guests")}
                  className="form-select"
                  aria-required="true"
                  aria-invalid={errors.guests ? "true" : "false"}
                  aria-describedby={errors.guests ? "contact-guests-error" : undefined}
                >
                  <option value="">Nombre de convives</option>
                  <option value="2-4">2 à 4 personnes</option>
                  <option value="5-8">5 à 8 personnes</option>
                  <option value="9-15">9 à 15 personnes</option>
                  <option value="16-30">16 à 30 personnes</option>
                  <option value="30+">Plus de 30 personnes</option>
                </select>
                {errors.guests && (
                  <p id="contact-guests-error" className="form-error" role="alert">{errors.guests.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="contact-message" className="sr-only">Votre message</label>
                <textarea
                  id="contact-message"
                  {...register("message")}
                  placeholder="Votre message (optionnel) — préférences alimentaires, occasion spéciale, etc."
                  rows={4}
                  className="form-input resize-none"
                  aria-required="false"
                />
              </div>

              <TurnstileWidget onSuccess={setTurnstileToken} />

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
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
                    Envoi en cours...
                  </span>
                ) : (
                  <span>Envoyer ma demande</span>
                )}
              </button>

              {/* Success Message */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-center"
                >
                  Merci ! Votre demande a bien été envoyée. Nous vous
                  recontactons très rapidement.
                </motion.div>
              )}

              {/* Error Message */}
              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-center"
                >
                  Une erreur est survenue. Veuillez réessayer ou nous contacter
                  directement par téléphone.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
