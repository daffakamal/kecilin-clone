import Image from "next/image";

import HeroImg from "../../assets/Images/Home/hero-slide-1.png";

export default function LandingPage() {
    return (
      <div className="w-full h-full bg-white">
        <div className="w-full pb-14 md:pb-20 lg:pb-32">
          <div className="relative overflow-hidden">
            <Image
              src={HeroImg.src}
              className="w-full object-cover aspect-[4/3] xs:aspect-[5/3] sm:aspect-video xl:aspect-[6/3] 2xl:aspect-auto pointer-events-none bg-cover bg-no-repeat"
              width={1567}
              height={644}
              priority
              alt="Elephant toy with grey background color"
            />
            <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed">
              <div className="h-full flex justify-start items-center px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-[149px]">
                <div className="xl:container xl:mx-auto text-white space-y-2 xl:space-y-5">
                  <h1 className="font-PoppinsSemi text-[26px] xs:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[66px]">
                    Small and Better
                  </h1>
                  <h2 className="font-PoppinsRegular text-[14px] xs:text-[16px] md:text-[20px] lg:text-[25px] xl:text-[28px] pb-3 lg:pb-1">
                    This is how we save your business
                  </h2>
                  <button className="font-PoppinsMedium uppercase px-4 md:px-5 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer">
                    <a href="#compress-page">
                      Compress now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}