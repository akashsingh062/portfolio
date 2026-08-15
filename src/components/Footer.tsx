"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/20 mt-20 relative overflow-hidden">
      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-primary/2 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8 relative">
        {/* Main content row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-black bg-linear-to-r from-rose-600 via-orange-600 to-indigo-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#818cf8] bg-clip-text text-transparent">
              Akash Singh
            </span>
            <p className="text-xs text-text-secondary">
              Full Stack Web Developer • Building real-world products
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-text-secondary">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#journey" className="hover:text-primary transition-colors">Journey</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <FloatingCodeChip className="hidden lg:inline-flex mr-1" rotate={-2} delay={0.3} variant="terminal">
              <span className="text-emerald-400">exit(0);</span> <span className="text-text-secondary">{"// EOF"}</span>
            </FloatingCodeChip>
            <a
              href="https://github.com/akashsingh062"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card hover:border-primary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all hover:shadow-[0_0_16px_rgba(255,42,84,0.25)] hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/akashsingh062"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card hover:border-secondary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all hover:shadow-[0_0_16px_rgba(129,140,248,0.25)] hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:akashsingh062.in@gmail.com"
              className="p-2.5 rounded-xl glass-card hover:border-accent/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all hover:shadow-[0_0_16px_rgba(245,158,11,0.25)] hover:scale-105"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-card hover:border-primary/50 text-text-secondary hover:text-text-primary transition-all cursor-pointer hover:shadow-[0_0_16px_rgba(255,42,84,0.25)] hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-text-secondary/50">
          <span>© {year} Akash Singh. All rights reserved.</span>
          <span>Built with ❤️ using Next.js 16, React 19 & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
