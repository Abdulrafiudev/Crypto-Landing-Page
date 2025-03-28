import React from "react";
import { logo } from "@/images";
import Image from "next/image";
import NavBarList from "./navBarList";
import Link from "next/link";

const NavBar = () => {
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
          <div className="flex gap-[40px] max-[38em]:fixed max-[38em]:top-[0px] max-[38em]:left-[0px] max-[38em]:bg-[#0D0D0D] max-[38em]:h-[50vh] max-[38em]:w-[100vw] max-[38em]:flex-col max-[38em]: pl-[45px] max-[38em]: pt-[100px] max-[38em]:gap-[20px] max-[38em]:hidden">
            {NavBarList.map((nav, index) => {
              return (
                <Link key={nav.id} href={nav.href}>
                  {" "}
                  {nav.name}
                </Link>
              );
            })}
          </div>

          <Link
            href={"#"}
            className="bg-[#1A60A6] px-[20px] py-[5px] rounded-[4px]"
          >
            {" "}
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
