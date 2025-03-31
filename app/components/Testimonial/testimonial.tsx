import React from "react";
import CarouselCard from "../carouselComponent/carousel";

const Testimonial = () => {
  return (
    <>
      <div
        className="flex justify-center w-full mt-[150px] pt-[80px] max-[38em]:pt-0 max-[38em]:mt-[90px] scroll-mt-16"
        id="testimonials"
      >
        <div className="flex flex-col w-[80%] items-center  max-[38em]:w-[90%]">
          <p className="text-[#FFFFFFB2] font-[500] text-[18px]">
            Testimonials
          </p>
          <p className="text-[#FFFFFF] font-[600] text-[40px] max-[38em]:text-center max-[38em]:text-[30px]">
            Real Users, Real Results
          </p>
          <CarouselCard />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
