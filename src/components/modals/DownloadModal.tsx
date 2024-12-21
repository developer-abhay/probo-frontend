import { useState } from "react";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

interface DownloadModalProps {
    disabled?: boolean
}

const DownloadModal: React.FC<DownloadModalProps> = ({ disabled }) => {
    const [open, setOpen] = useState<Boolean>(false);
    const [isAndroid, setIsAndroid] = useState<boolean>(true)

    return (
        <div className="">
            <Button
                bgColor="#fff"
                color="#262626"
                disabled={disabled}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                Download App
            </Button>

            <div
                style={{ display: open ? "flex" : "none" }}
                className="fixed bg-black bg-opacity-50 top-0 left-0 w-screen h-screen justify-center items-center"
            >
                <div className="relative bg-white rounded-xl text-black w-[500px] h-fit overflow-hidden flex flex-col justify-center items-center gap-5 px-14 py-10">
                    <div
                        onClick={() => { setOpen(false) }}
                        className="absolute top-6 right-6 text-xl cursor-pointer"
                    >
                        <RxCross2
                            className="text-xl"
                        />
                    </div>
                    <h1 className="text-xl font-medium">We are excited to get you onboard!</h1>
                    <div className="my-10 text-4xl font-semibold">Coming soon...</div>
                    <div className="flex gap-6">
                        <Button bgColor="#fff"
                            color="#262626"
                            onClick={() => {
                                setIsAndroid(true);
                            }}
                            className={`bg-black flex border gap-2 items-center text-lg ${isAndroid ? 'outline outline-2 outline-solid outline-blue-500' : ''}`}
                        >
                            <FcAndroidOs size={22} />Android</Button >
                        <Button bgColor="#fff"
                            color="#262626"
                            onClick={() => {
                                setIsAndroid(false);
                            }}
                            className={`bg-black flex border gap-2 items-center text-lg ${isAndroid ? '' : 'outline outline-2 outline-solid outline-blue-500'}`}
                        >
                            <FaApple size={22} />App Store</Button >
                    </div>
                    <p className="text-xs text-gray-500">You can scan the QR code from Paytm or any QR Scanner app.</p>
                </div>
            </div>
        </div>
    );
};

export default DownloadModal;
