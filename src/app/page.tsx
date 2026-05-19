"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { PixelImage } from "@/components/ui/pixel-image";
import { ComicText } from "@/components/ui/comic-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { Meteors } from "@/components/ui/meteors";
import { Backlight } from "@/components/ui/backlight";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { 
  ArrowRight, 
  Sparkles, 
  Code, 
  Cpu, 
  ArrowUpRight, 
  Terminal, 
  Laptop,
  GraduationCap,
  BookOpen,
  Zap,
  Database,
  Binary,
  Wrench,
  Mail,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  Calendar,
  FileText,
  MessageSquare
} from "lucide-react";

// Roles list for typewriter / rotator
const roles = [
  "Full Stack Web Developer",
  "React & Next.js Developer",
  "Java + DSA Enthusiast",
  "Building Scalable Web Applications"
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "30+", label: "GitHub Repositories", color: "from-primary to-purple-500" },
    { value: "2+ Years", label: "Building Web Apps", color: "from-cyan-500 to-secondary" },
    { value: "Full Stack", label: "Frontend + Backend + AI", color: "from-accent to-secondary" }
  ];

  const quickInfos = [
    {
      icon: GraduationCap,
      title: "Education",
      desc: "B.Tech Computer Science Student",
      color: "text-primary border-primary/20 bg-primary/5"
    },
    {
      icon: Laptop,
      title: "Specialization",
      desc: "Full Stack Web Development",
      color: "text-secondary border-secondary/20 bg-secondary/5"
    },
    {
      icon: BookOpen,
      title: "Current Learning",
      desc: "Next.js, TypeScript, AI Integration",
      color: "text-accent border-accent/20 bg-accent/5"
    },
    {
      icon: Zap,
      title: "Interests",
      desc: "SaaS Products, AI Apps, Open Source",
      color: "text-yellow-500 border-yellow-500/20 bg-yellow-500/5"
    }
  ];

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "EJS Templates"]
    },
    {
      icon: Cpu,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication (Clerk)", "CRUD Operations", "Server-side Rendering"]
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["MongoDB", "Mongoose", "Local Storage", "File Handling"]
    },
    {
      icon: Binary,
      title: "Programming & DSA",
      skills: ["Java", "Python", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "npm", "Bun", "Chrome DevTools", "Jupyter Notebook"]
    }
  ];

  const projects = [
    {
      title: "Eventra — Event Manager",
      description: "A full-stack event management platform where users can create, browse, and manage events with a calendar sidebar, attendee tracking, and venue management.",
      features: ["Create & manage events", "Calendar integration", "Attendee tracking", "Venue management", "Responsive dashboard"],
      techs: ["JavaScript", "Node.js", "Express.js", "MongoDB", "CSS"],
      image: "/projects/eventra.png",
      demo: "/projects",
      github: "https://github.com/akashsingh062/Eventra-your-event-manager"
    },
    {
      title: "Prescripto — Doctor Booking",
      description: "A doctor appointment booking platform that lets patients browse doctor profiles, check availability, and book appointments with a professional medical-grade UI.",
      features: ["Doctor profiles & listings", "Appointment scheduling", "Search & filter doctors", "Booking calendar", "Patient dashboard"],
      techs: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
      image: "/projects/prescripto.png",
      demo: "/projects",
      github: "https://github.com/akashsingh062/Prescripto-My-Doctor"
    },
    {
      title: "Link-Tree — Bio Links",
      description: "A personal link tree application that aggregates all social profiles and important links into a single beautiful, shareable page with a glassmorphism design.",
      features: ["Custom profile page", "Social link aggregation", "Glassmorphism UI", "Mobile responsive", "One-click sharing"],
      techs: ["JavaScript", "Node.js", "Express.js", "CSS"],
      image: "/projects/linktree.png",
      demo: "/projects",
      github: "https://github.com/akashsingh062/link-tree"
    },
    {
      title: "Smart AI Todo",
      description: "An AI-enhanced task management app with intelligent suggestions, kanban board layout, progress tracking, and category-based organization.",
      features: ["AI-powered suggestions", "Kanban board", "Progress tracking", "Category organization", "TypeScript codebase"],
      techs: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      image: "/projects/smarttodo.png",
      demo: "/projects",
      github: "https://github.com/akashsingh062/Smart-Ai-Todo"
    },
    {
      title: "BG Removal Website",
      description: "An image background removal tool with before/after comparison, transparent export, and customizable background options — powered by API integration.",
      features: ["Drag & drop upload", "Before/after preview", "Transparent export", "Custom backgrounds", "Instant processing"],
      techs: ["JavaScript", "React", "CSS", "API Integration"],
      image: "/projects/bgremoval.png",
      demo: "/projects",
      github: "https://github.com/akashsingh062/BG-Removal-Website"
    },
    {
      title: "Sort-Link — URL Shortener",
      description: "A URL shortener utility with click analytics, recent links history, and copy-to-clipboard functionality for managing and sharing shortened links.",
      features: ["URL shortening", "Click analytics", "Link history", "Copy to clipboard", "Responsive design"],
      techs: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
      image: "/projects/sortlink.png",
      demo: "/projects",
      github: "https://github.com/akashsingh062/Sort-Link"
    }
  ];

  const journey = [
    {
      year: "2024",
      title: "Foundation Phase",
      desc: "Started my web development journey with HTML, CSS, and JavaScript. Built utility apps like Tic Tac Toe, Todo Lists, and a Book List App to master DOM manipulation and core logic."
    },
    {
      year: "2025",
      title: "Backend & Full Stack Expansion",
      desc: "Dove into Node.js, Express, and MongoDB. Built full-stack apps like Task Manager, FullStack TodoApp, SkillPath, and Currency Exchange Rate. Started learning React and TypeScript."
    },
    {
      year: "2025 — Mid",
      title: "Advanced Projects & AI",
      desc: "Built Smart AI Todo with TypeScript, participated in the UIDAI Hackathon, and created AtharvaAI — an AI-based cultural knowledge comparison system. Explored Python and Jupyter Notebooks."
    },
    {
      year: "2026",
      title: "Production-Grade Engineering",
      desc: "Building with Next.js, TypeScript, Clerk Auth, and Tailwind CSS. Shipped ByteBlogs, Prescripto, Eventra, BG-Removal, Sort-Link, and this portfolio. 30+ repositories on GitHub and counting."
    }
  ];

  const whyMe = [
    "30+ repositories on GitHub — I ship real projects, not just tutorials.",
    "I've built everything from AI apps to medical booking platforms to event managers.",
    "I work across the full stack — React, Next.js, Node.js, Express, MongoDB.",
    "I pick up new tech fast — TypeScript, Clerk, Framer Motion, Python, all learned by building.",
    "I've participated in hackathons (UIDAI) and built AI-powered tools (AtharvaAI).",
    "I care about clean code, premium UI, and shipping production-ready software."
  ];

  const funFacts = [
    "I've built 30+ projects on GitHub across JavaScript, TypeScript, Python, and Java.",
    "I participated in the UIDAI Hackathon and built an AI cultural knowledge comparison system.",
    "I love experimenting with bleeding-edge frameworks — Next.js 16, React 19, Motion v12.",
    "From Tic Tac Toe to AI-powered Todo apps — every project taught me something new."
  ];

  return (
    <main className="flex-grow flex flex-col items-center justify-start p-6 md:p-24 space-y-24 md:space-y-36 overflow-hidden">
      {/* Meteor Background Overlay */}
      <Meteors number={30} />

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 mt-8 md:mt-16">
        {/* Photo Section with Backlight - Spring entry with rotation */}
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
        
        {/* Name & Intro Section */}
        <div className="text-center md:text-left space-y-6 flex-grow max-w-2xl">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/20 bg-accent/5 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>🚀 Full Stack Developer | Computer Science Student</span>
          </motion.div>

          <div className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
            <ComicText>
              <TextAnimate
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.8 },
                  show: (i) => ({
                    opacity: 1, y: 0, scale: 1,
                    transition: {
                      delay: i * 0.12, duration: 0.5,
                      y: { type: "spring", damping: 12, stiffness: 200, mass: 0.8 },
                      scale: { type: "spring", damping: 10, stiffness: 300 },
                    },
                  }),
                }}
                by="word"
              >
                Hi, I&apos;m Akash Singh
              </TextAnimate>
            </ComicText>
          </div>

          {/* Rotating Role Text */}
          <div className="h-10 flex items-center justify-center md:justify-start">
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
            I’m a Computer Science student passionate about building modern, scalable, and user-friendly web applications. From frontend interfaces to backend APIs, I love transforming ideas into real full-stack products.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
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

      {/* Hero Stats - Pop up spring staggered */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface/30 border border-border/60 backdrop-blur-md text-center transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <span className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </span>
            <span className="text-xs font-semibold text-text-secondary mt-2 uppercase tracking-wider">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="w-full max-w-6xl space-y-12">
        <motion.div 
          className="text-center md:text-left space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/5">
            <Sparkles className="h-3 w-3" />
            <span>About Me</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-1">
            Passionate About Building Web Experiences That Matter
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* About narrative - Fade in slide */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-text-secondary text-base leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              Hello! I’m <strong className="text-text-primary">Akash</strong>, a Computer Science student and aspiring full-stack web developer who loves turning concepts into highly interactive, responsive, and functional digital products.
            </p>
            <p>
              My journey into web development started with simple HTML, CSS, and JavaScript, building utility calculators and responsive landing layouts. As my curiosity expanded, I ventured into backend development using <strong className="text-text-primary">Node.js and Express</strong> to construct secure APIs, manage files, and engineer complete CRUD databases.
            </p>
            <p>
              Beyond development, I actively solve Data Structures and Algorithms in <strong className="text-text-primary">Java</strong> to strengthen my problem-solving systems and cement my understanding of core software engineering fundamentals.
            </p>
            <p>
              I believe the most effective way to grow is by creating real, production-ready applications. That&apos;s why I&apos;m constantly learning, experimenting, and shipping new code.
            </p>
          </motion.div>

          {/* Quick Info Grid - Pop up stagger */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickInfos.map((card, idx) => (
              <motion.div 
                key={idx}
                className="group p-5 rounded-2xl bg-surface/40 border border-border/80 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 flex flex-col space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
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

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="w-full max-w-6xl space-y-12">
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-secondary border border-secondary/20 bg-secondary/5">
            <Terminal className="h-3 w-3" />
            <span>Skills</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <p className="text-text-secondary max-w-lg mx-auto text-sm">
            From styling frontend states to structuring databases and writing backend controllers, here are my core strengths.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="group p-6 rounded-2xl bg-surface/30 border border-border/60 hover:border-secondary/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.08)] flex flex-col space-y-4 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-text-primary shadow-md">
                  <category.icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-text-primary group-hover:text-secondary transition-colors">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-background/90 border border-border/80 text-text-secondary hover:text-text-primary hover:border-secondary/30 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="w-full max-w-6xl space-y-12">
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="space-y-5">
                {/* Project Image */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-border/40 group-hover:border-primary/30 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
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

                {/* Features Checklist */}
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

                {/* Links */}
                <div className="flex items-center gap-4 mt-6">
                  <RainbowButton asChild size="sm" className="font-semibold">
                    <Link href={project.demo}>Live Demo</Link>
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

      {/* ================= JOURNEY / EXPERIENCE SECTION ================= */}
      <section id="journey" className="w-full max-w-5xl space-y-12">
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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

        {/* Timeline Component */}
        <div className="relative border-l-2 border-border/60 ml-4 md:ml-12 pl-6 md:pl-12 space-y-10">
          {journey.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Pulsing indicator node */}
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

      {/* ================= WHY WORK WITH ME ================= */}
      <section id="why-me" className="w-full max-w-6xl space-y-12">
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Me?
          </h3>
          <p className="text-text-secondary max-w-lg mx-auto text-sm">
            I combine continuous learning discipline with intensive, hands-on application engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMe.map((item, idx) => (
            <motion.div 
              key={idx}
              className="p-6 rounded-2xl bg-surface/30 border border-border/80 hover:border-primary/40 flex items-start gap-4 transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-text-secondary leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FUN / ADDITIONAL FACTS ================= */}
      <section id="fun-facts" className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Current Focus */}
        <motion.div 
          className="p-8 rounded-3xl bg-surface/20 border border-border/80 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ y: -4 }}
        >
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h4 className="text-xl font-bold text-text-primary">Current Focus</h4>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            I&apos;m currently focused on expanding my systems awareness and engineering higher performance web configurations:
          </p>
          <ul className="space-y-3 text-sm text-text-secondary">
            {["Next.js", "Advanced React Patterns", "TypeScript", "System Design"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Fun Facts */}
        <motion.div 
          className="p-8 rounded-3xl bg-surface/20 border border-border/80 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ y: -4 }}
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-secondary" />
            <h4 className="text-xl font-bold text-text-primary">Fun Facts</h4>
          </div>
          <ul className="space-y-3.5 text-sm text-text-secondary">
            {funFacts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="w-full max-w-6xl space-y-12">
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/5">
            <Mail className="h-3 w-3" />
            <span>Contact</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let’s Build Something Together
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto text-sm">
            I’m always open to discussing new full-stack projects, collaboration opportunities, developer internships, or simply talking code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <motion.div 
            className="lg:col-span-5 space-y-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-text-primary">Get In Touch</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Whether you have an interesting product idea, an engineering role, or just want to swap ideas—drop me a note!
              </p>
            </div>

            <div className="space-y-5">
              {/* Detail Items */}
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-xl bg-surface/30 border border-border/60 hover:border-primary/40 transition-colors"
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-text-secondary block">Email</span>
                  <a href="mailto:akashsingh062@gmail.com" className="text-sm font-bold text-text-primary hover:text-primary transition-colors">akashsingh062@gmail.com</a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-4 rounded-xl bg-surface/30 border border-border/60 hover:border-secondary/40 transition-colors"
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-text-secondary block">Location</span>
                  <span className="text-sm font-bold text-text-primary">India</span>
                </div>
              </motion.div>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-6 border-t border-border/60">
              <a 
                href="https://github.com/akashsingh062" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-xl bg-surface/40 hover:bg-surface border border-border hover:border-primary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/akashsingh062" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-xl bg-surface/40 hover:bg-surface border border-border hover:border-secondary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7 p-8 rounded-3xl bg-surface/30 border border-border/80 backdrop-blur-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-text-primary uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors" 
                    placeholder="Akash Singh"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-text-primary uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors" 
                    placeholder="yourname@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-text-primary uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors" 
                  placeholder="Collaboration details"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-text-primary uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" 
                  placeholder="Hello Akash, let's discuss..."
                />
              </div>

              <div className="pt-2">
                <RainbowButton type="submit" size="lg" className="w-full font-bold">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Send Message</span>
                  </span>
                </RainbowButton>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
