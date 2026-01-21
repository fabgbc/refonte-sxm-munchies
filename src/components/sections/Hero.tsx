"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroTextContainer, heroTextItem, fadeIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        {/* Video for desktop, image fallback for mobile */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=174&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div
          className="md:hidden w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/60 via-[#0C0A09]/40 to-[#0C0A09]/90" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.div
          variants={heroTextContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Decorative line */}
          <motion.div
            variants={heroTextItem}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="decorative-line" />
            <span className="section-number">Saint-Martin</span>
            <span className="decorative-line" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={heroTextItem}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] mb-4"
          >
            Private Chef in Saint-Martin
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroTextItem}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,4vw,2.5rem)] italic text-[var(--color-accent)] mb-6"
          >
            Exquisite Cuisine at Your Villa
          </motion.p>

          {/* Description */}
          <motion.p
            variants={heroTextItem}
            className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            At SXM Private Chef, we bring restaurant-quality dining to your
            villa or yacht, crafting unforgettable culinary experiences in
            Saint-Martin.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroTextItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link href="/private-chef-services" className="btn btn-primary">
              <span>Our Services</span>
            </Link>
            <Link href="/contact" className="link-underline">
              Book Your Experience
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-widest uppercase text-[var(--color-text-secondary)]">
          Scroll
        </span>
        <motion.div
          animate={{ height: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-[var(--color-accent)]"
        />
      </motion.div>
    </section>
  );
}
