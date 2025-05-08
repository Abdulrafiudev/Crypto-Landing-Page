import React from "react";
import ArrowBtn from "../button/arrowBtn";
import styles from "./feature.module.css";
import { woman, dollar, aeroplane, shield } from "@/images";
import Image from "next/image";
import FeaturesCard from "./featuresCard";

const Feature = () => {
  return (
    <div
      className="mt-[100px] h-auto flex w-full pt-[50px] pb-[50px] justify-center max-[63em]:mt-[50px] scroll-mt-16"
      id="about"
    >
      <div className="w-[90%] max-w-[1900px]">
        <div className="flex max-[63em]:flex-col">
          <div className="flex flex-col flex-[0.5] max-[63em]:mb-[30px]">
            <p className="text-[#FFFFFFB2]] text-[18px] font-[500]">Feature</p>
            <h2 className="text-[#FFFFFF] text-[40px] font-[600] mt-[10px]">
              Why choose Cryptic
            </h2>
            <p className="text-[#FFFFFFB2] text-[16px] font-[400] max-w-[400px] mt-[30px] mb-[30px] max-[63em]:mt-[10px] max-[63em]:max-w-full max-[38em]:max-w-[400px]">
              Manage different BTC, USDT, USDC, ETH, and more in one secure
              wallet. seamlessly switch
            </p>
            <ArrowBtn className="bg-[#1A60A61A] px-[25px] py-[8px] rounded-[4px] flex gap-[10px] w-[fit-content] text-[#FFFFFF]">
              Get Started
            </ArrowBtn>
          </div>
          <div
            className={`flex-1 bg-[#0D0D0D] border-[1px] border-solid  rounded-[30px] flex pr-[20px] border-[#2171C04D] max-[63em]:flex-col max-[63em]:p-[20px] max-[63em]:relative`}
          >
            <Image src={woman} alt="woman" className="max-[63em]:hidden" />
            <div className="mt-[60px] flex flex-col max-[63em]:mt-[0]">
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
              className={`flex justify-start ${styles.image} mt-[20px] max-[63em]:absolute max-[63em]:top-0 max-[63em]:right-[20px]`}
            />
          </div>
        </div>
        <div className="flex mt-[40px] gap-[20px] max-[63em]:flex-col max-[63em]:mt-[20px]">
          <FeaturesCard
            image={aeroplane}
            quote="All IN ONE"
            heading="Multi-chain support"
            description="Manage different BTC, USDT, USDC, ETH, and more in one secure wallet.
          seamlessly switch between chains with ease. No need for multiple
          apps-everything is one place"
          />
          <FeaturesCard
            image={shield}
            quote="BUILT IN SECURITY"
            heading="Secure & Private"
            description="Your keys, your funds-no third party control over your assets. Advanced encryption ensures your transactions stay safe.
Built-in-security features protects against fraud and hacking."
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
