import React from "react";

import Image from "next/image";

const Price = () => {
  return (
    <>
      <section className="black flex-col items-center pt-[140px] pb-[140px] flex font-serif ">
        <div className="max-w-[540px] ">
          <h4 className="tracking-[-1.5px]  text-[48px] text-center uppercase font-[400] leading-[48px] text-[#fff]">
            design with speed and quality
          </h4>
        </div>
        <div className="max-w-[940px] mt-[60px]">
          <div className="justify-between items-stretch flex">
            {/* check hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
            <div className="w-[54%] bg-gradient-to-r from-purpleStart to to-purpleEnd rounded-[20px] flex-col justify-between items-start pt-[60px] pr-[60px] pb-[60px] pl-[60px] flex relative overflow-hidden ">
              {" "}
              <div className="z-[1] flex-col items-start mb-[40px] flex relative">
                <h4 className="text-[#fff] text-center tracking-[1.5px] uppercase text-[48px] font-[400] leading-[48px]">
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
                className="z-[1] w-[100%] border-[1px] border-solid border-[#fff] rounded-[100px] justify-center pt-[22px] pb-[20px] flex relative"
              >
                <div className="text-[#fff] uppercase text-[15px] font-[500] leading-[15px]">
                  Purchase, $32
                </div>
              </button>
              <Image
                src="/images/purchase.png"
                className="z-[0] w-[300px] absolute top-[33%] bottom-[0%] left-auto right-[0%]"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="w-[44%] bg-[#fff] rounded-[20px] pt-[60px] pr-[60px] pb-[60px] pl-[60px]">
              <div className="z-[1] flex-col items-start mb-[40px] flex relative ">
                <div className="text-left capitalize text-[20px]  text-[#000]">
                  Pro Access
                </div>
                <div className="mt-[30px] tracking-[-1.5px] uppercase text-[36px] leading-[40px]">
                  GET ACCESS TO HUGE LIBRARY OF 3D ILLUSTRATIONS & MOCKUPS.
                  1200+ ASSETS AND REGULAR RELEASES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
