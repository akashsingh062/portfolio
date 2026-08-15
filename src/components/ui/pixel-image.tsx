"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Grid = {
  rows: number
  cols: number
}

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
}

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS

interface PixelImageProps {
  src: string
  grid?: PredefinedGridKey
  customGrid?: Grid
  grayscaleAnimation?: boolean
  pixelFadeInDuration?: number
  maxAnimationDelay?: number
  colorRevealDelay?: number
  className?: string
  imageClassName?: string
}

export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 800,
  maxAnimationDelay = 1000,
  colorRevealDelay = 1200,
  customGrid,
  className,
  imageClassName,
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showColor, setShowColor] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const MIN_GRID = 1
  const MAX_GRID = 16

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (g?: Grid) => {
      if (!g) return false
      const { rows: r, cols: c } = g
      return (
        Number.isInteger(r) &&
        Number.isInteger(c) &&
        r >= MIN_GRID &&
        c >= MIN_GRID &&
        r <= MAX_GRID &&
        c <= MAX_GRID
      )
    }

    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid]
  }, [customGrid, grid])

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 50)

    const colorTimeout = setTimeout(() => {
      setShowColor(true)
    }, colorRevealDelay)

    const finishTimeout = setTimeout(() => {
      setIsFinished(true)
    }, colorRevealDelay + pixelFadeInDuration)

    return () => {
      clearTimeout(visibilityTimeout)
      clearTimeout(colorTimeout)
      clearTimeout(finishTimeout)
    }
  }, [colorRevealDelay, pixelFadeInDuration])

  const pieces = useMemo(() => {
    const total = rows * cols
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols

      const colStart = (col * (100 / cols)).toFixed(4)
      const rowStart = (row * (100 / rows)).toFixed(4)
      const colEnd = ((col + 1) * (100 / cols)).toFixed(4)
      const rowEnd = ((row + 1) * (100 / rows)).toFixed(4)

      const clipPath = `polygon(${colStart}% ${rowStart}%, ${colEnd}% ${rowStart}%, ${colEnd}% ${rowEnd}%, ${colStart}% ${rowEnd}%)`

      // Pure deterministic pseudo-random delay based on index seed
      const rand = Math.abs(Math.sin(index + 1) * 10000) % 1
      const delay = Math.round(rand * maxAnimationDelay)
      return {
        clipPath,
        delay,
      }
    })
  }, [rows, cols, maxAnimationDelay])

  return (
    <div className={cn("relative h-72 w-72 select-none md:h-96 md:w-96 overflow-hidden rounded-[2.5rem] bg-[#070a10]", className)}>
      {/* Single, highly-optimized base image */}
      <Image
        src={src}
        alt="Akash Singh — Full Stack Developer"
        fill
        sizes="(max-width: 768px) 288px, 384px"
        priority
        className={cn(
          "rounded-[2.5rem] object-cover object-top transition-all duration-700 ease-out",
          imageClassName,
          !showColor && grayscaleAnimation ? "grayscale contrast-125" : "grayscale-0 contrast-100"
        )}
        draggable={false}
      />

      {/* Lightweight tile reveal overlay (unmounted after animation completes) */}
      {!isFinished && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {pieces.map((piece, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 bg-background/95 dark:bg-[#0c1017]/95 transition-opacity ease-out",
                isVisible ? "opacity-0" : "opacity-100"
              )}
              style={{
                clipPath: piece.clipPath,
                transitionDelay: `${piece.delay}ms`,
                transitionDuration: `${pixelFadeInDuration}ms`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
