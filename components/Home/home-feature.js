import Image from "next/image";

import FeatureImg1 from "../../assets/Images/Home/home-feature-1.png";
import FeatureImg2 from "../../assets/Images/Home/home-feature-2.png";

export default function HomeFeature() {
    return (
      <div className="w-full h-full bg-white">
        <div className="w-full grid px-[24px] sm:px-16 pb-20 md:pb-28 xl:pb-28 3xl:pb-32">
          <div className="mx-auto large:max-w-[1100px]">
            <div
              className="grid md:flex items-center pt-28 md:pt-28 lg:pt-36 xl:pt-48 pb-14 sm:pb-20 md:pb-28 xl:pb-32 gap-x-3 xl:gap-x-6 3xl:gap-x-12"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              data-aos-delay="0">
              <Image
                src={FeatureImg1.src}
                className="mx-auto w-11/12 xs:w-3/4 md:w-7/12 2xl:w-[500px] 3xl:w-5/12 pointer-events-none"
                width={550}
                height={364}
                loading="lazy"
                alt="Two people working together"
              />
              <div className="grid pt-8 xs:pt-5 md:pt-0">
                <h2 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
                  Kecilin; Make it{" "}
                  <span className="font-PoppinsSemiItalic underline underline-offset-2 decoration-blue-900 decoration-2">
                    Smaller
                  </span>
                </h2>
                <p className="font-PoppinsMedium text-[15px] sm:text-[16px] xl:text-[18px] text-[#616161] pt-5 xs:pt-6">
                  Your only 360 solutions for compression and cloud management
                  business
                </p>
                <p className="font-PoppinsLight text-[13px] xl:text-[14px] text-[#616161] pt-5 xs:pt-6 pb-2">
                  Kecilin is the first and the only {"Indonesia's"} cloud and
                  compression technology provider. making it possible for every
                  business to experience small-is-better solutions for your
                  everyday needs.
                </p>
                <div className="border-[#00BCEB] border-2 max-w-[91px] "></div>
              </div>
            </div>
            <div
              className="grid md:flex gap-x-3 xl:gap-x-6 3xl:gap-x-12 items-center"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="400"
              data-aos-delay="0">
              <div className="grid pt-8 xs:pt-5 md:pt-0 pb-10 md:pb-0">
                <h2 className="font-PoppinsSemi text-[26px] sm:text-[28px] lg:text-[30px] xl:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900">
                  Kecilin Wants to Create an Equal Access to Digital Information
                </h2>
                <p className="font-PoppinsMedium text-[15px] sm:text-[16px] xl:text-[18px] text-[#616161] pt-5 xs:pt-6">
                  Kecilin provides a compression technology that is smooth,
                  efficient and applicable to modern technology models.
                </p>
                <p className="font-PoppinsLight text-[13px] xl:text-[14px] text-[#616161] pt-5 xs:pt-6 pb-2">
                  The innovation that we create is from the advancement of
                  internet which can be realized by increasing the availability
                  of cheaper storage, high-quality display resolutions, and good
                  processing capabilities.
                </p>
                <div className="border-[#00BCEB] border-2 max-w-[91px] "></div>
              </div>
              <Image
                src={FeatureImg2.src}
                className="mx-auto w-11/12 xs:w-3/4 md:w-7/12 2xl:w-[510px] 3xl:w-5/12 pointer-events-none"
                width={550}
                height={364}
                loading="lazy"
                alt="People pointing on laptop's screen"
              />
            </div>
          </div>
        </div>
      </div>
    );
}