import { type Metadata } from "next";

type MetadataOptions = {
  title?: string;
  description?: string;
};

export function generateMetadata({
  title,
  description,
}: MetadataOptions = {}): Metadata {
  const baseTitle = "Code-Clamp";
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Modern UI Component Library`;

  return {
    title: fullTitle,
    description:
      description ||
      "Code-Clamp is a sleek, accessible, and developer-friendly UI component library built for modern web applications using React and Tailwind CSS.",
  };
}
