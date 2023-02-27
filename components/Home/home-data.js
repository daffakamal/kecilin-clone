import Image from "next/image";
import IconData1 from "../../assets/Images/Home/icon-home-data-1.svg";
import IconData2 from "../../assets/Images/Home/icon-home-data-2.svg";

export default function HomeData() {
    return (
      <div className="w-full bg-[#dcf1fc] py-[55px]">
        <div className="w-full px-[24px] sm:px-16 pt-5">
          <div className="grid justify-items-center md:flex gap-y-10 md:gap-y-0 md:gap-x-10 xl:gap-x-14 large:max-w-[1100px] mx-auto">
            <h1 className="text-center xs:text-left font-PoppinsSemi text-[40px] text-[#373737] pb-3">
              The future is frightening!
            </h1>
            <div className="flex">
              <div
                className="max-w-[282px] bg-white rounded-lg grid px-6 py-4"
                style={{
                  boxShadow: "0px 0px 30px rgb(0 0 0 / 10%)",
                }}>
                <div className="grid">
                  <div className="flex justify-between">
                    <h3 className="font-PoppinsSemi text-[32px] text-[#0D274D]">
                      32%
                    </h3>
                    <Image
                      src={IconData1.src}
                      className="pointer-events-none"
                      width={32}
                      height={32}
                      loading="lazy"
                      alt="Folder icon"
                    />
                  </div>
                  <p className="font-PoppinsRegular text-[16px] text-[#333333] uppercase">
                    DIGITAL DATA HYPER GROWTH
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div
                className="max-w-[282px] bg-white rounded-lg grid px-6 py-4"
                style={{
                  boxShadow: "0px 0px 30px rgb(0 0 0 / 10%)",
                }}>
                <div className="grid">
                  <div className="flex justify-between">
                    <h3 className="font-PoppinsSemi text-[32px] text-[#0D274D]">
                      16%
                    </h3>
                    <Image
                      src={IconData2.src}
                      className="pointer-events-none"
                      width={32}
                      height={32}
                      loading="lazy"
                      alt="Storage icon"
                    />
                  </div>
                  <p className="font-PoppinsRegular text-[16px] text-[#333333] uppercase">
                    CLOUD & STORAGE GROWTH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}