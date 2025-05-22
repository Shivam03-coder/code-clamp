"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowBigDown, MoveUpRight } from "lucide-react";
import Featured from "./featured";
import LinkButton from "@/components/ui/link-button";
import Image from "next/image";

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
            href="/docs"
            lable="Browse Components"
            icon={MoveUpRight}
          />
          <LinkButton
            className="rounded-md bg-pink-300 px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-gray-100"
            href="/docs"
            lable="Browse Templates"
            icon={MoveUpRight}
          />
        </div>
        <Featured />
      </motion.div>

      <motion.div
        variants={childVariants}
        className="relative flex w-full flex-col items-start space-y-8 text-left lg:w-[45%]"
      >
      <div className="relative p-[3px] rounded-2xl bg-gradient-to-tr from-pink-400 via-teal-300 to-orange-300">
  <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl bg-black p-6">
    <Image src="/1.png" alt="cardui" height={600} width={600} />
    <h1 className="text-5xl font-poppins text-center">
      <span className="text-pink-300">BUILD</span>,
      <span className="text-teal-300"> CRAZY</span>,
      <span className="text-orange-300"> CRAZY</span>
    </h1>
  </div>
</div>

      </motion.div>
    </motion.div>
  );
};

export default Hero;
