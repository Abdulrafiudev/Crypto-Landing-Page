import Image, { StaticImageData } from "next/image";
import React from "react";

const FeatureComp: React.FC<{ iphone15: StaticImageData }> = ({ iphone15 }) => {
  return (
    <>
      <Image src={iphone15} alt="iphone15" className="max-[73.75em]:w-full" />
    </>
  );
};

export default FeatureComp;
