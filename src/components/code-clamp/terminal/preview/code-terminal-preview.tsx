"use client";
import React from "react";
import TerminalPreview from "./terminal-preview";
import { CodeTerminal } from "../code-terminal";

const CodeTerminalPreview = () => {
  return (
    <TerminalPreview>
      <CodeTerminal
        initialCommands={[
          {
            command: "function greet(name) {",
            response: ["  return `Hello, ${name}!`;", "}"],
          },
          {
            command: "const colors = ['red', 'green', 'blue'];",
            response: [],
          },
          {
            command: "colors.map(color => color.toUpperCase())",
            response: "[ 'RED', 'GREEN', 'BLUE' ]",
          },
        ]}
        language="javascript"
        theme="dark"
      />
    </TerminalPreview>
  );
};

export { CodeTerminalPreview };
