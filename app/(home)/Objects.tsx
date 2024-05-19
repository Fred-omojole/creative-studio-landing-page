import Image from "next/image";

interface Image {
  src: string;
  alt: string;
  id: number;
}

const images: Image[] = [
  {
    id: 1,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-13.png",
    alt: "image",
  },

  {
    id: 2,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-16.png",
    alt: "image",
  },

  {
    id: 3,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-11.png",
    alt: "image",
  },
  {
    id: 4,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-1.png",
    alt: "image",
  },
  {
    id: 5,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-30.png",
    alt: "image",
  },
  {
    id: 6,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-12.png",
    alt: "image",
  },
  {
    id: 7,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-26.png",
    alt: "image",
  },
  {
    id: 8,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-17.png",
    alt: "image",
  },
  {
    id: 9,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-15.png",
    alt: "image",
  },
  {
    id: 10,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-28.png",
    alt: "image",
  },
  {
    id: 11,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-23.png",
    alt: "image",
  },
  {
    id: 12,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-27.png",
    alt: "image",
  },
  {
    id: 13,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-18.png",
    alt: "image",
  },
  {
    id: 14,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-9.png",
    alt: "image",
  },
  {
    id: 15,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-25.png",
    alt: "image",
  },
  {
    id: 16,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-3.png",
    alt: "image",
  },
  {
    id: 17,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-10.png",
    alt: "image",
  },

  {
    id: 18,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-7.png",
    alt: "image",
  },
  {
    id: 19,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-6.png",
    alt: "image",
  },

  {
    id: 20,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-8.png",
    alt: "image",
  },

  {
    id: 21,
    src: "https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/inflatable-14.png",
    alt: "image",
  },
];

const Objects = () => {
  return (
    <section className="flex flex-col justify-start items-center lg:pt-[150px] lg:pr-[10vw] lg:pb-[140px] lg:pl-[10vw] md:pt-[120px] md:pr-[4vw] md:pb-[120px] md:pl-[4vw] pt-[100px] pr-[6vw] pb-[100px] pl-[6vw]">
      <div className="max-w-[580px]">
        <div className="text-[#000] text-center text-[20px] ">
          Carefully crafted
        </div>
        <h3 className="text-[#000] tracking-[-2px] uppercase font-[400] md:text-[56px] md:leading-[56px] text-center  lg:text-[64px] lg:leading-[64px] text-[48px] leading-[52px]">
          {" "}
          21 beautiful objects
        </h3>
      </div>
      <div className="w-[100%] grid gap-y-6 gap-x-6 lg:grid-cols-3 grid-cols-2 mt-[40px]">
        {images.map((image, id) => (
          <Image
            key={id}
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
          />
        ))}
      </div>
    </section>
  );
};

export default Objects;
