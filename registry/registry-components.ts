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
        path: "components/code-clamp/search-bar/colorful-search-bar.tsx",
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
        path: "components/code-clamp/search-bar/dropdown-search-bar.tsx",
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
  {
    name: "base-dialog",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["dialog"],
    files: [
      {
        path: "components/code-clamp/dialog/base-dialog.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "fade-dialog",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["dialog"],
    files: [
      {
        path: "components/code-clamp/dialog/fade-dialog.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "flip-dialog",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["dialog"],
    files: [
      {
        path: "components/code-clamp/dialog/flip-dialog.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "scale-dialog",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["dialog"],
    files: [
      {
        path: "components/code-clamp/dialog/scale-dialog.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "glow-button",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["dialog"],
    files: [
      {
        path: "components/code-clamp/button/glow-button.tsx",
        type: "registry:component",
      },
    ],
  },

  // button
    {
    name: "base-button",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/code-clamp/button/base-button.tsx",
        type: "registry:component",
      },
    ],
  },
    {
    name: "bounce-button",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/code-clamp/button/bounce-button.tsx",
        type: "registry:component",
      },
    ],
  },
    {
    name: "glow-button",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/code-clamp/button/glow-button.tsx",
        type: "registry:component",
      },
    ],
  },
    {
    name: "magnetic-button",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/code-clamp/button/magnetic-button.tsx",
        type: "registry:component",
      },
    ],
  },
    {
    name: "pulse-button",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/code-clamp/button/pulse-button.tsx",
        type: "registry:component",
      },
    ],
  },
    {
    name: "ripple-button",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/code-clamp/button/ripple-button.tsx",
        type: "registry:component",
      },
    ],
  },
];
