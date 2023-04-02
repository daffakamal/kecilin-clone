import Image from "next/image";
import SlowTransferImg from "../../assets/Images/Enterprise/advantage-top.png";
import FullStorageImg from "../../assets/Images/Enterprise/advantage-center.png";
import FeesImg from "../../assets/Images/Enterprise/advantage-bottom.png";
import TableTopImg from "../../assets/Images/Enterprise/tabel-top.png";
import TableCenterImg from "../../assets/Images/Enterprise/tabel-center.png";
import TableBottomImg from "../../assets/Images/Enterprise/tabel-bottom.png";

export default function Advantage() {
  return (
    <div className="w-full h-full bg-[#dcf1fc] px-[24px] sm:px-16 py-12 sm:py-20 lg:py-24 xl:py-32">
      <div className="grid justify-items-center mx-auto large:max-w-[1100px]">
        <div className="mx-auto">
          <div className="grid justify-items-center text-center gap-y-6">
            <h1 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
              Slow transfer speed
            </h1>
            <p className="font-PoppinsRegular text-[18px] text-[#494949] pb-9">
              By using compression from Kecilin, your transfer speed will be
              increasing up to 100 times!
            </p>
          </div>
          <div className="w-full md:flex items-center gap-x-10 lg:gap-x-[4rem]">
            <Image
              src={SlowTransferImg.src}
              className="mx-auto w-[170px] xs:w-[200px] sm:w-[220px] md:w-[200px] lg:w-[250px] xl:w-[270px] 3xl:w-[240px] pointer-events-none"
              width={330}
              height={330}
              loading="lazy"
              alt="Advantages of Kecilin API"
            />
            <Image
              src={TableTopImg.src}
              className="mx-auto w-[250px] xs:w-[360px] sm:w-[430px] md:w-[370px] lg:w-[440px] xl:w-[490px] 3xl:w- drop-shadow-2xl pointer-events-none"
              width={592}
              height={294}
              loading="lazy"
              alt="Data compression percentage table by using Kecilin"
            />
          </div>
        </div>
        <div className="mx-auto pt-20 3xl:pt-24">
          <div className="grid justify-items-center text-center gap-y-6">
            <h1 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
              Full Storage
            </h1>
            <p className="font-PoppinsRegular text-[18px] text-[#494949] pb-9">
              By using compression from Kecilin, your storage used will decrease
              by 99%
            </p>
          </div>
          <div className="w-full md:flex items-center gap-x-10 lg:gap-x-[4rem]">
            <Image
              src={TableCenterImg.src}
              className="mx-auto w-[250px] xs:w-[360px] sm:w-[430px] md:w-[370px] lg:w-[440px] xl:w-[490px] drop-shadow-2xl pointer-events-none"
              width={592}
              height={294}
              loading="lazy"
              alt="Data compression percentage table by using Kecilin"
            />
            <Image
              src={FullStorageImg.src}
              className="mx-auto w-[170px] xs:w-[200px] sm:w-[250px] md:w-[270px] lg:w-[290px] xl:w-[320px] 2xl:w-[310px] pointer-events-none"
              width={469}
              height={469}
              loading="lazy"
              alt="Advantages of Kecilin API"
            />
          </div>
        </div>
        <div className="mx-auto pt-20 3xl:pt-24">
          <div className="grid justify-items-center text-center gap-y-6">
            <h1 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
              Expensive fees for transfer speed and storage
            </h1>
            <p className="font-PoppinsRegular text-center text-[18px] text-[#494949] pb-9">
              By using compression from Kecilin, the costs required for transfer
              speed and storage will be reduced by 90%
            </p>
          </div>
          <div className="w-full md:flex items-center gap-x-10 lg:gap-x-[4rem]">
            <Image
              src={FeesImg.src}
              className="mx-auto w-[170px] xs:w-[200px] sm:w-[250px] md:w-[230px] lg:w-[280px] xl:w-[320px] 2xl:w-[310px] 3xl:w-[370px] pb-10 lg:pb-0 pointer-events-none"
              width={469}
              height={469}
              loading="lazy"
              alt="Advantages of Kecilin API"
            />
            <Image
              src={TableBottomImg.src}
              className="mx-auto w-[250px] xs:w-[360px] sm:w-[430px] md:w-[370px] lg:w-[440px] xl:w-[490px] drop-shadow-2xl pointer-events-none"
              width={592}
              height={294}
              loading="lazy"
              alt="Advantages of Kecilin API"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
