"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface PulseButtonProps extends React.ComponentProps<typeof Button> {
  pulseColor?: string;
  pulseDuration?: number;
  pulseScale?: number;
  className?: string;
  children: React.ReactNode;
}

const PulseButton = React.forwardRef<HTMLButtonElement, PulseButtonProps>(
  (
    {
      pulseColor = "rgba(255, 255, 255, 0.3)",
      pulseDuration = 1.5,
      pulseScale = 1.05,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-md"
          style={{ backgroundColor: pulseColor }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, pulseScale, 1],
          }}
          transition={{
            duration: pulseDuration,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <Button ref={ref} className={cn("relative z-10", className)} {...props}>
          {children}
        </Button>
      </div>
    );
  },
);

PulseButton.displayName = "PulseButton";

export { PulseButton };
