import Image from "next/image";
import Link from "next/link";
import KecilinLogo from "../../assets/Images/kecilin-logo.svg";
import IconLinkedIn from "../../assets/Images/icon-linkedin.svg";
import IconInstagram from "../../assets/Images/icon-instagram.svg";
import IconTelephone from "../../assets/Images/phone.svg";
import IconMail from "../../assets/Images/envelope.svg";

export default function Footer() {
  return (
    <div className="w-full h-full mx-auto bg-white">
      <div className="w-10/12 xl:w-3/4 mx-auto pt-[80px]">
        <div className="grid md:grid-cols-3 text-left md:gap-x-[30px] gap-y-[40px] md:gap-y-[40px] pb-[30px] border-b-[1px] border-[#B4B4B4] text-[#4A4A4A]">
          <div className="grid gap-y-[20px]">
            <Image
              src={KecilinLogo.src}
              className="w-12 md:w-14 lg:w-14 pointer-events-none"
              width={54}
              height={54}
              loading="lazy"
              alt="Kecilin logo"
            />
            <h1 className="font-PoppinsRegular text-[14px]">
              File size can become smaller without decreasing its quality
            </h1>
            <div className="flex flex-row gap-x-6">
              <Link href="#!">
                <Image
                  src={IconLinkedIn.src}
                  className="cursor-pointer"
                  width={20}
                  height={20}
                  loading="lazy"
                  alt="LinkedIn icon"
                />
              </Link>
              <Link href="#!">
                <Image
                  src={IconInstagram.src}
                  className="cursor-pointer"
                  width={20}
                  height={20}
                  loading="lazy"
                  alt="Instagram icon"
                />
              </Link>
            </div>
          </div>
          <div className="grid gap-y-[20px]">
            <p className="font-PoppinsBold text-[16px] md:text-[18px]">
              Jakarta Office
            </p>
            <div className="font-PoppinsRegular text-[14px] gap-y-3 grid">
              <p>PT MILLENIO AMERTA DATA</p>
              <p>
                Wisma Taranis, Jl. Bendungan Hilir Raya, No. 76, Kel. Bendungan
                Hilir, Kec. Tanah Abang, Kota Jakarta Pusat, Prov. DKI Jakarta,
                Kode Pos. 10210
              </p>
            </div>
          </div>
          <div className="grid gap-y-5 lg:gap-y-[20px]">
            <p className="font-PoppinsBold text-[16px] md:text-[18px]">
              Contact Us
            </p>
            <div className="flex items-center gap-x-3 font-PoppinsBold text-[14px]">
              <Image
                src={IconTelephone.src}
                className="pointer-events-none"
                width={20}
                height={20}
                loading="lazy"
                alt="Telephone icon"
              />
              <p>Admin Kecilin - 081255559133</p>
            </div>
            <p className="font-PoppinsRegular text-[14px]">
              Interested to our product?
            </p>
            <div className="flex items-center gap-x-3 font-PoppinsBold text-[14px]">
              <Image
                src={IconMail.src}
                className="pointer-events-none"
                width={20}
                height={20}
                loading="lazy"
                alt="Mail icon"
              />
              <p>solution@kecilin.id</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8 pt-[30px] pb-[80px] font-PoppinsSemi text-[#4A4A4A] text-[12px]">
          <a
            href="#!"
            className="hover:underline hover:decoration-[#4A4A4A] cursor-pointer">
            Terms & Conditions
          </a>
          <a
            href="#!"
            className="hover:underline hover:decoration-[#4A4A4A] cursor-pointer">
            Privacy Statements
          </a>
        </div>
      </div>
      <div className="bg-[#F2F2F2] grid justify-items-center py-[40px]">
        <span className="font-PoppinsRegular text-[#4A4A4A] text-[14px] md:text-[16px]">
          @2022 Kecilin Systems, Inc.
        </span>
      </div>
    </div>
  );
}
