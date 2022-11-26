export default function HomeComparison() {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-28 2xl:container 2xl:mx-auto">
                <div className="rounded bg-[#dcf1fc] px-5 sm:px-8 md:px-6 py-6 sm:py-8 md:py-7 lg:py-10">
                    <div className="grid md:flex justify-items-center gap-x-6">
                        <video
                            autoplay
                            loop
                            muted
                            className="w-full md:w-7/12 lg:w-8/12 3xl:w-7/12"
                        >
                            <source
                                src="https://kecilin.id/assts/video/example-compress.mp4"
                                type="video/mp4"
                            />
                                Your browser does not support the video tag.
                        </video>
                        <div className="relative mx-auto">
                            <h2 className="font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[20px] sm:text-[24px] pt-4 md:pt-0 pb-4">
                                Compare It Now
                            </h2>
                            <p className="font-PoppinsLight text-[14px] text-black">
                                Reduce video size by 50% while enhancing object colors and textures
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}