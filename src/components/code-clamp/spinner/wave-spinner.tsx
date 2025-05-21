"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface WaveSpinnerProps {
  size?: number
  barWidth?: number
  barCount?: number
  gap?: number
  color?: string
  speed?: number
  amplitude?: number
  className?: string
}

export function WaveSpinner({
  size = 60,
  barWidth = 4,
  barCount = 5,
  gap = 4,
  color = "currentColor",
  speed = 1.2,
  amplitude = 20,
  className,
}: WaveSpinnerProps) {
  // Calculate total width based on bar count, width and gap
  const totalWidth = barCount * barWidth + (barCount - 1) * gap
  
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
        className="flex items-end justify-between"
        style={{
          width: totalWidth,
          height: amplitude,
        }}
      >
        {Array.from({ length: barCount }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: barWidth,
              backgroundColor: color,
            }}
            animate={{
              height: [
                amplitude * 0.3,
                amplitude,
                amplitude * 0.3,
              ],
            }}
            transition={{
              duration: speed,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * (speed / barCount),
            }}
          />
        ))}
      </div>
      
      <span className="sr-only">Loading</span>
    </div>
  )
}
