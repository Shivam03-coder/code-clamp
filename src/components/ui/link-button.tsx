import { Link } from "next-view-transitions";
import React, { type FC } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type LinkButtonProps = {
  href: string;
  lable: string;
  className: string;
  icon: LucideIcon;
};

const LinkButton: FC<LinkButtonProps> = ({ href, lable, className, icon }) => {
  const Icons = icon;
  return (
    <motion.div
      initial={{
        boxShadow: "0 0 8px rgba(99, 102, 241, 0.5)",
      }}
      animate={{
        boxShadow: [
          "0 0 8px rgba(99, 102, 241, 0.5)",
          "0 0 12px rgba(99, 102, 241, 0.75)",
          "0 0 8px rgba(99, 102, 241, 0.5)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        boxShadow: "0 0 15px rgba(99, 102, 241, 1)",
        transition: { duration: 0.3 },
      }}
      className={cn("rounded-lg", className)}
    >
      <Link href={href}>
        <span className="flex items-center gap-2">
          {lable} <Icons size={14} />
        </span>
      </Link>
    </motion.div>
  );
};

export default LinkButton;
