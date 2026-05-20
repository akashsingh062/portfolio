"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-6xl space-y-12">
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-secondary border border-secondary/20 bg-secondary/5">
          <Terminal className="h-3 w-3" />
          <span>Skills</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Technologies I Work With
        </h3>
        <p className="text-text-secondary max-w-lg mx-auto text-sm">
          From styling frontend states to structuring databases and writing backend controllers, here are my core strengths.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            className="group p-6 rounded-2xl bg-surface/30 border border-border/60 hover:border-secondary/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.08)] flex flex-col space-y-4 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-text-primary shadow-md">
                <category.icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-text-primary group-hover:text-secondary transition-colors">
                {category.title}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-background/90 border border-border/80 text-text-secondary hover:text-text-primary hover:border-secondary/30 hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
