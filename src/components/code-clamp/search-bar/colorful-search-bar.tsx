"use client";

import type React from "react";

import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type ColorScheme = "blue" | "purple" | "green" | "amber" | "rose";

const colorSchemes = {
  blue: {
    button: "bg-blue-500 hover:bg-blue-600 text-white",
    input: "border-blue-300 focus:border-blue-500",
    shadow: "shadow-blue-200",
  },
  purple: {
    button: "bg-purple-500 hover:bg-purple-600 text-white",
    input: "border-purple-300 focus:border-purple-500",
    shadow: "shadow-purple-200",
  },
  green: {
    button: "bg-emerald-500 hover:bg-emerald-600 text-white",
    input: "border-emerald-300 focus:border-emerald-500",
    shadow: "shadow-emerald-200",
  },
  amber: {
    button: "bg-amber-500 hover:bg-amber-600 text-white",
    input: "border-amber-300 focus:border-amber-500",
    shadow: "shadow-amber-200",
  },
  rose: {
    button: "bg-rose-500 hover:bg-rose-600 text-white",
    input: "border-rose-300 focus:border-rose-500",
    shadow: "shadow-rose-200",
  },
};

function ColorfulSearchbar({
  className,
  onSearch,
  colorScheme = "blue",
}: {
  className?: string;
  onSearch?: (query: string) => void;
  colorScheme?: ColorScheme;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const colors = colorSchemes[colorScheme];

  const handleSearch = () => {
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  return (
    <div className={cn("relative flex items-center", className)}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="overflow-hidden"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search anything..."
              className={cn(
                "h-10 rounded-l-md border px-3 py-2 focus:outline-none",
                `${colors.input} ${colors.shadow}`,
                "shadow-sm transition-shadow duration-300",
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => {
                if (!searchQuery) setIsExpanded(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "flex h-10 items-center justify-center p-0 transition-all duration-300",
          isExpanded ? "rounded-l-none rounded-r-md px-3" : "w-10 rounded-full",
          colors.button,
        )}
        onClick={() => {
          if (isExpanded) {
            handleSearch();
          } else {
            setIsExpanded(true);
          }
        }}
      >
        <Search className="h-4 w-4" />
      </motion.button>
    </div>
  );
}

export default ColorfulSearchbar;
