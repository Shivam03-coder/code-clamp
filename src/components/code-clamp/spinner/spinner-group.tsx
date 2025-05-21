"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from  "motion/react"
import { cn } from "@/lib/utils"

export interface SpinnerGroupProps {
  children: React.ReactNode
  isLoading?: boolean
  text?: string
  className?: string
  textClassName?: string
  delay?: number
}

export function SpinnerGroup({
  children,
  isLoading = true,
  text = "Loading...",
  className,
  textClassName,
  delay = 300,
}: SpinnerGroupProps) {
  const [showSpinner, setShowSpinner] = useState(false)
  
  useEffect(() => {
    // Only show spinner after delay to avoid flashing for quick loads
    let timeout: NodeJS.Timeout
    
    if (isLoading) {
      timeout = setTimeout(() => {
        setShowSpinner(true)
      }, delay)
    } else {
      setShowSpinner(false)
    }
    
    return () => {
      clearTimeout(timeout)
    }
  }, [isLoading, delay])
  
  return (
    <AnimatePresence>
      {showSpinner && (
        <motion.div
          className={cn("flex flex-col items-center justify-center gap-2", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
          
          {text && (
            <div className={cn("text-sm text-muted-foreground", textClassName)}>
              {text}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
