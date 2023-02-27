import Image from "next/image";

import IconKecilinSmall from "../../assets/Images/Home/ic-kecilin-span.svg";

export default function BottomBanner() {
  return (
    <div className="w-full bg-bottom-banner bg-cover">
      <div className="mx-auto relative w-10/12 xl:w-3/4 py-[80px] xs:py-[80px] md:py-[100px] lg:py-[150px] text-white">
        <h2
          className="flex flex-wrap items-center font-PoppinsBold text-[26px] xs:text-[36px] md:text-[42px] lg:text-[55px] xl:text-[64px] drop-shadow-text-banner mb-[30px]"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          data-aos-delay="0">
          Ma
          <Image
            src={IconKecilinSmall.src}
            className="w-[20px] xs:w-6 md:w-7 lg:w-10 my-auto xs:pt-1 md:pt-1 pointer-events-none"
            width={35}
            height={35}
            loading="lazy"
            alt="Kecilin logo"
          />
          e a bigger space!
        </h2>
        <h4
          className="font-PoppinsMedium text-[16px] xs:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] mb-[30px]"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          data-aos-delay="100">
          An inclusive future means protecting the planet we share
        </h4>
        <p
          className="font-PoppinsRegular text-[12px] md:text-[14px]"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          data-aos-delay="100">
          We believe that in every business, digital data plays an essential
          role in our money-making. Drowned with text-based files, images,
          video, streaming services, and documents every single minute of our
          working days, imagine how much we could save from having them smaller!
          Be worry-fee!
        </p>
      </div>
    </div>
  );
}
