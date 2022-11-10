
import HeroImg from "../../assets/Images/Home/hero-slide-1.png";

export default function LandingPage() {
    return (
        <div className="w-full h-full bg-white">
            <div className="pt-16">
                <div className="w-full pb-32">
                    <div className="relative overflow-hidden">
                        <img 
                            src={HeroImg.src}
                            className="w-full pointer-events-none brightness-90 bg-cover bg-no-repeat"
                            alt="Living room and kitchen"
                        />
                        <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed">
                            <div className="h-full flex justify-start items-center px-[24px] sm:px-16 xl:px-32 2xl:px-[132px] py-[149px]">
                                <div className="text-white space-y-2 lg:space-y-5">
                                    <h1 className="font-PoppinsBold text-[66px]">
                                        Small and Better
                                    </h1>
                                    <h2 className="font-PoppinsRegular text-[28px]">
                                        This is how we save your business
                                    </h2>
                                    <button 
                                        href="#!"
                                        className="font-PoppinsMedium uppercase px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-[14px]"
                                    >
                                        Compress now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}