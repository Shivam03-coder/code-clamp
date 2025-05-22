import React from "react";
import { DivideIcon, type LucideIcon } from "lucide-react";

interface MainCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const MainCard: React.FC<MainCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-[rgba(0,0,0,0.2)]">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${color}`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default MainCard;
