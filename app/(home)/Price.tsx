import React from "react";

const Price = () => {
  return (
    <section className="black flex-col items-center lg:pt-[140px] lg:pb-[140px] md:pt-[120px] md:pr-[4vw] md:pb-[120px] md:pl-[4vw] overflow-hidden  flex pt-[100px] pr-[6vw] pb-[100px] pl-[6vw]">
      <div className="lg:max-w-[540px] max-w-[520px]">
        <h4 className="md:tracking-[-1.5px] tracking-[-2px] text-[48px] text-center uppercase font-[400] leading-[48px] text-[#fff]">
          design with speed and quality
        </h4>
      </div>
      <div className=" lg:flex-none lg:max-w-[940px] md:mt-[60px] md:max-w-[940px] md:flex-col md:items-center flex w-[100%] mt-[30px] ">
        <div className="justify-between lg:flex-row lg:items-stretch flex flex-col md:items-center items-start ">
          <div className="w-[54%] rounded-[20px] flex-col justify-between items-start p-[60px] background flex relative overflow-hidden md:pt-[120px] md:pr-[4vw] md:pb-[120px] md:pl-[4vw] pt-[100px] pr-[6vw] pb-[100px] pl-[6vw]">
            <div className="z-10 flex-col items-start flex relative mb-[40px]">
              <h4 className="text-center tracking-[-1.5px] uppercase text-[48px] font-[400] leading-[48px] text-[#fff]">full set</h4>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" lg:flex-none lg:max-w-[940px] md:mt-[60px] md:max-w-[940px] md:flex-col md:items-center flex w-[100%] mt-[30px] "></div> */}
    </section>
  );
};

export default Price;
