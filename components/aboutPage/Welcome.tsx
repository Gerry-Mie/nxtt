"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import LogoBG from "@/assets/about/LogoBG";

function Welcome() {
  return (
    <section className="w-full min-h-screen h-screen flex items-center justify-center pt-[83px] flex-col relative">
      <div className="absolute top-1/2 max-w-full pointer-events-none translate-y-[-50%]">
        <LogoBG />
      </div>
      <motion.p
        className={`${styles.sectionHeadText} text-center`}
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Welcome to next tech
      </motion.p>
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
