"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Menus",
    description:
      "Enjoy refined menus inspired by Mediterranean, Caribbean, or gourmet cuisine. Every dish is personalized to suit your taste and dietary needs.",
    cta: "Explore Our Menus",
    href: "/gourmet-menu",
    image: "/images/Sxmunchies-n-sweets-villa-7.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
        <ellipse cx="12" cy="17" rx="6" ry="2" />
        <path d="M6 17v-5" />
        <path d="M18 17v-5" />
      </svg>
    ),
    iconSimple: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Buffets",
    description:
      "Choose from sweet or savory options crafted for a minimum of 10 guests. Ideal for birthdays, gatherings, and private celebrations.",
    cta: "Explore Our Services",
    href: "/buffet-patisserie",
    image: "/images/home-page-chef-week.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <ellipse cx="12" cy="14" rx="8" ry="3" />
        <path d="M4 14v2c0 1.66 3.58 3 8 3s8-1.34 8-3v-2" />
      </svg>
    ),
    iconSimple: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
        <line x1="6" x2="18" y1="17" y2="17" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Breakfast & Brunch",
    description:
      "From fresh juices to tropical fruit and pastries, we bring the morning to your villa. A perfect way to begin a relaxed day in Saint-Martin.",
    cta: "Explore Our Services",
    href: "/breakfast-brunch",
    image: "/images/breakfast.png",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </svg>
    ),
    iconSimple: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </svg>
    ),
  },
];

function FlipCard({
  card,
}: {
  card: (typeof cards)[0];
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[500px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Image */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
              <div className="text-white mb-4">{card.iconSimple}</div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-white italic">
                {card.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back - Description */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] flex flex-col items-center justify-center p-8 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
            {card.title}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-8 max-w-sm">
            {card.description}
          </p>
          <Link
            href={card.href}
            className="inline-block px-8 py-4 border border-[var(--color-accent)] text-sm tracking-widest uppercase text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-all duration-300"
          >
            {card.cta}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function FlipCards() {
  return (
    <section className="section bg-[var(--color-bg-secondary)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-number block mb-4">
            From Tasting Menus to Elegant Brunches
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,5vw,3.5rem)]">
            Explore Our Culinary Offers
          </h2>
          {/* Decorative icon */}
          <div className="flex justify-center mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1"
              className="opacity-60"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
