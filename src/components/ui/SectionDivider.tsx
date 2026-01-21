"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "line" | "diamond" | "dots";
  className?: string;
}

export default function SectionDivider({
  variant = "line",
  className = ""
}: SectionDividerProps) {
  if (variant === "diamond") {
    return (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
          <div className="w-2 h-2 rotate-45 bg-[var(--color-accent)]" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
        </motion.div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`flex items-center justify-center gap-3 py-8 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`relative flex justify-center py-12 ${className}`}>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[1px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent"
      />
    </div>
  );
}
