<div align="center">

# ⚡ Akash Singh — Developer Portfolio
### A Next-Generation, Cyberpunk-Inspired Personal Portfolio & Project Showcase

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-akashsingh062.vercel.app-ff2a54?style=for-the-badge&logo=vercel&logoColor=white)](https://akashsingh062.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=FF2A54&center=true&vCenter=true&width=580&lines=Full+Stack+Web+Developer+Portfolio;Next.js+16+%2B+React+19+%2B+Tailwind+CSS+v4;Interactive+Glassmorphism+%26+Micro-animations;Explore+30%2B+Repositories+%26+Flagship+Projects)](https://git.io/typing-svg)

<p align="center">
  <a href="https://akashsingh062.vercel.app/"><strong>Explore the Live Portfolio »</strong></a>
  <br />
  <a href="#-key-features">Features</a> •
  <a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Architecture</a> •
  <a href="#-getting-started">Local Setup</a> •
  <a href="#-connect--socials">Connect</a>
</p>

</div>

---

## 📖 Overview

This repository houses the source code for **Akash Singh's personal developer portfolio** — an ultra-modern, high-performance web experience engineered with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

The portfolio is designed with a **Cyberpunk & Glassmorphism design system**, featuring ambient backlights, animated pixel avatars, floating developer code chips, interactive project showcases, categorized skill trees, an interactive development journey timeline, and a serverless contact integration.

🔗 **Production URL:** [https://akashsingh062.vercel.app](https://akashsingh062.vercel.app)

---

## ✨ Key Features & Highlights

### 🎨 Visual Design & UI/UX
- **Cyberpunk Glassmorphism:** Layered frosted glass panels (`glass-card`), subtle harmonic borders, and vibrant glowing ambient light orbs.
- **Micro-Animations & Transitions:** Fluid entrance animations, hover spring physics, and continuous glowing effects powered by `motion/react`.
- **Pixel Image & Backlight Effects:** Custom avatar canvas with interactive pixelation grid and ambient backlight diffusion.
- **Floating Code Chips:** Interactive contextual code snippets floating around key sections (`// FIXME: needs_more_chai()`, `$ npm i performance`, `await connect()`).
- **Dark & Light Mode:** System-aware, zero-flicker theme switching with persistent user preference via `next-themes`.

### 🧩 Sections & Content Architecture
- **Hero & Dynamic Typing:** Multi-role typing animation, status indicators, live CTAs, and one-click **Resume Download** (`/Resume.pdf`).
- **Stats Dashboard:** Visual metrics highlighting **30+ GitHub Repositories**, **2+ Years Web Dev**, and **Full-Stack Competencies**.
- **About & Quick Highlights:** Academic background at **Birla Institute of Technology, Mesra (2024–2028)**, specializations, and engineering philosophy.
- **Categorized Skills Matrix:** 6 distinct categorized domains (Frontend, Backend & APIs, Real-Time & Integrations, Database & Storage, Auth & Security, Tools & DevOps) with unique badge accents.
- **Featured Projects Showcase:** Full-width flagship project cards featuring **SnapCart**, **Chai Charcha**, **Eventra**, **Prescripto**, **Linkify**, and **Smart AI Todo** with direct Live Demo & GitHub repository links.
- **Interactive Journey Timeline:** Historical timeline tracing developer growth from 2024 fundamentals to 2026 production-grade full-stack architecture.
- **Why Choose Me & Dev Trivia:** Value proposition cards and engaging tech trivia.
- **Serverless Contact Form:** Fully functional asynchronous email delivery powered by **Web3Forms API** with real-time validation, loading spinners, and toast feedback.

---

## 🛠️ Tech Stack & Tools

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | Server-side rendering, routing & Turbopack bundler |
| **Library** | [React 19](https://react.dev/) | Core UI rendering engine with React Compiler support |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end static type safety |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first styling with CSS variables |
| **Motion** | [Motion](https://motion.dev/) (v12) | Hardware-accelerated spring animations & layout transitions |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent vector iconography |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) | Dark & light theme management |
| **Forms** | [Web3Forms API](https://web3forms.com/) | Serverless contact form handling |
| **Deployment** | [Vercel](https://vercel.com/) | Edge deployment with automatic CI/CD |

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── projects/          # Project thumbnail assets (snapcart, chaicharcha, etc.)
│   ├── akash.png          # High-resolution profile avatar
│   ├── Resume.pdf         # Downloadable official resume
│   └── favicon.ico        # Site favicon
├── src/
│   ├── app/
│   │   ├── globals.css    # Tailwind CSS v4 config, design tokens & glass styles
│   │   ├── layout.tsx     # Root layout with Geist font, SEO metadata & theme provider
│   │   └── page.tsx       # Main single-page application orchestrating all sections
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Hero section with avatar, roles, and resume CTA
│   │   │   ├── Stats.tsx      # Metrics counters & glowing highlight cards
│   │   │   ├── About.tsx      # Personal story & quick info cards
│   │   │   ├── Skills.tsx     # 6-category technical arsenal grid
│   │   │   ├── Projects.tsx   # Flagship featured projects showcase
│   │   │   ├── Journey.tsx    # Interactive milestone timeline (2024–2026)
│   │   │   ├── WhyMe.tsx      # Core strengths and engineering value points
│   │   │   ├── FunFacts.tsx   # Trivia and hackathon achievements
│   │   │   └── Contact.tsx    # Web3Forms contact form & direct contact links
│   │   ├── ui/
│   │   │   ├── backlight.tsx          # Glow backlight blur component
│   │   │   ├── floating-code-chip.tsx # Floating badge chip with rotation
│   │   │   ├── pixel-image.tsx        # Dynamic canvas pixelation effect
│   │   │   └── rainbow-button.tsx     # Animated gradient border button
│   │   ├── Navbar.tsx         # Responsive glassmorphic dock navbar with theme toggle
│   │   ├── Footer.tsx         # Footer with social links & copyright
│   │   └── theme-provider.tsx # Client-side theme provider wrapper
│   └── lib/
│       ├── data.ts        # Centralized data store (projects, skills, journey, stats)
│       └── utils.ts       # Class merging helper (clsx + tailwind-merge)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

Follow these instructions to run the portfolio locally on your machine:

### 1. Prerequisites
- **Node.js**: `v18.18.0` or higher
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### 2. Clone the Repository
```bash
git clone https://github.com/akashsingh062/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
# or
bun install
```

### 4. Configure Environment Variables
Create a `.env.local` file in the project root:

```env
# Optional: Get your free access key at https://web3forms.com/
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key-here
```

> **Note:** The contact form will submit successfully once you provide your Web3Forms access key.

### 5. Run the Local Development Server
```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the portfolio.

---

## 🛠️ Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to inspect code quality and conventions |

---

## 🌐 Connect & Socials

- 🌐 **Live Website:** [https://akashsingh062.vercel.app](https://akashsingh062.vercel.app)
- 💼 **LinkedIn:** [linkedin.com/in/akashsingh062](https://www.linkedin.com/in/akashsingh062/)
- 🐙 **GitHub:** [github.com/akashsingh062](https://github.com/akashsingh062)
- 📧 **Email:** [akashsingh062.in@gmail.com](mailto:akashsingh062.in@gmail.com)
- 📞 **Phone:** [+91 7880952150](tel:+917880952150)

---

## 🛡️ License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

<div align="center">
  <br />
  <sub>Crafted with passion by <b>Akash Singh</b> • © 2026</sub>
</div>
