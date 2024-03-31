import Image from "next/image";
import workers from "../../../public/img/pointing.png";
import Button from "../components/Form/Button/Button";
import { ArrowDown3 } from "iconsax-react";
const Hero = () => {
  return (
    <div>
      <div className=" min-h-[600px] bg-primary  w-full relative gap-10 flex justify-between  z-10 px-20 pt-20">
        <div className="space-y-5">
          <h1 className="text-[54px] text-white">
            Find your perfect career <br />
            match effortlessly at
            <br />
            at Gig <span className="text-yellow-500">place today.</span>
          </h1>
          <p className="w-[500px]  text-white text-[16px] font-[400] leading-7">
            {` Join our vibrant community today and elevate your career to new
            heights. With intuitive tools and a user-friendly interface, finding
            your dream job has never been easier. Get ready to embark on a
            transformative career path with Gig Place!"`}
          </p>
          <div className=" flex  items-center gap-7">
            <Button>
              Download <ArrowDown3 variant="Bold" />
            </Button>
          </div>
        </div>
        <div className="-mt-10">
          <Image
            className="w-[500px] h-[600px] object-contain"
            src={workers}
            alt="man"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
