import Image from "next/image";
import workers from "../../../public/img/skilled2.jpg";
import Button from "../components/Form/Button/Button";
import ArrowDown from "../../../public/img/download.png";
const Hero = () => {
  return (
    <div>
      <div className=" min-h-[600px] bg-primary  w-full relative gap-10 flex lg:flex-row flex-col  justify-between  z-10 lg:px-20 px-8 pt-20">
        <div className="space-y-5">
          <h1 className="lg:text-[60px] text-[34px] tracking-tight leading-tight text-white">
            Find your perfect career <br className="lg:block hidden" />
            match effortlessly at
            <br className="lg:block hidden" />
            Gig<span className="text-yellow-500 lg:ml-0 ml-2">place</span>{" "}
            today.
          </h1>
          <p className="lg:w-[500px]   text-[16px] text-gray-300 font-[400] leading-7">
            {` Join our vibrant community today and elevate your career to new
            heights. With intuitive tools and a user-friendly interface, finding
            your dream job has never been easier. Get ready to embark on a
            transformative career path with Gig Place!`}
          </p>
          <div>
            <Button>
              Download Gigplace
              <Image alt="arrow" src={ArrowDown} className="w-4 h-4" />
            </Button>

            <p className="text-[12px] mt-1  text-gray-300">
              Land your dream job with so much ease
            </p>
          </div>
        </div>
        <div className=" shadow-inner  rounded-t-2xl overflow-hidden">
          <Image
            className="lg:w-[450px] object-contain"
            src={workers}
            alt="man"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
