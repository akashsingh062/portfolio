"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { quickInfos } from "@/lib/data";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";

export default function About() {
  return (
    <section id="about" className="w-full max-w-6xl space-y-12 relative">
      <motion.div 
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/25 bg-primary/10 shadow-[0_0_15px_rgba(255,42,84,0.1)]">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>About Me</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-rose-600 via-orange-600 to-indigo-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#818cf8] bg-clip-text text-transparent pb-1">
            Passionate About Building Web Experiences That Matter
          </h3>
        </div>

        <FloatingCodeChip
          className="hidden md:inline-flex shrink-0 self-start md:self-auto"
          rotate={-2}
          delay={0.3}
          variant="terminal"
        >
          <span className="text-emerald-400">type</span>{" "}
          <span className="text-cyan-300">Developer</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-amber-300">&#123; mode: &apos;fullstack&apos;, chai: true &#125;</span>
        </FloatingCodeChip>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Story */}
        <motion.div 
          className="lg:col-span-7 space-y-6 text-text-secondary text-base leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            Hello! I&apos;m <strong className="text-text-primary">Akash</strong>, a Computer Science student and full-stack web developer who loves turning ideas into interactive, responsive, and production-ready digital products.
          </p>
          <p>
            I specialize in building full-stack applications using{" "}
            <strong className="text-text-primary">Next.js 16, React 19, TypeScript, and Tailwind CSS</strong>{" "}
            on the frontend, powered by{" "}
            <strong className="text-text-primary">Node.js, Express, and MongoDB</strong>{" "}
            on the backend — with real-time WebSockets (Socket.IO), Stripe payments, and secure authentication baked in.
          </p>
          <p>
            Beyond shipping products, I actively solve Data Structures and Algorithms in{" "}
            <strong className="text-text-primary">Java</strong>{" "}
            and believe the most effective way to grow is by building real, production-grade software — so I&apos;m constantly learning, experimenting, and shipping.
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <FloatingCodeChip rotate={1.5} delay={0.5} variant="glass">
              <span className="text-primary font-bold">while</span>{" "}
              <span className="text-text-secondary">(alive) &#123;</span>{" "}
              <span className="text-secondary">code();</span>{" "}
              <span className="text-accent">ship();</span>{" "}
              <span className="text-text-secondary">&#125;</span>
            </FloatingCodeChip>

            <FloatingCodeChip rotate={-2} delay={0.7} variant="bug">
              <span className="text-red-400 font-semibold">{"// 0 warnings,"}</span>{" "}
              <span className="text-text-secondary">30+ repos shipped</span>
            </FloatingCodeChip>
          </div>
        </motion.div>

        {/* Right Side: Quick Stats / Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickInfos.map((card, idx) => (
            <motion.div 
              key={idx}
              className="group glass-card p-5 rounded-2xl hover:border-primary/40 transition-all duration-300 flex flex-col space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center border ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">
                {card.title}
              </h4>
              <p className="text-xs text-text-secondary leading-normal">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
