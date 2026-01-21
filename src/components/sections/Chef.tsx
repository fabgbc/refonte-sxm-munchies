"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { chefInfo } from "@/data/testimonials";

export default function Chef() {
  return (
    <section id="chef" className="section bg-[var(--color-bg-secondary)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden image-premium vignette">
              <Image
                src={chefInfo.image}
                alt={chefInfo.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-[var(--color-accent-light)] pointer-events-none z-10" />
              {/* Golden corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)] z-10" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] z-10" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] z-10" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-accent)] opacity-30 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-number">Meet Our Chef</span>
            <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-2">
              {chefInfo.name}
            </h2>
            <p className="text-[var(--color-accent)] mb-8">{chefInfo.title}</p>

            {/* Bio */}
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              {chefInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Experience Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)]"
            >
              <span className="text-3xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)]">
                {chefInfo.experience}
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                of culinary<br />excellence
              </span>
            </motion.div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-[var(--color-accent-light)]">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[var(--color-accent)]">
                {chefInfo.signature}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link href="/chefs" className="link-underline text-sm">
                Learn more about Chef Francis
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
