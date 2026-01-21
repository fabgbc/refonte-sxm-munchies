"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { chefInfo, testimonials } from "@/data/testimonials";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

export default function ChefsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-[var(--color-bg-secondary)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-transparent opacity-50" />
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="container relative text-center py-32 lg:py-40"
          >
            <motion.span
              variants={heroTextItem}
              className="section-number block mb-4"
            >
              The Artisan
            </motion.span>
            <motion.h1 variants={heroTextItem} className="mb-6">
              Meet Our Chef
            </motion.h1>
            <motion.p
              variants={heroTextItem}
              className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg"
            >
              Discover the passion and expertise behind every dish we create.
            </motion.p>
          </motion.div>
        </section>

        {/* Chef Bio Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Chef Image */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative aspect-[4/5] lg:aspect-[3/4]"
              >
                <div className="absolute inset-0 bg-[var(--color-accent-light)] translate-x-4 translate-y-4" />
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={chefInfo.image}
                    alt={chefInfo.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Chef Info */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="section-number block mb-4">
                  {chefInfo.experience} Experience
                </span>
                <h2 className="mb-2">{chefInfo.name}</h2>
                <p className="text-[var(--color-accent)] text-lg mb-8">
                  {chefInfo.title}
                </p>
                <div className="space-y-6 text-[var(--color-text-secondary)]">
                  {chefInfo.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-[var(--color-accent-light)]">
                  <p className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[var(--color-accent)]">
                    {chefInfo.signature}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-number block mb-4">Background</span>
              <h2>Culinary Journey</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {["Grasse", "Cannes", "Nice", "Roissy-en-France"].map(
                (location, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="card p-6 text-center"
                  >
                    <div className="mb-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                        className="mx-auto"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h4 className="text-[var(--color-accent)]">{location}</h4>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-number block mb-4">Testimonials</span>
              <h2>What Our Guests Say</h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={staggerItem}
                  className="card p-8 flex flex-col"
                >
                  {/* Quote Mark */}
                  <div className="mb-4">
                    <span className="quote-marks leading-none">&ldquo;</span>
                  </div>

                  {/* Quote */}
                  <p className="text-[var(--color-text-secondary)] flex-1 mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="var(--color-accent)"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="pt-4 border-t border-[var(--color-accent-light)]">
                    <p className="font-medium text-[var(--color-accent)]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {testimonial.context}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                      {testimonial.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Good to Know */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={staggerItem} className="mb-12">
                <span className="section-number block mb-4">Book Now</span>
                <h2>Experience Excellence</h2>
              </motion.div>
              <motion.p
                variants={staggerItem}
                className="text-[var(--color-text-secondary)] text-lg mb-8"
              >
                Whether you are celebrating a special occasion, hosting an
                intimate dinner, or simply want to experience exceptional
                cuisine in the comfort of your villa, Chef Francis is ready to
                create an unforgettable culinary experience for you.
              </motion.p>
              <motion.div variants={staggerItem}>
                <a href="/#contact" className="btn btn-primary">
                  <span>Book Your Experience</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
