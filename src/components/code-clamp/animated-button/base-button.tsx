"use client";

import * as React from "react";
import { motion, type MotionProps } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface AnimatedButtonProps
  extends React.ComponentProps<typeof Button> {
  animationProps?: MotionProps;
  className?: string;
  children: React.ReactNode;
}

const BaseButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ animationProps, className, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...animationProps}
      >
        <Button ref={ref} className={cn(className)} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  },
);

BaseButton.displayName = "BaseButton";

export { BaseButton };
