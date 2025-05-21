"use client"

import React, { useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
export interface GlowCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  glowColor?: string
  glowSize?: number
  glowOpacity?: number
  children?: React.ReactNode
}

export function GlowCard({
  title,
  description,
  footer,
  glowColor = "rgba(120, 119, 198, 0.4)",
  glowSize = 300,
  glowOpacity = 0.6,
  className,
  children,
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden rounded-lg", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ borderColor: "rgba(255, 255, 255, 0)" }}
      whileHover={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            x: position.x - glowSize / 2,
            y: position.y - glowSize / 2,
            opacity: glowOpacity,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{
            width: glowSize,
            height: glowSize,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${glowColor} 0%, rgba(255, 255, 255, 0) 70%)`,
          }}
        />
      )}
      <Card className="relative z-10 bg-opacity-80 backdrop-blur-sm h-full">
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </motion.div>
  )
}
