"use client";
import React from "react";
import TerminalPreview from "./terminal-preview";
import { BaseTerminal } from "../base-terminal";
import { MatrixTerminal } from "../matrix-terminal";

const MatrixTerminalPreview = () => {
  return (
    <TerminalPreview>
      <MatrixTerminal
        welcomeMessage={[
          "Matrix Terminal Initialized",
          "System breach detected...",
          "Type 'connect' to establish secure connection",
        ]}
        onCommand={async (cmd) => {
          if (cmd === "connect") {
            return [
              "Establishing secure connection...",
              "Access granted.",
              "Welcome to the Matrix.",
            ];
          } else {
            return `Unknown command: ${cmd}`;
          }
        }}
      />
    </TerminalPreview>
  );
};

export { MatrixTerminalPreview };
