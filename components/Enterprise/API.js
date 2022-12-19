import Image from "next/image";

import APIImg from "../../assets/Images/Enterprise/enterprise-api.png";
import ChecklistImg from "../../assets/Images/checklist.svg";
import { APIdescriptionList } from "../data/dataEnterprise";

export default function API() {
  return (
    <div className="w-full h-full bg-[#dcf1fc] px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-12 sm:py-20 lg:py-24 xl:py-32">
      <div className="w-full lg:flex items-center gap-x-[4rem]">
        <Image
          src={APIImg.src}
          className="mx-auto w-[300px] xs:w-[320px] sm:w-[330px] md:w-[370px] lg:w-[330px] xl:w-[430px] 3xl:w-auto pb-8 pointer-events-none"
          width={543}
          height={543}
          loading="lazy"
          alt="Advantages of Kecilin API"
        />
        <div className="w-full grid content-center">
          <h1 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
            Kecilin API
          </h1>
          <p className="font-PoppinsRegular text-[18px] text-[#494949] pt-4">
            You can compress these files with the reliable and faster
            compression technology provided by KECILIN API. After you get key
            access, you can immediately compress databases, images, videos, and
            PDFs.
          </p>
          <div className="pt-5 grid gap-y-4">
            {APIdescriptionList.map((item) => (
              <div key={item.id} className="w-full flex flex-col">
                <div className="flex items-center gap-x-3">
                  <Image
                    src={ChecklistImg.src}
                    className="my-auto pointer-events-none"
                    width={32}
                    height={32}
                    alt="Checklist"
                    loading="lazy"
                  />
                  <h1 className="font-PoppinsSemi text-[20px] text-[#494949]">
                    {item.title}
                  </h1>
                </div>
                <p className="font-PoppinsRegular text-[20px] text-[#494949] pt-4 sm:pl-2 xl:pl-6 translate-x-9 xl:translate-x-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
