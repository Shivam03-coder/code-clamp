"use client";
import { Moon, Sun } from "lucide-react";
import useThemeStore from "@/store/user-theme-store";
import { useEffect } from "react";
const ThemeToggle = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setDarkMode = useThemeStore((state) => state.setDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    } else if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(prefersDark);
    }
  }, [setDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="text-primary border-primary rounded-full border p-2 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
