import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import LoginModal from "./modals/LoginModal";
import DownloadModal from "./modals/DownloadModal";

const navItems = [
  {
    link: "/events",
    text: "Trading",
  },
  {
    link: "/",
    text: "Team 11",
  },
  {
    link: "/",
    text: "Read",
  },
  {
    link: "/",
    text: "Cares",
  },
  {
    link: "/",
    text: "Careers",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header
      className="fixed w-screen top-0 left-0 px-10 md:px-20 lg:px-12 bg-[#f5f5f5]"
      style={{
        borderBottom: pathname == "/" ? "1px solid #E5E7EB" : "",
      }}
    >
      <nav className="h-16 flex justify-between items-center py-8">
        <div className="flex justify-center items-center gap-12">
          <div className="h-8 overflow-hidden">
            <Link to={"/"}>
              <img
                className="h-full object-cover"
                src="/logo.svg"
                alt=""
              />
            </Link>
          </div>

          <ul className="flex gap-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="text-sm max-w-24 text-right cursor-pointer"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-5">
          <p className="text-xs text-right">
            For 18 years and <br />
            above only
          </p>
          <DownloadModal />
          {pathname === "/" ? (
            <Button
              bgColor="#262626"
              color="#fff"
              onClick={() => {
                navigate("/events");
              }}
            >
              Trade Online
            </Button>
          ) : (
            <LoginModal />
          )}
          <div className="w-5 h-5">
            <img
              className="w-full"
              src="https://probo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftranslation.5ad894fb.png&w=32&q=75"
              alt=""
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
