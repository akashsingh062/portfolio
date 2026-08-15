"use client";

import dynamic from "next/dynamic";
import { Meteors } from "@/components/ui/meteors";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";

// Lazy load below-the-fold sections (SSR enabled for SEO)
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Journey = dynamic(() => import("@/components/sections/Journey"));
const WhyMe = dynamic(() => import("@/components/sections/WhyMe"));
const FunFacts = dynamic(() => import("@/components/sections/FunFacts"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="grow flex flex-col items-center justify-start px-5 pt-4 pb-6 md:px-12 md:pt-6 md:pb-12 space-y-20 md:space-y-28 overflow-hidden animate-in fade-in duration-500 ease-out">
      <Meteors number={30} />
      <Hero />
      <Stats />
      <div className="section-divider" />
      <About />
      <Skills />
      <div className="section-divider " />
      <Projects />
      <div className="section-divider" />
      <Journey />
      <WhyMe />
      <FunFacts />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
