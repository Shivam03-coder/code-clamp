import { type Metadata } from "next";
import "@/styles/globals.css";
import { appfonts } from "@/fonts";
import AppProvider from "@/providers/app-provider";
import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
export const metadata: Metadata = {
  title: "Code-Clamp | Modern UI Component Library",
  description:
    "Code-Clamp is a sleek, accessible, and developer-friendly UI component library built for modern web applications using React and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en" className={cn("dark", appfonts)}>
        <body>
          <RootProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AppProvider>{children}</AppProvider>
            </ThemeProvider>
          </RootProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
