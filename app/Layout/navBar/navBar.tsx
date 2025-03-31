"use client";
import React, { useState } from "react";
import { logo } from "@/images";
import Image from "next/image";
import NavBarList from "./navBarList";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false);

  function handleToggle() {
    setIsMenuOPen(!isMenuOpen);
    console.log("is menu open?", isMenuOpen);
  }
  return (
    <>
      <div className="fixed top-0 right-0 left-0 h-[15%] flex justify-center z-10 max-[38em]:h-[100px]">
        <div className="w-[90%] flex justify-between items-center">
          <Image
            src={logo}
            alt="logo"
            height={50}
            className="max-[38em]:z-[10]"
          />
          <div
            className={`flex gap-[40px]   ${
              isMenuOpen
                ? "max-[38em]:fixed max-[38em]:top-[0px] max-[38em]:left-[0px] max-[38em]:bg-[#0D0D0D] max-[38em]:h-[78vh] max-[38em]:w-[100vw] max-[38em]:flex-col max-[38em]:pl-[10px] max-[38em]:pr-[10px] max-[38em]:pt-[100px] max-[38em]:gap-[20px] max-[38em]:transition-[top] max-[38em]:duration-300"
                : "max-[38em]:fixed max-[38em]:top-[-100%] max-[38em]:left-[0px] max-[38em]:bg-[#0D0D0D] max-[38em]:h-[78vh] max-[38em]:w-[100vw] max-[38em]:flex-col pl-[10px] max-[38em]:pr-[10px] max-[38em]:pt-[100px] max-[38em]:gap-[20px] max-[38em]:transition-[top] max-[38em]:duration-300"
            }  `}
          >
            {NavBarList.map((nav) => {
              return (
                <Link
                  key={nav.id}
                  href={nav.href}
                  className={` hover:bg-[#0a0a0a] max-[38em]:pl-[20px] rounded-[7px] py-[5px] px-[10px]`}
                  onClick={handleToggle}
                >
                  {" "}
                  {nav.name}
                </Link>
              );
            })}
            <Link
              href={"#"}
              className="bg-[#1A60A6] px-[20px] w-[150px] text-center py-[5px] ml-[10px] mt-[20px]  rounded-[4px] hidden max-[38em]:block"
            >
              {" "}
              Get Started
            </Link>
          </div>

          <Link
            href={"#"}
            className="bg-[#1A60A6] px-[20px] py-[5px] rounded-[4px] max-[38em]:hidden"
          >
            {" "}
            Get Started
          </Link>
          <div className="relative cursor-pointer hidden max-[38em]:block">
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
