"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

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
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 justify-center mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
    <section id="testimonials" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-number">Client Testimonials</span>
          <h2 className="font-[family-name:var(--font-cormorant)] mt-4">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote marks background */}
          <span className="quote-marks absolute top-0 left-0 lg:left-[-40px] select-none">
            &ldquo;
          </span>

          {/* Testimonial content */}
          <div className="relative min-h-[350px] flex items-center justify-center overflow-hidden">
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
                {testimonials[currentIndex].rating && (
                  <StarRating rating={testimonials[currentIndex].rating} />
                )}

                {/* Title */}
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-accent)] mb-4">
                  &ldquo;{testimonials[currentIndex].context}&rdquo;
                </h3>

                {/* Quote */}
                <blockquote className="font-[family-name:var(--font-cormorant)] text-xl lg:text-2xl italic leading-relaxed mb-8">
                  {testimonials[currentIndex].quote}
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
          <div className="flex items-center justify-center gap-8 mt-8">
            {/* Previous */}
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-colors"
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

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[var(--color-accent)] w-6"
                      : "bg-[var(--color-accent-light)]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-colors"
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
        </div>
      </div>
    </section>
  );
}
