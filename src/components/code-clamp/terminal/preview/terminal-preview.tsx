"use client";
import React, { type ReactNode } from "react";

const TerminalPreview = ({ children }: { children: ReactNode }) => {
  return <div className="w-[90%]">{children}</div>;
};

export default TerminalPreview;
