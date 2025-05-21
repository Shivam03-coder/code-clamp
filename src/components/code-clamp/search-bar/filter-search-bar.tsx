"use client";

import type React from "react";

import { Search, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type FilterOption = {
  id: string;
  label: string;
};

interface FilterSearchBarProps extends ComponentProps<typeof Input>  {
  className?: string;
  onSearch?: (query: string, filters: string[]) => void;
  filterOptions?: FilterOption[];
  placeholder?: string;
}

function FilterSearchbar({
  className,
  onSearch,
  filterOptions = [],
  placeholder = "Search anything...",
}: FilterSearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if ((searchQuery.trim() || selectedFilters.length > 0) && onSearch) {
      onSearch(searchQuery, selectedFilters);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      setIsExpanded(false);
    }
  };

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
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
            <div className="flex">
              <Input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                className="h-10 rounded-r-none border-r-0 focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={() => {
                  if (!searchQuery && !isFilterOpen) setIsExpanded(false);
                }}
              />

              <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "h-10 rounded-none border-x-0",
                      selectedFilters.length > 0 && "bg-primary/10",
                    )}
                  >
                    <Filter
                      className={cn(
                        "h-4 w-4",
                        selectedFilters.length > 0 && "text-primary",
                      )}
                    />
                    {selectedFilters.length > 0 && (
                      <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px]">
                        {selectedFilters.length}
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-3" align="start">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Filters</h4>
                      {selectedFilters.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground h-auto p-0 text-xs"
                          onClick={clearFilters}
                        >
                          Clear all
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      {filterOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={option.id}
                            checked={selectedFilters.includes(option.id)}
                            onCheckedChange={() => toggleFilter(option.id)}
                          />
                          <Label
                            htmlFor={option.id}
                            className="text-sm font-normal"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-10 w-10 rounded-full p-0",
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
      </motion.div>

      {isExpanded && selectedFilters.length > 0 && (
        <div className="ml-2 flex flex-wrap gap-1">
          {selectedFilters.map((id) => {
            const option = filterOptions.find((opt) => opt.id === id);
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-primary/10 flex items-center rounded-full px-2 py-1 text-xs"
              >
                <span className="mr-1">{option?.label}</span>
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => toggleFilter(id)}
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FilterSearchbar;
