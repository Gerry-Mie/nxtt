"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/components/styles";
import { staggerContainer } from "@/components/home/utils/motion";

const SectionWrapper = (
  Component: React.ComponentType,
  idName: string
): React.FC => {
  return function HOC() {
    // HOC implementation goes here
    return (
      <motion.div
        variants={staggerContainer(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.div>
    );
  };
};

export default SectionWrapper;
