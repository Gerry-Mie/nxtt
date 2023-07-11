import { StaticImageData } from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  index: string;
}
export default function IndustryCard({
  src,
  alt,
  title,
  description,
  index,
}: Props) {
  return (
    <div
      key={index}
      className={`relative w-[398.38px] h-[349.19px] flex-shrink-0 rounded-[20px] bg-black overflow-hidden flex items-end`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="absolute bottom-0 z-[1] left-0 right-0 h-2/3 bg-gradient-to-b from-transparent to-black"></div>
      <div className="flex z-[2] relative flex-col p-5">
        <p className="text-secondary text-lg font-bold capitalize">{title}</p>
        <p className="font-medium text-sm text-secondary h-[60px]">
          {description}
        </p>
      </div>
    </div>
  );
}
