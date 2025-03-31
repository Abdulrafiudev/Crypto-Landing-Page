"use client";
import React, { useEffect, useState } from "react";
import { logo } from "@/images";
import Image from "next/image";
import NavBarList from "./navBarList";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("running");
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  function handleScroll() {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  function handleToggle() {
    setIsMenuOPen(!isMenuOpen);
    console.log("is menu open?", isMenuOpen);
  }
  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 h-[12%] ${
          isScrolled ? "bg-[#0D0D0D]" : ""
        } flex justify-center z-10 max-[74em]:h-[100px]`}
      >
        <div className="w-[90%] flex justify-between items-center">
          <Image
            src={logo}
            alt="logo"
            height={50}
            className="max-[74em]:z-[10]"
          />
          <div
            className={`flex gap-[40px]   ${
              isMenuOpen
                ? "max-[74em]:fixed max-[74em]:top-[0px] max-[74em]:left-[0px] max-[74em]:bg-[#0D0D0D] max-[74em]:h-[78vh] max-[74em]:w-[100vw] max-[74em]:flex-col max-[74em]:pl-[10px] max-[74em]:pr-[10px] max-[74em]:pt-[100px] max-[74em]:gap-[20px] max-[74em]:transition-[top] max-[74em]:duration-300"
                : "max-[74em]:fixed max-[74em]:top-[-100%] max-[74em]:left-[0px] max-[74em]:bg-[#0D0D0D] max-[74em]:h-[78vh] max-[74em]:w-[100vw] max-[74em]:flex-col max-[74em]:pl-[10px] max-[74em]:pr-[10px] max-[74em]:pt-[100px] max-[74em]:gap-[20px] max-[74em]:transition-[top] max-[74em]:duration-300"
            }  `}
          >
            {NavBarList.map((nav) => {
              return (
                <Link
                  key={nav.id}
                  href={nav.href}
                  className={` hover:bg-[#0a0a0a] max-[74em]:pl-[20px] rounded-[7px] py-[5px] px-[10px]`}
                  onClick={handleToggle}
                >
                  {" "}
                  {nav.name}
                </Link>
              );
            })}
            <Link
              href={"#"}
              className="bg-[#1A60A6] px-[20px] w-[150px] text-center py-[5px] ml-[10px] mt-[20px]  rounded-[4px] hidden max-[74em]:block"
            >
              {" "}
              Get Started
            </Link>
          </div>

          <Link
            href={"#"}
            className="bg-[#1A60A6] px-[20px] py-[5px] rounded-[4px] max-[74em]:hidden"
          >
            {" "}
            Get Started
          </Link>
          <div className="relative cursor-pointer hidden max-[74em]:block">
            <span
              className={`material-symbols-outlined absolute text-[#FFFF]  ${
                isMenuOpen ? "z-0 opacity-0" : "z-10 opacity-100"
              }`}
              onClick={handleToggle}
            >
              menu
            </span>
            <span
              className={`material-symbols-outlined  ${
                isMenuOpen ? "z-10 opacity-100" : "opacity-0 z-0"
              }`}
              onClick={handleToggle}
            >
              close
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
