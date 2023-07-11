"use client";
import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface props {
  children: JSX.Element;
  width?: "w-fit" | "w-full";
  delay?: number;
}

function Reveal({ children, width, delay }: props) {
  return (
    <div className={`${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: delay || 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
