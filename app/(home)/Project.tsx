import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Project = () => {
  return (
    <>
      <section className="lg:pt-[140px] lg:pr-[10vw] pb-0 lg:pl-[10vw] md:pt-[120px] pl-[4vw] pr-[4vw] block overflow-hidden pt-[90px]  ">
        <div className="lg:w-[65vw] w-[90vw] ">
          <h3 className="uppercase tracking-[-2px] lg:text-[64px] font-[400] lg:leading-[64px] md:text-[56px] md:leading-[56px] leading-[52px] text-[48px]">
            perfect for websites, apps, email marketing, branding, social media
            and other design projects.
          </h3>
        </div>
        <div className="flex items-start lg:justify-center lg:mt-[100px] w-[100%] justify-between mt-[80px]">
          <Image
            className="z-10 lg:w-[26%] relative lg:rounded-[30px] overflow-hidden shadow align-middle inline-block rounded-[10px] w-[31%] md:rounded-18px "
            src="/images/phone-1.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className="lg:w-[26%] lg:rounded-[30px] md:rounded-[18px] lg:ml-[3%] overflow-hidden rounded-[10px] w-[31%] ml-[0%]"
            src="/images/phone-2.png"
            alt="image"
            width={500}
            height={500}
          />
          <Image
            className="lg:w-[26%] lg:rounded-[30px] md:rounded-[18px] lg:ml-[3%] overflow-hidden rounded-[10px] w-[31%] ml-[0%]"
            src="/images/phone-3.png"
            alt="image"
            width={500}
            height={500}
          />
        </div>

        <div className="items-start lg:mt-[130px] mt-[94px] mb-[40px] flex justify-center ">
          <div className="md:w-[320px] w-[100vw] text-center md:ml-[45px] ml-0 ">
            <div className="md:text-[16px] text-[18px]  leading-[22px] font-semibold text-left">
              Whether you&apos;re creating something fun and lively campaign or
              enhancing your branding, our illustrations have you covered.
            </div>
          </div>
        </div>
      </section>

      <div className="lg:h-[34vw] h-[40vw] flex-col mt-[-40px] flex overflow-hidden ">
        <Image
          className="lg:mt-[-80px] mt-[21px] max-w-[100%]"
          src="/images/worm.png"
          width={2000}
          height={2000}
          alt="image"
        />
      </div>
    </>
  );
};

export default Project;
