"use client";

import { motion } from "motion/react";
import { Zap, CheckCircle2 } from "lucide-react";
import { whyMe } from "@/lib/data";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";

export default function WhyMe() {
  return (
    <section id="why-me" className="w-full max-w-6xl space-y-12 relative">
      <motion.div 
        className="text-center space-y-3 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FloatingCodeChip
          className="hidden md:inline-flex absolute -top-4 right-0"
          rotate={-2}
          delay={0.3}
          variant="bug"
        >
          <span className="text-red-400 font-semibold">if (hasBug)</span>{" "}
          <span className="text-text-secondary">fixImmediately();</span>
        </FloatingCodeChip>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent border border-accent/25 bg-accent/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <Zap className="h-3.5 w-3.5" />
          <span>What Sets Me Apart</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          Why <span className="bg-linear-to-r from-rose-600 via-orange-600 to-indigo-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#818cf8] bg-clip-text text-transparent">Me</span>?
        </h3>
        <p className="text-text-secondary max-w-lg mx-auto text-sm sm:text-base font-normal">
          I combine continuous learning discipline with intensive, hands-on application engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyMe.map((item, idx) => (
          <motion.div 
            key={idx}
            className="glass-card p-6 rounded-2xl hover:border-primary/50 flex items-start gap-4 transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_25px_rgba(255,42,84,0.1)]"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 100 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-2xl font-black text-primary/30 group-hover:text-primary transition-colors select-none leading-none mt-0.5 font-mono">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed">
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <FloatingCodeChip rotate={1.5} delay={0.6} variant="success">
          <span className="text-emerald-400 font-bold">return</span>{" "}
          <span className="text-text-primary">candidate.hireable === true;</span>
        </FloatingCodeChip>
      </div>
    </section>
  );
}

