"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Laptop, ArrowUpRight, CheckCircle2, Github, Star } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";
import { projects } from "@/lib/data";

function FeaturedProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.div
      className="glow-border group rounded-3xl glass-card flex flex-col lg:flex-row gap-0 lg:gap-0 overflow-hidden transition-colors duration-500 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 80 }}
      whileHover={{ y: -6 }}
    >
      {/* Image side */}
      <div className="relative w-full lg:w-[45%] h-56 lg:h-auto min-h-70 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          loading="lazy"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-background/60 dark:to-background/80 hidden lg:block" />
        <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent lg:hidden" />

        {/* Featured badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-linear-to-r from-[#ff2a54] to-[#ff623e] text-white backdrop-blur-md shadow-[0_0_15px_rgba(255,42,84,0.4)]">
          <Star className="h-3 w-3 fill-current text-amber-300" />
          <span>Featured</span>
        </div>

        {/* Floating live chip on image */}
        <FloatingCodeChip
          className="absolute bottom-3 right-3 hidden sm:inline-flex"
          rotate={idx % 2 === 0 ? -2 : 2}
          delay={0.4 + idx * 0.2}
          variant="terminal"
        >
          <span className="text-emerald-400 font-semibold">● live</span> <span className="text-white font-bold">v2.4.0</span>
        </FloatingCodeChip>
      </div>

      {/* Content side */}
      <div className="flex-1 p-8 flex flex-col justify-between space-y-5 relative z-10">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-text-primary group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors p-1"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            {project.description}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold text-text-primary uppercase tracking-wider block">Key Features</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-secondary">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
            {project.techs.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-text-primary hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-5">
            <RainbowButton asChild size="sm" className="font-bold shadow-[0_0_20px_rgba(255,42,84,0.25)]">
              <Link target="_blank" href={project.demo}>Live Demo</Link>
            </RainbowButton>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-text-secondary hover:text-text-primary flex items-center gap-1.5 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RegularProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.div
      className="group glass-card p-7 rounded-3xl hover:border-primary/50 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,42,84,0.12)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 80 }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      <div className="space-y-5">
        <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-border/40 group-hover:border-primary/40 transition-colors">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
        </div>

        <div className="flex items-center justify-between">
          <h4 className="text-xl sm:text-2xl font-extrabold text-text-primary group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors p-1"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed font-normal">
          {project.description}
        </p>

        <div className="space-y-2">
          <span className="text-xs font-bold text-text-primary uppercase tracking-wider block">Key Features</span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-text-secondary">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-border/30">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-text-primary hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-5">
          <RainbowButton asChild size="sm" className="font-bold">
            <Link target="_blank" href={project.demo}>Live Demo</Link>
          </RainbowButton>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-text-secondary hover:text-text-primary flex items-center gap-1 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub Repo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.slice(0, 2);
  const regular = projects.slice(2);

  return (
    <section id="projects" className="w-full mt-10 max-w-6xl space-y-12 relative">
      <motion.div
        className="text-center space-y-3 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FloatingCodeChip
          className="hidden md:inline-flex absolute -top-4 right-0"
          rotate={-2}
          delay={0.3}
          variant="terminal"
        >
          <span className="text-emerald-400">GET</span>{" "}
          <span className="text-white font-bold">/api/projects</span>{" "}
          <span className="text-emerald-300 font-semibold">200_OK (12ms)</span>
        </FloatingCodeChip>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/25 bg-primary/10 shadow-[0_0_15px_rgba(255,42,84,0.15)]">
          <Laptop className="h-3.5 w-3.5" />
          <span>Projects</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          Featured <span className="bg-linear-to-r from-rose-600 via-orange-600 to-indigo-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#818cf8] bg-clip-text text-transparent">Work</span>
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base font-normal">
          Here are some of the projects I&apos;ve built while exploring full-stack web development. Each project helped me strengthen different areas from UI engineering to database architecture.
        </p>
      </motion.div>

      {/* Featured Projects — Full-width spotlight cards */}
      <div className="space-y-8">
        {featured.map((project, idx) => (
          <FeaturedProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>

      {/* Regular Projects — 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {regular.map((project, idx) => (
          <RegularProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <FloatingCodeChip rotate={1.5} delay={0.5} variant="glass">
          <span className="text-primary font-semibold">$</span>{" "}
          <span className="text-text-secondary">git push --force-with-lease origin main</span>{" "}
          <span className="text-emerald-400">🚀</span>
        </FloatingCodeChip>
      </div>
    </section>
  );
}
