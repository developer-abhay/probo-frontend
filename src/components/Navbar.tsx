import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="h-16 flex justify-between items-center py-8">
      <div className="h-8 overflow-hidden">
        <Link to={"/"}>
          <img
            className="h-full object-cover"
            src="https://probo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f2d033c9.webp&w=256&q=75"
            alt=""
          />
        </Link>
      </div>

      <div>
        <Link
          to={"/events"}
          className="text-xs max-w-24 text-right cursor-pointer"
        >
          Trading
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <p className="text-xs text-right">
          For 18 years and <br />
          above only
        </p>
        <Button
          bgColor="#fff"
          color="#262626"
          onClick={() => {
            console.log("App downloading");
          }}
        >
          Download App
        </Button>
        <LoginModal />
        <div className="w-5 h-5">
          <img
            className="w-full"
            src="https://probo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftranslation.5ad894fb.png&w=32&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
