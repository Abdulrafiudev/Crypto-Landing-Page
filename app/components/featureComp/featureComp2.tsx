import React from "react";
import { FeaturesList1Props } from "./featuresList1";
import { tick } from "@/images";
import Image from "next/image";
import clsx from "clsx";
import ArrowBtn from "../button/arrowBtn";

const FeatureComp2: React.FC<{
  list: FeaturesList1Props[];
  className: string;
  padding: string;
  heading: string;
  description: string;
  secondFeature?: boolean;
}> = ({ list, className, padding, heading, description, secondFeature }) => {
  return (
    <>
      <div className="flex flex-col gap-[50px] max-[38em]:mt-[20px] max-[38em]:gap-[20px]">
        <div className={clsx("flex flex-col flex-1", padding)}>
          <p className="text-[#FFFFFFB2] text-[18px] font-[500]">Feature</p>
          <p className="mt-[10px] text-[#FFFFFF] text-[40px] font-[600]">
            {heading}{" "}
          </p>
          <p className="text-[#FFFFFFB2] text-[16px] font-[400] mt-[20px] max-w-[500px]">
            {description}
          </p>
        </div>
        {secondFeature && (
          <ArrowBtn className="bg-[#1A60A61A] px-[20px] py-[8px] text-[#FFFFFF] rounded-[4px] flex gap-[10px] w-[180px] justify-between ml-[50px] max-[38em]:ml-0 ">
            Get Started
          </ArrowBtn>
        )}
        <div className={clsx(className)}>
          {list.map((item) => {
            return (
              <div
                className="flex gap-[10px] text-[#FFFFFFB2] text-[16px] font-[400] items-center "
                key={item.id}
              >
                <Image src={tick} alt="tick" />
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureComp2;
