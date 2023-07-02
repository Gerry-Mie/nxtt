"use client";
import React, { useEffect, useState } from "react";
import ComputerSvg from "@/app/assets/ComputerSvg";
import ComputerFullSvg from "@/app/assets/ComputerFullSvg";
import ComputerCanvas from "./3d/ComputerCanvas";
import { styles } from "@/app/styles";
import { motion } from "framer-motion";

function Hero() {
  const [isMobile, setIsMobile] = useState(
    window?.innerWidth <= 1023 ? true : false
  );

  useEffect(() => {
    window?.addEventListener("resize", () => {
      if (window?.innerWidth <= 1023) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#96FD15]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-r green-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Welcome to <span className="text-[#96FD15]">Next Technologies</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Innovate, Collaborate, Code
          </p>
        </div>
      </div>

      {/* <div className="xl:w-2/4 w-full flex flex-col items-center lg:items-end h-96"></div> */}
      <ComputerCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center translate-y-44">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
