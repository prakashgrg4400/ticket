import { PiSpinner } from "react-icons/pi";

function Loading() {
    return (
        <div className="w-screen h-screen bg-white bg-gradient-to-r from-[#9729B1] to-[#6E37B6] text-center relative flex justify-center items-center z-[1000]">
            <PiSpinner className="box-content text-white text-6xl animate-spin" />
        </div>
    );
}

export default Loading;
