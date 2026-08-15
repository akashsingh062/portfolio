"use client";

import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { journey } from "@/lib/data";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";

export default function Journey() {
  return (
    <section id="journey" className="w-full max-w-5xl space-y-12 relative">
      <motion.div 
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent border border-accent/25 bg-accent/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Calendar className="h-3.5 w-3.5" />
            <span>My Journey</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
            Learning Through <span className="bg-linear-to-r from-rose-600 via-orange-600 to-indigo-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#818cf8] bg-clip-text text-transparent">Building</span>
          </h3>
        </div>

        <FloatingCodeChip
          className="hidden sm:inline-flex shrink-0"
          rotate={2}
          delay={0.4}
          variant="terminal"
        >
          <span className="text-emerald-400">git</span>{" "}
          <span className="text-white font-bold">rebase -i 2024..2026</span>{" "}
          <span className="text-emerald-300">--autostash</span>
        </FloatingCodeChip>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative ml-4 md:ml-12 pl-6 md:pl-12 space-y-10">
        {/* Gradient timeline line — perfectly centered on x = 0 */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-linear-to-b from-[#ff2a54] via-[#818cf8] to-transparent rounded-full opacity-70" />
        
        {journey.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            {/* Timeline Dot — precisely centered on the timeline line */}
            <div className="absolute -left-6 md:-left-12 top-7 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-linear-to-r from-[#ff2a54] to-[#818cf8] border-2 border-background group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(255,42,84,0.6)] group-hover:shadow-[0_0_25px_rgba(255,42,84,0.9)] z-10" />
            
            <div className="glass-card rounded-2xl p-6 space-y-2.5 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(255,42,84,0.1)]">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
                {item.year}
              </span>
              <h4 className="text-xl font-extrabold text-text-primary group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl font-normal">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
