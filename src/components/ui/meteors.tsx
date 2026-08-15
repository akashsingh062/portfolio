"use client"

import React, { useMemo } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const meteorStyles = useMemo(() => {
    return Array.from({ length: number }, (_, idx) => {
      // Deterministic distribution across the screen width
      const pseudoRand1 = ((idx * 37 + 17) % 100) / 100
      const pseudoRand2 = ((idx * 53 + 29) % 100) / 100
      const pseudoRand3 = ((idx * 79 + 43) % 100) / 100

      const leftPercent = (pseudoRand1 * 100).toFixed(2)
      const delay = (pseudoRand2 * (maxDelay - minDelay) + minDelay).toFixed(2)
      const duration = (pseudoRand3 * (maxDuration - minDuration) + minDuration).toFixed(2)

      return {
        "--angle": `${-angle}deg`,
        top: "-5%",
        left: `${leftPercent}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      } as React.CSSProperties
    })
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  )
}
