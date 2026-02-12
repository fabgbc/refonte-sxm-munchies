"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

interface ServiceContactFormProps {
  serviceType: string;
  placeholder?: string;
  buttonText?: string;
}

export default function ServiceContactForm({
  serviceType,
  placeholder = "Tell us about your event...",
  buttonText = "Request a Quote",
}: ServiceContactFormProps) {
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
      await submitNetlifyForm("contact", {
        ...formData,
        serviceType,
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="form-input"
        />
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="form-input"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="tel"
          placeholder="Your phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="form-input"
        />
      </div>
      <textarea
        placeholder={placeholder}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={4}
        className="form-input resize-none"
      />
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary px-12"
        >
          <span>{isSubmitting ? "Sending..." : buttonText}</span>
        </button>
      </div>
      {isSuccess && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-center"
        >
          Thank you! Your message has been sent.
        </motion.p>
      )}
    </form>
  );
}
