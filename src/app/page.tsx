"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Meteors } from "@/components/ui/meteors";
import Hero from "@/components/sections/Hero";
import { LoaderOverlay } from "@/components/ui/loader-overlay";

// Lazy load below-the-fold sections
const Stats = dynamic(() => import("@/components/sections/Stats"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/sections/About"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: false,
});
const Journey = dynamic(() => import("@/components/sections/Journey"), {
  ssr: false,
});
const WhyMe = dynamic(() => import("@/components/sections/WhyMe"), {
  ssr: false,
});
const FunFacts = dynamic(() => import("@/components/sections/FunFacts"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoaderOverlay onComplete={() => setLoading(false)} />
      
      {!loading && (
        <main className="flex-grow flex flex-col items-center justify-start p-6 md:p-24 space-y-24 md:space-y-36 overflow-hidden animate-in fade-in duration-500 ease-out">
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
      )}
    </>
  );
}
