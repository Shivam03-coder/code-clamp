"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type TerminalCommand = {
  command: string;
  response: string | string[];
  timestamp?: Date;
};

export type TerminalProps = {
  className?: string;
  prompt?: string;
  welcomeMessage?: string | string[];
  initialCommands?: TerminalCommand[];
  autoFocus?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  onCommand?: (
    command: string,
  ) => Promise<string | string[]> | string | string[];
};

export function BaseTerminal({
  className,
  prompt = "$",
  welcomeMessage = "Welcome to Terminal UI. Type 'help' to see available commands.",
  initialCommands = [],
  autoFocus = true,
  readOnly = false,
  loading = false,
  onCommand,
}: TerminalProps) {
  const [history, setHistory] = useState<TerminalCommand[]>(initialCommands);
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const handleCommand = async () => {
    if (!command.trim()) return;

    const newCommand: TerminalCommand = {
      command: command.trim(),
      response: "",
      timestamp: new Date(),
    };

    setHistory((prev) => [...prev, newCommand]);
    setCommandHistory((prev) => [command, ...prev]);
    setCommand("");
    setHistoryIndex(-1);
    setIsProcessing(true);

    try {
      if (onCommand) {
        const response = await onCommand(newCommand.command);
        setHistory((prev) => {
          const updated = [...prev];
          updated[updated.length - 1]!.response = response;
          return updated;
        });
      }
    } catch (error) {
      setHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1]!.response =
          `Error: ${error instanceof Error ? error.message : String(error)}`;
        return updated;
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]!);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]!);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  };

  // Focus input on mount if autoFocus is true
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Scroll to bottom when history changes
  useEffect(() => {
    scrollToBottom();
  }, [history]);

  // Format welcome message
  const formattedWelcomeMessage = Array.isArray(welcomeMessage)
    ? welcomeMessage
    : [welcomeMessage];

  return (
    <div
      className={cn(
        "flex h-80 flex-col rounded-md border bg-black font-mono text-sm text-green-500",
        className,
      )}
    >
      <div className="flex h-7 items-center justify-start gap-1.5 rounded-t-md border-b bg-zinc-900 px-4">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <div className="flex-1 text-center text-xs text-zinc-400">Terminal</div>
      </div>

      <div
        ref={terminalRef}
        className="scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent flex-1 overflow-auto p-4"
      >
        {/* Welcome message */}
        <AnimatePresence>
          {formattedWelcomeMessage.map((line, i) => (
            <motion.div
              key={`welcome-${i}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="mb-1"
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Command history */}
        <AnimatePresence>
          {history.map((item, i) => (
            <motion.div
              key={`history-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2"
            >
              <div className="flex">
                <span className="mr-2 text-blue-400">{prompt}</span>
                <span>{item.command}</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-1 ml-4 whitespace-pre-wrap"
              >
                {Array.isArray(item.response)
                  ? item.response.map((line, j) => <div key={j}>{line}</div>)
                  : item.response}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current command line */}
        <div className="mt-2 flex">
          <motion.span
            className="mr-2 text-blue-400"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {prompt}
          </motion.span>
          <span>{command}</span>
          {!readOnly && !isProcessing && !loading && (
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-0.5 inline-block h-4 w-2 bg-green-500"
            />
          )}
          {(isProcessing || loading) && (
            <Loader2 className="ml-2 h-4 w-4 animate-spin text-green-500" />
          )}
        </div>
      </div>

      {/* Hidden input for capturing keystrokes */}
      {!readOnly && (
        <input
          ref={inputRef}
          type="text"
          className="sr-only"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          aria-label="Terminal input"
        />
      )}
    </div>
  );
}
