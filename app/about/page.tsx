"use client";
import React from "react";
import Welcome from "@/components/aboutPage/Welcome";
import Mission from "@/components/aboutPage/Mission";
import AboutInfo from "@/components/aboutPage/AboutInfo";

const AboutUS = () => {
  return (
    <div className="w-full relative">
      <Welcome />
      <Mission />
      <AboutInfo />
    </div>
  );
};

export default AboutUS;
