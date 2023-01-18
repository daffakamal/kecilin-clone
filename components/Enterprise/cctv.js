import Image from "next/image";

import CCTVImplementImg from "../../assets/Images/Enterprise/cctv-implement.png";
import Arrow from "../../assets/Images/Enterprise/arrow.svg";

export default function CCTV() {
  return (
    <div className="w-full h-full bg-white px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-48 py-12 sm:py-20 lg:py-24 xl:py-32 gap-y-[6rem]">
      <div className="mx-auto container">
        <h1 className="font-PoppinsSemi text-center text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
          The Implementation of {"Kecilin's"} Compression Technology
        </h1>
        <div className="grid justify-items-center lg:flex justify-center mx-auto gap-x-[2rem] xl:gap-x-[3rem] 2xl:gap-x-[4rem] gap-y-[3rem] pt-20">
          <div className="w-full grid max-w-[280px] sm:max-w-[360px] lg:max-w-[250px] xl:max-w-[290px]">
            <Image
              src={CCTVImplementImg.src}
              className="mx-auto w-full pointer-events-none"
              width={225}
              height={172}
              loading="lazy"
              alt="CCTV implementation using Kecilin's compression technology"
            />
            <div className="grid justify-items-start bg-[#dcf1fc] p-[1.5rem] gap-y-[1rem] font-PoppinsLight text-[#2F3D4D] text-[18px]">
              <span>Original Video :</span>
              <h1 className="font-PoppinsSemi text-[32px]">357 MB</h1>
              <p>8 mbps, 20 fps, 15 Minutes</p>
            </div>
          </div>
          <Image
            src={Arrow.src}
            className="w-16 mx-auto rotate-90 lg:rotate-0 py-6 lg:py-0 pointer-events-none"
            width={82}
            height={18}
            loading="lazy"
            alt="CCTV implementation using Kecilin's compression technology"
          />
          <div className="w-full grid max-w-[280px] sm:max-w-[360px] lg:max-w-[250px] xl:max-w-[290px]">
            <Image
              src={CCTVImplementImg.src}
              className="mx-auto w-full pointer-events-none"
              width={225}
              height={172}
              loading="lazy"
              alt="CCTV implementation using Kecilin's compression technology"
            />
            <div className="grid justify-items-start bg-[#dcf1fc] p-[1.5rem] gap-y-[1rem] font-PoppinsLight text-[#2F3D4D] text-[18px]">
              <span>Compressed Video :</span>
              <h1 className="font-PoppinsSemi text-[32px]">26 MB</h1>
              <p>0,4 mbps, 20 fps, 15 Minutes</p>
            </div>
          </div>
          <div className="w-auto grid text-center lg:text-left content-start gap-y-6">
            <h1 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[24px] xl:text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
              Compression implementation in CCTV footage
            </h1>
            <p className="font-PoppinsMedium text-[16px] text-[#383838] ">
              The compression technology from Kecilin has been used on CCTV in
              the banking industry in Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}