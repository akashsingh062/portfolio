"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-surface/10 backdrop-blur-md mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link
            href="/"
            className="text-lg font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Akash Singh
          </Link>
          <p className="text-xs text-text-secondary">
            Full Stack Developer &bull; CS Student
          </p>
        </div>

        
        <nav className="flex items-center gap-6 text-sm font-semibold text-text-secondary">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/akashsingh062"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 rounded-lg bg-surface/40 hover:bg-surface border border-border hover:border-primary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/akashsingh062"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 rounded-lg bg-surface/40 hover:bg-surface border border-border hover:border-secondary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:akashsingh062@gmail.com"
            className="h-9 w-9 rounded-lg bg-surface/40 hover:bg-surface border border-border hover:border-accent/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      
      <div className="border-t border-border/30 py-4 px-6">
        <p className="text-center text-xs text-text-secondary flex items-center justify-center gap-1">
          © {currentYear} Akash Singh. Built with
          <Heart className="h-3 w-3 text-primary inline-block" />
          using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
