"use client";
import React from "react";
import { styles } from "../styles";

function Mission() {
  return (
    <div className="flex flex-col items-center w-full gradient-bg p-12 gap-5">
      <p className={`${styles.heroSubText} text-secondary text-center`}>
        Our Mission
      </p>
      <p className={`${styles.sectionSubTextTight} text-center text-secondary`}>
        We strive to deliver innovative and customized solutions that help our
        clients achieve their goals and exceed their expectations.
      </p>
    </div>
  );
}

export default Mission;
