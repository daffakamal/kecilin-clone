import Image from "next/image";

import ChartImg1 from "../../assets/Images/Home/home-chart-1.png";
import ChartImg2 from "../../assets/Images/Home/home-chart-2.png";
import ChartImg3 from "../../assets/Images/Home/home-chart-3.png";

export default function HomeChart() {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full grid gap-y-36 px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-20">
                <div 
                    className="grid md:flex gap-x-3 xl:gap-x-16 items-start"
                    data-aos="fade-up" 
                    data-aos-easing="ease"
                    data-aos-duration="400"
                    data-aos-delay="0"
                >
                    <Image
                        src={ChartImg1.src}
                        className="mx-auto w-11/12 xs:w-3/4 md:w-7/12 2xl:w-auto pointer-events-none"
                        width={550}
                        height={364}
                        loading="lazy"
                        alt="Chart"
                    />
                    <p className="font-PoppinsRegular text-[16px] xs:text-[22px] text-[#383838] pt-8 xs:pt-12 md:pt-0 lg:pt-3 md:translate-y-9">
                        Almost 90% of enterprises are have already adopted digital transformation, including financial services (93%)
                    </p>
                </div>
                <div 
                    className="grid md:flex gap-x-3 xl:gap-x-16 items-start"
                    data-aos="fade-up" 
                    data-aos-easing="ease"
                    data-aos-duration="400"
                    data-aos-delay="0"
                >
                    <div className="grid gap-y-12 pb-12 md:pb-0">
                        <p className="font-PoppinsRegular text-[16px] xs:text-[22px] text-[#383838] pt-8 xs:pt-12">
                            90% of all data today was created in the past 2 yrs. It is continuously growing up to 30% YoY.
                        </p>
                        <button className="font-PoppinsMedium uppercase px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-900 rounded-full text-[14px] cursor-pointer w-fit">
                            <a href="#!">
                                Compress now
                            </a>
                        </button>
                    </div>
                    <Image
                        src={ChartImg2.src}
                        className="mx-auto w-11/12 xs:w-3/4 md:w-7/12 2xl:w-auto pointer-events-none"
                        width={550}
                        height={364}
                        loading="lazy"
                        alt="Chart"
                    />
                </div>
                <div 
                    className="grid md:flex gap-x-3 xl:gap-x-16 items-start"
                    data-aos="fade-up" 
                    data-aos-easing="ease"
                    data-aos-duration="400"
                    data-aos-delay="0"
                >
                    <Image
                        src={ChartImg3.src}
                        className="mx-auto w-11/12 xs:w-3/4 md:w-7/12 2xl:w-auto pointer-events-none"
                        width={550}
                        height={364}
                        loading="lazy"
                        alt="Chart"
                    />
                    <div className="grid">
                        <p className="font-PoppinsRegular text-[16px] xs:text-[22px] text-[#383838] pt-8 xs:pt-12 pb-5">
                            14% growth of Hardware & Cloud Storage, Network & Bandwidth Growth up to 6%.
                        </p>
                        <div className="border-[#00BCEB] border-4 max-w-[130px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}