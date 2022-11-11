
import HeroImg from "../../assets/Images/Home/hero-slide-1.png";

export default function LandingPage() {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full pt-16 pb-32">
                <div className="relative overflow-hidden">
                    <img 
                        src={HeroImg.src}
                        className="w-full pointer-events-none bg-cover bg-no-repeat"
                        alt="Elephant toy with grey background color"
                    />
                    <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed">
                        <div className="h-full flex justify-start items-center px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-[149px]">
                            <div className="xl:container xl:mx-auto text-white space-y-2 xl:space-y-5">
                                <h1 className="font-PoppinsSemi text-[30px] md:text-[40px] lg:text-[50px] xl:text-[66px]">
                                    Small and Better
                                </h1>
                                <h2 className="font-PoppinsRegular text-[16px] md:text-[20px] lg:text-[25px] xl:text-[28px] pb-3 lg:pb-1">
                                    This is how we save your business
                                </h2>
                                <button className="font-PoppinsMedium uppercase px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-[14px] cursor-pointer">
                                    <a href="#!">
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