"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Dialog as ShadcnDialog,
  DialogContent as ShadcnDialogContent,
  DialogDescription as ShadcnDialogDescription,
  DialogFooter as ShadcnDialogFooter,
  DialogHeader as ShadcnDialogHeader,
  DialogTitle as ShadcnDialogTitle,
  DialogTrigger as ShadcnDialogTrigger,
  DialogClose as ShadcnDialogClose,
} from "@/components/ui/dialog";

export const animationVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  flip: {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0 },
    exit: { opacity: 0, rotateX: 90 },
  },
};

export type AnimationVariant = keyof typeof animationVariants;

export interface AnimatedDialogContentProps
  extends React.ComponentPropsWithoutRef<typeof ShadcnDialogContent> {
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
  overlayClassName?: string;
}

export const AnimatedDialogContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDialogContent>,
  AnimatedDialogContentProps
>(
  (
    {
      variant = "fade",
      duration = 0.2,
      className,
      children,
      overlayClassName,
      ...props
    },
    ref,
  ) => {
    const selectedVariant = animationVariants[variant];

    return (
      <ShadcnDialogContent
        ref={ref}
        className={cn("border-none bg-transparent p-0 shadow-none", className)}
        {...props}
      >
        <motion.div
          initial={selectedVariant.initial}
          animate={selectedVariant.animate}
          exit={selectedVariant.exit}
          transition={{ duration }}
          className={cn(
            "bg-background relative rounded-lg border p-6 shadow-lg",
            className,
          )}
        >
          {children}
        </motion.div>
      </ShadcnDialogContent>
    );
  },
);
AnimatedDialogContent.displayName = "AnimatedDialogContent";

export interface AnimatedDialogProps {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
  overlayClassName?: string;
}

export function AnimatedDialog({
  trigger,
  children,
  open,
  onOpenChange,
  variant = "fade",
  duration = 0.2,
  className,
  overlayClassName,
}: AnimatedDialogProps) {
  return (
    <ShadcnDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <ShadcnDialogTrigger asChild>{trigger}</ShadcnDialogTrigger>}
      <AnimatePresence>
        {open && (
          <AnimatedDialogContent
            variant={variant}
            duration={duration}
            className={className}
            overlayClassName={overlayClassName}
            forceMount
          >
            {children}
          </AnimatedDialogContent>
        )}
      </AnimatePresence>
    </ShadcnDialog>
  );
}

// Re-export shadcn Dialog components
export const DialogTrigger = ShadcnDialogTrigger;
export const DialogClose = ShadcnDialogClose;
export const DialogHeader = ShadcnDialogHeader;
export const DialogFooter = ShadcnDialogFooter;
export const DialogTitle = ShadcnDialogTitle;
export const DialogDescription = ShadcnDialogDescription;
