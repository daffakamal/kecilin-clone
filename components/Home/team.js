import Image from "next/image";
import { teamsList } from "../data/dataTeams";

export default function Team() {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full mx-auto px-[24px] sm:px-16 2xl:px-0 max-w-[1107px] py-[100px]">
        <div
          className="2xl:container 2xl:mx-auto text-center"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="400"
          data-aos-delay="0"
        >
          <h1 className="font-PoppinsSemi text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-900 text-[36px]">
            Our Team
          </h1>
          <p className="font-PoppinsRegular text-[16px] text-[#494949] mt-[20px] mb-[10px] lg:mb-[50px]">
            {"Let's"} get to know {"Kecilin's"} Team that consist of experts in
            their field.
          </p>
          <div
            className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] xl:gap-y-[100px] justify-items-center"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="400"
            data-aos-delay="0"
          >
            {teamsList.map((item) => (
              <div
                key={item.name}
                className="w-full mx-auto rounded-[12px] bg-white px-[30px] 2xl:px-[50px] text-center mt-[140px]"
                style={{
                  boxShadow:
                    "0px 100px 80px rgb(0 0 0 / 7%), 0px 12.5216px 10.0172px rgb(0 0 0 / 5%)",
                }}
              >
                <Image
                  src={item.img}
                  className="w-[140px] lg:w-[170px] mx-auto -translate-y-1/2"
                  width={170}
                  height={170}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="-translate-y-12 lg:-translate-y-16">
                  <h1 className="font-PoppinsSemi text-[20px] lg:text-[20px] text-[#494949]">
                    {item.name}
                  </h1>
                  <ul className="mx-auto translate-x-10">
                    <li className="list-disc text-left w-10/12 font-PoppinsMedium text-[16px] md:text-[16px] text-[#696969] mt-[25px]">
                      {item.position}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
