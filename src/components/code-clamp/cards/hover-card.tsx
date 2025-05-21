"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface HoverCardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  hoverScale?: number;
  hoverRotate?: number;
  hoverElevation?: number;
  transitionDuration?: number;
  children?: React.ReactNode;
  className?: string;
}

export function HoverCard({
  title,
  description,
  footer,
  hoverScale = 1.02,
  hoverRotate = 0,
  hoverElevation = 5,
  transitionDuration = 0.2,
  className,
  children,
}: HoverCardProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ scale: 1, rotate: 0, y: 0 }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        y: -hoverElevation,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: transitionDuration,
      }}
    >
      <Card className="h-full overflow-hidden">
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
  );
}
