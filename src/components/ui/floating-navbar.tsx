"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // eslint-disable-next-line prefer-const
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.001) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 sm:px-10 py-4  items-center justify-center space-x-4",
          className
        )}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 hover:text-gray-400"
            )}
          >
            <span className="text-xs sm:text-sm">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
