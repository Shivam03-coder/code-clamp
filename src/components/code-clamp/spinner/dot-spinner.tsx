"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface DotSpinnerProps {
  size?: number
  dotSize?: number
  dotCount?: number
  gap?: number
  color?: string
  speed?: number
  className?: string
}

export function DotSpinner({
  size = 40,
  dotSize = 8,
  dotCount = 3,
  gap = 4,
  color = "currentColor",
  speed = 1.2,
  className,
}: DotSpinnerProps) {
  const totalWidth = dotCount * dotSize + (dotCount - 1) * gap
  
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{
        width: size,
        height: size,
      }}
      role="status"
      aria-label="Loading"
    >
      <div
        className="flex items-center justify-between"
        style={{
          width: totalWidth,
        }}
      >
        {Array.from({ length: dotCount }).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: color,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: speed,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * (speed / dotCount),
            }}
          />
        ))}
      </div>
      
      <span className="sr-only">Loading</span>
    </div>
  )
}
