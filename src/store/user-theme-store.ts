import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

const useThemeStore = create<ThemeState>((set) => {
  let initialDarkMode = true;
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    initialDarkMode = savedTheme === "dark" || (!savedTheme && true); // Default to dark
    document.documentElement.classList.toggle("dark", initialDarkMode);
  }
  return {
    isDarkMode: initialDarkMode,
    toggleDarkMode: () =>
      set((state) => {
        const newMode = !state.isDarkMode;
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", newMode ? "dark" : "light");
          document.documentElement.classList.toggle("dark", newMode);
        }
        return { isDarkMode: newMode };
      }),
    setDarkMode: (value: boolean) =>
      set(() => {
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", value ? "dark" : "light");
          document.documentElement.classList.toggle("dark", value);
        }
        return { isDarkMode: value };
      }),
  };
});

export default useThemeStore;
