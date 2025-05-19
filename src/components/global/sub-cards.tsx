import { Minimize, ChevronDown, Palette, Zap, Filter } from "lucide-react";

const cards = [
  {
    href: "/docs/components/dropdown-search-bar",
    title: "Dropdown",
    icon: <ChevronDown className="text-primary h-5 w-5" />,
    description: "Search with integrated dropdown filters",
  },
  {
    href: "/docs/components/colorful-search-bar",
    title: "Colorful",
    icon: <Palette className="text-primary h-5 w-5" />,
    description: "Vibrant, customizable color schemes",
  },
  {
    href: "/docs/components/action-search-bar",
    title: "Action",
    icon: <Zap className="text-primary h-5 w-5" />,
    description: "Search with action buttons",
  },
  {
    href: "/docs/components/filter-search-bar",
    title: "Filter",
    icon: <Filter className="text-primary h-5 w-5" />,
    description: "Advanced filtering capabilities",
  },
];

export default function SearchBarCards() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ href, title, icon, description }) => (
        <a
          key={title}
          href={href}
          className="group border-border bg-card hover:border-primary relative flex flex-col gap-2 rounded-2xl border p-6 transition hover:shadow-md"
        >
          <div className="flex items-center gap-2 text-lg font-semibold">
            {icon}
            <span>{title}</span>
          </div>
          <p className="text-muted-foreground text-sm">{description}</p>
        </a>
      ))}
    </div>
  );
}
