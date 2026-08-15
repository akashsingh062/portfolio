"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PixelImage } from "@/components/ui/pixel-image";
import { Backlight } from "@/components/ui/backlight";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";
import { ArrowRight, Terminal, FileText, Github, ChevronDown } from "lucide-react";

const roles = [
  "Full Stack Web Developer",
  "React & Next.js Developer",
  "Real-Time App Engineer",
  "Building Scalable Web Apps",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mt-2 lg:mt-4"
    >
      {/* Ambient glow orbs */}
      <div className="ambient-orb w-80 h-80 bg-primary/25 -top-20 -left-20" />
      <div className="ambient-orb w-96 h-96 bg-secondary/20 -bottom-32 -right-20" />
      <div className="ambient-orb w-56 h-56 bg-accent/20 top-1/2 left-1/3" />

      {/* Left side: Avatar image */}
      <motion.div
        className="relative shrink-0 shadow-[0_0_60px_rgba(255,42,84,0.2)] dark:shadow-[0_0_80px_rgba(255,42,84,0.25)] rounded-[2.5rem] bg-linear-to-tr from-primary via-accent to-secondary p-1"
        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        whileHover={{ scale: 1.02, rotate: 1 }}
      >
        <Backlight className="rounded-[2.4rem] overflow-hidden" blur={45}>
          <PixelImage src="/akash.png" grid="8x8" imageClassName="object-cover" />
        </Backlight>

        {/* Floating bug snippet */}
        <FloatingCodeChip
          className="absolute -left-3 -top-3 md:-left-6 md:-top-4"
          rotate={-4}
          delay={0.4}
          variant="bug"
        >
          <span className="text-rose-400 font-semibold">{"// FIXME:"}</span>{" "}
          <span className="text-text-secondary">needs_more_chai()</span>
        </FloatingCodeChip>

        {/* Floating code snippet */}
        <FloatingCodeChip
          className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-6"
          rotate={2}
          delay={0.6}
        >
          <span className="text-primary font-semibold">const</span>{" "}
          <span className="text-secondary font-medium">dev</span>{" "}
          <span className="text-text-secondary">=</span>{" "}
          <span className="text-accent font-medium">&quot;Akash&quot;</span>
          <span className="text-primary ml-1">;</span>
        </FloatingCodeChip>
      </motion.div>

      {/* Right side: Introduction & details */}
      <div className="text-center lg:text-left space-y-6 max-w-2xl flex-1 lg:flex-none px-4 lg:px-0 relative z-10">
        <div className="flex items-center justify-center lg:justify-between flex-wrap gap-2">
          <motion.div
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-text-primary border border-primary/30 bg-primary/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,42,84,0.15)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>🚀 Full Stack Developer | CS Student</span>
          </motion.div>

          <FloatingCodeChip
            className="hidden sm:inline-flex"
            rotate={2}
            delay={0.9}
            variant="terminal"
          >
            <span className="text-emerald-400">status:</span>{" "}
            <span className="text-white font-bold">200_OK</span>
          </FloatingCodeChip>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight pb-2 select-none leading-[1.12] text-text-primary">
          Hi, I&apos;m{" "}
          <motion.span
            initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
            className="relative inline-block font-black bg-linear-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#ffa034] bg-clip-text text-transparent dark:drop-shadow-[0_2px_30px_rgba(255,42,84,0.35)]"
          >
            Akash Singh
          </motion.span>
        </h1>

        {/* Roles typing area */}
        <div className="h-10 flex items-center justify-center lg:justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl font-bold text-secondary flex items-center gap-2"
            >
              <Terminal className="h-5 w-5 text-primary" />
              <span>{roles[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I&apos;m a Computer Science student passionate about building modern,
          scalable, and user-friendly web applications. From frontend interfaces
          to backend APIs, I love transforming ideas into real full-stack
          products.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <RainbowButton asChild className="font-semibold">
            <a href="#projects" className="flex items-center gap-2 group">
              <span>View My Projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </RainbowButton>

          <RainbowButton asChild variant="outline" className="font-semibold">
            <a href="#contact" className="flex items-center gap-2">
              <span>Contact Me</span>
            </a>
          </RainbowButton>

          <a
            href="/Resume.pdf"
            download
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-text-secondary hover:text-text-primary glass-card hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </a>

          <a
            href="https://github.com/akashsingh062"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-text-secondary hover:text-text-primary glass-card hover:border-secondary/50 transition-all duration-300 flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-secondary/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
