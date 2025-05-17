"use client";

import React from "react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import LinkButton from "../../components/ui/link-button";
import { ArrowBigDown, MoveUpRight } from "lucide-react";
import Featured from "./featured";

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
      className="text-foreground mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between gap-3 lg:flex-row lg:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={childVariants}
        className="flex w-full flex-col items-start space-y-6 rounded-xl p-6 text-left text-white shadow-lg lg:w-[45%]"
      >
        <h1 className="text-6xl leading-snug font-bold">
          Craft With
          <br />
          <span className="text-blue-300">Precision</span>,
          <span className="text-yellow-300"> Power</span>, and
          <span className="text-green-300"> Purpose</span>
        </h1>
        <p className="max-w-md text-base leading-relaxed text-white/90">
          Build stunning, accessible components effortlessly with our
          developer-first UI library. Designed for speed, scalability, and style
          — so you can focus on what matters most.
        </p>
        <div className="flex items-center gap-4">
          <LinkButton
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-gray-100"
            href="/"
            lable="Browse Components"
            icon={MoveUpRight}
          />
          <LinkButton
            className="rounded-md bg-pink-300 px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-gray-100"
            href="/"
            lable="Browse Templates"
            icon={MoveUpRight}
          />
        </div>
        <Featured />
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
