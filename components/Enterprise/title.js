import Image from "next/image";

import TitleImg from "../../assets/Images/Enterprise/enterprise-header.png";
import ChecklistImg from "../../assets/Images/checklist.svg";
import { enterpriseList } from "../data/dataEnterprise";

export default function Title() {
  return (
    <div className="w-full h-full bg-white px-[24px] sm:px-16 pt-0 md:pt-16 pb-12 sm:pb-14 md:pb-16 g:py-24 xl:py-32">
      <div className="mx-auto large:max-w-[1100px] md:flex items-center gap-x-10 lg:gap-x-[4rem]">
        <Image
          src={TitleImg.src}
          className="mx-auto w-[300px] xs:w-[340px] md:w-[300px] lg:w-[370px] xl:w-[450px] 3xl:w-auto pointer-events-none"
          width={554}
          height={554}
          loading="lazy"
          alt="Person consulting his problem to Kecilin maskot"
        />
        <div className="w-full grid content-center">
          <h1 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
            Does Your Enterprise Have Problems Like This?
          </h1>
          <div className="pt-[2.5rem] md:pt-[3rem] grid gap-y-4">
            {enterpriseList.map((item) => (
              <ul key={item.id} className="w-full flex gap-x-3 mx-auto">
                <Image
                  src={ChecklistImg.src}
                  className="my-auto pointer-events-none"
                  width={32}
                  height={32}
                  alt="Checklist"
                  loading="lazy"
                />
                <li className="w-fit font-PoppinsRegular text-[20px] lg:text-[20px] text-[#494949]">
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
