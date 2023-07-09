"use client";
import React from "react";

interface boxSmallProps {
  textBig: string;
  textSmall: string;
}

function CardSmall(props: boxSmallProps) {
  return (
    <div className="flex flex-col items-center px-3 py-2">
      <p className="text-[64px] font-bold tracking-[0.192px] gradient">
        {props.textBig}
      </p>
      <p className="uppercase text-[24px] font-medium tracking-[-0.528px]">
        {props.textSmall}
      </p>
    </div>
  );
}

export default CardSmall;
