"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, testimonialStats } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let next = prev + newDirection;
        if (next < 0) next = testimonials.length - 1;
        if (next >= testimonials.length) next = 0;
        return next;
      });
    },
    []
  );

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  // Star rating component
  const StarRating = ({ rating, size = 20 }: { rating: number; size?: number }) => (
    <div className="flex gap-1 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < rating ? "text-[var(--color-accent)]" : "text-[var(--color-accent-light)]"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative">
        {/* Header with 5-star badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* 5-Star Rating Badge */}
          <div className="inline-flex items-center gap-6 mb-8 px-8 py-4 bg-[var(--color-bg-primary)]/50 backdrop-blur-sm border border-[var(--color-accent)]/30 rounded-full">
            <div className="flex items-center gap-3">
              <StarRating rating={5} size={24} />
              <span className="text-2xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)] font-semibold">
                {testimonialStats.averageRating}
              </span>
            </div>
            <div className="w-px h-8 bg-[var(--color-accent)]/30" />
            <div className="text-left">
              <p className="text-lg font-medium text-[var(--color-text-primary)]">
                {testimonialStats.totalReviews}+ Reviews
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                5 Star Rating
              </p>
            </div>
          </div>

          <span className="section-number block">Client Testimonials</span>
          <h2 className="font-[family-name:var(--font-cormorant)] mt-4 golden-glow-text">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote marks background */}
          <span className="quote-marks absolute top-0 left-0 lg:left-[-40px] select-none opacity-30">
            &ldquo;
          </span>

          {/* Testimonial content */}
          <div className="relative min-h-[320px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="text-center px-4 lg:px-16"
              >
                {/* Star Rating */}
                <div className="mb-6">
                  <StarRating rating={testimonials[currentIndex].rating || 5} />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-accent)] mb-4 italic">
                  &ldquo;{testimonials[currentIndex].context}&rdquo;
                </h3>

                {/* Quote */}
                <blockquote className="font-[family-name:var(--font-cormorant)] text-lg lg:text-xl leading-relaxed mb-8 text-[var(--color-text-secondary)]">
                  {testimonials[currentIndex].quote.length > 300
                    ? testimonials[currentIndex].quote.substring(0, 300) + "..."
                    : testimonials[currentIndex].quote}
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <p className="font-medium text-[var(--color-text-primary)]">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous */}
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all rounded-full"
              aria-label="Previous testimonial"
            >
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
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* Counter */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-tertiary)] rounded-full">
              <span className="text-[var(--color-accent)] font-medium min-w-[2ch] text-right">
                {currentIndex + 1}
              </span>
              <span className="text-[var(--color-text-secondary)]">/</span>
              <span className="text-[var(--color-text-secondary)] min-w-[2ch]">
                {testimonials.length}
              </span>
            </div>

            {/* Next */}
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all rounded-full"
              aria-label="Next testimonial"
            >
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="h-[2px] bg-[var(--color-accent-light)]/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[var(--color-accent)]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-4 right-4 text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              Paused
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
