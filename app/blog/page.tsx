"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Blog = () => {
  const tempoObject = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="h-screen p-10 relative mt-[83px] flex flex-wrap justify-center gap-12">
      {tempoObject.map(() => (
        <div className="z-0">
          <div className="w-[296px] h-[301px] border-2 border-[#080e42] opacity-[0.1] rounded"></div>
        </div>
      ))}

      <div className="z-[1] fixed top-0 left-0 flex items-center flex-col justify-center w-full h-full">
        <AnimatePresence>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.15 }}
            className={` font-extrabold text-7xl lg:text-9xl`}
          >
            COMING
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-normal text-7xl lg:text-9xl"
          >
            SOON
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;
