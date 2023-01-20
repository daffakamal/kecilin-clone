import Image from "next/image";
import IPTVImplement1 from "../../assets/Images/Enterprise/iptv-implement-1.png";
import IPTVImplement2 from "../../assets/Images/Enterprise/iptv-implement-2.png";

export default function IPTV() {
  return (
    <div className="w-full h-full bg-[#EAF7FE] px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-12 sm:py-20 lg:py-24 xl:py-32 gap-y-[6rem]">
      <div className="mx-auto container">
        <h1 className="font-PoppinsSemi text-center text-[26px] sm:text-[28px] lg:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
          The Implementation of {"Kecilin's"} Compression Technology
        </h1>
        <div className="grid justify-items-center lg:flex justify-center mx-auto gap-x-[2rem] xl:gap-x-[3rem] 2xl:gap-x-[4rem] gap-y-[3rem] pt-12 md:pt-20">
          <div className="lg:w-1/2 grid text-center lg:text-left content-start gap-y-6">
            <h1 className="font-PoppinsSemi text-[22px] sm:text-[24px] lg:text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
              Proxy compression with VSAT
            </h1>
            <p className="font-PoppinsMedium text-[16px] text-[#383838]">
              By using compression from Kecilin, your transfer speed and storage
              cost will be reduced up to 90%
            </p>
          </div>
          <div className="grid md:flex gap-y-12 md:gap-y-0 gap-x-20 lg:gap-x-6">
            <div className="w-full grid max-w sm:max-w-[360px] lg:max-w-[250px] xl:max-w-[290px]">
              <Image
                src={IPTVImplement1.src}
                className="mx-auto w-full pointer-events-none"
                width={255}
                height={172}
                loading="lazy"
                alt="IPTV implementation using Kecilin's compression technology"
              />
              <div className="grid justify-items-center bg-white p-[1.5rem] gap-y-[1rem] font-PoppinsLight text-[#2F3D4D] text-[18px]">
                <span>Local IPTV</span>
                <h1 className="font-PoppinsSemi text-[20px]">
                  AVERAGE 4.5 Mbps
                </h1>
              </div>
            </div>
            <div className="w-full grid max-w-[280px] sm:max-w-[360px] lg:max-w-[250px] xl:max-w-[290px]">
              <Image
                src={IPTVImplement2.src}
                className="mx-auto w-full pointer-events-none"
                width={255}
                height={172}
                loading="lazy"
                alt="IPTV implementation using Kecilin's compression technology"
              />
              <div className="grid justify-items-center bg-white p-[1.5rem] gap-y-[1rem] font-PoppinsLight text-[#2F3D4D] text-[18px]">
                <span>IPTV Via KECILIN</span>
                <h1 className="font-PoppinsSemi text-[20px]">
                  AVERAGE 1.1 MBPS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
