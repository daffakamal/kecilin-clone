import Image from "next/image";

import FeatureImg1 from "../../assets/Images/Home/home-feature-1.png";
import FeatureImg2 from "../../assets/Images/Home/home-feature-2.png";

export default function HomeFeature() {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full grid px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 pb-36">
                <div className="grid xs:flex pt-52 pb-36 gap-x-3 xl:gap-x-16 items-center">
                    <Image
                        src={FeatureImg1.src}
                        className="pointer-events-none"
                        width={550}
                        height={364}
                        priority
                        alt="Two people working together"
                    />
                    <div className="grid pt-8 xs:pt-0">
                        <h2 className="font-PoppinsSemi text-[28px] xs:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
                            Kecilin; Make it 
                            {" "}
                            <span className="font-PoppinsSemiItalic underline underline-offset-2 decoration-blue-900 decoration-2">
                                Smaller
                            </span>
                        </h2>
                        <p className="font-PoppinsMedium text-[16px] xs:text-[18px] text-[#616161] pt-6">
                            Your only 360 solutions for compression and cloud management business
                        </p>
                        <p className="font-PoppinsLight text-[14px] text-[#616161] pt-6 pb-2">
                            Kecilin is the first and the only Indonesia's cloud and compression technology provider. making it possible for every business to experience small-is-better solutions for your everyday needs.
                        </p>
                        <div className="border-[#00BCEB] border-2 max-w-[91px] "></div>
                    </div>
                </div>
                <div className="grid xs:flex gap-x-3 xl:gap-x-16 items-center">
                    <div className="grid pb-8 xs:pb-0">
                        <h2 className="font-PoppinsSemi text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
                            Kecilin Wants to Create an Equal Access to Digital Information
                        </h2>
                        <p className="font-PoppinsMedium text-[16px] xs:text-[18px] text-[#616161] pt-6">
                            Kecilin provides a compression technology that is smooth, efficient and applicable to modern technology models.
                        </p>
                        <p className="font-PoppinsLight text-[14px] text-[#616161] pt-6 pb-2">
                            The innovation that we create is from the advancement of internet which can be realized by increasing the availability of cheaper storage, high-quality display resolutions, and good processing capabilities.
                        </p>
                        <div className="border-[#00BCEB] border-2 max-w-[91px] "></div>
                    </div>
                    <Image
                        src={FeatureImg2.src}
                        className="pointer-events-none"
                        width={550}
                        height={364}
                        priority
                        alt="People pointing on laptop"
                    />
                </div>
            </div>
        </div>
    );
}