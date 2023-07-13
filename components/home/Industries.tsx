"use client";
import { SectionWrapper } from "@/hoc";
import React, { useRef } from "react";
import { styles } from "../styles";
import IndustryCard from "./Industries/IndustryCard";
import { industries } from "./constants";
import ArrowPrev from "@/assets/expertise/ArrowPrev";
import ArrowNext from "@/assets/expertise/ArrowNext";

function Industries() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleNextClick = (): void => {
    const scrollableElement = contentRef.current;
    if (!scrollableElement) return;

    const scrollWidth = scrollableElement.scrollWidth;
    const clientWidth = scrollableElement.clientWidth;
    const scrollLeft = scrollableElement.scrollLeft;
    const scrollDistance = clientWidth * 0.25;

    if (scrollLeft + clientWidth + scrollDistance <= scrollWidth) {
      scrollableElement.scrollTo({
        left: scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    } else {
      scrollableElement.scrollTo({
        left: scrollWidth - clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = (): void => {
    const scrollableElement = contentRef.current;
    if (!scrollableElement) return;

    const scrollLeft = scrollableElement.scrollLeft;
    const scrollDistance = scrollableElement.clientWidth * 0.25;

    if (scrollLeft - scrollDistance >= 0) {
      scrollableElement.scrollTo({
        left: scrollLeft - scrollDistance,
        behavior: "smooth",
      });
    } else {
      scrollableElement.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative w-full h-fit mx-auto mt-20 min-h-[300px] flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-8 w-full lg:w-[70%] px-10">
        <h1 className={`${styles.sectionHeadText}`}>Industries</h1>
        <p className={`${styles.sectionSubText} text-center`}>
          We provide expertise, innovative technology solutions, and support to
          businesses in various industries, helping them succeed in the digital
          age.
        </p>
      </div>
      <div className="w-full relative flex items-center overflow-hidden">
        <div className="z-[0] absolute top-0 h-[80%] bg-[#262626] w-full"></div>
        <div
          ref={contentRef}
          className="relative z-[1] w-full flex overflow-y-auto mt-20 px-11 gap-12 no-scroll"
        >
          {industries.map((val) => (
            <IndustryCard
              key={val.id}
              index={val.id}
              src={typeof val.image === "string" ? val.image : val.image.src}
              alt={val.title}
              title={val.title}
              description={val.description}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center gap-11">
        <button onClick={handlePrevClick}>
          <ArrowPrev />
        </button>
        <button onClick={handleNextClick}>
          <ArrowNext />
        </button>
      </div>
    </section>
  );
}

export default SectionWrapper(Industries, "industries");
