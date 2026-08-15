"use client";

import { motion } from "motion/react";
import { BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";
import { funFacts } from "@/lib/data";

export default function FunFacts() {
  return (
    <section id="fun-facts" className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 relative">
      {/* Current Focus Card */}
      <motion.div 
        className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,42,84,0.12)]"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ y: -4 }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-accent to-secondary opacity-70" />

        <FloatingCodeChip
          className="absolute top-4 right-4 hidden sm:inline-flex"
          rotate={2}
          delay={0.3}
          variant="accent"
        >
          <span className="text-amber-400 font-semibold">async</span>{" "}
          <span className="text-text-primary">function levelUp()</span>
        </FloatingCodeChip>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h4 className="text-xl font-extrabold text-text-primary">Current Focus</h4>
        </div>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
          I&apos;m currently focused on expanding my systems awareness and engineering higher performance web configurations:
        </p>
        <ul className="space-y-3 text-sm text-text-secondary">
          {["Next.js 16 & React 19", "Advanced React Patterns", "TypeScript & System Design", "Real-Time Architecture"].map((item, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="font-medium text-text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Fun Facts Card */}
      <motion.div 
        className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(129,140,248,0.12)]"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ y: -4 }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-secondary via-primary to-accent opacity-70" />

        <FloatingCodeChip
          className="absolute top-4 right-4 hidden sm:inline-flex"
          rotate={-2}
          delay={0.5}
          variant="bug"
        >
          <span className="text-rose-400 font-semibold">{"// 404:"}</span>{" "}
          <span className="text-text-secondary">boredom not found</span>
        </FloatingCodeChip>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-secondary" />
          </div>
          <h4 className="text-xl font-extrabold text-text-primary">Fun Facts</h4>
        </div>
        <ul className="space-y-3.5 text-sm text-text-secondary">
          {funFacts.map((fact, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span className="font-normal leading-relaxed text-text-secondary group-hover:text-text-primary transition-colors">{fact}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
