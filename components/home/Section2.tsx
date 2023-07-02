"use client";
import React from "react";

function Section2() {
  return (
    <div className="flex flex-col mt-32 items-center px-24">
      <div className="w-full flex flex-col max-w-full w-6/12">
        <p className="text-3xl font-bold text-center text-primary">
          Build your lorem ipsum
        </p>
        <p className="text-center mt-10 text-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          laboriosam, voluptatem architecto beatae maiores nulla porro
          laudantium amet possimus non quasi deserunt hic sunt aut? Velit
          dolores iste pariatur eos.
        </p>
      </div>
      <div className="w-full flex flex-row lg:flex-col gap-7">
        <div className="w-30 flex flex-col"></div>
        <div className="w-2/5"></div>
        <div className="w-30 flex flex-col"></div>
      </div>
    </div>
  );
}

export default Section2;
