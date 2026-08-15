"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";

const categoryColors: Record<string, { pill: string; iconBg: string; border: string }> = {
  "Frontend Development": {
    pill: "bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/25 hover:bg-rose-500/15 shadow-[0_0_10px_rgba(244,63,94,0.08)]",
    iconBg: "from-rose-500/20 to-rose-600/10 text-rose-500",
    border: "hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]",
  },
  "Backend & APIs": {
    pill: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/25 hover:bg-indigo-500/15 shadow-[0_0_10px_rgba(99,102,241,0.08)]",
    iconBg: "from-indigo-500/20 to-indigo-600/10 text-indigo-500",
    border: "hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]",
  },
  "Real-Time & Integrations": {
    pill: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/25 hover:bg-purple-500/15 shadow-[0_0_10px_rgba(168,85,247,0.08)]",
    iconBg: "from-purple-500/20 to-purple-600/10 text-purple-500",
    border: "hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
  },
  "Database & Storage": {
    pill: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/25 hover:bg-amber-500/15 shadow-[0_0_10px_rgba(245,158,11,0.08)]",
    iconBg: "from-amber-500/20 to-amber-600/10 text-amber-500",
    border: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
  },
  "Auth & Security": {
    pill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/25 hover:bg-emerald-500/15 shadow-[0_0_10px_rgba(16,185,129,0.08)]",
    iconBg: "from-emerald-500/20 to-emerald-600/10 text-emerald-500",
    border: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
  },
  "Tools & DevOps": {
    pill: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/25 hover:bg-cyan-500/15 shadow-[0_0_10px_rgba(6,182,212,0.08)]",
    iconBg: "from-cyan-500/20 to-cyan-600/10 text-cyan-500",
    border: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-6xl space-y-12 relative">
      <motion.div
        className="text-center space-y-3 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Floating header badges */}
        <FloatingCodeChip
          className="hidden lg:inline-flex absolute -top-4 left-0"
          rotate={-3}
          delay={0.3}
          variant="accent"
        >
          <span className="text-accent font-semibold">import</span>{" "}
          <span className="text-text-primary">&#123; Next16, SocketIO &#125;</span>{" "}
          <span className="text-accent">from</span>{" "}
          <span className="text-text-secondary">&apos;@akash/core&apos;;</span>
        </FloatingCodeChip>

        <FloatingCodeChip
          className="hidden lg:inline-flex absolute -top-4 right-0"
          rotate={2.5}
          delay={0.5}
          variant="terminal"
        >
          <span className="text-emerald-400">$</span>{" "}
          <span className="text-white font-bold">npm i</span>{" "}
          <span className="text-emerald-300">--save-dev performance</span>
        </FloatingCodeChip>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-secondary border border-secondary/25 bg-secondary/10 shadow-[0_0_15px_rgba(129,140,248,0.15)]">
          <Terminal className="h-3.5 w-3.5" />
          <span>Skills</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          Technologies I <span className="bg-linear-to-r from-rose-600 via-orange-600 to-indigo-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#818cf8] bg-clip-text text-transparent">Work With</span>
        </h3>
        <p className="text-text-secondary max-w-lg mx-auto text-sm sm:text-base">
          From styling frontend states to structuring databases and writing backend controllers, here are my core strengths.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => {
          const colors = categoryColors[category.title] || categoryColors["Tools & DevOps"];
          return (
            <motion.div
              key={idx}
              className={`group glass-card p-6 rounded-2xl flex flex-col space-y-4 transition-all duration-300 ${colors.border}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-xl bg-linear-to-br ${colors.iconBg} flex items-center justify-center text-text-primary shadow-sm`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${colors.pill} hover:scale-105 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
