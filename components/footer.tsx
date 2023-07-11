"use client";

import React from "react";
import logo from "@/assets/Nextlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl m-auto flex justify-center mt-36">
        <div className="w-[1512px] h-[370px] pt-[58px] bg-neutral-800 flex-col justify-center items-center gap-[69px] inline-flex">
            <div className="w-[1440px] pl-[85px] pr-[120px] justify-between items-start gap-44 inline-flex">
                <div className="flex-col justify-start items-start gap-[87px] inline-flex">
                    <div className="w-[157.23px] h-[53px] relative">
                        <div className="w-[157.23px] h-[49.17px] left-0 top-0 absolute">
                        </div>
                        <div className="w-[51.31px] h-[51.31px] left-[82.61px] top-[1.69px] absolute">
                            <div className="w-[40.86px] h-[51.31px] left-[5.23px] top-0 absolute">
                            </div>
                            <div className="w-[51.31px] h-[40.86px] left-0 top-[5.23px] absolute">
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="text-white text-lg font-medium leading-[20.97px] tracking-wide">Follow Us</div>
                        <div className="justify-start items-center gap-[22px] inline-flex">
                            <div className="w-[27.57px] h-[27.57px] relative">
                            </div>
                            <div className="w-[27px] h-[27px] relative">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[206px] justify-between items-start gap-[137px] flex">
                    <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                        <div className="text-white text-xl font-semibold leading-normal tracking-wide">Pages</div>
                        <div className="text-white text-base font-medium leading-7 tracking-tight">Home<br/>Our Expertise<br/>Industries<br/>About us<br/>Blog<br/>Contact Us</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                        <div className="text-white text-base font-medium leading-7 tracking-tight">Privacy Policy <br/>Terms of Service link</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                        <div className="text-white text-xl font-semibold leading-normal tracking-wide">Contact Info</div>
                        <div className="text-white text-base font-medium leading-normal tracking-tight">+374 77 299653</div>
                        <div className="text-white text-base font-medium leading-normal tracking-tight">hello@nxttcorp.com</div>
                        <div className="w-[200.29px] text-white text-base font-medium leading-normal tracking-tight">Green heights Village, Parañaque City. PH </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch px-[120px] py-2 bg-black justify-between items-center gap-[733px] inline-flex">
                <div className="text-white text-sm font-normal leading-tight tracking-tight">© Next Technologies Corp. 2023</div>
                <div className="text-white text-sm font-normal leading-tight tracking-tight">Cookie policy           Cookie settings</div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
