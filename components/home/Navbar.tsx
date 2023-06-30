"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../app/assets/logo-initial.png";
import Image from "next/image";
import { navLinks } from "./constants";
import MenuSvg from "@/app/assets/MenuSvg";
import LogoInitialSvg from "@/app/assets/LogoInitialSvg";
import CloseSvg from "@/app/assets/CloseSvg";
import { styles } from "@/app/styles";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    const menu = document.getElementById("menuModal");
    if (!toggle) {
      setTimeout(() => {
        menu?.classList.remove("translate-y-2/3");
        menu?.classList.add("translate-y-0");
      }, 0);
    } else {
      setTimeout(() => {
        menu?.classList.add("translate-y-2/3");
        menu?.classList.remove("translate-y-0");
      }, 0);
    }
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary-foreground/30 bg-opacity-50 backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <Image
            src={logo}
            alt="Next-logo"
            className="w-12 h-12 object-contain"
          /> */}
          <div className="w-fit h-fit object-contain">
            <LogoInitialSvg />
          </div>
        </Link>
        <ul className="link-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-white" : "text-slate-600"
              } hover:text-white duration-300`}
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle);
              }}
            >
              <a href={`/${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={handleToggle}>
            {toggle ? <CloseSvg /> : <MenuSvg />}
          </button>
        </div>
      </div>
      <div
        id="menuModal"
        className={`${
          toggle ? "flex" : "hidden"
        } fixed left-0 top-20 w-full bg-primary-foreground z-30 h-full translate-y-2/3 transition-transform duration-300 ease-in-out`}
      >
        <ul className="list-none flex items-start flex-col gap-4 p-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-white" : "text-slate-600"
              } hover:text-white duration-300`}
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
