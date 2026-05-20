"use client";

import { motion } from "motion/react";
import { BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { funFacts } from "@/lib/data";

export default function FunFacts() {
  return (
    <section id="fun-facts" className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Current Focus Card */}
      <motion.div 
        className="p-8 rounded-3xl bg-surface/20 border border-border/80 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ y: -4 }}
      >
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          <h4 className="text-xl font-bold text-text-primary">Current Focus</h4>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          I&apos;m currently focused on expanding my systems awareness and engineering higher performance web configurations:
        </p>
        <ul className="space-y-3 text-sm text-text-secondary">
          {["Next.js", "Advanced React Patterns", "TypeScript", "System Design"].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Fun Facts Card */}
      <motion.div 
        className="p-8 rounded-3xl bg-surface/20 border border-border/80 space-y-6"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ y: -4 }}
      >
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-secondary" />
          <h4 className="text-xl font-bold text-text-primary">Fun Facts</h4>
        </div>
        <ul className="space-y-3.5 text-sm text-text-secondary">
          {funFacts.map((fact, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
