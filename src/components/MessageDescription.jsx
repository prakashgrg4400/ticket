import { FaTicket } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaStaylinked } from "react-icons/fa6";

function MessageDescription() {
    return (
        <div className="w-[48%] shadow-[0_0_5px_5px_#f9f9f9] p-[2rem] ">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#9728B0] to-[#6C38B6] inline-block text-transparent bg-clip-text mb-[2rem] ">
                Let&apos;s Connect
            </h2>
            <div className="border-b-4 w-[15%] border-[#9728B0] rounded-md"></div>
            <p className="py-[1rem] text-black opacity-70">
                We&apos;re dedicated to making your event experience
                extraordinary. Whether you need assistance with:
            </p>
            <div className="flex flex-col gap-[1rem] py-[2rem] ">
                <div className="flex items-center gap-[1rem]">
                    <FaTicket className="text-2xl text-[#9C27B0]" />
                    <p className="text-black opacity-80">
                        Event booking inquiries
                    </p>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <MdGroups2 className="text-2xl text-[#9C27B0]" />
                    <p className="text-black opacity-80">
                        Group bookings and special arrangements
                    </p>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <FaStar className="text-2xl text-[#9C27B0]" />
                    <p className="text-black opacity-80">
                        VIP package information
                    </p>
                </div>
                <div className="flex items-center gap-[1rem]">
                    <FaQuestionCircle className="text-2xl text-[#9C27B0]" />
                    <p className="text-black opacity-80">
                        General support and assistance
                    </p>
                </div>
            </div>
            <h3 className="text-lg mb-[2rem]">Connect with Us</h3>
            <div className="flex gap-[1rem]">
                <FaStaylinked className="text-2xl box-content p-2 bg-[#7F32B4] rounded-full text-white" />
                <FaStaylinked className="text-2xl box-content p-2 bg-[#7F32B4] rounded-full text-white" />
                <FaStaylinked className="text-2xl box-content p-2 bg-[#7F32B4] rounded-full text-white" />
                <FaStaylinked className="text-2xl box-content p-2 bg-[#7F32B4] rounded-full text-white" />
            </div>
        </div>
    );
}

export default MessageDescription;
