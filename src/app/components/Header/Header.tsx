import Logo from "../Logo/Logo";
import Button from "../Form/Button/Button";
import Image from "next/image";
import run from "../../../../public/img/run.png";

const Header = () => {
  return (
    <div className=" bg-primary shadow-sm  px-20 py-7 flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className={`flex items-center font-san gap-10`}>
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
