"use client";

import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="w-full max-w-5xl space-y-12">
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/20 bg-accent/5">
          <Calendar className="h-3 w-3" />
          <span>My Journey</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Learning Through Building
        </h3>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative border-l-2 border-border/60 ml-4 md:ml-12 pl-6 md:pl-12 space-y-10">
        {journey.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[55px] top-1 h-4 w-4 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
            
            <div className="space-y-2">
              <span className="text-lg font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                {item.year}
              </span>
              <h4 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
