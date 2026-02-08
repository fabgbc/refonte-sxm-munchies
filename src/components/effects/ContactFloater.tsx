"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TurnstileWidget from "@/components/ui/TurnstileWidget";

export default function ContactFloater() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [timestamp, setTimestamp] = useState<number>(0);
  const [turnstileToken, setTurnstileToken] = useState("");

  useEffect(() => {
    setTimestamp(Date.now());
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType: "floater-contact",
          _honeypot: honeypot,
          _timestamp: timestamp,
          _turnstileToken: turnstileToken,
        }),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
          />
        )}
      </AnimatePresence>

      {/* Popup Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 left-6 right-6 z-[9999] max-w-sm ml-auto bg-[#0C0A09] border border-[var(--color-accent-light)] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-accent-light)]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--color-accent)]">
                Contact Us
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white transition-colors"
                aria-label="Close contact form"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-3">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="form-input text-sm"
              />
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="form-input text-sm"
              />
              <input
                type="tel"
                placeholder="Your phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="form-input text-sm"
              />
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="form-input text-sm resize-none"
              />
              <TurnstileWidget onSuccess={setTurnstileToken} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full text-sm"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>

              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0C0A09"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="mail"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0C0A09"
              strokeWidth="2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
