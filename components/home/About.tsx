"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "@/components/styles";
import { fadeIn, textVariant } from "./utils/motion";
import { services } from "./constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "@/hoc";
import lottie from "lottie-web";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CanvasLoader from "./3d/CanvasLoader";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  const animationContainer = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    services.forEach((service, index) => {
      if (service.icon) {
        lottie.loadAnimation({
          container: animationContainer.current[index]!,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: icon,
        });
      }
    });
  }, []);
  return (
    <div className="flex justify-center items-stretch w-full gap-20 h-[500px] p-3 max-w-full">
      <Tilt className="w-80% px-10" options={{ max: 45, scale: 1, speed: 400 }}>
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full  p-[1px] rounded-[20px] shadow-card h-full "
        >
          <div className=" h-full rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col">
            {icon && (
              // <Image src={icon} alt="asd" className="w-20 h-20 object-contain" />
              <div
                className="w-[30rem] max-w-full "
                ref={(el) => (animationContainer.current[index] = el)}
              ></div>
            )}

            {/* <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3> */}
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

function About() {
  const indicatorStyles = {
    // Add your custom styles here
    background: "none",
    color: "#fff",
    padding: "5px 10px",
    margin: "0 8px",
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
  };

  useEffect(() => {
    const applyStyles = () => {
      const dots = document.querySelectorAll<HTMLElement>(".control-dots");
      const carousel = document.querySelectorAll<HTMLElement>(".carousel");
      const slider = document.querySelectorAll<HTMLElement>(".slider-wrapper");
      // const matches = window.matchMedia("(max-width: 537px)");
      // console.log(matches);
      if (carousel.length > 0) {
        carousel.forEach((el) => {
          el.style.paddingTop = "70px";
        });
      }
      if (dots.length > 0) {
        dots.forEach((dot) => {
          dot.style.position = "absolute";
          dot.style.top = "0";
          dot.style.zIndex = "0";
        });
      }
      if (slider.length > 0) {
        slider.forEach((slide) => {
          slide.style.zIndex = "1";
        });
      }
    };

    if (document.readyState === "complete") {
      applyStyles();
    } else {
      window.addEventListener("DOMContentLoaded", applyStyles);
    }

    //
    return () => {
      window.removeEventListener("DOMContentLoaded", applyStyles);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant(0)} className="mt-32 pb-20">
        <h1 className={`${styles.heroHeadText} text-center`}>
          Work with
          <span className="text-[#96FD15]"> us</span>.
        </h1>
      </motion.div>
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={4000}
        // className="mt-20 relative"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const service = services[index];
          if (isSelected) {
            return (
              <button
                // className="w-[120px]"
                style={{
                  ...indicatorStyles,
                  color: "#96FD15",
                  textDecoration: "none",
                }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              >
                {service.title}
              </button>
            );
          }
          return (
            <button
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              // className="w-[120px]"
              className="hover:text-[#96FD15] delay-300"
              value={index}
              key={index}
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            >
              {service.title}
            </button>
          );
        }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            {...service}
            icon={service.icon}
          />
        ))}
      </Carousel>
      {/* <style jsx>{`
        .carousel .control-dots {
          position: absolute;
          top: 0;
          transform: translateY(-100%);
          textdecoration: none;
        }
      `}</style> */}
    </>
  );
}

export default SectionWrapper(About, "about");
