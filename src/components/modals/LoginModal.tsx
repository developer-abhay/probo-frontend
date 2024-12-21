import { useState } from "react";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";

const LoginModal = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const [mobile, setMobile] = useState<string>("");
  return (
    <div className="">
      <Button
        bgColor="#262626"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Login/Signup
      </Button>

      <div
        style={{ display: open ? "flex" : "none" }}
        className="fixed bg-black bg-opacity-50 top-0 left-0 w-screen h-screen justify-center items-center"
      >
        <div className="bg-white rounded-xl text-black w-[860px] h-[400px] grid grid-cols-[36.5%_63.5%] overflow-hidden">
          <div className="relative w-full max-h-[400px]">
            <img
              src="/src/assets/login.Modal.svg"
              alt="login-modal-image"
              className="w-full max-h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent"></div>
          </div>
          <div className="flex flex-col items-center justify-between ">
            <div
              className="w-full h-14 cursor-pointer relative"
              onClick={() => {
                setOpen(false);
              }}
            >
              <RxCross2 className="absolute right-5 top-5 text-[#787878] text-2xl" />
            </div>
            <form
              action=""
              className="flex flex-col justify-evenly gap-10 w-[67%] h-full"
            >
              <div className=" flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-[#262626] ">
                  Enter your mobile number
                </h1>
                <p className="text-sm text-[#858585]">We’ll send you an OTP</p>
                <div className="flex border rounded-lg border-gray-300 border-solid overflow-hidden w-full my-4">
                  <div className="border-r  border-gray-300 p-3 pr-10 cursor-pointer">
                    +91
                  </div>
                  <div>
                    <input
                      className="outline-none px-8 h-full"
                      type="phone number"
                      placeholder="Phone Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
                <p className="text-[13px] text-[#858585]">
                  By continuing, you accept that you are 18+ years of age &
                  agree to the{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms and Conditions
                  </a>
                </p>
              </div>

              <button
                disabled={!(mobile.length === 10)}
                style={{
                  backgroundColor: mobile.length === 10 ? "#262626" : "#ABABAB",
                }}
                className="p-2 rounded-xl h-12 font-semibold text-white text-sm"
              >
                Get OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
