"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Phone, 
  Loader2, 
  MessageSquare, 
  CheckCircle2, 
  XCircle 
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { FloatingCodeChip } from "@/components/ui/floating-code-chip";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus((prev) => (prev === "success" ? "idle" : prev));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="w-full mt-10 max-w-6xl space-y-12 relative">
      <motion.div 
        className="text-center space-y-3 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FloatingCodeChip
          className="hidden md:inline-flex absolute -top-4 right-0"
          rotate={2}
          delay={0.3}
          variant="terminal"
        >
          <span className="text-emerald-400">await</span>{" "}
          <span className="text-white">connect(&apos;akash&apos;)</span>
        </FloatingCodeChip>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/25 bg-primary/10 shadow-[0_0_15px_rgba(255,42,84,0.15)]">
          <Mail className="h-3.5 w-3.5" />
          <span>Contact</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          Let&apos;s Build Something <span className="bg-linear-to-r from-rose-600 via-orange-600 to-indigo-600 dark:from-[#ff2a54] dark:via-[#ff623e] dark:to-[#818cf8] bg-clip-text text-transparent">Together</span>
        </h3>
        <p className="text-text-secondary max-w-xl mx-auto text-sm sm:text-base font-normal">
          I&apos;m always open to discussing new full-stack projects, collaboration opportunities, developer internships, or simply talking code.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: Contact Info */}
        <motion.div 
          className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-text-primary">Get In Touch</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Whether you have an interesting product idea, an engineering role, or just want to swap ideas—drop me a note!
            </p>
          </div>

          <div className="space-y-5">
            <motion.div 
              className="glass-card flex items-center gap-4 p-4 rounded-xl hover:border-primary/40 transition-colors"
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-xs font-semibold text-text-secondary block">Email</span>
                <a href="mailto:akashsingh062.in@gmail.com" className="text-sm font-bold text-text-primary hover:text-primary transition-colors">akashsingh062.in@gmail.com</a>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card flex items-center gap-4 p-4 rounded-xl hover:border-accent/40 transition-colors"
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <span className="text-xs font-semibold text-text-secondary block">Phone</span>
                <a href="tel:+917880952150" className="text-sm font-bold text-text-primary hover:text-accent transition-colors">+91 7880952150</a>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card flex items-center gap-4 p-4 rounded-xl hover:border-secondary/40 transition-colors"
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <span className="text-xs font-semibold text-text-secondary block">Location</span>
                <span className="text-sm font-bold text-text-primary">India</span>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center gap-3 pt-6 border-t border-border/40">
            <a 
              href="https://github.com/akashsingh062" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-xl glass-card hover:border-primary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(193,18,31,0.15)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/akashsingh062" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-xl glass-card hover:border-secondary/50 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(102,155,188,0.2)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right column: Interactive form */}
        <motion.div 
          className="lg:col-span-7 glass-card p-8 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-secondary to-primary/20 opacity-60" />
          
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-bold text-text-primary uppercase tracking-wider">Send a Message</span>
            <FloatingCodeChip rotate={-1.5} delay={0.4} variant="success">
              <span className="text-emerald-400 font-semibold">⚡ socket:</span>{" "}
              <span className="text-text-primary">ready</span>
            </FloatingCodeChip>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} suppressHydrationWarning>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-text-primary uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(193,18,31,0.08)] transition-all duration-300" 
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-text-primary uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(193,18,31,0.08)] transition-all duration-300" 
                  placeholder="yourname@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-bold text-text-primary uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(193,18,31,0.08)] transition-all duration-300" 
                placeholder="Collaboration details"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold text-text-primary uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                suppressHydrationWarning
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(193,18,31,0.08)] transition-all duration-300 resize-none" 
                placeholder="Hello Akash, let's discuss..."
              />
            </div>

            <div className="pt-2 flex flex-col items-center gap-4">
              <RainbowButton 
                type="submit" 
                size="lg" 
                className="w-full font-bold disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <MessageSquare className="h-5 w-5" />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </span>
              </RainbowButton>

              {submitStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-500 font-semibold text-sm"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 font-semibold text-sm"
                >
                  <XCircle className="h-4 w-4" />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
