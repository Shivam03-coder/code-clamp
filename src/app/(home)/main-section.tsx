import React from "react";
import { Code, Smartphone, Zap, Palette, Settings, Shield } from "lucide-react";
import MainCard from "./main-cards";
import SendMail from "./send-mail";

const MianSection: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Developer-First",
      description:
        "Built by developers, for developers. Intuitive APIs with minimal setup required.",
      color: "bg-blue-500",
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description:
        "Components adapt seamlessly to any device or screen size out of the box.",
      color: "bg-yellow-500",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed with minimal bundle size and efficient rendering.",
      color: "bg-green-500",
    },
    {
      icon: Palette,
      title: "Customizable",
      description:
        "Easy theming system that integrates with your design tokens and brand.",
      color: "bg-purple-500",
    },
    {
      icon: Settings,
      title: "Composable",
      description:
        "Mix and match components to create custom interfaces with ease.",
      color: "bg-pink-500",
    },
    {
      icon: Shield,
      title: "Accessible",
      description:
        "WCAG compliant components with keyboard navigation and screen reader support.",
      color: "bg-orange-500",
    },
  ];

  const frameworks = [
    {
      name: "React",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      color: "text-[#61DAFB]",
    },
    {
      name: "Next.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      color: "text-white",
    },
    {
      name: "Tailwind CSS",
      logo: "/tailwind.png",
      color: "text-[#38B2AC]",
    },
    {
      name: "Framer Motion",
      logo: "/framer.png",
      color: "text-[#FF0080]",
    },
    {
      name: "shadcn/ui",
      logo: "https://avatars.githubusercontent.com/u/124599?v=4",
      color: "text-white",
    },
  ];

  return (
    <section className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-white">Powerful Features for </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Modern Development
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Everything you need to build beautiful, functional interfaces
            without reinventing the wheel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <MainCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Built With Modern Technologies
            </h3>
            <p className="mx-auto max-w-2xl text-gray-400">
              Leveraging the best tools in the ecosystem to deliver a premium
              development experience.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 transition-transform hover:scale-105"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center ${framework.color}`}
                >
                  <img
                    src={framework.logo}
                    alt={`${framework.name} logo`}
                    className="h-12 w-12"
                  />
                </div>
                <span className="mt-2 font-medium text-white">
                  {framework.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <SendMail />
      </div>
    </section>
  );
};

export default MianSection;
