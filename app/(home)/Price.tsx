import React from "react";

import Image from "next/image";
import Link from "next/link";

const Price = () => {
  return (
    <>
      <section id="price" className="black flex-col items-center lg:pt-[140px] lg:pb-[140px] flex  lg:pr-0 lg:pl-0 pt-[100px] pr-[6vw] pl-[6vw] pb-[100px] md:pt-[120px] md:pl-[4vw] md:pb-[120px] md:pr-[4vw] ">
        <div className="max-w-[540px] ">
          <h4 className="tracking-[-1.5px]  text-[48px] text-center uppercase font-[400] leading-[48px] text-[#fff]">
            design with speed and quality
          </h4>
        </div>
        <div className="lg:max-w-[940px] md:mt-[60px] w-[100%] lg:flex-none flex-col items-center flex mt-[30px]">
          <div className="lg:justify-between lg:items-stretch flex md:items-center flex-col justify-start  lg:flex-row">
            {/* check hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
            <div className="lg:w-[54%] bg-gradient-to-r from-purpleStart to to-purpleEnd rounded-[20px] flex-col justify-between items-start pt-[60px] lg:pr-[60px] pb-[60px] lg:pl-[60px] flex relative overflow-hidden md:w-[70%] md:pl-[4vw] md:pr-[4vw] w-[100%] pl-[8vw] pr-[8vw]">
              {" "}
              <div className="z-[1] flex-col items-start mb-[40px] flex relative">
                <h4 className="text-[#fff] text-center tracking-[-2px] md:racking-[1.5px] uppercase text-[48px] font-[400] leading-[48px]">
                  Full set
                </h4>
                <div className="mb-[20px] mt-[24px] ">
                  <div className="text-[#fff] text-[18px] font-[400] leading-[22px]">
                    ✽ 30 illustrations
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="text-[#fff] text-[18px] font-400 leading-[22px]">
                    ✽ Inflatable trending style
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="text-[#fff] text-[18px] font-400 leading-[22px]">
                    ✽ Stylish material
                  </div>
                </div>{" "}
                <div className="mb-[20px]">
                  <div className="text-[#fff] text-[18px] font-400 leading-[22px]">
                    ✽ Blender source file
                  </div>
                </div>{" "}
                <div className="mb-[20px]">
                  <div className="text-[#fff] text-[18px] font-400 leading-[22px]">
                    ✽ Figma file
                  </div>
                </div>{" "}
                <div className="mb-[20px]">
                  <div className="text-[#fff] text-[18px] font-400 leading-[22px]">
                    ✽ PNG files
                  </div>
                </div>
              </div>
              <button
                title="text"
                type="button"
                className="z-[1] w-[100%] border-[1px] border-solid border-[#fff] rounded-[100px] justify-center pt-[22px] pb-[20px] flex relative font-semibold"
              >
                <div className="text-[#fff] uppercase text-[15px] font-[500] leading-[15px]">
                  Purchase, $32
                </div>
              </button>
              <Image
                src="/images/purchase.png"
                className="z-[0] lg:w-[300px] md:w-[90%] absolute top-[33%] bottom-[0%] left-auto right-[0%] max-w-[260px]"
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="lg:w-[44%] bg-[#fff] lg:mt-[2px] rounded-[20px] pt-[60px] lg:pr-[60px] pb-[60px] lg:pl-[60px] md:w-[70%] md:mt-[41px] md:pl-[8vw] md:pr-[8vw]  w-[100%] mt-[30px] pl-[8vw] pr-[8vw]">
              <div className="z-[1] flex-col items-start mb-[40px] flex relative ">
                <div className="text-left capitalize text-[20px]  text-[#000]">
                  Pro Access
                </div>
                <div className="mt-[30px] tracking-[-1.5px] uppercase lg:text-[36px] lg:leading-[40px] text-[32px] leading-[38px]">
                  GET ACCESS TO HUGE LIBRARY OF 3D ILLUSTRATIONS & MOCKUPS.
                  1200+ ASSETS AND REGULAR RELEASES
                </div>
              </div>
              <button
                className="z-[1] w-[100%] cursor-pointer border-[1px] border-solid border-[#000] rounded-full justify-center pt-[22px] pb-[20px] relative flex group transition-all ease-in-out duration-0  lg:hover:bg-black font-semibold "
                title="text"
                type="button"
              >
                <div className="text-[#000] text-[15px] leading-[15px] font-500 uppercase group-hover:lg:text-[#ffff] transition-all ease-in-out duration-0 ">
                  Try, $10/month
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-full md:w-[64vw] w-[92vw] lg:flex-row flex-col pt-[30px] pr-[8vw] pb-[30px] pl-[8vw] justify-start border-[1px] border-solid border-slate-300 rounded-[20px] flex lg:justify-between items-center mt-[30px] lg:pt-[24px] lg:pr-[60px] lg:pb-[24px] lg:pl-[60px]">
            <div className="text-[#fff] uppercase text-[32px] leading-[32px]">
              Demo
            </div>
            <div className="ml-[20px] mr-[20px] md:mt-[12px] md:mb-[12px] w-80vw mt-[10px] mb-[24px]">
              <div className="text-[#fff]  text-[18px] font-400 leading-[22px] text-center">
                Not sure about inflatable set? Give it a free try!
              </div>
            </div>
            <div className="z-[1] rounded-[100px] justify-center items-center flex relative pt-[16px] pr-[40px] pb-[12px] pl-[40px] w-auto border-[1px] border-solid border-slate-300">
              <div className=" text-[#fff] uppercase text-[15px] font-500 leading-15px">
                download
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
