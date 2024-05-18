import Image from "next/image";

const Display = () => {
  return (
    <section className=" block black lg:pt-[150px] lg:pr-[10vw] lg:pb-[160px] lg:pl-[10vw] md:pt-[120px] md:pr-[4vw] md:pb-[120px] md:pl-[4vw] overflow-hidden pt-[100px] pr-[6vw] pb-[100px] pl-[6vw]     ">
      <div className="w-[100%] justify-end item-start flex ">
        <div className=" lg:w-[50%] md:w-[80%] lg:pl-[60px] lg:pr-[114px] pl-0 pr-[4vw] w-[96%] ">
          <div className="text-left text-[#fff] text-[20px]">Easy Settings</div>
          <div className="mt-[20px] mb-[20px]">
            <h3 className="uppercase lg:leading-[64px] font-[400] lg:text-[64px] tracking-[-2px] mt-0 mb-0 text-[#fff] leading-[52px] text-[54px] md:text-[56px] md:leading-[56px] ">
              Change color in <br />
              <span className="text-[#5250ec]">1 click</span>
            </h3>
          </div>
          <div className="text-[18px] font-400 leading-[22px] text-[#fff]">
            Adjust colors according to your brand book or client needs with just
            one click in Blender.
          </div>
        </div>
      </div>

      <div className="">
        <Image
          className="z-10 lg:w-[15vw] md:rounded-[10px] rounded-[8px] mt-[80px] ml-[8vw]  lg:mt-[-100px] lg:ml-[100px]  w-[22vw] md:ml-[57px] relative overflow-hidden shadow2"
          src="/images/color.png"
          alt="image"
          width={600}
          height={600}
        />

        <Image
          className="w-[85vw] md:w-[100%] lg:mt-[-112px] overflow-hidden md:rounded-[10px] md:mt-[-51px] mt-[-76px] rounded-[8px]"
          src="/images/blender.png"
          alt="image"
          width={90000}
          height={90000}
        />
      </div>
    </section>
  );
};

export default Display;
