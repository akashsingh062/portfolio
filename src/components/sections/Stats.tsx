"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { GitBranch, Clock, Layers } from "lucide-react";
import { stats } from "@/lib/data";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";

const icons = [GitBranch, Clock, Layers];

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const numericMatch = value.match(/^(\d+)/);
  const suffix = value.replace(/^\d+/, "");
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const isNumeric = Boolean(numericMatch);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, isNumeric]);

  if (!isNumeric) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full max-w-6xl">
      {/* Floating code chips */}
      <FloatingCodeChip
        className="hidden md:inline-flex absolute -top-5 right-6 z-20"
        rotate={-2}
        delay={0.3}
        variant="accent"
      >
        <span className="text-accent font-bold">git push</span>{" "}
        <span className="text-text-secondary">origin main</span>{" "}
        <span className="text-emerald-400 font-bold">✓</span>
      </FloatingCodeChip>

      <FloatingCodeChip
        className="hidden md:inline-flex absolute -bottom-5 left-6 z-20"
        rotate={2.5}
        delay={0.6}
        variant="terminal"
      >
        <span className="text-emerald-400">npm run build:</span>{" "}
        <span className="text-white">0 errors, 100% fast</span>
      </FloatingCodeChip>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = icons[idx] || GitBranch;
          return (
            <motion.div
              key={idx}
              className="glass-card flex flex-col items-center justify-center p-8 rounded-2xl text-center transition-colors duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + idx * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span
                className={`text-3xl md:text-4xl font-black bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                <AnimatedValue value={stat.value} inView={inView} />
              </span>
              <span className="text-xs font-semibold text-text-secondary mt-2 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
