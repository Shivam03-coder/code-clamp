import Header from "@/components/landing/header";
import AnnouncementBanner from "@/components/shared/sticky-banner";
import { generateMetadata } from "@/lib/meta-data";
import React from "react";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Welcome to Code-Clamp – a modern, accessible, and fully customizable UI component library for building stunning React and Tailwind CSS applications with ease.",
});

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="root">
      <AnnouncementBanner />
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
