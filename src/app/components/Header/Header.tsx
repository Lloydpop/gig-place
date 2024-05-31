import Logo from "../Logo/Logo";
import Button from "../Form/Button/Button";
import Image from "next/image";
import run from "../../../../public/img/run.png";

const Header = () => {
  return (
    <div className=" bg-primary shadow-sm  lg:px-20 px-10 py-7 flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className={`lg:flex items-center font-san gap-10  hidden`}>
        <Button variant="link">Home</Button>
        <Button variant="link">About</Button>
        <Button variant="link">Contact</Button>
      </div>
      <div>
        <Button variant="outline">
          {" "}
          <Image src={run} className="w-5 h-5" alt="" />
          Join Now
        </Button>
      </div>
    </div>
  );
};
export default Header;
