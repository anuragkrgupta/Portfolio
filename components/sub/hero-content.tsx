"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* LEFT CONTENT */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />

          <h1 className="Welcome-text text-[13px]">
            Full-Stack Developer • AI Builder • Computer Vision Enthusiast
          </h1>
        </motion.div>

        {/* NAME */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="text-7xl font-extrabold text-white mt-6"
        >
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400">
            Anurag Kumar
          </span>
        </motion.div>

        {/* MAIN HEADLINE */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-5xl font-bold text-white max-w-[700px]"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              intelligent systems
            </span>{" "}
            and scalable digital products.
          </span>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[650px]"
        >
          I build full-stack applications, AI-powered tools, and accessibility-focused solutions —
          from Evotify, a secure online voting platform, to VISION, a real-time object detection
          system designed for visually impaired users.
        </motion.p>

        {/* BUTTON */}
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px]"
        >
          Explore My Work
        </motion.a>

      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>

    </motion.div>
  );
};