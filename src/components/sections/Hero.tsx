"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PixelImage } from "@/components/ui/pixel-image";
import { Backlight } from "@/components/ui/backlight";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, Sparkles, Terminal, FileText, Github } from "lucide-react";

const roles = [
  "Full Stack Web Developer",
  "React & Next.js Developer",
  "Java + DSA Enthusiast",
  "Building Scalable Web Applications",
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
      className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 mt-8 lg:mt-16"
    >
      {/* Left side: Avatar image */}
      <motion.div
        className="shrink-0 shadow-[0_0_40px_rgba(124,58,237,0.2)] rounded-[2.5rem] bg-gradient-to-tr from-primary to-secondary p-1"
        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      >
        <Backlight className="rounded-[2.4rem] overflow-hidden" blur={45}>
          <PixelImage src="/akash.jpeg" grid="8x8" />
        </Backlight>
      </motion.div>

      {/* Right side: Introduction & details */}
      <div className="text-center lg:text-left space-y-6 max-w-2xl flex-1 lg:flex-none px-4 lg:px-0">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/20 bg-accent/5 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
          <span>🚀 Full Stack Developer | Computer Science Student</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight pb-2 select-none leading-[1.15] text-text-primary">
          Hi, I&apos;m{" "}
          <motion.span
            initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
            className="relative inline-block font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(193,18,31,0.25)]"
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
          className="text-lg text-text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I’m a Computer Science student passionate about building modern,
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
            href="/resume.pdf"
            download
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-text-secondary hover:text-text-primary bg-surface/40 hover:bg-surface border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </a>

          <a
            href="https://github.com/akashsingh062"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-text-secondary hover:text-text-primary bg-surface/40 hover:bg-surface border border-border hover:border-secondary/50 transition-all duration-300 flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
