import Image from "next/image";

import FileIcon from "../../assets/Images/Home/icon-milestone1.svg";
import CloudIcon from "../../assets/Images/Home/icon-milestone2.svg";
import SavingStrorageIcon from "../../assets/Images/Home/icon-milestone3.svg";

export default function Milestone() {
    return (
        <div className="w-full h-full bg-gray-100">
            <div className="w-full px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-[110px] 2xl:container 2xl:mx-auto">
                <div className="grid justify-items-start px-5 py-10">
                    <div className="flex md:flex gap-x-6">
                        <h1 className="w-full font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[40px]">
                            Let's Get to Know Kecilin!
                        </h1>
                        <p className="font-PoppinsLight text-[20px] text-[#6D6D6D]">
                            Kecilin was founded in 2018 with a mission to create equality in information access even with existing limited telecommunication data access, 
                            we provide a compression technology that's smooth and efficient.
                        </p>
                    </div>
                    <h1 className="font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[32px] pt-20 pb-6">
                        Kecilin Milestone
                    </h1>
                    <div className="w-full flex flex-wrap md:flex-nowrap justify-between flex-rows">
                        <div className="flex flex-col w-full ">
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src={FileIcon.src}
                                    className="pointer-events-none"
                                    width={80}
                                    height={80}
                                    loading="lazy"
                                    alt="File icon"
                                />
                                <h1 className="font-PoppinsBold text-[36px] text-[#3D3D3D]">
                                    2.96 PB
                                </h1>
                            </div>
                            <p className="w-full pl-2 translate-x-24 font-PoppinsRegular text-[18px] text-[#6D6D6D]">
                                Inbound File Size
                            </p>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src={CloudIcon.src}
                                    className="pointer-events-none"
                                    width={80}
                                    height={80}
                                    loading="lazy"
                                    alt="Cloud icon"
                                />
                                <h1 className="font-PoppinsBold text-[36px] text-[#3D3D3D]">
                                    988.13 TB
                                </h1>
                            </div>
                            <p className="w-full pl-2 translate-x-24 font-PoppinsRegular text-[18px] text-[#6D6D6D]">
                                Outbound File Size
                            </p>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src={SavingStrorageIcon.src}
                                    className="pointer-events-none"
                                    width={80}
                                    height={80}
                                    loading="lazy"
                                    alt="Saving storage icon"
                                />
                                <h1 className="font-PoppinsBold text-[36px] text-[#3D3D3D]">
                                    67.41 %
                                </h1>
                            </div>
                            <p className="w-full pl-2 translate-x-24 font-PoppinsRegular text-[18px] text-[#6D6D6D]">
                                Saving Percentage
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}