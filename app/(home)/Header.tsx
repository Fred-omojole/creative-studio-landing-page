import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <section>
      <nav className="flex z-10 items-center justify-between absolute top-[0%] bottom-auto left-[0%] right-[0%] pt-5 lg:pr-[3vw] pb-5 lg:pl-[3vw] pr-[11px] pl-[11px]">
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
          <div className="uppercase block lg:hidden">download</div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
