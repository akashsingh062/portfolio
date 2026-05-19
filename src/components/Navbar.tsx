"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Home, User, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { motion } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      
      <motion.div
        className="fixed bottom-6 left-1/2 z-50"
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 16,
          delay: 0.3,
        }}
      >
        <Dock direction="middle" className="bg-surface/80 backdrop-blur-md border-border shadow-[0_0_15px_rgba(124,58,237,0.3)]">
          {links.map((link) => (
            <DockIcon key={link.name}>
              <Link href={link.path} className="flex items-center justify-center w-full h-full group" aria-label={link.name}>
                <link.icon className={`h-5 w-5 transition-colors ${pathname === link.path ? "text-primary" : "text-text-secondary group-hover:text-text-primary"}`} />
              </Link>
            </DockIcon>
          ))}
          <DockIcon>
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

