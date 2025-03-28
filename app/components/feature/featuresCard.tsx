import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

const FeaturesCard: React.FC<{
  image: StaticImageData;
  quote: string;
  heading: string;
  description: string;
}> = ({ image, quote, heading, description }) => {
  return (
    <div className="flex-1 bg-[#0D0D0D] border-[1px] border-solid border-[#2171C04D] p-[30px] rounded-[30px] flex flex-col">
      <div className="w-full flex justify-end">
        <Image src={image} alt="aeroplane" />
      </div>
      <div className="mt-[20px] max-[38em]:mt-[0]">
        <p className="text-[#FFFFFFB2] text-[14px] font-[400]">{quote}</p>
        <p className="text-[#FFFFFF] font-[600] text-[24px] mt-[15px]">
          {heading}
        </p>
        <p className="text-[#FFFFFFB2] text-[16px] font-[400] mt-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
