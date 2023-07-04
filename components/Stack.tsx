"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "./home/utils/motion";
import { styles } from "./styles";
import { SectionWrapper } from "@/hoc";
import BallCanvas from "./home/canvas/Ball";
import { technologies } from "./home/constants";

function Stack() {
  return (
    <>
      <motion.div variants={textVariant(0)} className="mt-0">
        <h1 className={`${styles.heroHeadText} text-center`}>
          Be our
          <span className="text-[#96FD15]"> Next</span> Client
        </h1>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-28">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon.src} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Stack, "stack");
