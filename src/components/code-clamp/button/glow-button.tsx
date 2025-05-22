"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface GlowButtonProps extends React.ComponentProps<typeof Button> {
  glowColor?: string;
  glowSize?: string;
  glowOpacity?: number;
  className?: string;
  children: React.ReactNode;
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  (
    {
      glowColor = "white",
      glowSize = "40px",
      glowOpacity = 0.35,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative inline-block">
        <motion.div
          className="absolute inset-0 rounded-md"
          initial={{ boxShadow: `0 0 0px ${glowColor}` }}
          whileHover={{
            boxShadow: `0 0 ${glowSize} ${glowColor}`,
          }}
          transition={{ duration: 0.3 }}
          style={{ opacity: glowOpacity }}
        />
        <Button ref={ref} className={cn("relative z-10", className)} {...props}>
          {children}
        </Button>
      </div>
    );
  },
);

GlowButton.displayName = "GlowButton";

export { GlowButton };
