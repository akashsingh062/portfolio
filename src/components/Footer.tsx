"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border/40 bg-surface/20 backdrop-blur-sm mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-base font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Akash Singh
          </span>
          <p className="text-xs text-text-secondary">
            Full Stack Web Developer • Crafted with Next.js 16, React 19 & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-text-secondary">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#journey" className="hover:text-primary transition-colors">Journey</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/akashsingh062"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-surface/40 hover:bg-surface border border-border/80 hover:border-primary/50 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/akashsingh062"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-surface/40 hover:bg-surface border border-border/80 hover:border-secondary/50 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:akashsingh062.in@gmail.com"
            className="p-2 rounded-lg bg-surface/40 hover:bg-surface border border-border/80 hover:border-accent/50 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-surface/40 hover:bg-surface border border-border/80 hover:border-primary/50 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
