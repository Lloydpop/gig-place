interface LogoProps {
  size?: string;
}
const Logo = ({ size = "25" }: LogoProps) => {
  return (
    <div>
      <h1
        className="text-white oswald font-[700]"
        style={{
          fontSize: `${size}px`,
        }}
      >
        Gig
        <span className="text-yellow-500 ">place</span>
      </h1>
    </div>
  );
};
export default Logo;
