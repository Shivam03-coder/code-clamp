import { FeatureLableData } from "@/constants";
import Image from "next/image";
import React from "react";

const iconGlowClasses = {
  'React': 'hover-glow-react',
  'Tailwind': 'hover-glow-tailwind',
  'Framer': 'hover-glow-framer',
  'Shadcn-Ui': 'hover-glow-shadcn',
};

const Featured = () => {
  return (
    <div className="px-2 py-1">
      <div className="flex items-center gap-x-5">
        {FeatureLableData.map(({ dimension, image, title }) => {
          const glowClass = iconGlowClasses[title as keyof typeof iconGlowClasses] || '';
          
          return (
            <div
              key={title}
              className={`flex cursor-pointer size-[46px] flex-col items-center justify-center transition-all ${glowClass}`}
            >
              <Image
                src={image as string}
                height={dimension}
                width={dimension}
                alt={title}
                className="transition-transform hover:scale-110"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;