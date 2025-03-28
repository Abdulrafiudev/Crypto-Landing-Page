import React from "react";
import tokenList from "./tokenList";
import Image from "next/image";
import { price } from "@/images";

const Token = () => {
  return (
    <>
      <div className="flex w-full justify-center mt-[100px] mb-[50px] pt-[50px]">
        <div className="flex flex-col justify-center w-[75%] items-center px-[60px] max-[38em]:w-[90%]  max-[38em]:px-[0]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#FFFFFFB2] font-[500] text-[18px] text-center mb-[10px]">
              Feature
            </p>
            <p className="text-[#FFFFFF] font-[600] hidden text-[40px] text-center max-[38em]:text-[20px] max-[38em]:block max-[38em]:mb-[30px]">
              Popular Crypto Assets
            </p>
          </div>
          <div className="flex flex-wrap gap-[80px] gap-y-[40px]  max-[38em]:gap-[5px] max-[38em]:gap-y-[30px] max-[38em]:pl-[20px]">
            {tokenList.map((token) => {
              return (
                <div key={token.id} className="flex items-center mx-[auto]">
                  {token.image && (
                    <div className="flex gap-[30px]  max-[38em]:flex-col max-[38em]:gap-[10px]">
                      <Image
                        src={token.image}
                        alt="token"
                        className="max-[38em]:w-[100px]"
                      />
                      <Image
                        src={price}
                        alt="price"
                        className="w-[55px] h-[25px]"
                      />
                    </div>
                  )}
                  {token.wording && (
                    <p className="text-[#FFFFFF] font-[600] text-[40px] text-center max-[38em]:text-[20px] max-[38em]:hidden">
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
