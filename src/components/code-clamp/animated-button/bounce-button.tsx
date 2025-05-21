"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface BounceButtonProps  extends React.ComponentProps<typeof Button>  {
  bounceStrength?: number
  bounceDuration?: number
  className?: string
  children: React.ReactNode
}

const BounceButton = React.forwardRef<HTMLButtonElement, BounceButtonProps>(
  ({ 
    bounceStrength = 0.2, 
    bounceDuration = 0.4,
    className, 
    children, 
    ...props 
  }, ref) => {
    return (
      <motion.div
        whileTap={{
          scale: [1, 1 - bounceStrength, 1 + bounceStrength/2, 1],
          transition: {
            duration: bounceDuration,
            times: [0, 0.4, 0.7, 1]
          }
        }}
        className="inline-block"
      >
        <Button
          ref={ref}
          className={cn(className)}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  }
)

BounceButton.displayName = "BounceButton"

export { BounceButton }
