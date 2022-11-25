
export default function HomeStory() {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full grid px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 pt-5">
                <div 
                    className="grid md:flex items-center justify-center"
                    data-aos="fade-up" 
                    data-aos-easing="ease"
                    data-aos-duration="400"
                    data-aos-delay="0"
                >
                    <div className="rounded-lg px-6 py-8 text-white bg-gradient-to-r from-cyan-600 to-blue-900 z-10">
                        <h2 className="font-PoppinsSemi text-[28px] pb-3">
                            The story of how we grew and developed until now
                        </h2>
                        <p className="font-PoppinsRegular text-[16px]">
                            Now in 2022, we are GO-TO-Market ready with many enterprise level solution center arround our proprietary compression algorithm.
                        </p>
                    </div>
                    <div className="grid content-center m-auto w-full pt-6 md:pt-0">
                        <iframe
                            className="w-full h-auto aspect-video -translate-x-2 z-40"
                            src="https://www.youtube.com/embed/fSBPHITgoGw?autoplay=1"
                            title="YouTube video player"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}