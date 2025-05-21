"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

export interface ExpandCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode
  description?: React.ReactNode
  expandedContent: React.ReactNode
  footer?: React.ReactNode
  expandButtonText?: string
  collapseButtonText?: string
  initiallyExpanded?: boolean
  transitionDuration?: number
  children?: React.ReactNode
}


export function ExpandCard({
  title,
  description,
  expandedContent,
  footer,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  initiallyExpanded = false,
  transitionDuration = 0.3,
  className,
  children,
  ...props
}: ExpandCardProps) {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="expanded-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: transitionDuration }}
          >
            <CardContent className="pt-0">{expandedContent}</CardContent>
          </motion.div>
        )}
      </AnimatePresence>
      <CardFooter className="flex justify-between">
        {footer}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpand}
          className="ml-auto flex items-center gap-1"
        >
          {isExpanded ? collapseButtonText : expandButtonText}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </Button>
      </CardFooter>
    </Card>
  )
}
