"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import LogoBG from "@/assets/about/LogoBG";
import NextOpacity from "@/assets/newLogo/NextOpacity";
import NextXSVG from "@/assets/newLogo/NextXSVG";

function Welcome() {
  return (
    <section className="w-full min-h-screen h-screen flex items-center justify-center pt-[83px] flex-col relative">
      <div className="absolute top-1/2 max-w-full pointer-events-none translate-y-[-50%]">
        <NextOpacity />
        {/* <LogoBG /> */}
      </div>
      <motion.div
        className="flex items-center justify-center gap-4 flex-col md:flex-row lg:flex-row"
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <motion.p
          className={`lg:text-[56px] text-[46px] text-center uppercase font-extrabold text-[#262626]`}
        >
          Welcome to
        </motion.p>
        <NextXSVG />
      </motion.div>

      <motion.p
        className={`${styles.sectionSubTextTight} text-center`}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        We are a passionate team of technology enthusiasts committed to
        empowering businesses in the digital world.
      </motion.p>
    </section>
  );
}

export default Welcome;
