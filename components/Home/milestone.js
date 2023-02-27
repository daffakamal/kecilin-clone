import Image from "next/image";
import FileIcon from "../../assets/Images/Home/icon-milestone1.svg";
import CloudIcon from "../../assets/Images/Home/icon-milestone2.svg";
import SavingStrorageIcon from "../../assets/Images/Home/icon-milestone3.svg";

const styleDescIcon =
  "w-full sm:pl-2 xl:pl-4 2xl:pl-6 translate-x-20 xl:translate-x-16 font-PoppinsRegular text-[16px] sm:text-[18px] text-[#6D6D6D]";

export default function Milestone() {
    return (
      <div className="w-full h-full bg-[#f9fafb]">
        <div className="w-full px-[24px] sm:px-16 py-[110px]">
          <div className="grid justify-items-start px-2 xl:px-5 py-10 large:max-w-[1100px] mx-auto">
            <div
              className="grid md:flex gap-x-10 3xl:gap-x-6"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              data-aos-delay="0">
              <h1 className="w-full md:w-2/3 font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[28px] xs:text-[32px] xl:text-[40px]">
                {"Let's"} Get to Know Kecilin!
              </h1>
              <p className="w-full font-PoppinsLight text-[16px] xs:text-[20px] text-[#6D6D6D] pt-6 md:pt-0">
                Kecilin was founded in 2018 with a mission to create equality in
                information access even with existing limited telecommunication
                data access, we provide a compression technology {"that's"}{" "}
                smooth and efficient.
              </p>
            </div>
            <h1
              className="font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[26px] sm:text-[30px] lg:text-[32px] pt-20 pb-6"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              data-aos-delay="0">
              Kecilin Milestone
            </h1>
            <div
              className="w-full flex flex-wrap md:flex-nowrap justify-between flex-rows gap-y-8 md:gap-y-0"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              data-aos-delay="0">
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-x-6">
                  <Image
                    src={FileIcon.src}
                    className="w-14 sm:w-16 xl:w-14 2xl:w-16 pointer-events-none"
                    width={80}
                    height={80}
                    loading="lazy"
                    alt="File icon"
                  />
                  <h1 className="font-PoppinsBold text-[28px] sm:text-[30px] xl:text-[36px] text-[#3D3D3D]">
                    2.96 PB
                  </h1>
                </div>
                <p className={styleDescIcon}>Inbound File Size</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-x-6">
                  <Image
                    src={CloudIcon.src}
                    className="w-14 sm:w-16 xl:w-14 2xl:w-16 pointer-events-none"
                    width={80}
                    height={80}
                    loading="lazy"
                    alt="Cloud icon"
                  />
                  <h1 className="font-PoppinsBold text-[28px] sm:text-[30px] xl:text-[36px] text-[#3D3D3D]">
                    988.13 TB
                  </h1>
                </div>
                <p className={styleDescIcon}>Outbound File Size</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-x-6">
                  <Image
                    src={SavingStrorageIcon.src}
                    className="w-14 sm:w-16 xl:w-14 2xl:w-16 pointer-events-none"
                    width={80}
                    height={80}
                    loading="lazy"
                    alt="Saving storage icon"
                  />
                  <h1 className="font-PoppinsBold text-[28px] sm:text-[30px] xl:text-[36px] text-[#3D3D3D]">
                    67.41 %
                  </h1>
                </div>
                <p className={styleDescIcon}>Saving Percentage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}