import { 
  Code, 
  Cpu, 
  Wrench, 
  Database,
  GraduationCap,
  Laptop,
  BookOpen,
  Zap,
  Radio,
  ShieldCheck
} from "lucide-react";

export const stats = [
  { value: "30+", label: "GitHub Repositories", color: "from-[#ff2a54] via-[#ff623e] to-[#f59e0b]" },
  { value: "2+ Years", label: "Building Web Apps", color: "from-[#ff623e] via-[#f59e0b] to-[#10b981]" },
  { value: "Full Stack", label: "Frontend + Backend + Real-Time", color: "from-[#818cf8] via-[#6366f1] to-[#38bdf8]" }
];

export const quickInfos = [
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
    title: "Current Focus",
    desc: "Next.js 16, React 19, Socket.IO & Cloud Architecture",
    color: "text-accent border-accent/20 bg-accent/5"
  },
  {
    icon: Zap,
    title: "Interests",
    desc: "SaaS Products, Real-Time Apps, Open Source",
    color: "text-interest border-interest/20 bg-interest/5"
  }
];

export const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React.js", "Next.js 16", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS v4", "HTML5 & CSS3", "Framer Motion", "Zustand"]
  },
  {
    icon: Cpu,
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Next.js API Handlers", "RESTful APIs", "Server-Side Rendering (SSR)", "CRUD Architecture", "Middleware Guards"]
  },
  {
    icon: Radio,
    title: "Real-Time & Integrations",
    skills: ["Socket.IO (WebSockets)", "Stripe Payments", "Leaflet & Maps API", "Cloudinary", "Nodemailer (OTP)", "Webhook Handlers"]
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: ["MongoDB", "Mongoose ODM", "Geospatial Queries (2dsphere)", "Aggregation Pipelines", "Local & Session Storage"]
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    skills: ["Better Auth", "Clerk Auth", "Role-Based Access Control (RBAC)", "JWT & Session Cookies", "Protected Routes"]
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "Vercel", "Render", "Postman", "VS Code", "npm / Bun", "Chrome DevTools"]
  }
];

export const projects = [
  {
    title: "SnapCart — Grocery Delivery",
    description: "A production-grade, full-stack grocery delivery platform with dedicated Customer, Admin, and Delivery Partner portals, featuring real-time Socket.IO updates, live GPS tracking, in-app chat, and Stripe payments.",
    features: ["3-Tier Multi-Role Portals", "Real-Time Socket.IO Live Tracking", "In-App Customer & Rider Chat", "Stripe & COD Payment Gateways", "OTP-Verified Secure Delivery"],
    techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "MongoDB", "Socket.IO", "Stripe"],
    image: "/projects/snapcart.png",
    demo: "https://snapcart-d.vercel.app",
    github: "https://github.com/akashsingh062/snapcart"
  },
  {
    title: "Chai Charcha — Discussion Forum",
    description: "A modern, community-driven discussion platform featuring community guilds, nested discussions, karma reputation voting, real-time direct messaging, and robust role-based moderation.",
    features: ["Community Guilds & Feeds", "Nested Comments & Karma Voting", "Real-Time Direct Messaging", "Role-Based Access (Admin/Mod/Member)", "Audit Logs & Content Reporting"],
    techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    image: "/projects/chaicharcha.png",
    demo: "https://chai-charcha.vercel.app",
    github: "https://github.com/akashsingh062/Chai-Charcha"
  },
  {
    title: "Eventra — Event Manager",
    description: "A full-stack event management platform where users can create, browse, and manage events with a calendar sidebar, attendee tracking, and venue management.",
    features: ["Create & manage events", "Calendar integration", "Attendee tracking", "Venue management", "Responsive dashboard"],
    techs: ["JavaScript", "Node.js", "Express.js", "MongoDB", "CSS"],
    image: "/projects/eventra.png",
    demo: "https://eventra-your-event-manager.onrender.com",
    github: "https://github.com/akashsingh062/Eventra-your-event-manager"
  },
  {
    title: "Prescripto — Doctor Booking",
    description: "A doctor appointment booking platform that lets patients browse doctor profiles, check availability, and book appointments with a professional medical-grade UI.",
    features: ["Doctor profiles & listings", "Appointment scheduling", "Search & filter doctors", "Booking calendar", "Patient dashboard"],
    techs: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/prescripto.png",
    demo: "https://prescripto-my-doctor.onrender.com/",
    github: "https://github.com/akashsingh062/Prescripto-My-Doctor"
  },
  {
    title: "Linkify — Personal Link Tree",
    description: "A personal link tree application that aggregates all social profiles and important links into a single beautiful, shareable page with a glassmorphism design.",
    features: ["Custom profile page", "Social link aggregation", "Glassmorphism UI", "Mobile responsive", "One-click sharing"],
    techs: ["JavaScript", "Node.js", "Express.js", "CSS"],
    image: "/projects/linktree.png",
    demo: "https://linkify-ak.vercel.app/",
    github: "https://github.com/akashsingh062/link-tree"
  },
  {
    title: "Smart AI Todo",
    description: "An AI-enhanced task management app with intelligent suggestions, kanban board layout, progress tracking, and category-based organization.",
    features: ["AI-powered suggestions", "Kanban board", "Progress tracking", "Category organization", "TypeScript codebase"],
    techs: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    image: "/projects/smarttodo.png",
    demo: "https://smart-ai-todo.onrender.com",
    github: "https://github.com/akashsingh062/Smart-Ai-Todo"
  },
  {
    title: "BG Removal Website",
    description: "An image background removal tool with before/after comparison, transparent export, and customizable background options — powered by API integration.",
    features: ["Drag & drop upload", "Before/after preview", "Transparent export", "Custom backgrounds", "Instant processing"],
    techs: ["JavaScript", "React", "CSS", "API Integration"],
    image: "/projects/bgremoval.png",
    demo: "https://bg-removal-website.vercel.app/",
    github: "https://github.com/akashsingh062/BG-Removal-Website"
  },
  {
    title: "Sort-Link — URL Shortener",
    description: "A URL shortener utility with click analytics, recent links history, and copy-to-clipboard functionality for managing and sharing shortened links.",
    features: ["URL shortening", "Click analytics", "Link history", "Copy to clipboard", "Responsive design"],
    techs: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/sortlink.png",
    demo: "https://sort-link-five.vercel.app/",
    github: "https://github.com/akashsingh062/Sort-Link"
  }
];

export const journey = [
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
    desc: "Building with Next.js 16, React 19, TypeScript, Socket.IO, Better Auth, and Tailwind CSS. Shipped SnapCart, Chai Charcha, Eventra, Prescripto, BG-Removal, Sort-Link, and this portfolio. 30+ repositories on GitHub and counting."
  }
];

export const whyMe = [
  "30+ repositories on GitHub — I ship real projects, not just tutorials.",
  "I've built everything from AI apps to medical booking platforms to event managers.",
  "I work across the full stack — React, Next.js, Node.js, Express, MongoDB.",
  "I pick up new tech fast — TypeScript, Clerk, Framer Motion, Python, all learned by building.",
  "I've participated in hackathons (UIDAI) and built AI-powered tools (AtharvaAI).",
  "I care about clean code, premium UI, and shipping production-ready software."
];

export const funFacts = [
  "I've built 30+ projects on GitHub across JavaScript, TypeScript, Python, and Java.",
  "I participated in the UIDAI Hackathon and built an AI cultural knowledge comparison system.",
  "I love experimenting with bleeding-edge frameworks — Next.js 16, React 19, Motion v12.",
  "From Tic Tac Toe to AI-powered Todo apps — every project taught me something new."
];
