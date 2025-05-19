"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BaseTerminal, type TerminalProps } from "./base-terminal";

type MatrixTerminalProps = TerminalProps & {
  matrixDensity?: number;
  matrixSpeed?: number;
};

export function MatrixTerminal({
  className,
  matrixDensity = 50,
  matrixSpeed = 1,
  ...props
}: MatrixTerminalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const updateDimensions = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const columns = Math.floor(dimensions.width / 20);
    const drops: number[] = Array(columns).fill(0);

    const matrixChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(
        "",
      );

    const draw = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      ctx.fillStyle = "#0F0";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];

        // x = i * character width, y = drops[i] * character height
        ctx.fillText(text!, i * 20, drops[i]! * 20);

        // Randomly reset some drops to top
        if (drops[i]! * 20 > dimensions.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y coordinate
        drops[i]!++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, matrixDensity, matrixSpeed]);

  return (
    <div className={cn("relative h-80", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <BaseTerminal
        className="relative z-10 bg-black/70 text-green-400"
        prompt=">"
        welcomeMessage={[
          "Matrix Terminal Initialized",
          "System breach detected...",
          "Type 'connect' to establish secure connection",
        ]}
        {...props}
      />
    </div>
  );
}
