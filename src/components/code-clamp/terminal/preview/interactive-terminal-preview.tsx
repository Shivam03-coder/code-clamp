"use client";
import React from "react";
import { RetroTerminal } from "../retro-terminal";
import TerminalPreview from "./terminal-preview";
import { InteractiveTerminal } from "../interactive-terminal";

const InteractiveTerminalPreview = () => {
  return (
    <TerminalPreview>
      <InteractiveTerminal
        welcomeMessage="Welcome to Interactive Terminal. Click the buttons below or type commands."
        options={[
          { label: "Hello", value: "hello", description: "Display a greeting" },
          {
            label: "Date",
            value: "date",
            description: "Show current date and time",
          },
          {
            label: "Help",
            value: "help",
            description: "Show available commands",
          },
        ]}
        onCommand={async (cmd) => {
          if (cmd === "hello") {
            return "Hello, world!";
          } else if (cmd === "date") {
            return new Date().toString();
          } else if (cmd === "help") {
            return [
              "Available commands:",
              "hello - Display a greeting",
              "date - Show current date and time",
              "help - Show this help message",
            ];
          } else {
            return `Command not found: ${cmd}`;
          }
        }}
      />
    </TerminalPreview>
  );
};

export { InteractiveTerminalPreview };
