import React from "react";
import Image from "next/image";
import brandList from "./brandList";

const Brand = () => {
  return (
    <div
      className="w-full h-auto flex justify-center mt-[70px] pt-[30px] pb-[30px] max-[38em]:mt-[20px] max-[38em]:pb-[0px] scroll-mt-20 "
      id="brand"
    >
      <div className="w-[fit] flex justify-between gap-[20px] border-[1px] border-[#3C3C3C] border-solid max-[38em]:w-[90%] max-[38em]:flex-wrap">
        {brandList.map((brand) => {
          return (
            <Image
              key={brand.id}
              src={brand.image}
              alt={brand.alt}
              width={250}
              className="max-[38em]:w-[150px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
