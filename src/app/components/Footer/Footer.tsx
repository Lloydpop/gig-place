import Button from "../Form/Button/Button";
import Logo from "../Logo/Logo";
import Image from "next/image";
import facebook from "../../../../public/img/facebook.png";
import link from "../../../../public/img/link.png";
import insta from "../../../../public/img/insta.png";
import ArrowDown from "../../../../public/img/download.png";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary px-20 pt-20 pb-7 -mt-[10px] text-white">
      <div className="flex  justify-evenly gap-6">
        <div className="col-span-3 space-y-10">
          <Logo />
          <div className="w-[180px] text-black">
            <Button>
              Download <Image alt="arrow" src={ArrowDown} className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="col-span-3">
          <h1>What we do</h1>
          <ul className="mt-3 space-y-5">
            <li className="cursor-pointer text-sm font-[400] ">Job Matching</li>
            <li className="cursor-pointer text-sm font-[400]">
              Streamlined Application Process
            </li>
            <li className="cursor-pointer text-sm font-[400]">
              Comprehensive Listings
            </li>
            <li className="cursor-pointer text-sm font-[400]">
              Supportive Community
            </li>
            <li className="cursor-pointer text-sm font-[400]">
              Responsive Service
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <h1>What we are</h1>
          <ul className="mt-3 space-y-5">
            <li className="cursor-pointer text-sm font-[400] ">About us</li>
            <li className="cursor-pointer text-sm font-[400]">Contact us</li>
            <li className="cursor-pointer text-sm font-[400]">Privacy</li>
            <li className="cursor-pointer text-sm font-[400]">Careers</li>
          </ul>
        </div>
        <div className="col-span-3">
          <h1>Use GiG place</h1>
          <ul className="mt-3 space-y-5">
            <li className="cursor-pointer text-sm font-[400] ">Iphone</li>
            <li className="cursor-pointer text-sm font-[400]">Andriod</li>
          </ul>
        </div>
        <div className="col-span-3">
          <h1>Need help?</h1>
          <ul className="mt-3 space-y-5">
            <li className="cursor-pointer text-sm font-[400] ">Help center</li>
            <li className="cursor-pointer text-sm font-[400]">Contact us</li>
            <li className="cursor-pointer text-sm font-[400]">Download</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-[#ffffff44] flex justify-between items-center pt-4">
        <div className="flex items-center gap-7 font-[400]">
          <p>{year} © GIG place</p>
          <p>Terms & Privacy Policy</p>
        </div>
        <ul className="flex items-center gap-4 mt-6">
          <li className="w-[40px] h-[40px] border border-[#ffffff54] rounded-full flex justify-center items-center">
            <Image src={facebook} className="w-6 h-6" alt="facebook-icon" />
          </li>
          <li className="w-[40px] h-[40px] border border-[#ffffff54] rounded-full flex justify-center items-center">
            <Image
              src={link}
              className="w-6 h-6 rounded-3xl"
              alt="linkden-icon"
            />
          </li>
          <li className="w-[40px] h-[40px] border border-[#ffffff54] rounded-full flex justify-center items-center">
            <Image src={insta} className="w-6 h-6" alt="instagram-icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
