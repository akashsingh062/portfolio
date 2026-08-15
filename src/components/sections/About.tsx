"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { quickInfos } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="w-full max-w-6xl space-y-12">
      <motion.div 
        className="text-center md:text-left space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/5">
          <Sparkles className="h-3 w-3" />
          <span>About Me</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent pb-1">
          Passionate About Building Web Experiences That Matter
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Story */}
        <motion.div 
          className="lg:col-span-7 space-y-6 text-text-secondary text-base leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            Hello! I’m <strong className="text-text-primary">Akash</strong>, a Computer Science student and aspiring full-stack web developer who loves turning concepts into highly interactive, responsive, and functional digital products.
          </p>
          <p>
            My journey into web development started with core HTML, CSS, and JavaScript, building utility apps and responsive interfaces. As my curiosity expanded, I ventured into backend engineering with <strong className="text-text-primary">Node.js, Express, and MongoDB</strong> to construct robust REST APIs and database architectures.
          </p>
          <p>
            Today, I specialize in building production-ready, full-stack web applications using <strong className="text-text-primary">Next.js 16, React 19, TypeScript, and Tailwind CSS</strong>, integrating real-time WebSockets (Socket.IO), payment gateways (Stripe), and secure authentication systems.
          </p>
          <p>
            Beyond development, I actively solve Data Structures and Algorithms in <strong className="text-text-primary">Java</strong> to strengthen my problem-solving systems and cement my understanding of core software engineering fundamentals.
          </p>
          <p>
            I believe the most effective way to grow is by creating real, production-grade applications. That&apos;s why I&apos;m constantly learning, experimenting, and shipping new software.
          </p>
        </motion.div>

        {/* Right Side: Quick Stats / Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickInfos.map((card, idx) => (
            <motion.div 
              key={idx}
              className="group p-5 rounded-2xl bg-surface/40 border border-border/80 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300 flex flex-col space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
  );
}
