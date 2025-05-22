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
  // spinner
  {
    name: "dot-spinner",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/spinner/dot-spinner.tsx",
        type: "registry:component",
      },
    ],
  },
  // spinner
  {
    name: "circle-spinner",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/spinner/circle-spinner.tsx",
        type: "registry:component",
      },
    ],
  },
  // spinner
  {
    name: "progress-spinner",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/spinner/progress-spinner.tsx",
        type: "registry:component",
      },
    ],
  },
  // spinner
  {
    name: "wave-spinner",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/spinner/wave-spinner.tsx",
        type: "registry:component",
      },
    ],
  },

  // terminal
  {
    name: "base-terminal",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/terminal/base-terminal.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "code-terminal",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/terminal/code-terminal.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "interactive-terminal",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/terminal/interactive-terminal.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "matrix-terminal",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/terminal/matrix-terminal.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "retro-terminal",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "components/code-clamp/terminal/retro-terminal.tsx",
        type: "registry:component",
      },
    ],
  },
];
