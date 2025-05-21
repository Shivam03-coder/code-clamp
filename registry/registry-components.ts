import type { Registry } from "./schema";

export const component: Registry = [
  {
    name: "action-search-bar",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "components/code-clamp/search-bar/action-search-bar.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "colorful-search-bar",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "components/code-clamp/search-bar/colorful-search-bar",
        type: "registry:component",
      },
    ],
  },
 
];
