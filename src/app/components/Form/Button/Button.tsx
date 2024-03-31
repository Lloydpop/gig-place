"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "link" | "outline" | "primary2";
}
const Button = ({ children, variant = "primary" }: ButtonProps) => {
  let buttonStyles = "";
  switch (variant) {
    case "primary":
      buttonStyles = "bg-white px-6 py-3 rounded-[30px] bg-yellow-500";
      break;
    case "outline":
      buttonStyles =
        "border border-white bg-transparent hover:bg-white hover:text-primary text-white font-[400] px-6 py-3 rounded-[30px] duration-[0.5s]";
      break;
    case "primary2":
      buttonStyles = "bg-primary text-white px-6 py-3 rounded-[6px]";
      break;
    case "link":
      buttonStyles =
        "bg-transparent text-white font-[400] hover:border-b border-yellow-500 duration-[0.2s]  ";
      break;
    default:
      break;
  }
  return (
    <div>
      <button
        className={`w-full flex justify-center items-center gap-3 ${buttonStyles}`}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
