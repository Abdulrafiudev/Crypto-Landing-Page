import React from "react";
import ArrowBtn from "../button/arrowBtn";
import { process } from "@/images/";
import Image from "next/image";

const Process = () => {
  return (
    <div className="mt-[100px] w-full flex justify-center pt-[50px] flex-col items-center gap-[70px]">
      <div className="flex flex-col items-center gap-[20px]">
        <p className="text-[#FFFFFFB2] text-[18px] font-[500]">Step by Step</p>
        <p className="text-[#FFFFFF] font-[500] text-[40px]">
          How Does Cryptic Work
        </p>
        <ArrowBtn
          className="bg-[#1A60A61A] px-[25px] py-[8px] rounded-[4px] flex gap-[10px] w-[fit-content]"
          children="Get Started"
        />
      </div>
      <Image src={process} alt="process" />
    </div>
  );
};

export default Process;
