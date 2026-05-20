"use client";

import { motion } from "motion/react";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  GraduationCap, 
  Laptop, 
  BookOpen, 
  Zap
} from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { quickInfos, journey, whyMe, funFacts } from "@/lib/data";

export default function AboutPage() {

  return (
    <main className="flex-grow flex flex-col items-center justify-start p-6 md:p-24 space-y-16 md:space-y-24 overflow-hidden min-h-screen pb-32">
      
      <Meteors number={20} />

      
      <motion.section 
        className="w-full max-w-6xl space-y-6 mt-8 md:mt-12 text-center md:text-left"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/5">
          <Sparkles className="h-3 w-3" />
          <span>About Me</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-1 leading-tight">
          Passionate About Building Web Experiences That Matter
        </h1>
      </motion.section>

      
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <motion.div 
          className="lg:col-span-7 space-y-6 text-text-secondary text-base leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

        
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickInfos.map((card, idx) => (
            <motion.div 
              key={idx}
              className="group p-5 rounded-2xl bg-surface/40 border border-border/80 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 flex flex-col space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.03 }}
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
      </section>

      
      <section className="w-full max-w-5xl space-y-12">
        <div className="text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/20 bg-accent/5">
            <Calendar className="h-3 w-3" />
            <span>My Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Learning Through Building
          </h2>
        </div>

        <div className="relative border-l-2 border-border/60 ml-4 md:ml-12 pl-6 md:pl-12 space-y-10">
          {journey.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="absolute -left-[31px] md:-left-[55px] top-1 h-4 w-4 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              
              <div className="space-y-2">
                <span className="text-lg font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="w-full max-w-6xl space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Me?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMe.map((item, idx) => (
            <motion.div 
              key={idx}
              className="p-6 rounded-2xl bg-surface/30 border border-border/80 hover:border-primary/40 flex items-start gap-4 transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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

      
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <motion.div 
          className="p-8 rounded-3xl bg-surface/20 border border-border/80 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ y: -4 }}
        >
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold text-text-primary">Current Focus</h3>
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

        
        <motion.div 
          className="p-8 rounded-3xl bg-surface/20 border border-border/80 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ y: -4 }}
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-secondary" />
            <h3 className="text-xl font-bold text-text-primary">Fun Facts</h3>
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
    </main>
  );
}