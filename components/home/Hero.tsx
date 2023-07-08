"use client";
import React, { useEffect, useRef, useState } from "react";
// import ComputerSvg from "@/assets/ComputerSvg";
// import ComputerFullSvg from "@/assets/ComputerFullSvg";
import ComputerCanvas from "./3d/ComputerCanvas";
import { styles } from "@/components/styles";
import { motion } from "framer-motion";
import Lottie from "lottie-web";
import loading from "@/animation/loading.json";
import BoxSmall from "./BoxSmall";

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
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-0">
        {/* <div className="circle-animation"></div>
        <div className="circle-animation2"></div> */}
      </div>
      <div className="w-full h-full absolute top-0 left-0 backdrop-blur-3xl z-10 flex flex-col justify-center items-center pt-[83px] gap-12">
        <div className="lg:w-[70%] flex flex-col items-center justify-center px-9">
          <h1 className={`${styles.heroHeadText} text-center`}>
            INNOVATE. EVOLVE, SUCCEED
          </h1>
          <p className={`${styles.heroSubText} text-center`}>
            Welcome to the Future of IT Services
          </p>
          <p className={`${styles.smallText} text-center mt-2`}>
            Revolutionize the IT industry with our innovative solutions at Next
            Tech. Thrive in the ever-changing digital landscape with our passion
            for excellence and commitment to staying ahead.
          </p>
        </div>
        <a
          href="#contact"
          className="text-secondary gradient-button duration-300 px-11 py-4"
        >
          Contact Us
        </a>
        <div className="w-full flex items-center justify-center p-5 gap-5 bg-[#EEEEF2]">
          <BoxSmall textBig="+10" textSmall="projects" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
