"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { whyMe } from "@/lib/data";

export default function WhyMe() {
  return (
    <section id="why-me" className="w-full max-w-6xl space-y-12">
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Why Me?
        </h3>
        <p className="text-text-secondary max-w-lg mx-auto text-sm">
          I combine continuous learning discipline with intensive, hands-on application engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyMe.map((item, idx) => (
          <motion.div 
            key={idx}
            className="p-6 rounded-2xl bg-surface/30 border border-border/80 hover:border-primary/40 flex items-start gap-4 transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-text-secondary leading-relaxed">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
