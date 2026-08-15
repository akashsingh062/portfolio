"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Home, User, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { motion } from "motion/react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const isScrollingToSection = useRef(false);

  const links = [
    { name: "Home", hash: "hero", path: "/#hero", icon: Home },
    { name: "About", hash: "about", path: "/#about", icon: User },
    { name: "Projects", hash: "projects", path: "/#projects", icon: Briefcase },
    { name: "Contact", hash: "contact", path: "/#contact", icon: Mail },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    isScrollingToSection.current = true;
    setIsVisible(true);

    if (hash === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setActiveSection("hero");
    } else {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${hash}`);
        setActiveSection(hash);
      }
    }

    setTimeout(() => {
      isScrollingToSection.current = false;
    }, 800);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sectionIds = ["hero", "about", "projects", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY <= 0) {
            setActiveSection("hero");
            setIsVisible(true);
          } else if (
            window.innerHeight + currentScrollY >=
            document.documentElement.scrollHeight - 20
          ) {
            setActiveSection("contact");
            setIsVisible(true);
          } else {
            const scrollDifference = currentScrollY - lastScrollY.current;
            if (!isScrollingToSection.current && Math.abs(scrollDifference) > 10) {
              if (scrollDifference > 0) {
                setIsVisible(false);
              } else {
                setIsVisible(true);
              }
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check deferred out of synchronous render thread
    const scrollTimer = setTimeout(() => {
      handleScroll();
    }, 0);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed bottom-6 left-1/2 z-50"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 100, 
          x: "-50%", 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 26,
          delay: mounted ? 0 : 0.3,
        }}
      >
        <Dock 
          iconMagnification={60} 
          iconDistance={100} 
          direction="middle" 
          className="bg-white/80 dark:bg-[#0d131f]/80 backdrop-blur-xl border-border/80 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.2),0_0_25px_rgba(255,42,84,0.15)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_30px_rgba(255,42,84,0.2)]"
        >
          {links.map((link) => {
            const isActive = activeSection === link.hash;
            return (
              <DockIcon key={link.name} className="bg-black/5 dark:bg-white/10 hover:bg-primary/15 transition-colors">
                <Link 
                  href={link.path} 
                  onClick={(e) => handleClick(e, link.hash)}
                  className="flex items-center justify-center w-full h-full group" 
                  aria-label={link.name}
                >
                  <link.icon className={`h-5 w-5 transition-all duration-300 ${isActive ? "text-primary scale-110 drop-shadow-[0_0_8px_rgba(255,42,84,0.6)]" : "text-text-secondary group-hover:text-text-primary"}`} />
                </Link>
              </DockIcon>
            );
          })}
          <DockIcon className="bg-black/10 dark:bg-white/10">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-full h-full text-text-secondary hover:text-text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-5 w-5 text-accent" />
                ) : (
                  <Moon className="h-5 w-5 text-primary" />
                )
              ) : (
                <span className="h-5 w-5 animate-pulse bg-text-secondary/20 rounded-full" />
              )}
            </button>
          </DockIcon>
        </Dock>
      </motion.div>
    </>
  );
}

