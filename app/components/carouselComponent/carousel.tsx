"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselList from "../Testimonial/testimonialList";
import { star } from "@/images";
import Image from "next/image";
import Slider from "react-slick";

const CarouselCard = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    useTransform: false,
    responsive: [
      {
        breakpoint: 608,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {carouselList.map((item) => {
          return (
            <div
              className="bg-[#0D0D0D] p-[30px] border-[1px] border-solid border-[#2171C04D] flex flex-col gap-[10px] rounded-[20px] "
              key={item.id}
            >
              <Image src={star} alt="star" />
              <div className="flex gap-[10px] mt-[20px]">
                <Image src={item.userImage} alt="user image" width={50} />
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[#FFFFFF] font-[500] text-[18px]">
                    {item.userName}
                  </p>
                  <p className="text-[#FFFFFFB2] text-[14px] font-[400]">
                    {" "}
                    {item.userTitle}
                  </p>
                </div>
              </div>
              <p className="text-[#FFFFFFB2] font-[400] text-[16px] mt-[20px]">
                {item.userTestimonial}
              </p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default CarouselCard;
