"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BaseTerminal, type TerminalProps } from "./base-terminal";

type RetroTerminalProps = TerminalProps & {
  scanlines?: boolean;
  flicker?: boolean;
  glitch?: boolean;
};

export function RetroTerminal({
  className,
  scanlines = true,
  flicker = true,
  glitch = true,
  ...props
}: RetroTerminalProps) {
  const [glitchActive, setGlitchActive] = useState(false);

  // Random glitch effect
  useEffect(() => {
    if (!glitch) return;

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100 + Math.random() * 200);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, [glitch]);

  return (
    <div className={cn("relative h-80 overflow-hidden rounded-md", className)}>
      {/* CRT screen effect */}
      <motion.div
        className="absolute inset-0 z-10 rounded-md"
        style={{
          boxShadow: "inset 0 0 100px rgba(0, 60, 0, 0.5)",
          background: "radial-gradient(circle, transparent 30%, black 150%)",
        }}
      />

      {/* Scanlines */}
      {scanlines && (
        <div className="bg-scanlines absolute inset-0 z-20 opacity-10" />
      )}

      {/* Flicker effect */}
      {flicker && (
        <motion.div
          className="absolute inset-0 z-30 bg-white opacity-0"
          animate={{ opacity: [0, 0.02, 0, 0.01, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            repeatType: "loop",
          }}
        />
      )}

      {/* Glitch effect */}
      {glitch && glitchActive && (
        <motion.div
          className="absolute inset-0 z-40 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-green-500 opacity-10"
            animate={{
              x: [0, -10, 5, -2, 0],
              opacity: [0, 0.1, 0.05, 0.15, 0],
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute inset-0 bg-red-500 opacity-10"
            animate={{
              x: [0, 10, -5, 2, 0],
              opacity: [0, 0.1, 0.05, 0.15, 0],
            }}
            transition={{ duration: 0.2, delay: 0.05 }}
          />
        </motion.div>
      )}

      <BaseTerminal
        className="relative z-0 border-green-900 bg-black/90 font-mono text-green-500"
        prompt="C:>"
        welcomeMessage={[
          "RETRO-OS v1.0",
          "Copyright (c) 1985-1995",
          "All rights reserved.",
          "",
          "Type 'help' for available commands.",
        ]}
        {...props}
      />

      <style jsx global>{`
        .bg-scanlines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 0, 0, 0.2) 51%
          );
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  );
}
