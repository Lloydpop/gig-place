import Image from "next/image";
import smileOne from "../../../public/img/man-1.jpg";
export const AboutSection = () => {
  return (
    <div className="mt-5 flex justify-center  p-20">
      <div className="w-[50%]">
        <h1 className="text-[34px] text-center mb-5">
          <p className="flex items-center gap-2">
            {" "}
            <span className="text-primary"> About</span>
            <span className="text-yellow-600">us</span>
          </p>
        </h1>
        <div className="w-[500px]">
          <p className="font-[400] text-gray-800">
            Gig Place connects skilled and unskilled workers with job
            opportunities effortlessly. Our platform simplifies the application
            process, ensuring both talent and businesses find the perfect match
            quickly and efficiently. Welcome to Gig Place, where every gig is a
            step towards success.
          </p>
          <p className="font-[400] text-gray-800 mt-5">
            {`   Join us at Gig Place and take the next step towards a brighter
            future. Let's work together to build a world where talent thrives
            and opportunities abound. Welcome to Gig Place, where every gig is a
            chance to shine.`}
          </p>
        </div>
      </div>
      <div className="w-[500px] relative shadow-xl">
        <Image
          className="w-full rounded-2xl opacity-90 "
          src={smileOne}
          alt="about images"
        />
      </div>
    </div>
  );
};
