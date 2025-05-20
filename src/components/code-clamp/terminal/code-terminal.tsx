"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  BaseTerminal,
  type TerminalProps,
  type TerminalCommand,
} from "./base-terminal";

type CodeTerminalProps = TerminalProps & {
  theme?: "dark" | "light";
  language?: "javascript" | "typescript" | "html" | "css" | "json";
};

function CodeTerminal({
  className,
  theme = "dark",
  language = "javascript",
  ...props
}: CodeTerminalProps) {
  const [processedCommands, setProcessedCommands] = useState<TerminalCommand[]>(
    [],
  );

  // Process commands for syntax highlighting
  useEffect(() => {
    if (!props.initialCommands) return;

    const processed = props.initialCommands.map((cmd) => ({
      ...cmd,
      command: cmd.command,
      response: Array.isArray(cmd.response) ? cmd.response : [cmd.response],
    }));

    setProcessedCommands(processed);
  }, [props.initialCommands]);

  // Custom command handler to apply syntax highlighting
  const handleCommand = async (command: string) => {
    if (props.onCommand) {
      const response = await props.onCommand(command);
      return response;
    }
    return `Command not recognized: ${command}`;
  };

  const bgColor = theme === "dark" ? "bg-zinc-900" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const borderColor = theme === "dark" ? "border-zinc-700" : "border-gray-200";

  return (
    <div className={cn("relative h-80 overflow-hidden rounded-md", className)}>
      <BaseTerminal
        className={cn(
          "border",
          bgColor,
          textColor,
          borderColor,
          "font-mono text-sm",
        )}
        prompt={
          language === "javascript"
            ? "js>"
            : language === "typescript"
              ? "ts>"
              : ">"
        }
        welcomeMessage={[
          `${language.toUpperCase()} Code Terminal`,
          "Type your code below and press Enter to execute.",
        ]}
        initialCommands={processedCommands}
        onCommand={handleCommand}
        {...props}
      />

      {/* Custom rendering for syntax highlighting */}
      <style jsx global>{`
        .code-terminal .command {
          color: ${theme === "dark" ? "#e2e8f0" : "#1a202c"};
        }

        .code-terminal .keyword {
          color: #9333ea;
        }

        .code-terminal .string {
          color: #22c55e;
        }

        .code-terminal .number {
          color: #eab308;
        }

        .code-terminal .function {
          color: #3b82f6;
        }

        .code-terminal .comment {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}

export { CodeTerminal };
