"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Direct tracking - no spring delay
  const cursorXSpring = cursorX;
  const cursorYSpring = cursorY;

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile, moveCursor]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a, button, [data-cursor]");

      if (link) {
        setIsHovering(true);
        const text = link.getAttribute("data-cursor") || "";
        setCursorText(text);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");
    };

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1,
            backgroundColor: isHovering
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 1)",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          {cursorText && isHovering && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[8px] font-medium text-black whitespace-nowrap"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
