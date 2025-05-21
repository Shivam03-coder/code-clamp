"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface PulseSpinnerProps {
  size?: number
  color?: string
  speed?: number
  pulseSize?: number
  className?: string
}

export function PulseSpinner({
  size = 40,
  color = "currentColor",
  speed = 1.5,
  pulseSize = 1.75,
  className,
}: PulseSpinnerProps) {
  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{
        width: size,
        height: size,
      }}
      role="status"
      aria-label="Loading"
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: color,
        }}
        animate={{
          scale: [1, pulseSize, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: speed,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <div
        className="rounded-full"
        style={{
          width: size / 3,
          height: size / 3,
          backgroundColor: color,
        }}
      />
      
      <span className="sr-only">Loading</span>
    </div>
  )
}
