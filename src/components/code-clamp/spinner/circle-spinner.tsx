"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface CircleSpinnerProps {
  size?: number
  thickness?: number
  color?: string
  secondaryColor?: string
  speed?: number
  className?: string
}

export function CircleSpinner({
  size = 40,
  thickness = 4,
  color = "currentColor",
  secondaryColor = "rgba(0, 0, 0, 0.1)",
  speed = 1.5,
  className,
}: CircleSpinnerProps) {
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{
        width: size,
        height: size,
      }}
      role="status"
      aria-label="Loading"
    >
      {/* Background circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          borderWidth: thickness,
          borderStyle: "solid",
          borderColor: secondaryColor,
        }}
      />
      
      {/* Animated spinner */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          borderWidth: thickness,
          borderStyle: "solid",
          borderColor: `transparent transparent transparent ${color}`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      <span className="sr-only">Loading</span>
    </div>
  )
}
