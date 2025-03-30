import React from "react";
import { logo } from "@/images";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center  mt-[50px] pt-[80px] pb-[70px] max-[38em]:pb-[40px]">
        <div className="w-[90%] flex flex-col gap-[70px]">
          <div className="flex justify-between max-[38em]:flex-col max-[38em]:gap-[25px]">
            <div className="flex flex-col">
              <Image src={logo} alt="logo" />
              <p className="text-[#FFFFFF] text-[18px] font-[500] mt-[50px] max-[38em]:mt-[20px]">
                Subscribe to our newsletter
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[20px]">
                Get the latest of our article, news and resources sent in your
                inbox
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] text-[18px] font-[500]">Company</p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[20px]">
                About Us
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Security
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Careers
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Community
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] text-[18px] font-[500]">Products</p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[20px]">
                Features
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                How it works
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                How it works
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] text-[18px] font-[500]">Solutions</p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[20px]">
                Analytics
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Commerce
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Insights
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] text-[18px] font-[500]">Support</p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[20px]">
                Help Center
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Contact Us
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Privacy Policy
              </p>
              <p className="text-[#FFFFFF99] text-[18px] font-[500] mt-[10px]">
                Terms & Conditions
              </p>
            </div>
          </div>
          <div className="flex justify-between max-[38em]:flex-col max-[38em]:gap-[15px]">
            <p className="text-[14px] text-[#FFFFFF99] font-[400]">
              copywright mercy.com. All rights Reserved{" "}
            </p>
            <div className="flex gap-[30px] items-center">
              <p className="text-[#FFFFFF] text-[20px] font-[400] text-nowrap">
                Follow us:
              </p>
              <FontAwesomeIcon icon={faFacebook} className="h-[25px] w-auto" />
              <FontAwesomeIcon icon={faInstagram} className="h-[25px] w-auto" />
              <FontAwesomeIcon icon={faTwitter} className="h-[25px] w-auto" />
              <FontAwesomeIcon icon={faYoutube} className="h-[25px] w-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
