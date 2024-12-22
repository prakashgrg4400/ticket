import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
function Details() {
    return (
        <section className="bg-white py-6">
            <div className="container flex gap-6">
                <div className="flex flex-col relative bottom-0 hover:bottom-8 transition-all ease-out duration-400 text-center w-[32%] p-8 items-center gap-2 shadow-[10px_10px_10px_10px_#f9f9f9] ">
                    <FaLocationDot className="text-4xl box-content p-4 text-white bg-gradient-to-r from-[#9729B1] to-[#6E38B6] rounded-full" />
                    <div>
                        <h2 className="text-xl opacity-70">Our Location</h2>
                        <p>123 Event Street</p>
                    </div>
                    <p>New York, NY 10001</p>
                </div>
                <div className="flex flex-col relative bottom-0 hover:bottom-8 transition-all ease-out duration-400 text-center w-[32%] p-8 items-center gap-2 shadow-[10px_10px_10px_10px_#f9f9f9] ">
                    <IoCall className="text-4xl box-content p-4 text-white bg-gradient-to-r from-[#9729B1] to-[#6E38B6] rounded-full" />
                    <div>
                        <h2 className="text-xl opacity-70">Phone Number</h2>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <p>+1 (555) 987-6543</p>
                </div>
                <div className="flex flex-col relative bottom-0 hover:bottom-8 transition-all ease-out duration-400 text-center w-[32%] p-8 items-center gap-2 shadow-[10px_10px_10px_10px_#f9f9f9] ">
                    <IoMdMail className="text-4xl box-content p-4 text-white bg-gradient-to-r from-[#9729B1] to-[#6E38B6] rounded-full" />
                    <div>
                        <h2 className="text-xl opacity-70">Email Address</h2>
                        <p>info@greatticket.com</p>
                    </div>
                    <p>support@greatticket.com</p>
                </div>
            </div>
        </section>
    );
}

export default Details;
