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
        <div className="z-0  flex flex-start justify-between relative mt-[46px] ">
          <div className="w-[50vw]">
            {" "}
            <Image
              src="/images/hero-1.png"
              alt="image"
              width={800}
              height={800}
              className=" mt-[20px] w-[33vw] ml-[-11vw]"
            />
          </div>

          <div>
            <Image
              src="/images/hero-3.png"
              alt="image"
              width={800}
              height={800}
              className="w-[37vw] mt-[200px] mr-[-2vw] rotate-[35deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
