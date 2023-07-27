"use client";

import React from "react";
import socialMediaIcons from "@/assets/social_media_icons.png";
import nextLogoWhite from "@/assets/Next_logo_white.png";
import Image from "next/image";
import { navLinks } from "@/components/home/constants";
import NextLogoWhiteV2 from "@/assets/newLogo/NEXT_Logo_ver02Final-06-2.png";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-800">
      <div className="w-full m-auto layout flex py-14 justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col xl:flex-row justify-between items-center">
          <div className="flex-col justify-start items-start gap-[87px] inline-flex xl:flex-col xl:mb-0 mb-20 md:flex-row md:justify-between md:w-[750px]">
            <div>
              <Image src={NextLogoWhiteV2} alt="" style={{ width: 160 }} />
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-white text-lg font-medium leading-[20.97px] tracking-wide">
                Follow Us
              </div>
              <div className="justify-start items-center gap-[22px] inline-flex">
                <Image src={socialMediaIcons} alt="" style={{ width: 160 }} />
              </div>
            </div>
          </div>
          <div className="justify-between items-start gap-[50px] flex flex-col md:gap-[137px] md:flex-row">
            <div className="flex-col justify-start items-start gap-[15px] inline-flex xl:w-64">
              <div className="text-white text-xl font-semibold leading-normal tracking-wide">
                Pages
              </div>
              <div className="text-white text-base font-medium leading-7 tracking-tight">
                {navLinks.map((link) => (
                  <React.Fragment key={link.id}>
                    <a
                      href={
                        link.behavior === "scroll"
                          ? `/#${link.id}`
                          : `/${link.id}`
                      }
                    >
                      {link.title}
                    </a>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[15px] inline-flex">
              <div className="text-white text-base font-medium leading-7 tracking-tight">
                Privacy Policy <br />
                Terms of Service link
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[15px] inline-flex">
              <div className="text-white text-xl font-semibold leading-normal tracking-wide">
                Contact Info
              </div>
              <div className="text-white text-base font-medium leading-normal tracking-tight">
                <a href="tel:+37477299653">+374 77 299653</a>
              </div>
              <div className="text-white text-base font-medium leading-normal tracking-tight">
                <a href="mailto:hello@nxttcorp.com">hello@nxttcorp.com</a>
              </div>
              <div className="w-[200.29px] text-white text-base font-medium leading-normal tracking-tight">
                Green heights Village, Parañaque City. PH
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 bg-black w-full flex justify-center items-center">
        <div className="text-white text-sm font-normal leading-tight tracking-tight">
          © Next Technologies Corp. 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
