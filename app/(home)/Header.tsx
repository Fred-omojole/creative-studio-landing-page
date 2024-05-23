"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <section className="relative block  ">
      <nav className="flex z-10 items-center justify-between absolute top-[0%] bottom-auto left-[0%] right-[0%] pt-[20px] lg:pr-[3vw] pb-[20px] lg:pl-[3vw] pr-[11px] pl-[11px]">
        <div className="flex items-center">
          <div className="text-[20px] uppercase font-medium sm:max-w-[100%] grid place-content-center mt-1  cursor-pointer">
            inflatable
          </div>
          <div className="hidden lg:block ml-[9px] mr-[7px] mt-[1px] mb-0 text-sm ">
            by
          </div>
          <Image
            className="hidden lg:block "
            src="/ic-logo.svg"
            alt="image"
            width={36}
            height={36}
          />
        </div>

        {/* Add spacing for mobile */}
        <div className="lg:hidden w-12"></div>
        <ScrollLink to="price" smooth offset={120}>
          {" "}
          <div className="  lg:inline-block rounded-full cursor-pointer border-[1px] border-solid border-black pt-[15px] pr-[20px] pb-[10px] pl-[20px] max-w-[100%] lg:hover:bg-black lg:hover:text-white transition duration-300 ease-in-out">
            <div className=" hidden lg:block lg:text-[15px] uppercase font-semibold">
              {" "}
              Download, for figma and blender
            </div>
            <div className="uppercase block lg:hidden font-semibold">
              download
            </div>
          </div>
        </ScrollLink>
      </nav>

      <div className="w-[100vw] pb-[60px] relative overflow-hidden flex-col items-center ">
        <div className="z-0 mt-[150px] flex flex-start justify-between relative lg:mt-[46px] ">
          <div className="lg:w-[50vw] ">
            {" "}
            <Image
              src="/images/hero-1.png"
              alt="image"
              width={1000}
              height={800}
              className=" lg:mt-[20px] w-[55vw] lg:w-[33vw] ml-[-11vw]"
            />
          </div>

          <div className="">
            <Image
              src="/images/hero-3.png"
              alt="image"
              width={1000}
              height={800}
              className="lg:w-[37vw]  lg:mt-[200px] w-[37vw] lg:mr-[-2vw] rotate-[35deg]"
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden flex z-0 w-[100vw] h-[100vh] min-h-[640px] flex-col justify-center items-center absolute inset-0">
        <div className=" w-[100%] max-w-[540px] ">
          <div className="text-[20px] text-center text-black font-medium">
            Stay creative with
          </div>
          <h1 className="overflow-hidden text-[48px] leading-[48px] text-center uppercase mt-[40px] mb-0 font-[400]">
            inflatable abstract 3d illustrations
          </h1>
        </div>
      </div>

      <div className=" hidden z-0 w-[100vw] h-[100vh] min-h-[640px] lg:flex flex-col justify-center items-center absolute inset-[0%]">
        <div className="lg:w-[56vw] md:w-[80vw] ">
          <div className="text-center text-[20px]">Stay creative with</div>
          <h1 className=" md:tracking-[-3px] text-center lg:tracking-[-5px] uppercase mt-[40px] mb-0 lg:text-[7vw] font-[400] lg:leading-[6.8vw]  ">
            {" "}
            Inflatable abstract 3d illustrations
          </h1>
        </div>
      </div>
      <div className="overflow-hidden z-[1] w-[100vw] flex-col items-center lg:mt-[-460px] mt-[-207px] md:mt-[-359px] flex relative">
        <Image
          className="  lg:w-[65vw] lg:mt-[79px]  lg:mr-[100px] relative align-middle max-w-[100%] md:mt-[373px] mt-[356px] mr-[7vw] w-[100vw]"
          src="/images/hero-2.png"
          alt=""
          width={900}
          height={800}
        />

        <div>
          <Image
            className="hidden lg:block  lg:w-[80vw] absolute top-auto lg:bottom-0 left-[10vw] right-0 align-middle max-w-[100%]  md:bottom-0 w-[100vw]  "
            src="/images/hero-4.png"
            alt="image"
            width={900}
            height={800}
          />

          <Image
            className="lg:hidden block w-[100vw] absolute top-auto bottom-0 left-[10vw] right-0   "
            src="/images/hero-4.png"
            alt="image"
            width={900}
            height={800}
          />
        </div>
      </div>

      {/* <div className="mb-[100px] pt-[60px]  sm:mb-[120px] pl-[4vw] pr-[4vw] flex-col mt-[0] flex md:mb-[140px] md:items-center lg:pr-[10vw] lg:pl-[10vw] ">
        <div className="max-w-[1400px] border-[1px] border-solid border-black rounded-[20px] justify-between items-center flex "> </div>
      </div> */}

      <div className="hidden lg:flex flex-col center mt-0 mb-[140px] pl-[10vw] pr-[10vw] ">
        <div className="max-w-[1400px] flex  border-[1px] border-solid border-black rounded-[20px] items-center pt-[2vw] pr-[3.5vw] pb-[1.5vw] pl-[4vw]">
          <div className="w-[30vw]">
            {" "}
            <div className="tracking-[1.5px] uppercase font-sans text-[48px] font-semibold leading-[48px] xl:ml-10 xl:items-center">
              Playfull & captivating
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/star.png"
              alt="image"
              width={100}
              height={100}
            />
          </div>

          <div className="w-[30vw] pl-[60px]">
            <div className=" font-sans font-semibold leading-[22px] text-[18px]">
              Add sense of playfulness into your projects that&apos;s perfect
              for capturing attention and creating memorable experiences
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:hidden flex mb-[100px] md:mb-[120px] flex-col items-center mt-0 pl-[4vw] pr-[4vw] ">
        <div className="max-w-[1400px] border-[1px] border-solid border-black flex justify-between rounded-[20px] items-center pt-[30px] pb-[30px] flex-col pr-[3.5vw] pl-[4vw]">
          <div className="w-[92%] md:w-[100%] justify-center items-center flex mb-[20px]">
            {" "}
            <div className="break-all text-[36px] leading-[36px] text-center inline tracking-[-2px] uppercase md:font-semibold font-[400]">
              Playfull & captivating
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/star.png"
              alt="image"
              width={100}
              height={100}
            />
          </div>

          <div className="w-[100%] md:w-80vw pl-0 text-center justify-center items-center mt-[24px] flex ">
            <div className="text-center block leading-[22px] font-[400] text-[18px]">
              Add sense of playfulness into your projects that&apos;s perfect
              for capturing attention and creating memorable experiences
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
