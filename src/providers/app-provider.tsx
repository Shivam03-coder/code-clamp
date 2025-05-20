"use client";

import { useEffect } from "react";
import useThemeStore from "@/store/user-theme-store";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="flex min-h-screen w-full">
      <main className="flex w-full flex-col">{children}</main>
    </div>
  );
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <Toaster position="top-right" richColors closeButton />
      <AppLayout>{children}</AppLayout>
    </NuqsAdapter>
  );
};

export default AppProvider;
