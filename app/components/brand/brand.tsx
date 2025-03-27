import React from "react";
import Image from "next/image";
import brandList from "./brandList";

const Brand = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-[70px] pt-[30px] pb-[30px]">
      <div className="w-[fit] flex justify-between gap-[20px] border-[1px] border-[#3C3C3C] border-solid">
        {brandList.map((brand) => {
          return (
            <Image
              key={brand.id}
              src={brand.image}
              alt={brand.alt}
              width={250}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
