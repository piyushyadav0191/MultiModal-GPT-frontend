"use client"

import { motion } from "framer-motion";

const dotVariants = {
  initial: { y: 0 },
  animate: { y: -10 },
};

const dotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut",
};

const containerClasses = {
  small: "h-4 gap-1",
  medium: "h-8 gap-2",
  large: "h-16 gap-3",
};

const dotClasses = {
  small: "w-1 h-1",
  medium: "w-2 h-2",
  large: "w-4 h-4",
};

const colorClasses = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

export const LoaderDots = () => (
  <div className={`flex items-end justify-center ${containerClasses["large"]}`}>
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{
          ...dotTransition,
          delay: index * 0.15,
        }}
        className={`rounded-full ${dotClasses["medium"]} ${colorClasses["primary"]}`}
      />
    ))}
  </div>
);
