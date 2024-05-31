import Image from "next/image";
import smileOne from "../../../public/img/down.png";
import appStore from "../../../public/img/app-store.svg";
import playStore from "../../../public/img/play-store.svg";
import Logo from "../components/Logo/Logo";
export const DownloadSection = () => {
  return (
    <div className=" flex lg:flex-row flex-col   flex-col-reverse justify-between px-8">
      <div className="lg:w-[500px] relative">
        <Image
          className="w-full opacity-90 "
          src={smileOne}
          alt="about images"
        />
        <div className="absolute top-[150px] rotate-[6deg] left-[180px]">
          <Logo />
        </div>
      </div>
      <div className="lg:w-[50%]">
        <h1 className="text-[34px] text-center mb-5">
          <p className="flex items-center gap">
            {" "}
            <span className="text-primary"> Get Gig</span>
            <span className="text-yellow-600 mr-2">place</span>Now!
          </p>
        </h1>
        <div className="lg:w-[500px]">
          <p className="font-[400] text-gray-800">
            Discover job opportunities instantly! Download Gig Place from the
            App Store or Google Play. Find your next gig in just a few taps!.
            <br />
            <span className="block mt-3">
              {`For iOS, search "Gig Place" in the App Store, tap download, and
              start exploring. For Android, find "Gig Place" in the Play Store,
              tap install, and begin your job search instantly.`}
            </span>
          </p>
          <div className="flex items-center gap-5 -mt-6">
            <Image className="w-[180px]" src={appStore} alt="app-store-icon" />
            <Image className="w-[180px]" src={playStore} alt="app-store-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
