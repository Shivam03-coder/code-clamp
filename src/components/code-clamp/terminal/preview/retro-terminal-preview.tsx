"use client";
import React from "react";
import { RetroTerminal } from "../retro-terminal";
import TerminalPreview from "./terminal-preview";

const RetroTerminalPreview = () => {
  return (
    <TerminalPreview>
      <RetroTerminal
        welcomeMessage={[
          "RETRO-OS v1.0",
          "Copyright (c) 1985-1995",
          "All rights reserved.",
          "",
          "Type 'help' for available commands.",
        ]}
        onCommand={async (cmd) => {
          if (cmd === "help") {
            return [
              "Available commands:",
              "dir - List directory contents",
              "ver - Show system version",
              "date - Display current date",
              "cls - Clear screen",
            ];
          } else if (cmd === "dir") {
            return [
              " Volume in drive C has no label",
              " Volume Serial Number is 1337-CAFE",
              "",
              " Directory of C:\\",
              "",
              "COMMAND  COM     63,588 01-01-95  5:00a",
              "CONFIG   SYS      1,024 01-01-95  5:00a",
              "AUTOEXEC BAT        512 01-01-95  5:00a",
              "SYSTEM   DAT     32,768 01-01-95  5:00a",
              "        4 file(s)     97,892 bytes",
              "        0 dir(s)   1,048,576 bytes free",
            ];
          } else if (cmd === "ver") {
            return "RETRO-OS Version 1.0";
          } else if (cmd === "date") {
            return new Date().toLocaleDateString();
          } else if (cmd === "cls") {
            return "Screen cleared";
          } else {
            return `Bad command or file name: ${cmd}`;
          }
        }}
      />
    </TerminalPreview>
  );
};

export { RetroTerminalPreview };
