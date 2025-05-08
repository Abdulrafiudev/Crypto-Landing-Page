import React from "react";
import Hero from "../components/Hero/Hero";
import Brand from "../components/brand";
import Feature from "../components/feature";
import Process from "../components/process";
import Feature1 from "../components/feature1";
import Feature2 from "../components/feature2";
import Token from "../components/token";
import Testimonial from "../components/Testimonial";
const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Hero />
        <Brand />
        <Feature />
        <Process />
        <Feature1 />
        <Feature2 />
        <Token />
        <Testimonial />
      </div>
    </>
  );
};

export default LandingPage;
