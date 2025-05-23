![Screenshot from 2025-05-23 12-18-07](https://github.com/user-attachments/assets/1b89efa2-98e0-4b2e-a1eb-4e60748018e7)
<div align="center">
  <h1>CodeClamp UI</h1>
  <p>The Ultimate Animated UI Component Library</p>
  
  [![npm version](https://img.shields.io/npm/v/codeclamp-ui.svg?style=flat-square)](https://www.npmjs.com/package/codeclamp-ui)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black)](https://www.framer.com/motion/)
</div>

## 🌟 Overview

CodeClamp was born from a simple observation: **developers spend too much time reinventing UI wheels**. We've created a component library that adapts to your workflow, not the other way around.

> **Our Core Belief:** A component library should enhance your development experience, not complicate it.

## ✨ Key Features

- **🎭 Animation-First Design** - Every component is designed with motion in mind from day one
- **🧩 Composable Architecture** - Mix and match components to create complex interfaces
- **📱 Responsive by Default** - All components work beautifully across devices
- **♿ Accessibility Built-in** - WCAG compliant with keyboard navigation and screen reader support
- **🚀 Performance Optimized** - Smooth 60fps animations with minimal bundle size
- **🎨 Customizable** - Easily adapt components to match your brand
- **📦 Zero Config** - No complex setup, just install and start building

## 📦 Installation

### 1. Install Essential Utilities

\`\`\`bash
# Using npm
npx shadcn@latest add https://ui.codesnipet.dev/r/utils.json

# Using yarn
yarn dlx shadcn@latest add https://ui.codesnipet.dev/r/utils.json

# Using pnpm
pnpm dlx shadcn@latest add https://ui.codesnipet.dev/r/utils.json

# Using bun
bunx shadcn@latest add https://ui.codesnipet.dev/r/utils.json
\`\`\`

### 2. Add Components

Choose any component and add it to your project with a single command:

\`\`\`bash
npx shadcn@latest add https://ui.codesnipet.dev/r/card-05.json
\`\`\`

### 3. Use It Immediately

\`\`\`jsx
import Card05 from "@/components/codesnippetui/card-05";

export default function Page() {
    return <Card05 />;
}
\`\`\`

## 🧩 Component Categories

CodeClamp UI offers a wide range of components across different categories:

### Layout Components
- **Cards** - Animated containers with hover effects, flip animations, and glow effects
- **Containers** - Responsive wrappers with smooth transitions
- **Grids** - Dynamic layouts with staggered animations
- **Dividers** - Animated separators with various styles

### Input Components
- **Buttons** - Multiple animation variants (pulse, ripple, magnetic, glow, bounce)
- **Checkboxes** - Animated checkboxes with bounce, scale, swipe, and jelly effects
- **Radio Buttons** - Smooth selection animations
- **Text Inputs** - Focus animations and validation states
- **Select Menus** - Dropdown animations with smooth transitions

### Feedback Components
- **Alerts** - Slide-in notifications with auto-dismiss
- **Toasts** - Stack animations with gesture support
- **Progress Indicators** - Smooth progress animations
- **Spinners** - Multiple loading animation styles (circle, dot, pulse, wave)

### Navigation Components
- **Menus** - Slide and fade animations
- **Tabs** - Smooth tab switching with indicators
- **Pagination** - Animated page transitions
- **Breadcrumbs** - Progressive disclosure animations

### Display Components
- **Tooltips** - Smooth hover animations
- **Badges** - Pulse and glow effects
- **Avatars** - Hover and loading states
- **Icons** - Rotation and morphing animations

### Advanced Components
- **Dialogs** - Multiple animation variants (fade, scale, slide, flip, drawer)
- **Drawers** - Side panel animations from all directions
- **Accordions** - Smooth expand/collapse animations
- **Carousels** - Touch-friendly slide animations

## 🎬 Animation Variants

Each component comes with multiple animation variants:

- **Fade** - Smooth opacity transitions for subtle effects
- **Scale** - Size transformations for emphasis
- **Slide** - Directional movements from any edge
- **Bounce** - Playful, elastic animations for engagement
- **Flip** - 3D rotation effects for card-like interactions
- **Glow** - Light-based hover effects for modern UIs
- **Jelly** - Organic, bouncy animations for playful interfaces

## 📚 Documentation

For comprehensive documentation, visit our [official documentation site](https://codeclamp.dev/docs).

### Quick Links
- [Getting Started](https://codeclamp.dev/docs/getting-started) - Installation and setup guide
- [Component API](https://codeclamp.dev/docs/api) - Complete props reference
- [Animation Guide](https://codeclamp.dev/docs/animations) - Animation principles and customization
- [Customization](https://codeclamp.dev/docs/customization) - Theming and styling guide
- [Examples](https://codeclamp.dev/examples) - Real-world usage examples

## 🛠️ Usage Examples

### Basic Card with Hover Animation

\`\`\`jsx
import { HoverCard } from "@/components/ui/animated-card";

export default function CardExample() {
  return (
    <HoverCard
      title="My Card"
      description="This card animates on hover"
      hoverScale={1.05}
      hoverRotate={2}
      hoverElevation={10}
    >
      <p>Card content goes here</p>
    </HoverCard>
  );
}
\`\`\`

### Animated Dialog

\`\`\`jsx
import { ScaleDialog } from "@/components/ui/animated-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogExample() {
  return (
    <ScaleDialog
      title="Create New Project"
      description="Add the details for your new project."
      triggerText="Open Dialog"
    >
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input id="description" className="col-span-3" />
        </div>
      </div>
    </ScaleDialog>
  );
}
\`\`\`

### Animated Checkbox Form

\`\`\`jsx
import { JellyCheckbox } from "@/components/ui/animated-checkbox";

export default function FormExample() {
  return (
    <form className="space-y-4">
      <JellyCheckbox 
        label="Accept terms and conditions" 
        description="You agree to our Terms of Service and Privacy Policy."
      />
      
      <JellyCheckbox 
        label="Subscribe to newsletter" 
        description="Receive updates about our products and services."
        defaultChecked
      />
      
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
}
\`\`\`

### Spinner Loading States

\`\`\`jsx
import { CircleSpinner, DotSpinner, PulseSpinner } from "@/components/ui/animated-spinner";

export default function LoadingExample() {
  return (
    <div className="flex gap-4">
      <CircleSpinner size="sm" />
      <DotSpinner size="md" color="blue" />
      <PulseSpinner size="lg" />
    </div>
  );
}
\`\`\`

## 🏗️ Project Structure

\`\`\`
codeclamp-ui/
├── components/
│   ├── ui/
│   │   ├── animated-card/
│   │   ├── animated-dialog/
│   │   ├── animated-checkbox/
│   │   ├── animated-spinner/
│   │   └── ...
│   └── mdx/
├── docs/
├── examples/
├── lib/
└── styles/
\`\`\`

## 🤝 Contributing

We welcome contributions from the community! Please check out our [Contributing Guide](CONTRIBUTING.md) for guidelines on how to proceed.

### Development Setup

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/codeclamp/codeclamp-ui.git
   cd codeclamp-ui
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Run tests**
   \`\`\`bash
   npm run test
   \`\`\`

### Contributing Guidelines

- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)
- Check existing issues before creating new ones
- Write clear commit messages
- Add tests for new features
- Update documentation for any changes

## 🧪 Testing

We use a comprehensive testing strategy:

- **Unit Tests** - Jest and React Testing Library
- **Visual Regression Tests** - Chromatic
- **Accessibility Tests** - axe-core
- **Performance Tests** - Lighthouse CI

\`\`\`bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run accessibility tests
npm run test:a11y

# Run visual regression tests
npm run test:visual
\`\`\`

## 📊 Performance

CodeClamp UI is built with performance in mind:

- **Bundle Size** - Tree-shakeable components, minimal runtime overhead
- **Animation Performance** - Hardware-accelerated animations, 60fps target
- **Loading Speed** - Lazy loading, code splitting, optimized assets
- **Memory Usage** - Efficient cleanup, no memory leaks

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome Android (latest)

## 📄 License

CodeClamp UI is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For the animation library
- [shadcn/ui](https://ui.shadcn.com/) - For inspiration and some base components
- [Lucide Icons](https://lucide.dev/) - For the beautiful icon set
- [Radix UI](https://www.radix-ui.com/) - For accessible component primitives

## 📈 Roadmap

- [ ] **Q1 2024** - Mobile-first components
- [ ] **Q2 2024** - Advanced data visualization components
- [ ] **Q3 2024** - AI-powered component generation
- [ ] **Q4 2024** - Design system integration tools

## 💬 Community

Join our community to get help, share ideas, and contribute:

- [Discord Server](https://discord.gg/codeclamp) - Real-time chat and support
- [GitHub Discussions](https://github.com/codeclamp/codeclamp-ui/discussions) - Feature requests and Q&A
- [Twitter](https://twitter.com/codeclamp) - Updates and announcements

---

<p align="center">
  Made with ❤️ by the CodeClamp Team
</p>

<p align="center">
  <a href="https://twitter.com/codeclamp">Twitter</a> •
  <a href="https://github.com/codeclamp">GitHub</a> •
  <a href="https://discord.gg/codeclamp">Discord</a> •
  <a href="https://codeclamp.dev">Website</a>
</p>
