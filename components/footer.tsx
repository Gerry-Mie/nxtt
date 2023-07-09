"use client";

import React from "react";
import logo from "@/assets/Nextlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl m-auto flex justify-center mt-36">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="lgo" width={50} />
        <h1 className="text-5xl">
          {" "}
          <span className="text-[#96FD15]">next</span>tect.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
