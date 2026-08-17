/**
 * mcp-data.ts
 *
 * Serializable (icon-free) portfolio data used exclusively by the MCP route
 * handler. Pulls content from the existing data.ts constants and adds static
 * contact information found in Contact.tsx.
 *
 * Keep this file server-side only — it is imported by an App Router Route
 * Handler and must never be imported from a Client Component.
 */

// ---------------------------------------------------------------------------
// Profile & Summary
// ---------------------------------------------------------------------------

export const profileSummary = {
  name: "Akash Singh",
  title: "Full Stack Web Developer",
  education: "B.Tech Computer Science Student",
  location: "India",
  specialization: "Full Stack Web Development (Frontend + Backend + Real-Time)",
  currentFocus:
    "Next.js 16, React 19, Socket.IO & Cloud Architecture",
  interests:
    "SaaS Products, Real-Time Apps, Open Source",
  bio: "Computer Science student and self-driven full-stack developer with 1+ years of experience building production-grade web applications. I ship real projects — from AI-powered tools to medical booking platforms — using React, Next.js, Node.js, Express, and MongoDB. 30+ repositories on GitHub and counting.",
} as const;

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export const stats = [
  { value: "30+", label: "GitHub Repositories" },
  { value: "1+ Years", label: "Building Web Apps" },
  { value: "Full Stack", label: "Frontend + Backend + Real-Time" },
] as const;

// ---------------------------------------------------------------------------
// Skills by category
// ---------------------------------------------------------------------------

export const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js 16",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS v4",
      "HTML5 & CSS3",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js API Handlers",
      "RESTful APIs",
      "Server-Side Rendering (SSR)",
      "CRUD Architecture",
      "Middleware Guards",
    ],
  },
  {
    category: "Real-Time & Integrations",
    skills: [
      "Socket.IO (WebSockets)",
      "Stripe Payments",
      "Leaflet & Maps API",
      "Cloudinary",
      "Nodemailer (OTP)",
      "Webhook Handlers",
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "Geospatial Queries (2dsphere)",
      "Aggregation Pipelines",
      "Local & Session Storage",
    ],
  },
  {
    category: "Auth & Security",
    skills: [
      "Better Auth",
      "Clerk Auth",
      "Role-Based Access Control (RBAC)",
      "JWT & Session Cookies",
      "Protected Routes",
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Render",
      "Postman",
      "VS Code",
      "npm / Bun",
      "Chrome DevTools",
    ],
  },
] as const;

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects = [
  {
    title: "SnapCart — Grocery Delivery",
    description:
      "A production-grade, full-stack grocery delivery platform with dedicated Customer, Admin, and Delivery Partner portals, featuring real-time Socket.IO updates, live GPS tracking, in-app chat, and Stripe payments.",
    features: [
      "3-Tier Multi-Role Portals",
      "Real-Time Socket.IO Live Tracking",
      "In-App Customer & Rider Chat",
      "Stripe & COD Payment Gateways",
      "OTP-Verified Secure Delivery",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Socket.IO",
      "Stripe",
    ],
    liveDemo: "https://snapcart-d.vercel.app",
    github: "https://github.com/akashsingh062/snapcart",
  },
  {
    title: "Chai Charcha — Discussion Forum",
    description:
      "A modern, community-driven discussion platform featuring community guilds, nested discussions, karma reputation voting, real-time direct messaging, and robust role-based moderation.",
    features: [
      "Community Guilds & Feeds",
      "Nested Comments & Karma Voting",
      "Real-Time Direct Messaging",
      "Role-Based Access (Admin/Mod/Member)",
      "Audit Logs & Content Reporting",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
    ],
    liveDemo: "https://chai-charcha.vercel.app",
    github: "https://github.com/akashsingh062/Chai-Charcha",
  },
  {
    title: "Eventra — Event Manager",
    description:
      "A full-stack event management platform where users can create, browse, and manage events with a calendar sidebar, attendee tracking, and venue management.",
    features: [
      "Create & manage events",
      "Calendar integration",
      "Attendee tracking",
      "Venue management",
      "Responsive dashboard",
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "CSS"],
    liveDemo: "https://eventra-your-event-manager.onrender.com",
    github: "https://github.com/akashsingh062/Eventra-your-event-manager",
  },
  {
    title: "Prescripto — Doctor Booking",
    description:
      "A doctor appointment booking platform that lets patients browse doctor profiles, check availability, and book appointments with a professional medical-grade UI.",
    features: [
      "Doctor profiles & listings",
      "Appointment scheduling",
      "Search & filter doctors",
      "Booking calendar",
      "Patient dashboard",
    ],
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveDemo: "https://prescripto-my-doctor.onrender.com/",
    github: "https://github.com/akashsingh062/Prescripto-My-Doctor",
  },
  {
    title: "Linkify — Personal Link Tree",
    description:
      "A personal link tree application that aggregates all social profiles and important links into a single beautiful, shareable page with a glassmorphism design.",
    features: [
      "Custom profile page",
      "Social link aggregation",
      "Glassmorphism UI",
      "Mobile responsive",
      "One-click sharing",
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "CSS"],
    liveDemo: "https://linkify-ak.vercel.app/",
    github: "https://github.com/akashsingh062/link-tree",
  },
  {
    title: "Smart AI Todo",
    description:
      "An AI-enhanced task management app with intelligent suggestions, kanban board layout, progress tracking, and category-based organization.",
    features: [
      "AI-powered suggestions",
      "Kanban board",
      "Progress tracking",
      "Category organization",
      "TypeScript codebase",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    liveDemo: "https://smart-ai-todo.onrender.com",
    github: "https://github.com/akashsingh062/Smart-Ai-Todo",
  },
  {
    title: "BG Removal Website",
    description:
      "An image background removal tool with before/after comparison, transparent export, and customizable background options — powered by API integration.",
    features: [
      "Drag & drop upload",
      "Before/after preview",
      "Transparent export",
      "Custom backgrounds",
      "Instant processing",
    ],
    techStack: ["JavaScript", "React", "CSS", "API Integration"],
    liveDemo: "https://bg-removal-website.vercel.app/",
    github: "https://github.com/akashsingh062/BG-Removal-Website",
  },
  {
    title: "Sort-Link — URL Shortener",
    description:
      "A URL shortener utility with click analytics, recent links history, and copy-to-clipboard functionality for managing and sharing shortened links.",
    features: [
      "URL shortening",
      "Click analytics",
      "Link history",
      "Copy to clipboard",
      "Responsive design",
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://sort-link-five.vercel.app/",
    github: "https://github.com/akashsingh062/Sort-Link",
  },
] as const;

// ---------------------------------------------------------------------------
// Journey / Timeline
// ---------------------------------------------------------------------------

export const journey = [
  {
    year: "2024",
    milestone: "Foundation Phase",
    description:
      "Started the web development journey with HTML, CSS, and JavaScript. Built utility apps like Tic Tac Toe, Todo Lists, and a Book List App to master DOM manipulation and core logic.",
  },
  {
    year: "2025",
    milestone: "Backend & Full Stack Expansion",
    description:
      "Dove into Node.js, Express, and MongoDB. Built full-stack apps like Task Manager, FullStack TodoApp, SkillPath, and Currency Exchange Rate. Started learning React and TypeScript.",
  },
  {
    year: "2025 — Mid",
    milestone: "Advanced Projects & AI",
    description:
      "Built Smart AI Todo with TypeScript, participated in the UIDAI Hackathon, and created AtharvaAI — an AI-based cultural knowledge comparison system. Explored Python and Jupyter Notebooks.",
  },
  {
    year: "2026",
    milestone: "Production-Grade Engineering",
    description:
      "Building with Next.js 16, React 19, TypeScript, Socket.IO, Better Auth, and Tailwind CSS. Shipped SnapCart, Chai Charcha, Eventra, Prescripto, BG-Removal, Sort-Link, and this portfolio. 30+ repositories on GitHub and counting.",
  },
] as const;

// ---------------------------------------------------------------------------
// Why Me / Highlights
// ---------------------------------------------------------------------------

export const highlights = [
  "30+ repositories on GitHub — ships real projects, not just tutorials.",
  "Built everything from AI apps to medical booking platforms to event managers.",
  "Works across the full stack — React, Next.js, Node.js, Express, MongoDB.",
  "Picks up new tech fast — TypeScript, Clerk, Framer Motion, Python, all learned by building.",
  "Participated in hackathons (UIDAI) and built AI-powered tools (AtharvaAI).",
  "Cares about clean code, premium UI, and shipping production-ready software.",
] as const;

// ---------------------------------------------------------------------------
// Contact Information
// ---------------------------------------------------------------------------

export const contactInfo = {
  email: "akashsingh062.in@gmail.com",
  phone: "+91 7880952150",
  location: "India",
  github: "https://github.com/akashsingh062",
  linkedin: "https://linkedin.com/in/akashsingh062",
  portfolio: "https://akashsingh062.vercel.app",
} as const;
