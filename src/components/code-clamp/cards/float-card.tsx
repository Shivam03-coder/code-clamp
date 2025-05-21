"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface FloatCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  rotateIntensity?: number;
  floatIntensity?: number;
  dampingFactor?: number;
  children?: React.ReactNode;
}

export function FloatCard({
  title,
  description,
  footer,
  rotateIntensity = 10,
  floatIntensity = 5,
  dampingFactor = 50,
  className,
  children,
  ...props
}: FloatCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-1, 1], [rotateIntensity, -rotateIntensity]),
    { stiffness: 300, damping: dampingFactor },
  );

  const rotateY = useSpring(
    useTransform(x, [-1, 1], [-rotateIntensity, rotateIntensity]),
    { stiffness: 300, damping: dampingFactor },
  );

  const translateZ = useSpring(
    useTransform(y, [-1, 1], [floatIntensity, -floatIntensity]),
    { stiffness: 300, damping: dampingFactor },
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative perspective-[1000px]", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          z: 0, // fallback to avoid warning
          transformPerspective: 1000,
        }}
      >
        <Card className="preserve-3d h-full">
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
    </motion.div>
  );
}
