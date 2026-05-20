"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoaderOverlay({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing system...");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Random incremental steps
        const step = Math.floor(Math.random() * 15) + 5;
        const next = Math.min(prev + step, 100);
        
        // Update status text based on progress
        if (next < 30) setStatus("Compiling assets...");
        else if (next < 60) setStatus("Resolving dependencies...");
        else if (next < 85) setStatus("Rendering layout system...");
        else setStatus("Ready");
        
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Delay onComplete to match the fade-out duration
        const completeTimer = setTimeout(onComplete, 500);
        return () => clearTimeout(completeTimer);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black select-none pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle glowing backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative flex flex-col items-center space-y-6 text-center z-10">
            {/* Pulsing logo outline */}
            <motion.div 
              className="relative flex items-center justify-center w-24 h-24 rounded-2xl border border-primary/20 bg-primary/5 shadow-[0_0_30px_rgba(193,18,31,0.15)] overflow-hidden"
              animate={{
                scale: [1, 1.05, 1],
                borderColor: ["rgba(193,18,31,0.2)", "rgba(102,155,188,0.4)", "rgba(193,18,31,0.2)"],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AS</span>
              {/* Spinning particle line */}
              <div className="absolute inset-0 border-t border-secondary/40 rounded-2xl animate-spin" style={{ animationDuration: "3s" }} />
            </motion.div>

            {/* Glowing progress percent */}
            <div className="space-y-1">
              <motion.div 
                className="text-4xl md:text-5xl font-black tracking-tight text-white tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {progress}%
              </motion.div>
              <div className="text-xs tracking-wider uppercase text-text-secondary/60 h-4">
                {status}
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary shadow-[0_0_10px_rgba(193,18,31,0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
