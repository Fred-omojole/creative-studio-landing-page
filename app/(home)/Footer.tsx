import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-auto bg-[#131313] mt-[-1px] md:pl-[3vw] md:pr-[3vw] pl-[4vw] pr-[4vw] overflow-hidden">
      <div className="z-[1] h-auto justify-between items-stretch lg:pt-[50px] md:pb-[60px] flex relative flex-col md:flex-row pt-[40px] pb-[20px]">
        <div className="lg:w-[50%] w-[100%] mt-[40px] md:mt-[0] items-center flex flex-col justify-between md:items-start ">
          <div className="flex-start items-center lg:mt-[0] flex md:flex-row md:mt-[-32] ">
            <div className="text-[#fff] mr-[6px] uppercase text-[20px] font-[500] leading-[20px]">
              Made by
            </div>
            <Image
              className=" hidden md:block mt-[-3px]"
              src="/ic-logo.svg"
              alt="image"
              width={30}
              height={30}
            />
          </div>
          <div className=" hidden md:block  text-[#f5f5f5] opacity-[0.4] mt-[0] mb-[23px] text-[12px] font-[400] leading-[12px]">
            © 2024 All Rights Reserved
          </div>
        </div>
        <div className="lg:w-[70%] md:w-[100%] md:justify-between flex md:flex-row flex-col justify-start md:items-start items-center mt-[50px] md:mt-[0] ">
          <div className="w-auto  md:w-[100%] flex-col md:items-start flex items-center mb-[40px] md:mb- ">
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
          <div className=" md:w-[100%] w-auto  md:items-start items-center flex-col md:justify-start flex mb-[40px] md:mb-[0] ">
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

          <div className="lg:w-auto flex flex-col md:items-start md:w-[w-33%] text-center items-center w-[100%] mb-[0]  ">
            <div className="md:mb-[40px] mb-[20px]">
              <div className="text-[#f5f5f5] text-[16px] lg:font-[400] md:font-[900] font-[700] leading-[16px]">
                Follow us
              </div>
            </div>
            <div className="text-white opacity-[0.6] items-center mb-[20px] flex ">
              <FaInstagram className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[15px]  md:mr-[0.5vw]" />
              <FaBehanceSquare className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[15px]  md:mr-[0.5vw]" />
              <FaPinterestSquare className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[15px]  md:mr-[0.5vw]" />
              <FaTwitterSquare className="w-[26px] h-[26px] min-w-[26px] mt-[-3px] mr-[15px]  md:mr-[0.5vw]" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex pb-[0] justify-center items-center w-[100%] text-center flex-col md:justify-start md:items-start md:pb-[20px]">
        <div className="mt-[60px] text-[12px] font-400 leading-[12px] text-white opacity-[0.6] ">© 2024 All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;

