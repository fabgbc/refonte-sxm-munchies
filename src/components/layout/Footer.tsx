"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const footerLinks = {
  services: [
    { href: "/private-chef-services", label: "Private Chef Services" },
    { href: "/book-your-chef-in-saint-martin", label: "Villa Service" },
    { href: "/private-chef-onboard", label: "Yacht Service" },
    { href: "/private-chef-week-menu", label: "Week Package" },
  ],
  menus: [
    { href: "/gourmet-menu", label: "Gourmet Menu" },
    { href: "/surf-turf-menu", label: "Surf & Turf" },
    { href: "/caribbean-menu", label: "Caribbean Menu" },
    { href: "/mediterranean-menu", label: "Mediterranean" },
    { href: "/grill-menu", label: "Grill Menu" },
  ],
  buffets: [
    { href: "/breakfast-brunch", label: "Breakfast & Brunch" },
    { href: "/gourmet-platters", label: "Gourmet Platters" },
    { href: "/salads-tapas-buffet", label: "Salads & Tapas" },
    { href: "/buffet-patisserie", label: "Pâtisserie" },
  ],
};

const socialLinks = [
  {
    href: "https://instagram.com/sxmprivatechef",
    label: "Instagram",
    icon: (
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/590690535739",
    label: "WhatsApp",
    icon: (
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
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-accent)]">
      <div className="container py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {/* Logo & About */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/privatechefservices_transparent_logo_2-1-300x183-1.png"
                alt="Private Chef Services by Chef Francis"
                width={180}
                height={110}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-[var(--color-text-secondary)] max-w-xs mb-6">
              At SXM Private Chef, we bring restaurant-quality dining to your
              villa or yacht, crafting unforgettable culinary experiences in
              Saint-Martin.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <p>
                <a
                  href="tel:+590690535739"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  +590 690 53 57 39
                </a>
              </p>
              <p>
                <a
                  href="mailto:sxmprivatechef@gmail.com"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  sxmprivatechef@gmail.com
                </a>
              </p>
              <p>Saint-Martin / Sint Maarten</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--color-accent-light)] rounded-full text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-[var(--color-accent)]">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Menus */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-[var(--color-accent)]">
              Menus
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.menus.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Buffets */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6 text-[var(--color-accent)]">
              Buffets
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.buffets.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/chefs"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                Meet the Chef
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        </motion.div>

        {/* Partner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[var(--color-accent-light)] text-center"
        >
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Our Partner:{" "}
            <span className="text-[var(--color-accent)]">JC Bar Company</span>
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[var(--color-accent-light)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-secondary)]"
        >
          <p>
            &copy; {new Date().getFullYear()} SXM Private Chef. All rights
            reserved.
          </p>
          <p>
            Proudly Made By{" "}
            <a
              href="https://pandhiweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              Pandhiweb
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
