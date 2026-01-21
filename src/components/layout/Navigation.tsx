"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  navAnimation,
  mobileMenuContainer,
  mobileMenuItem,
} from "@/lib/animations";

const navLinks = [
  {
    href: "/private-chef-services",
    label: "Services",
    submenu: [
      { href: "/private-chef-services", label: "All Services" },
      { href: "/book-your-chef-in-saint-martin", label: "Private Chef Services" },
      { href: "/private-chef-onboard", label: "Private Chef Onboard" },
      { href: "/private-chef-week-menu", label: "Private Chef Week Menu" },
    ],
  },
  {
    href: "#menus",
    label: "Menus",
    submenu: [
      { href: "/grill-menu", label: "Grill Menu" },
      { href: "/mediterranean-menu", label: "Mediterranean Menu" },
      { href: "/caribbean-menu", label: "Caribbean Menu" },
      { href: "/bourgogne-menu", label: "Bourguignon Menu" },
      { href: "/surf-turf-menu", label: "Surf & Turf Menu" },
      { href: "/gourmet-menu", label: "Gourmet Menu" },
      { href: "/weekly-menu", label: "Weekly Menu" },
      { href: "/breakfast-brunch", label: "Breakfast & Brunch" },
      { href: "/wine", label: "Our Wine Selection" },
    ],
  },
  {
    href: "#buffets",
    label: "Buffet",
    submenu: [
      { href: "/buffet-patisserie", label: "Buffet Patisserie" },
      { href: "/salads-tapas-buffet", label: "Salads & Tapas Buffet" },
      { href: "/gourmet-platters", label: "Gourmet Platters" },
    ],
  },
  { href: "/chefs", label: "The Chef" },
  { href: "/#testimonials", label: "Testimonials" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navAnimation}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0C0A09]/95 backdrop-blur-[12px]"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-20 lg:h-24">
          {/* Logo - Left */}
          <Link href="/" className="z-10">
            <Image
              src="/images/privatechefservices_transparent_logo_2-1-300x183-1.png"
              alt="Private Chef Services by Chef Francis"
              width={200}
              height={122}
              className="h-16 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Center Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="link-underline text-sm font-medium tracking-wider uppercase py-4"
                >
                  {link.label}
                </Link>

                {/* Submenu */}
                {link.submenu && activeSubmenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-[#0C0A09]/95 backdrop-blur-[12px] border border-[var(--color-accent-light)] min-w-[200px] py-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA - Desktop */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn btn-primary">
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 w-full h-[1px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-full h-[1px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[1px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#0C0A09] overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col items-center pt-24 pb-8 px-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={mobileMenuItem}
                  className="w-full text-center border-b border-[var(--color-accent-light)] py-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                    className="font-[family-name:var(--font-cormorant)] text-2xl hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="mt-3 space-y-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div variants={mobileMenuItem} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary"
                >
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
