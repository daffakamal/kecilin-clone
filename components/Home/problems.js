import Image from "next/image";

import Maskot from "../../assets/Images/Home/maskot.png";

export default function Problems() {
  return (
    <div className="w-full h-full bg-[#f9fafb]">
      <div className="w-full px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-[110px] 3xl:py-0 3xl:pt-[110px] 2xl:container 2xl:mx-auto">
        <div className="flex flex-col md:flex-row justify-between px-2 xl:px-5 pt-10">
          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            data-aos-delay="0"
          >
            <h1 className="w-full font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[28px] xs:text-[32px] xl:text-[40px]">
              Problems such as slow transfer speeds?
            </h1>
            <p className="w-full font-PoppinsLight text-[16px] xs:text-[20px] text-[#6D6D6D] pt-7">
              If your Company is facing problems such as slow transfer speeds,
              expensive internet/transfer fees, and full storage
              <br />
              <br />
              Just compress your files with the reliable and fast compression
              technology presented by KECILIN API
            </p>
          </div>
          <Image
            src={Maskot.src}
            className="w-14 sm:w-1/2 md:w-[45%] xl:w-1/2 3xl:w-[40%] h-1/2 lg:h-auto my-auto pointer-events-none"
            width={400}
            height={460}
            loading="lazy"
            alt="Maskot"
          />
        </div>
      </div>
    </div>
  );
}
