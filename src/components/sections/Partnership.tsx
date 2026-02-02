"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function Partnership() {
  return (
    <section className="section bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-[var(--color-accent)] rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[var(--color-accent)] rounded-full" />
      </div>

      <div className="container relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="section-number">Our Partner</span>
          <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-4">
            Complete Your Experience
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Elevate your private chef dinner with expertly crafted cocktails
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left"
          >
            <div className="relative w-48 h-32 mb-6 mx-auto lg:mx-0">
              <Image
                src="/images/jc-bar-company.png"
                alt="JC Bar Company"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-[var(--color-text-secondary)] mb-6 text-lg">
              Professional bartending services to complement your culinary
              experience. From signature cocktails to full bar service, JC Bar
              Company brings the art of mixology to your private event.
            </p>

            <ul className="space-y-3 mb-8 text-[var(--color-text-secondary)]">
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
                Custom cocktail menus paired with your dinner
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
                Professional bartenders at your villa or yacht
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
                Premium spirits and fresh ingredients
              </li>
            </ul>

            <a
              href="http://jcbarcompany.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span className="inline-flex items-center gap-2">
                Discover JC Bar Company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative bg-[var(--color-bg-tertiary)] border border-[var(--color-accent)] p-8 lg:p-12">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)] -translate-x-2 -translate-y-2" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] -translate-x-2 translate-y-2" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] translate-x-2 translate-y-2" />

              <div className="text-center">
                <p className="text-[var(--color-accent)] text-sm tracking-widest uppercase mb-4">
                  The Perfect Pairing
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-2xl lg:text-3xl text-[var(--color-text-primary)] mb-6">
                  &ldquo;Great food deserves great drinks&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4 text-[var(--color-text-secondary)]">
                  <span className="w-12 h-px bg-[var(--color-accent-light)]" />
                  <span className="text-sm">Chef Francis & JC Bar Company</span>
                  <span className="w-12 h-px bg-[var(--color-accent-light)]" />
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--color-accent-light)]">
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    Ask us about combined packages
                  </p>
                  <a
                    href="/contact"
                    className="link-underline text-sm text-[var(--color-accent)]"
                  >
                    Contact us for a quote
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
