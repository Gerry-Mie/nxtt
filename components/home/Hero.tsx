"use client";
import React, { useEffect, useRef, useState } from "react";
// import ComputerSvg from "@/assets/ComputerSvg";
// import ComputerFullSvg from "@/assets/ComputerFullSvg";
import ComputerCanvas from "./3d/ComputerCanvas";
import { styles } from "@/components/styles";
import { motion } from "framer-motion";
import Lottie from "lottie-web";
import loading from "@/animation/loading.json";

function Hero() {
  const [progress, setProgress] = useState(0);

  const animationContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animationContainer.current) {
      Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loading,
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className="w-5 h-5 rounded-full bg-[#96FD15]" /> */}
          {/* <div className="w-1 sm:h-80 h-40 bg-gradient-to-r green-gradient" /> */}
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Innovate with <br />
            <span className="text-[#96FD15]">Next Tech.</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2`}>
            Innovate, Collaborate, Code
          </p> */}
        </div>
      </div>

      {/* <div className="xl:w-2/4 w-full flex flex-col items-center lg:items-end h-96"></div> */}
      {/* <div hidden={progress >= 96} className="p-96">
        <div ref={animationContainer} />
      </div> */}
      <ComputerCanvas setProgress={setProgress} />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center translate-y-44">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
