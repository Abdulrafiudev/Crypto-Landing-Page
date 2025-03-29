import React from "react";
import styles from "./hero.module.css";
import { iphone15, download, volume } from "@/images";
import ArrowBtn from "../../button/arrowBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className={`relative w-[100%] h-[auto] flex flex-col items-center  pt-[150px] ${styles.background}  bg-cover bg-center `}
      >
        <h1
          className={`${styles.h1Color} max-w-[900px] text-[64px] text-center font-[500] max-[38em]:text-[45px] max-[38em]:max-w-[600px ]`}
        >
          Effortless Cryto Management All in One Place{" "}
        </h1>
        <p
          className={` ${styles.h1Color} text-[20px] text-center font-[500] max-w-[650px] mt-[10px] max-[38em]:text-[16px] max-[38em]:w-[350px]`}
        >
          Securely track, send, and grow your assets with ease-no complexity,
          Start enjoying access to your currencies today
        </p>
        <div className="flex gap-[20px] mt-[30px] max-[38em]:flex-col max-[38em]:items-center">
          <ArrowBtn className="bg-[#1A60A6] px-[20px] py-[8px] rounded-[4px] flex gap-[10px]">
            Download App
          </ArrowBtn>

          <ArrowBtn className="bg-[#1A60A61A] px-[20px] py-[8px] rounded-[4px] flex gap-[10px]">
            Access From The Web
          </ArrowBtn>
        </div>
        <div className="mt-[80px] relative bg-[#1A60A61F] rounded-t-[80px] pt-[30px] pl-[25px] pr-[25px]">
          <Image src={iphone15} alt="ipone 15" />
          <Image
            src={download}
            alt="download"
            className="absolute top-[150px] right-[-250px]"
          />
          <Image
            src={volume}
            alt="volume"
            className="absolute top-[0] left-[-280px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
