import Image from "next/image";

import IconFile from "../../assets/Images/Home/icon-file.svg";

export default function CompressFile() {
    return (
        <div className="w-full h-full bg-[#dcf1fc]">
            <div className="w-full px-[24px] sm:px-16 lg:px-32 xl:px-52 2xl:px-80 py-[80px] 2xl:container 2xl:mx-auto">
                <div className="rounded-[24px] bg-white px-12 py-10">
                    <div className="grid text-center gap-y-8">
                        <h1 className="font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[32px]">
                            Compress File
                        </h1>
                        <p className="font-PoppinsRegular text-[14px] text-[#494949]">
                            Let's compress your database, jpeg dan png without ads, watermark and any email registration. Max file size upload 200MB.
                        </p>
                        <div className="rounded bg-[#F8F8F8] p-[15px] font-PoppinsLight text-[14px] text-[#494949] leading-[179.75%]">
                            <p>
                                Don't worry, your files will not be stored on our servers, we guarantee the security of your files with a special encryption system that is on our system. Keep using our free compression feature to save your storage {":)"}
                            </p>
                        </div>
                        <p className="text-left uppercase font-PoppinsSemi text-black text-[14px] ">
                            COMPRESS NOW
                        </p>
                        <div className="w-full h-auto -translate-y-3">
                            <label className="grid justify-items-center w-full p-20 transition bg-white border-2 border-[#00BCEB69] border-dashed rounded-[24px] appearance-none">
                                <span className="grid justify-items-center content-center space-y-10">
                                    <Image
                                        src={IconFile.src}
                                        className="pointer-events-none"
                                        width={56}
                                        height={51}
                                        priority
                                        alt="File icon"
                                    />
                                    <span className="font-PoppinsRegular text-[10px] text-[#494949]">
                                        Drag and drop the image here to upload it
                                    </span>
                                    <span className="font-PoppinsRegular text-[10px] text-[#494949]">
                                        Max file size 200MB
                                    </span>
                                    <label className="font-PoppinsSemi text-[12px] text-[#494949] rounded px-5 py-4 bg-[#D4F0F7] cursor-pointer">
                                        Choose File
                                    </label>
                                </span>
                                <input type="file" name="file_upload" className="hidden"></input>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}