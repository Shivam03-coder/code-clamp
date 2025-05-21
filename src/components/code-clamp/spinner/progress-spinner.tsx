"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface ProgressSpinnerProps {
  size?: number
  thickness?: number
  color?: string
  secondaryColor?: string
  progress?: number
  showProgress?: boolean
  className?: string
}

export function ProgressSpinner({
  size = 60,
  thickness = 4,
  color = "currentColor",
  secondaryColor = "rgba(0, 0, 0, 0.1)",
  progress = 0,
  showProgress = true,
  className,
}: ProgressSpinnerProps) {
  // Calculate the circumference of the circle
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  
  // Calculate the stroke-dashoffset based on progress
  const strokeDashoffset = circumference - (progress / 100) * circumference
  
  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{
        width: size,
        height: size,
      }}
      role="status"
      aria-label={`Loading ${progress}%`}
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={secondaryColor}
          strokeWidth={thickness}
          fill="none"
        />
      </svg>
      
      {/* Progress circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{ transform: "rotate(-90deg)" }}
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </svg>
      
      {/* Progress text */}
      {showProgress && (
        <div className="text-sm font-medium">{Math.round(progress)}%</div>
      )}
      
      <span className="sr-only">Loading {progress}%</span>
    </div>
  )
}
