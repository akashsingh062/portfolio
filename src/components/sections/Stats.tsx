"use client";

import { motion } from "motion/react";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat, idx) => (
        <motion.div 
          key={idx} 
          className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface/30 border border-border/60 backdrop-blur-md text-center transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <span className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
            {stat.value}
          </span>
          <span className="text-xs font-semibold text-text-secondary mt-2 uppercase tracking-wider">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </section>
  );
}
