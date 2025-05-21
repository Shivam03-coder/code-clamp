"use client";

import type React from "react";

import { Search } from "lucide-react";
import { useState, useRef, useEffect, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MinimalSearchBarProps extends ComponentProps<typeof Input> {
  className?: string;
  onSearch?: (query: string) => void;
  placeholder?: string;
}

function MinimalSearchBar({
  className,
  onSearch,
  placeholder = "Search...",
}: MinimalSearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
      {isExpanded && (
        <div className="overflow-hidden transition-all duration-300 ease-in-out">
          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            className="h-10 rounded-r-none border-r-0 focus-visible:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              if (!searchQuery) setIsExpanded(false);
            }}
          />
        </div>
      )}

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "h-10 w-10 rounded-full p-0 transition-all duration-300",
          isExpanded && "rounded-l-none",
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
      </Button>
    </div>
  );
}

export default MinimalSearchBar;
