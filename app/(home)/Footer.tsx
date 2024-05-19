import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-auto bg-[#131313] mt-[-1px] pl-[3vw] pr-[3vw]">
      <div className="z-[1] h-auto justify-between items-stretch pt-[50px] pb-[60px] flex relative">
        <div className="w-[50%] flex flex-col justify-between items-start ">
          <div className="flex-start items-center mt-[0] flex ">
            <div className="text-[#fff] mr-[6px] uppercase text-[20px] font-[500] leading-[20px]">
              Made by
            </div>
            <Image
              className="mt-[-3px]"
              src="/ic-logo.svg"
              alt="image"
              width={30}
              height={30}
            />
          </div>
          <div className=" text-[#f5f5f5] opacity-[0.4] mt-[0] mb-[23px] text-[12px] font-[400] leading-[12px]">
            © 2024 All Rights Reserved
          </div>
        </div>
        <div className="w-[70%] justify-between flex ">
          <div className="w-auto flex-col items-start flex ">
            <div className="mb-[40px]">
              <div className="text-[#f5f5f5] mb-0 text-[16px] font-400 leading-[16px]">
                Products
              </div>
            </div>
            <div className=" text-white items-center mb-[18px]  opacity-[0.6] flex">
              Characters
            </div>
            <div className=" text-white items-center mb-[18px] opacity-[0.6] flex">
              Abstract
            </div>
            <div className=" text-white items-center mb-[18px] opacity-[0.6] flex">
              Themes
            </div>
            <div className=" text-white items-center mb-[18px] opacity-[0.6] flex">
              Mockups
            </div>
            <div className=" text-white items-center mb-[18px] opacity-[0.6] flex">
              Freebies
            </div>
            <div className=" mt-[-2px]  text-white items-center mb-[18px] opacity-[0.6] flex">
              <Image
                className="ml-[-22px] mr-[7px] w-[15px]"
                src="/ic-pro-access-new.svg"
                alt="image"
                width={30}
                height={30}
              />
              Pro Access
            </div>
          </div>
          <div className="w-auto flex-col items-start flex ">
            <div className="mb-[40px] ">
              <div className="text-[#f5f5f5] mb-0 text-[16px] font-400 leading-16px">
                Legal info
              </div>
            </div>
            <div className="items-center mb-[18px] flex text-white opacity-[0.6]">
              License
            </div>
            <div className="items-center mb-[18px] flex text-white opacity-[0.6]">
              Use cases
            </div>
            <div className="items-center mb-[18px] flex text-white opacity-[0.6]">
              Order custom
            </div>
            <div className="items-center mb-[18px] flex text-white opacity-[0.6]">
              Privacy policy
            </div>
            <div className="items-center mb-[18px] flex text-white opacity-[0.6]">
              Terms of Use
            </div>
            <div className="items-center mb-[18px] flex text-white opacity-[0.6]">
              help@wannathis.one
            </div>
            {/* <div className="items-center mb-[18px] flex text-white opacity-[0.6]"></div> */}
          </div>

          <div className="w-auto">
            <div className="mb-[40px]">
              <div className="text-[#f5f5f5] text-[16px] font-400 leading-[16px]">
                Follow us
              </div>
            </div>
            <div className="text-white opacity-[0.6] items-center mb-[20px] flex ">
              <FaInstagram className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[0.5vw]" />
              <FaBehanceSquare className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[0.5vw]" />
              <FaPinterestSquare className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[0.5vw]" />
              <FaTwitterSquare className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[0.5vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
