import { type Metadata } from "next";
import "@/styles/globals.css";
import { appfonts } from "@/fonts";
import AppProvider from "@/components/shared/app-provider";
import { ViewTransitions } from "next-view-transitions";
export const metadata: Metadata = {
  title: "Code-Clamp | Modern UI Component Library",
  description:
    "Code-Clamp is a sleek, accessible, and developer-friendly UI component library built for modern web applications using React and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="en" className={appfonts}>
        <body>
          <AppProvider>{children}</AppProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
