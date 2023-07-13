"use client";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "@/components/styles";
import Lottie from "lottie-web";
import loading from "@/animation/loading.json";
import CardSmall from "./CardSmall";
import ArrowDown from "@/assets/ArrowDown";
import ButtonPrimary from "../ButtonPrimary";
import Reveal from "./Reveal";

function Hero() {
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
    <section className="relative w-full h-fit mx-auto">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-0">
        {/* <div className="circle-animation"></div>
        <div className="circle-animation2"></div> */}
      </div>
      <div className="w-full h-full relative top-0 left-0 backdrop-blur-3xl z-10 flex flex-col justify-center items-center pt-[200px] gap-12">
        <div className="lg:w-[70%] flex flex-col items-center justify-center px-9">
          <Reveal width="w-fit">
            <h1 className={`${styles.heroHeadText} text-center`}>
              INNOVATE. EVOLVE, SUCCEED
            </h1>
          </Reveal>

          <Reveal width="w-fit" delay={0.3}>
            <p className={`${styles.heroSubText} text-center`}>
              Welcome to the Future of IT Services
            </p>
          </Reveal>
          <Reveal width="w-fit" delay={0.4}>
            <p className={`${styles.smallText} text-center mt-2`}>
              Revolutionize the IT industry with our innovative solutions at
              Next Tech. Thrive in the ever-changing digital landscape with our
              passion for excellence and commitment to staying ahead.
            </p>
          </Reveal>
        </div>
        <ButtonPrimary
          classNames="text-xl "
          href="/contact"
          title="Contact Us"
        />
        <div className="flex items-center justify-center py-10 arrow-icon">
          <ArrowDown />
        </div>
        <div className="w-full lg:flex-row flex-col flex items-center justify-center p-5 gap-5 bg-[#EEEEF2]">
          <CardSmall textBig="10+" textSmall="projects" />
          <span className="lg:w-1 w-full bg-secondary h-1 lg:h-full" />
          <CardSmall textBig="20+" textSmall="professionals" />
          <span className="lg:w-1 w-full bg-secondary h-1 lg:h-full" />
          <CardSmall textBig="100%" textSmall="job success" />
          <span className="lg:w-1 w-full bg-secondary h-1 lg:h-full" />
          <CardSmall textBig="30+" textSmall="technologies" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
