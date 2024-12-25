"use client"
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export const BrandShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Scale and opacity animations
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div
      ref={ref}
      className="w-full h-screen flex flex-col items-center justify-center relative"
    >
      <p>Trust isn’t given, it’s earned</p>
      <h1 className="text-[2.8rem] leading-none font-bold mt-2 mb-4 w-[50%] text-center">
        The world’s biggest brands rely on can’t-fail sustainable
        infrastructure.
      </h1>

      <motion.div
        style={{ opacity, scale }}
        className="w-full mx-auto max-w-8xl h-full absolute hidden md:block"
      >
        <motion.img
          src="/Brands/BrandLogo1.webp"
          style={{ y }}
          className="absolute w-32 left-40 top-72"
        />
        <motion.img
          src="/Brands/BrandLogo2.svg"
          style={{ y }}
          className="absolute w-32 left-20 top-40"
        />
        <motion.img
          src="/Brands/BrandLogo3.png"
          style={{ y }}
          className="absolute w-32 left-64 bottom-40"
        />
        <motion.img
          src="/Brands/BrandLogo4.png"
          style={{ y }}
          className="absolute w-32 left-20 bottom-72"
        />
        <motion.img
          src="/Brands/BrandLogo5.png"
          style={{ y }}
          className="absolute w-32 right-40 top-72"
        />
        <motion.img
          src="/Brands/BrandLogo6.png"
          style={{ y }}
          className="absolute w-32 right-20 top-40"
        />
        <motion.img
          src="/Brands/BrandLogo7.png"
          style={{ y }}
          className="absolute w-32 right-64 bottom-40"
        />
        <motion.img
          src="/Brands/BrandLogo8.png"
          style={{ y }}
          className="absolute w-32 right-20 bottom-72"
        />
      </motion.div>
    </div>
  );
};
