import React from "react";
import ArrowBtn from "../button/arrowBtn";
import styles from "./feature.module.css";
import { woman, dollar } from "@/images";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="mt-[100px] h-auto flex w-full pt-[50px] pb-[50px] justify-center ">
      <div className="w-[90%]">
        <div className="flex">
          <div className="flex flex-col flex-[0.5] ">
            <p className="text-[#FFFFFF] text-[18px] font-[500]">Feature</p>
            <h2 className="text-[#FFFFFF] text-[40px] font-[600] mt-[10px]">
              Why choose Cryptic
            </h2>
            <p className="text-[#FFFFFF] text-[16px] font-[400] max-w-[400px] mt-[30px] mb-[30px]">
              Manage different BTC, USDT, USDC, ETH, and more in one secure
              wallet. seamlessly switch
            </p>
            <ArrowBtn className="bg-[#1A60A61A] px-[25px] py-[8px] rounded-[4px] flex gap-[10px] w-[fit-content]">
              Get Started
            </ArrowBtn>
          </div>
          <div
            className={`flex-1 bg-[#0D0D0D] border-[1px] border-solid ${styles.backgroundBorder} rounded-[30px] flex pr-[20px] `}
          >
            <Image src={woman} alt="woman" />
            <div className="mt-[60px] flex flex-col">
              <p className="text-[#FFFFFFB2] text-[14px] mb-[10px]">
                Fast & easy
              </p>
              <p className="text-[#FFFFFF] font-[600] text-[24px] mb-[15px]">
                Instant Transactions
              </p>
              <p className="text-[#FFFFFFB2] text-[16px] font-[400]">
                Send receive crypto effortlessly in just a few taps. Use Qr code
                scanning for faster, error free transfers anytime, anywhere.
              </p>
            </div>
            <Image
              src={dollar}
              alt="dollar"
              className={`flex justify-start ${styles.image} mt-[20px]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
