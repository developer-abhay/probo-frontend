import React, { useState } from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import DownloadModal from "../components/modals/DownloadModal";

const Home: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  return (
    <main className="">
      <div className="flex justify-between items-center">
        <div className=" flex flex-col gap-10">
          <div>
            <h1 className="text-7xl text-[#262626]">Invest in your</h1>
            <h2 className="text-5xl text-[#262626] mt-5">point of view</h2>
          </div>
          <p className="text-xl text-[#545454]">
            Sports, Entertainment, Economy or Finance.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <DownloadModal disabled={!isChecked} />
              <Button
                bgColor="#262626"
                color="#fff"
                disabled={!isChecked}
                onClick={() => {
                  navigate("/events");
                }}
              >
                Trade Online
              </Button>
            </div>
            <div className="inline-flex items-center gap-2">
              <label className="flex items-center cursor-pointer relative ">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="peer h-3 w-3 cursor-pointer transition-all appearance-none rounded-sm border border-gray-400 hover:border-[#262626] checked:border-[#262626] checked:bg-[#262626]"
                  id="check"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  {/* <IoCheckmarkSharp className="h-3 w-3 " /> */}
                  <FaCheck className="h-[9px] w-[9px] " />
                </span>
              </label>
              <p className="text-xs text-[#757575]">
                For 18 years and above only
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className=""
            src="/header.png"
            alt="home-page-image"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
