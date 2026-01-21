"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/home-page-private-chef-st-martin.jpg",
    label: "Villa Chef Service",
    title: "Private Chef in Saint-Martin",
    subtitle: "Gourmet Meals, Personalized Service, Luxury Setting",
    cta: "Book Now",
    href: "/contact",
  },
  {
    id: 2,
    image: "/images/home-page-private-cgef-boat.jpg",
    label: "Yacht Catering Experience",
    title: "Chef Onboard a Motor Yacht",
    subtitle: "Saint-Martin · Up to 8 Guests",
    cta: "Explore the Experience",
    href: "/private-chef-onboard",
  },
  {
    id: 3,
    image: "/images/home-page-chef-week.jpg",
    label: "Weekly Service",
    title: "Private Chef for the Week",
    subtitle: "All Meals · All Week · Saint-Martin",
    cta: "View Our Services",
    href: "/private-chef-week-menu",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/60 via-[#0C0A09]/50 to-[#0C0A09]/80" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation - Left Side */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative w-10 h-10 flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                  : "border-white/50 bg-transparent group-hover:border-white"
              }`}
            />
            {index === currentSlide && (
              <motion.span
                layoutId="slideIndicator"
                className="absolute inset-0 border border-[var(--color-accent)] rounded-full"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-6"
            >
              {slides[currentSlide].label}
            </motion.span>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] mb-4 text-white"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-[family-name:var(--font-cormorant)] text-[clamp(1.2rem,3vw,2rem)] text-[var(--color-accent)] mb-10"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href={slides[currentSlide].href}
                className="inline-block px-10 py-4 border border-[var(--color-accent)] text-sm tracking-widest uppercase text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-all duration-300"
              >
                {slides[currentSlide].cta}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
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

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-[var(--color-accent)]"
        />
      </div>
    </section>
  );
}
