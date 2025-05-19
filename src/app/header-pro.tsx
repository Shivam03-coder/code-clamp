"use client";

import {
  ArrowUpRight,
  PartyPopper,
  Rocket,
  Github,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderContent {
  text: string;
  productName: string;
  link: string;
}

export function HeaderPro() {
  const [content, setContent] = useState<HeaderContent>({
    text: "",
    productName: "",
    link: "",
  });

  useEffect(() => {
    const random = Math.random();
    if (random < 0.75) {
      setContent({
        text: "Build apps faster",
        productName: "Code-Clamp Boilerplate",
        link: "#",
      });
    } else {
      setContent({
        text: "Explore modern components",
        productName: "Code-Clamp UI Pro",
        link: "#",
      });
    }
  }, []);

  return (
    <header className="bg-background/60 z-50 flex w-full items-center justify-between border-b border-zinc-200 px-4 py-2 backdrop-blur-md dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <Link
          href={content.link}
          target="_blank"
          className="group flex items-center gap-2 rounded-lg border border-fuchsia-500/20 px-3 py-1.5 text-sm font-medium text-zinc-900 transition hover:border-fuchsia-500 hover:shadow-md dark:text-zinc-100"
        >
          {content.productName === "Code-Clamp UI Pro" ? (
            <Sparkles className="h-4 w-4 animate-pulse text-fuchsia-500" />
          ) : (
            <Rocket className="h-4 w-4 animate-pulse text-fuchsia-500" />
          )}
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-600 bg-clip-text font-semibold tracking-tight text-transparent">
            {content.text}
          </span>
          <div className="flex items-center gap-1 rounded-md bg-zinc-900 px-2 py-0.5 dark:bg-zinc-100">
            <span className="text-sm text-white dark:text-zinc-900">
              {content.productName}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px] dark:text-zinc-900" />
          </div>
        </Link>

        <Link
          href="https://github.com/Shivam03-coder/code-clamp"
          target="_blank"
          className="hidden items-center justify-center rounded-lg bg-zinc-900 p-2 text-white transition hover:bg-zinc-800 md:inline-flex dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <Github className="h-4 w-4" />
        </Link>

        <Link
          href="#"
          target="_blank"
          className="hidden items-center justify-center rounded-lg bg-zinc-900 p-2 text-white transition hover:bg-zinc-800 md:inline-flex dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <X className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
