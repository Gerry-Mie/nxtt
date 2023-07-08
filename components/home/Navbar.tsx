"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./constants";
import MenuSvg from "@/assets/MenuSvg";
import CloseSvg from "@/assets/CloseSvg";
import { styles } from "@/components/styles";
import LogoHeader from "@/assets/LogoHeader";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  // console.log("scroll", scrolled);
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
      id="nav"
      className={`${
        styles.paddingX
      } fixed w-full flex items-center top-0 z-20 transition-all duration-300 ${
        scrolled ? "py-3 nav-shadow backdrop-blur-xl" : "py-5 backdrop-blur-md"
      }`}
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
            src={NextLogo2}
            alt="Next-logo"
            className="h-full object-contain"
          /> */}
          <div className="w-fit h-fit object-contain">
            <LogoHeader />
          </div>
        </Link>

        <ul className="link-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) =>
            link.id !== "contact" ? (
              <li
                key={link.id}
                className={`${
                  active === link.id && "active-link"
                } gradient-text duration-300`}
                onClick={() => {
                  setActive(link.id);
                  // setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ) : (
              <li
                key={link.id}
                onClick={() => {
                  setActive(link.id);
                  // setToggle(!toggle);
                }}
              >
                <a
                  className={`text-secondary gradient-button duration-300 px-10 py-2`}
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            )
          )}
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
