"use client";

import { Meteors } from "@/components/ui/meteors";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import WhyMe from "@/components/sections/WhyMe";
import FunFacts from "@/components/sections/FunFacts";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-start p-6 md:p-24 space-y-24 md:space-y-36 overflow-hidden">
      <Meteors number={30} />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <WhyMe />
      <FunFacts />
      <Contact />
    </main>
  );
}
