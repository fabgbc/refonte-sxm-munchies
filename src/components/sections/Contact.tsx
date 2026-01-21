"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

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
              Réserver votre expérience
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Chaque demande est traitée personnellement. Nous vous recontactons
              sous 24 heures pour discuter de votre projet et créer une
              expérience sur mesure.
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
                  <h4 className="font-medium mb-1">Téléphone</h4>
                  <a
                    href="tel:+590690000000"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    +590 690 00 00 00
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
                    href="https://wa.me/590690000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    Envoyer un message
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
                    href="mailto:contact@cheffrancis.com"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    contact@cheffrancis.com
                  </a>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 p-6 bg-[var(--color-bg-tertiary)] border-l-2 border-[var(--color-accent)]">
              <p className="text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">
                  Délai de réservation :
                </strong>{" "}
                Nous recommandons de réserver au moins 48 heures à l&apos;avance.
                Pour les événements de plus de 20 personnes, prévoir 1 semaine.
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
              {/* Name */}
              <div className="form-group">
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Votre nom"
                  className="form-input"
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="form-input"
                  />
                  {errors.email && (
                    <p className="form-error">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Téléphone"
                    className="form-input"
                  />
                  {errors.phone && (
                    <p className="form-error">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Date & Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="date"
                    {...register("date")}
                    className="form-input"
                  />
                  {errors.date && (
                    <p className="form-error">{errors.date.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <select {...register("serviceType")} className="form-select">
                    <option value="">Type de prestation</option>
                    <option value="villa">Villa privée</option>
                    <option value="yacht">Yacht / Bateau</option>
                    <option value="event">Événement</option>
                    <option value="buffet">Buffet / Réception</option>
                  </select>
                  {errors.serviceType && (
                    <p className="form-error">{errors.serviceType.message}</p>
                  )}
                </div>
              </div>

              {/* Guests */}
              <div className="form-group">
                <select {...register("guests")} className="form-select">
                  <option value="">Nombre de convives</option>
                  <option value="2-4">2 à 4 personnes</option>
                  <option value="5-8">5 à 8 personnes</option>
                  <option value="9-15">9 à 15 personnes</option>
                  <option value="16-30">16 à 30 personnes</option>
                  <option value="30+">Plus de 30 personnes</option>
                </select>
                {errors.guests && (
                  <p className="form-error">{errors.guests.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <textarea
                  {...register("message")}
                  placeholder="Votre message (optionnel) — préférences alimentaires, occasion spéciale, etc."
                  rows={4}
                  className="form-input resize-none"
                />
              </div>

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
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
