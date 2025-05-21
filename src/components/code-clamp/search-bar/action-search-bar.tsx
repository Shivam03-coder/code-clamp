"use client";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchbarProps extends ComponentProps<typeof Input> {
  onSearch?: (query: string) => void;
  containerClassName?: string;
  className?: string;
}

function ActionSearchbar({
  onSearch,
  className,
  containerClassName,
  value,
  onChange,
  ...inputProps
}: SearchbarProps) {
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
              placeholder="Search anything..."
              className="h-10 rounded-r-none border-r-0 focus-visible:ring-0"
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
    </div>
  );
}

export default ActionSearchbar;
