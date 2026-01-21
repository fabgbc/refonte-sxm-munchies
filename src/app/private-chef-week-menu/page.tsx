"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
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
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0"
          >
            <Image
              src={weekService.image}
              alt={weekService.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/70 via-[#0C0A09]/50 to-[#0C0A09]/90" />
          </motion.div>

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
                <span className="decorative-line" />
                <span className="section-number">{weekService.shortTitle}</span>
                <span className="decorative-line" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,6vw,4rem)] leading-[1.1] mb-6"
              >
                {weekService.title}
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
              >
                {weekService.longDescription}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Service Description */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="section-number">01 - Week-Long Excellence</span>
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
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Week-long dining experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">02 - The Journey</span>
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
                <motion.div key={idx} variants={staggerItem} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)]">
                    <span className="font-[family-name:var(--font-cormorant)] text-2xl">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2">
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
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">03 - Sample Menu</span>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
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
                  className={`bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] p-6 ${
                    idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-[family-name:var(--font-cormorant)] text-lg">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                        {menu.day}
                      </span>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-lg">
                        {menu.theme}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4 italic">
                    {menu.description}
                  </p>
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
              <p className="text-[var(--color-text-secondary)] text-sm">
                <strong className="text-[var(--color-text-primary)]">Note:</strong>{" "}
                This is a sample menu. Your actual menu will be customized based
                on your preferences, dietary requirements, and seasonal
                availability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Package Benefits */}
        <section className="section bg-[var(--color-bg-secondary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <span className="section-number">04 - Benefits</span>
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
                  className="bg-[var(--color-bg-tertiary)] p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-bg-primary)] text-[var(--color-accent)]">
                    {item.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-2">
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

        {/* CTA Section */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-[family-name:var(--font-cormorant)] mb-6">
                Plan Your Week of Culinary Excellence
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Contact us to discuss your week-long private chef experience. We
                will create a personalized menu journey for your Saint-Martin
                vacation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact" className="btn btn-primary">
                  <span>Book Week Package</span>
                </Link>
                <a
                  href="https://wa.me/590690000000"
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
      </main>
      <Footer />
    </>
  );
}
