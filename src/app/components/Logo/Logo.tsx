interface LogoProps {
  size?: string;
}
const Logo = ({ size = "25" }: LogoProps) => {
  return (
    <div>
      <h1
        className="text-white oswald flex items-center gap-1"
        style={{
          fontSize: `${size}px`,
        }}
      >
        GiG
        <span className="block w-[30px] h-[3px] bg-white"></span>
        <span className="text-yellow-500 ">Place</span>
      </h1>
    </div>
  );
};
export default Logo;
