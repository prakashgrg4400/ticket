import { GrSend } from "react-icons/gr";

function MessageForm() {
    return (
        <div className="w-[48%] shadow-[0_0_5px_5px_#f9f9f9] p-[2rem]">
            <form action="" method="get" className="flex flex-col gap-[1rem]">
                <div className="flex flex-col gap-[1rem] ">
                    <label htmlFor="" className="text-sm font-light">
                        Full Name
                    </label>
                    <input
                        className=" focus:border-[#902CB2] focus:border-2 rounded-md shadow-innerdeep outline-none px-[1rem] text-sm font-extralight py-[0.3rem]"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Your full name"
                        required
                    />
                </div>
                <div className="flex flex-col gap-[1rem] ">
                    <label htmlFor="" className="text-sm font-light">
                        Email Address
                    </label>
                    <input
                        className=" focus:border-[#902CB2] focus:border-2 rounded-md shadow-innerdeep outline-none px-[1rem] text-sm font-extralight py-[0.3rem]"
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter Your email address"
                        required
                    />
                </div>
                <div className="flex flex-col gap-[1rem] ">
                    <label htmlFor="" className="text-sm font-light">
                        Contact Number
                    </label>
                    <input
                        className=" focus:border-[#902CB2] focus:border-2 rounded-md shadow-innerdeep outline-none px-[1rem] text-sm font-extralight py-[0.3rem]"
                        type="number"
                        name=""
                        id=""
                        placeholder="Enter Your contact number"
                        required
                    />
                </div>
                <div className="flex flex-col gap-[1rem] ">
                    <label htmlFor="" className="text-sm font-light">
                        Subject
                    </label>
                    <input
                        className=" focus:border-[#902CB2] focus:border-2 rounded-md shadow-innerdeep outline-none px-[1rem] text-sm font-extralight py-[0.3rem]"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter the subject of your message"
                        required
                    />
                </div>
                <div className="flex flex-col gap-[1rem] ">
                    <label htmlFor="" className="text-sm font-light">
                        Message
                    </label>
                    <textarea
                        className="focus:border-[#902CB2] focus:border-2 rounded-md h-40 shadow-innerdeep outline-none px-[1rem] text-sm font-extralight py-[0.3rem]"
                        name=""
                        id=""
                        placeholder="Enter Your message here"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center items-center bg-gradient-to-r from-[#9729B1] to-[#6E37B6] py-[1rem] rounded-md text-white gap-2 cursor-pointer ">
                    <GrSend className="text-xl" />
                    <input type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    );
}

export default MessageForm;
