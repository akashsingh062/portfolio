"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Laptop, ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl space-y-12">
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/5">
          <Laptop className="h-3 w-3" />
          <span>Projects</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Work
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto text-sm">
          Here are some of the projects I’ve built while exploring full-stack web development. Each project helped me strengthen different areas from UI engineering to database architecture.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className="group p-8 rounded-3xl bg-surface/20 border border-border/80 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] flex flex-col justify-between transition-colors duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 80 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="space-y-5">
              
              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-border/40 group-hover:border-primary/30 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 4}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-bold text-text-primary uppercase tracking-wider block">Key Features</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-text-secondary">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-border/50">
                {project.techs.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-background/80 border border-border text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <RainbowButton asChild size="sm" className="font-semibold">
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
        ))}
      </div>
    </section>
  );
}
