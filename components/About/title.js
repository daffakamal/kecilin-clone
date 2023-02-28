import Image from "next/image";

import ChartImg from "../../assets/Images/About/chart-about.png";

export default function AboutTitle() {
  return (
    <div className="w-full h-full bg-[#e8f5fc] px-[24px] sm:px-16 py-12 sm:py-20 lg:py-24 xl:py-32">
      <div className="large:max-w-[1100px] mx-auto md:flex items-center md:gap-x-7 lg:gap-x-[5rem] xl:gap-x-[6rem]">
        <div className="w-full grid justify-items-start gap-y-6 sm:gap-y-7 lg:gap-y-6 pb-10 sm:pb-14 lg:pb-0 md:text-left text-center">
          <h1 className="font-PoppinsBold text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
            Kecilin Wants to Create an Equal Access to Digital Information
          </h1>
          <p className="font-PoppinsSemi text-[15px] sm:text-[16px] xl:text-[16px] text-[#383838]">
            Kecilin provides a compression technology that is smooth, efficient
            and applicable to modern technology models.
          </p>
          <p className="font-PoppinsRegular text-[15px] sm:text-[16px] xl:text-[16px] text-[#383838]">
            The innovation that we create is from the advancement of internet
            which can be realized by increasing the availability of cheaper
            storage, high-quality display resolutions, and good processing
            capabilities.
          </p>
        </div>
        <Image
          src={ChartImg.src}
          className="mx-auto xs:w-[340px] sm:w-[370px] md:w-[580px] lg:w-[800px] xl:w-[900px] pointer-events-none"
          width={513}
          height={387}
          loading="lazy"
          alt="Chart"
        />
      </div>
    </div>
  );
}
