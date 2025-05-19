"use client"

import type React from "react"

import { Search } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function DropdownSearchbar({
  className,
  onSearch,
  suggestions = [],
}: {
  className?: string
  onSearch?: (query: string) => void
  suggestions?: string[]
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSearch = (query: string = searchQuery) => {
    if (query.trim() && onSearch) {
      onSearch(query)
      setShowSuggestions(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  useEffect(() => {
    if (searchQuery) {
      const filtered = suggestions.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
      setFilteredSuggestions(filtered)
      setShowSuggestions(filtered.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }, [searchQuery, suggestions])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
        if (!searchQuery) setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchQuery])

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
                placeholder="Search anything..."
                className="h-10 rounded-r-none border-r-0 focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  if (filteredSuggestions.length > 0) {
                    setShowSuggestions(true)
                  }
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
            className={cn("h-10 w-10 rounded-full p-0", isExpanded && "rounded-l-none")}
            onClick={() => {
              if (isExpanded) {
                handleSearch()
              } else {
                setIsExpanded(true)
              }
            }}
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
            className="absolute left-0 right-0 mt-1 max-h-60 overflow-auto rounded-md border bg-background p-1 shadow-md"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-sm px-3 py-2 text-sm hover:bg-muted"
                onClick={() => {
                  setSearchQuery(suggestion)
                  handleSearch(suggestion)
                }}
              >
                {suggestion}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropdownSearchbar
