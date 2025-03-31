import React from "react";
import tokenList from "./tokenList";
import Image from "next/image";
import { price } from "@/images";

const Token = () => {
  return (
    <>
      <div
        className="flex w-full justify-center mt-[100px] mb-[50px] pt-[50px] max-[63em]:mt-[10px] scroll-mt-16"
        id="assets"
      >
        <div className="flex flex-col justify-center w-[75%] items-center px-[60px] max-[87.5em]:w-full max-[63em]:w-[90%]  max-[63em]:px-[0]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#FFFFFFB2] font-[500] text-[18px] text-center mb-[10px]">
              Feature
            </p>
            <p className="text-[#FFFFFF] font-[600] hidden text-[40px] text-center max-[73em]:text-[30px] max-[63em]:text-[20px] max-[73em]:block max-[73em]:mb-[30px]">
              Popular Crypto Assets
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[80px] gap-y-[40px]  max-[73em]:gap-[30px] max-[38em]:gap-[0px] max-[63em]:gap-y-[30px] max-[63em]:pl-[30px]">
            {tokenList.map((token) => {
              return (
                <div key={token.id} className="flex items-center mx-[auto] ">
                  {token.image && (
                    <div className="flex gap-[30px]  max-[63em]:flex-col max-[63em]:gap-[10px]">
                      <Image
                        src={token.image}
                        alt="token"
                        className="max-[63em]:w-[110px] max-[63em]:h-auto"
                      />
                      <Image
                        src={price}
                        alt="price"
                        className="w-[55px] h-[25px] max-[63em]:w-[60px] max-[63em]:h-auto"
                      />
                    </div>
                  )}
                  {token.wording && (
                    <p className="text-[#FFFFFF] font-[600] text-[40px] text-center max-[63em]:text-[20px] max-[73em]:hidden">
                      {token.wording}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
