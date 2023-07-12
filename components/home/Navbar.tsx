"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./constants";
import MenuSvg from "@/assets/MenuSvg";
import CloseSvg from "@/assets/CloseSvg";
import { styles } from "@/components/styles";
import LogoHeader from "@/assets/LogoHeader";
import ButtonPrimary from "../ButtonPrimary";
import { Helmet } from "react-helmet";

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
  const handleToggle = () => {
    setToggle(!toggle);
    const menu = document.getElementById("menuModal");
  };
  return (
    <>
      <nav
        id="nav"
        className={`${
          styles.paddingX
        } fixed w-full flex items-center top-0 z-20 transition-padding duration-300 backdrop-blur-md ${
          scrolled ? "py-3 nav-shadow" : "py-5 "
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
            <div className="w-fit h-fit object-contain">
              <LogoHeader />
            </div>
          </Link>

          <ul className="link-none hidden lg:flex flex-row gap-10 items-center">
            {navLinks.map((link) =>
              link.id !== "contact" ? (
                <li
                  key={link.id}
                  className={`${
                    active === link.id && "active-link"
                  } gradient-text duration-300 glow`}
                  onClick={() => {
                    setActive(link.id);
                  }}
                >
                  <a
                    href={
                      link.behavior === "scroll"
                        ? `/#${link.id}`
                        : `/${link.id}`
                    }
                  >
                    {link.title}
                  </a>
                </li>
              ) : (
                <li
                  key={link.id}
                  onClick={() => {
                    setActive(link.id);
                  }}
                >
                  <ButtonPrimary
                    title={link.title}
                    href={`/${link.id}`}
                    py="2"
                    px="10"
                  />
                </li>
              )
            )}
          </ul>
          <div className="lg:hidden flex flex-1 justify-end items-center">
            <button onClick={handleToggle}>
              {toggle ? <CloseSvg /> : <MenuSvg />}
            </button>
          </div>
        </div>
      </nav>
      <div
        id="menuModal"
        className={`${
          toggle ? "flex" : "hidden"
        } fixed left-0 top-[67px] bottom-0 w-full bg-primary-foreground z-30 h-full transition-transform duration-300 ease-in-out animate-slideIn ${
          scrolled ? "translate-y-0" : "translate-y-[16px]"
        }`}
      >
        <ul className="list-none flex items-start flex-col gap-4 p-10">
          {navLinks.map((link) =>
            link.id !== "contact" ? (
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
                <a
                  href={
                    link.behavior === "scroll" ? `/#${link.id}` : `/${link.id}`
                  }
                >
                  {link.title}
                </a>
              </li>
            ) : (
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
                <ButtonPrimary
                  title={link.title}
                  href={`/${link.id}`}
                  py="2"
                  px="10"
                />
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
