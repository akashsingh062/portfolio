"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface FloatingCodeChipProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  rotate?: number;
  floatingRange?: number;
  variant?: "glass" | "terminal" | "bug" | "success" | "accent";
}

export function FloatingCodeChip({
  children,
  className = "",
  delay = 0,
  duration = 4,
  rotate = 0,
  floatingRange = 6,
  variant = "glass",
}: FloatingCodeChipProps) {
  const variantStyles = {
    glass: "glass-card border-border/80 dark:border-white/10 text-text-secondary hover:border-primary/50 shadow-sm",
    terminal: "bg-slate-900/90 text-emerald-400 border border-emerald-500/20 dark:bg-black/90 font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    bug: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 hover:border-rose-500/40 shadow-sm",
    success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-sm",
    accent: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 shadow-sm",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatingRange, 0],
        rotate: [rotate, rotate + 0.8, rotate],
      }}
      transition={{
        opacity: { duration: 0.5, delay: delay * 0.5 },
        scale: { duration: 0.5, delay: delay * 0.5 },
        y: {
          repeat: Infinity,
          duration: duration,
          ease: "easeInOut",
          delay: delay,
        },
        rotate: {
          repeat: Infinity,
          duration: duration * 1.3,
          ease: "easeInOut",
          delay: delay,
        },
      }}
      className={`rounded-xl px-3 py-1.5 text-[10px] md:text-xs font-mono select-none backdrop-blur-md transition-colors duration-300 cursor-default z-10 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
