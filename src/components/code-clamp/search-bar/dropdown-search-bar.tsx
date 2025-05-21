"use client";

import { useState, useRef, useEffect, type ComponentProps } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownSearchbarProps extends ComponentProps<typeof Input> {
  onSearch?: (query: string) => void;
  suggestions?: string[];
  className?: string;
}

function DropdownSearchbar({
  onSearch,
  suggestions = [],
  className,
}: DropdownSearchbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      onSearch?.(query);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      setIsExpanded(false);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    const filtered = searchQuery
      ? suggestions.filter((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : [];

    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [searchQuery, suggestions]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        if (!searchQuery) setIsExpanded(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchQuery]);

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      <div className="flex items-center">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="overflow-hidden"
            >
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="h-10 rounded-r-none border-r-0 focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  if (filteredSuggestions.length > 0) setShowSuggestions(true);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "h-10 w-10 p-0",
              isExpanded ? "rounded-l-none" : "rounded-full",
            )}
            onClick={() => (isExpanded ? handleSearch() : setIsExpanded(true))}
          >
            <Search className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-background absolute right-0 left-0 z-10 mt-1 max-h-60 overflow-auto rounded-md border p-1 shadow-md"
          >
            {filteredSuggestions.map((s, i) => (
              <div
                key={i}
                className="hover:bg-muted cursor-pointer rounded-sm px-3 py-2 text-sm"
                onClick={() => {
                  setSearchQuery(s);
                  handleSearch(s);
                }}
              >
                {s}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownSearchbar;
