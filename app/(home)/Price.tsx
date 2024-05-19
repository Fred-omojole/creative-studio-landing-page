import React from "react";

const Price = () => {
  return (
    <section className="black flex-col items-center lg:pt-[140px] lg:pb-[140px] md:pt-[120px] md:pr-[4vw] md:pb-[120px] md:pl-[4vw] overflow-hidden  flex pt-[100px] pr-[6vw] pb-[100px] pl-[6vw]">
      <div className="lg:max-w-[540px] max-w-[520px]">
        <h4 className="md:tracking-[-1.5px] tracking-[-2px] text-[48px] text-center uppercase font-[400] leading-[48px] text-[#fff]">
          design with speed and quality
        </h4>
      </div>
      {/* <div className="max-w-[940px] lg:mt-[60px] flex lg:flex-row flex-col items-center w-[100%] mt-[30px] ">
        <div className="justify-between lg:flex-row lg:items-stretch flex flex-col md:items-center items-start ">
          <div className="w-[54%] rounded-[20px] flex-col justify-between items-start p-[60px] background flex relative overflow-hidden md:pt-[120px] md:pr-[4vw] md:pb-[120px] md:pl-[4vw] pt-[100px] pr-[6vw] pb-[100px] pl-[6vw]">
            <div className="z-10 flex-col items-start flex relative mb-[40px]">
              <h4 className="text-center tracking-[-1.5px] uppercase text-[48px] font-[400] leading-[48px] text-[#fff]">full set</h4>
            </div>
          </div>
        </div>
      </div> */}

      <div className=" lg:flex-none lg:max-w-[940px] md:mt-[60px] md:max-w-[940px] md:flex-col md:items-center flex w-[100%] mt-[30px] ">
        <div className="md:justify-between items-stretch flex md:flex-col md:items-center flex-col justify-start ">
          <div className="lg:w-[54%] background rounded-[20px] justify-between items-start pt-[60px] pb-[60px] lg:pr-[60px] lg:pl-[60px]  flex relative overflow-hidden md:w-[70%] md:pl-[4vw] md:pr-[4vw] w-[100%] pl-[8vw] pr-[8vw]">

<div className="z-10 flex-col items-start mb-[40px] flex relative ">

<h4 className="text-[#fff] text-center tracking-[-1.5px] uppercase text-[48px] font-[400] leading-[48px]">Full set</h4>
<div className="mt-[24px] mb-[20px] ">
<div className="text-[#fff] text-[18px] font-[400] leading-[22px]">✽ 30 illustrationsre</div>

</div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
