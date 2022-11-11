
export default function HomeStory() {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full pt-5 pb-32">
                <div className="flex px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80">
                    <div className="rounded px-6 py-8 text-white bg-gradient-to-r from-cyan-600 to-blue-900 z-10">
                        <h2 className="font-PoppinsSemi text-[28px] pb-3">
                            The story of how we grew and developed until now
                        </h2>
                        <p className="font-PoppinsRegular text-[16px]">
                            Now in 2022, we are GO-TO-Market ready with many enterprise level solution center arround our proprietary compression algorithm.
                        </p>
                    </div>
                    <video
                        autoplay
                        loop
                        muted
                        className="w-full 2xl:w-auto h-auto z-40"
                    >
                        <source
                            src="/assets/Video/video-story.mp4"
                            type="video/mp4"
                        />
                            Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}