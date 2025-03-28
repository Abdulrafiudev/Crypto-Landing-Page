import React from "react";
import { iphone15bottom } from "@/images";
import FeatureComp from "../featureComp";
import FeatureComp2 from "../featureComp/featureComp2";
import { featureList2 } from "../featureComp/featuresList1";

const Feature2 = () => {
  return (
    <>
      <div className="w-full flex justify-center h-auto mt-[100px]">
        <div className="w-[90%] flex">
          <FeatureComp2
            list={featureList2}
            padding="pl-[50px]"
            className="flex-1 flex pl-[130px] pr-[200px] gap-[40px] py-[50px] bg-[#0D0D0D] border-[1px] border-solid  rounded-[30px] border-[#2171C04D] flex-wrap "
            heading="All in One Secure Place"
            description="Easily track, manage, and switch between assets with a single wallet. Very easy"
            secondFeature={true}
          />
          <FeatureComp iphone15={iphone15bottom} />
        </div>
      </div>
    </>
  );
};

export default Feature2;
