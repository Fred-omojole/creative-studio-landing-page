import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center pt-[140px] pb-[140px] w-[100vw] overflow-hidden bg-gradient-to-r from-purpleStart to to-purpleEnd ">
      <div className="w-[100%] lg:w-[55vw] md:w-[80vw]">
        <h2 className="uppercase orange text-center lg:tracking-[-5px] md:mt-[40px] mb-0 font-sans lg:text-[8vw] font-[400] lg:leading-[6.8vw] md:tracking-[-3px] md:text-[72px] md:leading-[72px] break-normal text-[48px] leading-[48px] mt-0 tracking-[-3px]">
          grab attention with realistic materials and textures
        </h2>
      </div>
      <Image
        className="md:w-[60vw] max-w-[800px] w-[90vw] align-middle inline-block  "
        src="/images/play.png"
        alt="image"
        width={800}
        height={800}
      />
    </section>
  );
};

export default Hero;
