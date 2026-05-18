"use client";

import { Mail, MapPin, Github, Linkedin, MessageSquare } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Meteors } from "@/components/ui/meteors";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-start p-6 md:p-24 space-y-16 md:space-y-24 overflow-hidden min-h-screen pb-32">
      {/* Meteor Background Overlay */}
      <Meteors number={20} />

      {/* Contact Section Header */}
      <motion.section 
        className="w-full max-w-6xl space-y-6 mt-8 md:mt-12 text-center md:text-left"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/5">
          <Mail className="h-3 w-3" />
          <span>Contact</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-1 leading-tight">
          Let’s Build Something Together
        </h1>
        <p className="text-text-secondary max-w-2xl text-base leading-relaxed">
          I’m always open to discussing projects, collaboration opportunities, internships, or simply connecting with fellow developers.
        </p>
      </motion.section>

      {/* Contact Contents Grid */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Details */}
        <motion.div 
          className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-text-primary">Get In Touch</h2>
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
                <a href="mailto:your-email@example.com" className="text-sm font-bold text-text-primary hover:text-primary transition-colors">your-email@example.com</a>
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
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-xl bg-surface/40 hover:bg-surface border border-border hover:border-primary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
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
          animate={{ opacity: 1, x: 0 }}
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
      </section>
    </main>
  );
}