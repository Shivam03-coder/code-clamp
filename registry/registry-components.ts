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
  {
    name: "dropdown-search-bar",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "components/code-clamp/search-bar/dropdown-search-bar",
        type: "registry:component",
      },
    ],
  },
  {
    name: "filter-search-bar",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "components/code-clamp/search-bar/filter-search-bar.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "minimal-search-bar",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "components/code-clamp/search-bar/minimal-search-bar.tsx",
        type: "registry:component",
      },
    ],
  },
];
