import React from "react";
import FeatureComp from "../featureComp";
import FeatureComp2 from "../featureComp/featureComp2";
import { iphone15top } from "@/images";
import { featureList1 } from "../featureComp/featuresList1";

const Feature1 = () => {
  return (
    <>
      <div
        className="w-full flex justify-center h-auto mt-[150px] scroll-mt-24"
        id="features"
      >
        <div className="w-[90%] flex max-[73.75em]:flex-col">
          <FeatureComp iphone15={iphone15top} />
          <FeatureComp2
            list={featureList1}
            className="flex-1 flex pl-[50px] pr-[50px] gap-[80px] py-[50px] bg-[#0D0D0D] border-[1px] border-solid  rounded-[30px] border-[#2171C04D] flex-wrap max-[73.75em]:pr-[20px] max-[73.75em]:pl-[20px] max-[73.75em]:gap-[20px] "
            padding="pl-[130px] max-[73.75em]:pl-0"
            heading="Manage, Send and Grow"
            description="All user friendly features are are easily accessible to offer
                        assistance, with a sleek, intuitive dashboard, you can view balances
                        and market trend in real-time"
          />
        </div>
      </div>
    </>
  );
};

export default Feature1;
