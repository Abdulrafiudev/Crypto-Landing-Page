import React from "react";
import { logo } from "@/images";
import Image from "next/image";
import NavBarList from "./navBarList";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 h-[15%] flex justify-center">
        <div className="w-[90%] flex justify-between items-center">
          <Image src={logo} alt="logo" height={50} />
          <div className="flex gap-[40px]">
            {NavBarList.map((nav, index) => {
              return (
                <Link key={nav.id} href={nav.href}>
                  {" "}
                  {nav.name}
                </Link>
              );
            })}
          </div>
          <div className="bg-[#1A60A6] px-[20px] py-[5px] rounded-[4px]">
            <Link href={"#"}> Get Started</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
