"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { BaseTerminal, type TerminalProps } from "./base-terminal";
import { Button } from "@/components/ui/button";

type InteractiveOption = {
  label: string;
  value: string;
  description?: string;
};

type InteractiveTerminalProps = TerminalProps & {
  options?: InteractiveOption[];
  showHelpButton?: boolean;
  showClearButton?: boolean;
};

export function InteractiveTerminal({
  className,
  options = [],
  showHelpButton = true,
  showClearButton = true,
  ...props
}: InteractiveTerminalProps) {
  const [history, setHistory] = useState<
    Array<{ command: string; response: string | string[] }>
  >([]);
  const [showOptions, setShowOptions] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Custom command handler
  const handleCommand = async (command: string) => {
    // Check if command matches any option
    const matchedOption = options.find(
      (opt) =>
        opt.value.toLowerCase() === command.toLowerCase() ||
        opt.label.toLowerCase() === command.toLowerCase(),
    );

    if (command.toLowerCase() === "help") {
      return [
        "Available commands:",
        ...options.map(
          (opt) => `${opt.value} - ${opt.description || opt.label}`,
        ),
        "",
        "Type a command or click on the buttons below.",
      ];
    } else if (command.toLowerCase() === "clear") {
      setTimeout(() => setHistory([]), 100);
      return "Clearing terminal...";
    } else if (matchedOption) {
      if (props.onCommand) {
        return await props.onCommand(matchedOption.value);
      }
      return `Executed command: ${matchedOption.label}`;
    } else if (props.onCommand) {
      return await props.onCommand(command);
    }

    return `Command not recognized: ${command}. Type 'help' for available commands.`;
  };

  // Add command to history
  const addToHistory = (command: string) => {
    handleCommand(command).then((response) => {
      setHistory((prev) => [...prev, { command, response }]);
    });
  };

  // Clear terminal history
  const clearTerminal = () => {
    setHistory([]);
  };

  // Show help
  const showHelp = () => {
    addToHistory("help");
  };

  return (
    <div className={cn("relative flex h-80 flex-col", className)}>
      <div className="flex-1">
        <BaseTerminal
          className="h-full rounded-b-none border-b-0"
          onCommand={handleCommand}
          {...props}
        />
      </div>

      <motion.div
        className="rounded-b-md border border-t-0 bg-zinc-900 p-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-wrap items-center gap-2">
          {showHelpButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={showHelp}
              className="text-xs"
            >
              Help
            </Button>
          )}

          {showClearButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearTerminal}
              className="text-xs"
            >
              Clear
            </Button>
          )}

          {options.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowOptions(!showOptions)}
              className="text-xs"
            >
              {showOptions ? "Hide Commands" : "Show Commands"}
            </Button>
          )}
        </div>

        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden"
            >
              <div className="flex flex-wrap gap-2">
                {options.map((option, index) => (
                  <Button
                    key={index}
                    variant="secondary"
                    size="sm"
                    onClick={() => addToHistory(option.value)}
                    className="text-xs"
                    title={option.description}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
