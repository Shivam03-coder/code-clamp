"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface RippleButtonProps extends React.ComponentProps<typeof Button> {
  rippleColor?: string;
  rippleDuration?: number;
  rippleSize?: number;
  className?: string;
  children: React.ReactNode;
}

const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  (
    {
      rippleColor = "rgba(255, 255, 255, 0.7)",
      rippleDuration = 0.8,
      rippleSize = 100,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [ripples, setRipples] = React.useState<
      { id: number; x: number; y: number; size: number }[]
    >([]);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const rippleCount = React.useRef(0);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const size = Math.max(rect.width, rect.height) * (rippleSize / 100);

      const newRipple = {
        id: rippleCount.current,
        x,
        y,
        size,
      };

      rippleCount.current += 1;
      setRipples((prevRipples) => [...prevRipples, newRipple]);

      setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((ripple) => ripple.id !== newRipple.id),
        );
      }, rippleDuration * 1000);
    };

    return (
      <Button
        ref={(node) => {
          // @ts-ignore
          buttonRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={cn("relative overflow-hidden", className)}
        onClick={createRipple}
        {...props}
      >
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute rounded-full"
              style={{
                backgroundColor: rippleColor,
                width: ripple.size,
                height: ripple.size,
                top: ripple.y - ripple.size / 2,
                left: ripple.x - ripple.size / 2,
              }}
              initial={{ opacity: 0.7, scale: 0 }}
              animate={{ opacity: 0, scale: 2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: rippleDuration }}
            />
          ))}
        </AnimatePresence>
        <span className="relative z-10">{children}</span>
      </Button>
    );
  },
);

RippleButton.displayName = "RippleButton";

export { RippleButton };
