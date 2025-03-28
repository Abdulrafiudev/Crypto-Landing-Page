import Image, { StaticImageData } from "next/image";
import React from "react";

const FeatureComp: React.FC<{ iphone15: StaticImageData }> = ({ iphone15 }) => {
  return (
    <>
      <Image src={iphone15} alt="iphone15" />
    </>
  );
};

export default FeatureComp;
