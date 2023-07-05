"use client";
import React from "react";
import { textVariant } from "./utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import { Carousel } from "react-responsive-carousel";
import { works } from "./constants";
import Indicator from "./indicator/Indicator";

interface CardsProps {
  image1: any;
  image2: any;
  image3: any;
  index: number;
  title: string;
}

const Cards: React.FC<CardsProps> = ({
  image1,
  image2,
  image3,
  index,
  title,
}) => {
  console.log("img: ", image1);
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#96FD15] font-bold">{title}</p>
      <div className="w-full flex justify-center h-[300px]">
        <div className="relative flex items-center justify-center w-[80%] lg:w-[48%] max-w-full h-full">
          <div className="absolute left-0 bottom-0 w-[10rem] h-[20rem] rounded-2xl overflow-hidden z-0">
            <img
              src={image2.src}
              alt="project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[29rem] h-[16rem] z-[1] rounded overflow-hidden">
            <img
              src={image1.src}
              alt="project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[10rem] h-[20rem] rounded-2xl overflow-hidden z-[2]">
            <img
              src={image3.src}
              alt="project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Works() {
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
  return (
    <>
      <motion.div variants={textVariant(0)} className="mt-32 pb-20">
        <h1 className={`${styles.heroHeadText} text-center`}>
          We got
          <span className="text-[#96FD15]"> you</span>.
        </h1>
      </motion.div>
      {/* <AwesomeSlider cssModule={AwesomeSliderStyles}>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </AwesomeSlider> */}
      <Carousel
        showArrows={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={8000}
        // className="mt-20 relative"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const work = works[index];
          if (isSelected) {
            return (
              <button
                // className="w-[120px]"
                style={{
                  ...indicatorStyles,
                  color: "#96FD15",
                  textDecoration: "none",
                  // margin: 0,
                  padding: 0,
                }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              >
                {/* {work.title} */}
                <Indicator />
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
              <p className="h-[20px] w-[20px] bg-[#96FD15] rounded-full"></p>
            </button>
          );
        }}
      >
        {works.map((work, index) => (
          <Cards
            key={index}
            index={index}
            {...work}
            image1={work.images.image1}
            image2={work.images.image2}
            image3={work.images.image3}
            title={work.title}
          />
        ))}
      </Carousel>
    </>
  );
}

export default Works;
