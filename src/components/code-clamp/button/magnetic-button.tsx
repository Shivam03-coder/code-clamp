"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface MagneticButtonProps
  extends React.ComponentProps<typeof Button> {
  strength?: number;
  className?: string;
  children: React.ReactNode;
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ strength = 20, className, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const moveButton = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      // Calculate distance from center as a percentage of button size
      const maxDistanceX = rect.width / 2;
      const maxDistanceY = rect.height / 2;

      // Apply strength factor
      const moveX = (distanceX / maxDistanceX) * strength;
      const moveY = (distanceY / maxDistanceY) * strength;

      x.set(moveX);
      y.set(moveY);
    };

    const resetButton = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={buttonRef}
        onMouseMove={moveButton}
        onMouseLeave={resetButton}
        style={{ x: springX, y: springY }}
        className="inline-block"
      >
        <Button ref={ref} className={cn(className)} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  },
);

MagneticButton.displayName = "MagneticButton";

export { MagneticButton };
