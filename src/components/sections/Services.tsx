"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, imageHover } from "@/lib/animations";
import { services } from "@/data/services";

const icons = {
  villa: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  yacht: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M12 10v4" />
      <path d="M12 2v3" />
    </svg>
  ),
  event: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="section bg-[var(--color-bg-secondary)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-number">01 — Our Services</span>
          <h2 className="font-[family-name:var(--font-cormorant)] mt-4 mb-6">
            Private Chef Services
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Enjoy a tailored culinary experience. Whether at your villa, on a yacht, or for a week-long
            stay, we bring restaurant-quality dining directly to you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              className="group"
            >
              <Link href={service.link} className="block">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="card overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div variants={imageHover} className="w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-[var(--color-bg-tertiary)]/80 backdrop-blur-sm text-[var(--color-accent)]">
                      {icons[service.icon]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <span className="text-sm text-[var(--color-accent)] flex items-center gap-2">
                      Learn more
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
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* What You Can Expect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl mb-8">
            What You Can Expect
          </h3>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {["Private Yacht Service", "Gourmet Menus", "Italian Cuisine", "Fresh Ingredients", "Full Service"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[var(--color-text-secondary)]"
                >
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
