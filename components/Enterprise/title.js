import Image from "next/image";

import TitleImg from "../../assets/Images/Enterprise/enterprise-header.png";
import ChecklistImg from "../../assets/Images/checklist.svg";
import { enterpriseList } from "../data/dataEnterprise";

export default function Title() {
  return (
    <div className="w-full h-full bg-[#e8f5fc] px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-12 sm:py-20 lg:py-24 xl:py-32">
      <div className="w-full lg:flex items-center gap-x-[4rem]">
        <Image
          src={TitleImg.src}
          className="mx-auto xs:w-[340px] sm:w-[370px] md:w-[400px] lg:w-[800px] xl:w-[900px] pointer-events-none"
          width={554}
          height={554}
          loading="lazy"
          alt="Person consulting his problem to Kecilin maskot"
        />
        <div className="w-full grid content-center">
          <h1 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
            Does Your Enterprise Have Problems Like This?
          </h1>
          <div className="pt-[3rem] grid gap-y-4">
            {enterpriseList.map((item) => (
              <ul key={item.id} className="w-full flex gap-x-3 mx-auto">
                <Image
                  src={ChecklistImg.src}
                  className="my-auto"
                  width={32}
                  height={32}
                  alt="Checklist"
                  loading="lazy"
                />
                <li className="font-PoppinsRegular text-[20px] lg:text-[20px] text-[#494949]">
                  {item.description}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
