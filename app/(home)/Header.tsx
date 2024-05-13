import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <section className="relative block  ">
      <nav className="flex z-10 items-center justify-between absolute top-[0%] bottom-auto left-[0%] right-[0%] pt-[20px] lg:pr-[3vw] pb-[20px] lg:pl-[3vw] pr-[11px] pl-[11px]">
        <div className="flex items-center">
          <div className="text-[20px] uppercase font-semibold sm:max-w-[100%] grid place-content-center mt-1">
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

        <div className="  lg:inline-block rounded-full cursor-pointer border-[1px] border-solid border-black pt-[15px] pr-[20px] pb-[10px] pl-[20px] max-w-[100%] lg:hover:bg-black lg:hover:text-white transition duration-300 ease-in-out">
          <div className=" hidden lg:block lg:text-[15px] uppercase font-semibold">
            {" "}
            Download, for figma and blender
          </div>
          <div className="uppercase block lg:hidden font-semibold">
            download
          </div>
        </div>
      </nav>

      <div className="w-[100vw] pb-[60px] relative overflow-hidden flex-col items-center ">
        <div className="z-0 mt-[150px] flex flex-start justify-between relative lg:mt-[46px] ">
          <div className="lg:w-[50vw]">
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

      {/* <div className="z-[1] w-[100vw] flex-col items-center mt-[-207px] md:mt-[-359px]  lg:mt-[-460px] flex relative">
        <Image src="/images/hero-2.png" alt="image" width={600} height={600} />
      </div> */}
    </section>
  );
};

export default Header;
