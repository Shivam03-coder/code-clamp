"use client";
import React from "react";
import TerminalPreview from "./terminal-preview";
import { BaseTerminal } from "../base-terminal";

const BaseTerminalPreview = () => {
  return (
    <TerminalPreview>
      <BaseTerminal
        welcomeMessage={[
          "Welcome to Base Terminal",
          "Type 'help' to see available commands",
        ]}
        onCommand={async (cmd) => {
          if (cmd === "help") {
            return [
              "Available commands:",
              "hello - Display a greeting",
              "date - Show current date and time",
              "clear - Clear the terminal",
            ];
          } else if (cmd === "hello") {
            return "Hello, world!";
          } else if (cmd === "date") {
            return new Date().toString();
          } else {
            return `Command not found: ${cmd}`;
          }
        }}
      />
    </TerminalPreview>
  );
};

export { BaseTerminalPreview };
