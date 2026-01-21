"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RelatedServices from "@/components/ui/RelatedServices";
import {
  fadeUp,
  fadeIn,
  heroTextContainer,
  heroTextItem,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { services } from "@/data/services";

const weekService = services.find((s) => s.slug === "private-chef-week-menu");

const sampleMenuDetails = [
  {
    day: "Day 1",
    theme: "Caribbean Welcome Dinner",
    description: "A vibrant introduction to island flavors",
    image: "/images/day-1.jpg",
    dishes: [
      "Fresh ceviche with tropical fruits",
      "Grilled Caribbean lobster",
      "Coconut rice and seasonal vegetables",
      "Key lime tart",
    ],
  },
  {
    day: "Day 2",
    theme: "Mediterranean Feast",
    description: "Sun-kissed flavors from the Mediterranean coast",
    image: "/images/day2.png",
    dishes: [
      "Mezze platter with homemade hummus",
      "Herb-crusted sea bass",
      "Saffron risotto",
      "Olive oil cake with citrus",
    ],
  },
  {
    day: "Day 3",
    theme: "Surf & Turf Night",
    description: "The best of land and sea",
    image: "/images/day-3.png",
    dishes: [
      "Tuna tartare with avocado",
      "Filet mignon with jumbo shrimp",
      "Truffle mashed potatoes",
      "Chocolate fondant",
    ],
  },
  {
    day: "Day 4",
    theme: "French Bistro Experience",
    description: "Classic French cuisine with a Caribbean twist",
    image: "/images/day4.png",
    dishes: [
      "French onion soup",
      "Duck confit with orange glaze",
      "Gratin dauphinois",
      "Creme brulee",
    ],
  },
  {
    day: "Day 5",
    theme: "Local Catch of the Day",
    description: "Fresh from Caribbean waters",
    image: "/images/day5.jpg",
    dishes: [
      "Conch fritters with mango salsa",
      "Pan-seared mahi-mahi",
      "Plantains and beans",
      "Rum-infused pineapple",
    ],
  },
  {
    day: "Day 6",
    theme: "Grill & BBQ Evening",
    description: "Casual elegance with smoky flavors",
    image: "/images/day6.png",
    dishes: [
      "Grilled vegetable antipasti",
      "BBQ ribs and grilled chicken",
      "Corn on the cob and coleslaw",
      "Grilled peaches with ice cream",
    ],
  },
  {
    day: "Day 7",
    theme: "Grand Finale Gourmet",
    description: "A memorable conclusion to your culinary journey",
    image: "/images/day-1.jpg",
    dishes: [
      "Oysters with champagne mignonette",
      "Wagyu beef tenderloin",
      "Asparagus and black truffle",
      "Grand dessert tasting",
    ],
  },
];

export default function WeekMenuPage() {
  if (!weekService) {
    return null;
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 vignette">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/home-page-chef-week.jpg"
              alt={weekService.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/80 via-[#0C0A09]/60 to-[#0C0A09]/95" />
          </motion.div>

          {/* Decorative corner elements */}
          <div className="absolute top-24 left-8 lg:left-16 w-20 h-20 border-t border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute top-24 right-8 lg:right-16 w-20 h-20 border-t border-r border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 left-8 lg:left-16 w-20 h-20 border-b border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 right-8 lg:right-16 w-20 h-20 border-b border-r border-[var(--color-accent)]/30 z-10" />

          <div className="container relative z-10 text-center">
            <motion.div
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={heroTextItem}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">{weekService.shortTitle}</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6 golden-glow-text"
              >
                {weekService.title}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-[family-name:var(--font-cormorant)] italic"
              >
                {weekService.longDescription}
              </motion.p>

              {/* Premium pricing box with CTA */}
              <motion.div
                variants={heroTextItem}
                className="inline-block"
              >
                <a
                  href="#journey"
                  className="block group"
                >
                  <div className="px-8 py-5 border border-[var(--color-accent)]/50 bg-[var(--color-bg-primary)]/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-bg-primary)]/50">
                    <span className="text-[var(--color-accent)] font-[family-name:var(--font-cormorant)] text-xl block mb-3">
                      7 Nights of Culinary Excellence
                    </span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                        Discover The Journey
                      </span>
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-[var(--color-accent)]"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Description */}
        <section id="journey" className="section bg-[var(--color-bg-primary)] relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <span className="section-number">01 - Week-Long Excellence</span>
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                  7 Days of Culinary Bliss
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  For those staying a full week in Saint-Martin, our Private Chef
                  Week package offers the ultimate in vacation dining. Every
                  evening becomes a culinary event, with Chef Francis creating a
                  carefully curated journey through world cuisines.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  From your first night Caribbean welcome to the grand finale
                  gourmet dinner, each meal is thoughtfully planned to offer
                  variety, excitement, and unforgettable flavors.
                </p>

                {weekService.features && (
                  <ul className="space-y-3">
                    {weekService.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative aspect-[4/5] overflow-hidden group image-premium"
              >
                <Image
                  src="/images/day-1.jpg"
                  alt="Week-long dining experience"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner frame on hover */}
                <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <span className="section-number">02 - The Journey</span>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                How It Works
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "Share your preferences, dietary needs, and any special requests before your arrival",
                },
                {
                  step: "02",
                  title: "Menu Planning",
                  description:
                    "Chef Francis crafts a week-long culinary journey tailored to your tastes",
                },
                {
                  step: "03",
                  title: "Daily Service",
                  description:
                    "Fresh preparations delivered to your villa each evening",
                },
                {
                  step: "04",
                  title: "Quality Time",
                  description:
                    "Relax and enjoy while we handle everything from cooking to cleanup",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                    <span className="font-[family-name:var(--font-cormorant)] text-2xl group-hover:text-[var(--color-bg-primary)] transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Sample 7-Day Menu */}
        <section className="section bg-[var(--color-bg-primary)] relative">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <span className="section-number">03 - Sample Menu</span>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                A Week of Culinary Excellence
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Here is an example of what your week might look like. Every menu
                is customized to your preferences.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {sampleMenuDetails.map((menu, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] overflow-hidden group hover:border-[var(--color-accent)] transition-all duration-300 relative hover:shadow-[0_10px_40px_rgba(212,165,116,0.15)] ${
                    idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Corner accents */}
                  <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                  {/* Day Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={menu.image}
                      alt={menu.theme}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-[family-name:var(--font-cormorant)] text-lg">
                        {idx + 1}
                      </span>
                    </div>
                    {/* Hover overlay frame */}
                    <div className="absolute inset-2 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/40 transition-all duration-500 pointer-events-none" />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                        {menu.day}
                      </span>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-lg group-hover:text-[var(--color-accent)] transition-colors">
                        {menu.theme}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4 italic">
                      {menu.description}
                    </p>
                    {/* Decorative divider */}
                    <div className="w-12 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent mb-4" />
                    <ul className="space-y-2">
                      {menu.dishes.map((dish, dishIdx) => (
                        <li
                          key={dishIdx}
                          className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                        >
                          <span className="text-[var(--color-accent)]">-</span>
                          {dish}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 text-center"
            >
              <div className="inline-block px-8 py-4 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] relative">
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />
                <p className="text-[var(--color-text-secondary)] text-sm">
                  <strong className="text-[var(--color-accent)]">Note:</strong>{" "}
                  This is a sample menu. Your actual menu will be customized based
                  on your preferences, dietary requirements, and seasonal
                  availability.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Package Benefits */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative blur circles */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <span className="section-number">04 - Benefits</span>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
                Why Choose the Week Package
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  ),
                  title: "Preferred Pricing",
                  description:
                    "Enjoy special weekly rates with significant savings compared to nightly bookings",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  title: "Priority Booking",
                  description:
                    "Week package guests receive priority scheduling during peak season",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ),
                  title: "Curated Experience",
                  description:
                    "A thoughtfully planned culinary journey with variety and balance",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                  title: "No Planning Stress",
                  description:
                    "We handle all the details so you can focus on enjoying your vacation",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  title: "Flexible Scheduling",
                  description:
                    "Adjust dining times to fit your daily activities and excursions",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: "Group Friendly",
                  description:
                    "Perfect for families, friend groups, or multi-family vacations",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  className="bg-[var(--color-bg-tertiary)] p-8 text-center border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg-primary)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Signature Themes */}
        <section className="section bg-[#F5F3EF] relative overflow-hidden">
          {/* Decorative gradient lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
          <div className="absolute top-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <span className="text-sm uppercase tracking-widest text-[var(--color-accent)]">Our Signature Themes</span>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  name: "Grill & Barbecue",
                  href: "/grill-menu",
                  description: "Premium meats, fresh seafood, and grilled vegetables with Caribbean spices.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  )
                },
                {
                  name: "Caribbean Fusion",
                  href: "/caribbean-menu",
                  description: "Bold flavors, local produce, and traditional island dishes with a twist.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                      <line x1="6" x2="18" y1="17" y2="17" />
                    </svg>
                  )
                },
                {
                  name: "Gourmet Tasting Menu",
                  href: "/gourmet-menu",
                  description: "Refined and artistic plates for a high-end culinary journey.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" x2="6" y1="2" y2="4" />
                      <line x1="10" x2="10" y1="2" y2="4" />
                      <line x1="14" x2="14" y1="2" y2="4" />
                    </svg>
                  )
                },
                {
                  name: "Bourguignon Menu",
                  href: "/bourgogne-menu",
                  description: "A French classic with slow-cooked beef, rich wine sauce, and comforting sides.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M8 2h8l4 10H4L8 2Z" />
                      <path d="M12 12v6" />
                      <path d="M8 22h8" />
                      <path d="M12 18h.01" />
                    </svg>
                  )
                },
                {
                  name: "Mediterranean",
                  href: "/mediterranean-menu",
                  description: "Olive oil, herbs, and sun-soaked flavors from Italy, Greece, and beyond.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                  )
                },
                {
                  name: "Caribbean Surf & Turf",
                  href: "/surf-turf-menu",
                  description: "A bold mix of grilled lobster and tender meat cuts — island-style and full of flavor.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  )
                },
              ].map((menu, idx) => (
                <motion.div key={idx} variants={staggerItem}>
                  <Link
                    href={menu.href}
                    className="block bg-[#FAF9F7] p-8 text-center hover:shadow-xl transition-all duration-500 group h-full relative border border-transparent hover:border-[var(--color-accent)]/30 hover:-translate-y-1"
                  >
                    {/* Corner accents on hover */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/5 transition-all duration-300">
                      {menu.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1a1a1a] mb-3 italic group-hover:text-[var(--color-accent)] transition-colors">
                      {menu.name}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {menu.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Wine Pairing */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                  <path d="M8 22h8M12 11v11M7 2h10l-1 8c-.5 2.5-2 3-4 3s-3.5-.5-4-3L7 2z" />
                </svg>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </div>
              <span className="section-number">06 - Wine Pairing</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                Wine Pairing Available
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Enhance your week-long dining experience with our curated wine
                selection. Our sommelier recommendations perfectly complement
                each evening&apos;s menu.
              </p>
              <Link href="/wine" className="btn btn-outline btn-shine">
                <span>View Wine Selection</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-[var(--color-bg-primary)] relative overflow-hidden">
          {/* Decorative dotted pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <span className="section-number">07 - Contact Us</span>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6 golden-glow-text">
                  Plan Your Week of Culinary Excellence
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
                  Contact us to discuss your week-long private chef experience. We
                  will create a personalized menu journey for your Saint-Martin
                  vacation.
                </p>
              </div>

              {/* Contact Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              >
                <motion.a
                  variants={staggerItem}
                  href="tel:+590690535739"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] block mb-2">Call Us</span>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    +590 690 53.57.39
                  </span>
                </motion.a>

                <motion.a
                  variants={staggerItem}
                  href="mailto:sxmprivatechef@gmail.com"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] block mb-2">Email Us</span>
                  <span className="text-lg font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    sxmprivatechef@gmail.com
                  </span>
                </motion.a>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact" className="btn btn-primary btn-shine px-12">
                  <span>Book Week Package</span>
                </Link>
                <a
                  href="https://wa.me/590690535739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedServices currentSlug="private-chef-week-menu" />
      </main>
      <Footer />
    </>
  );
}
