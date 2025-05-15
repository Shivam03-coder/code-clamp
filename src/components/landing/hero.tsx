"use client";

import React from "react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <motion.div
      className="text-foreground mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between gap-3 lg:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={childVariants}
        className="flex w-full flex-col items-start space-y-8 text-left lg:w-[45%]"
      >
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius,
          unde laborum minima ullam autem recusandae...
        </p>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="flex w-full flex-col items-start space-y-8 text-left lg:w-[45%]"
      >
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius,
          unde laborum minima ullam autem recusandae...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
