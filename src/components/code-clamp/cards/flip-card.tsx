"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

export interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  flipOnHover?: boolean
  flipOnClick?: boolean
  flipDuration?: number
  height?: number | string
  width?: number | string
}

export function FlipCard({
  frontContent,
  backContent,
  flipOnHover = false,
  flipOnClick = true,
  flipDuration = 0.6,
  height = 300,
  width = "100%",
  className,
  ...props
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped)
    }
  }

  const handleHover = () => {
    if (flipOnHover) {
      setIsFlipped(true)
    }
  }

  const handleHoverEnd = () => {
    if (flipOnHover) {
      setIsFlipped(false)
    }
  }

  return (
    <div
      className={cn("perspective-1000", className)}
      style={{ height, width }}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      {...props}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: flipDuration, type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Card className="w-full h-full">
            <CardContent className="p-6 flex items-center justify-center h-full">
              {frontContent}
            </CardContent>
          </Card>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="w-full h-full">
            <CardContent className="p-6 flex items-center justify-center h-full">
              {backContent}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
