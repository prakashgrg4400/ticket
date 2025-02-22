import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { slideup } from "../animation/animate";
import { motion } from "framer-motion";

function Details() {
    return (
        <section className="bg-white py-6">
            <div className="container flex gap-6">
                <motion.div
                    variants={slideup(0.5)}
                    initial="initial"
                    animate={"animate"}
                    className="flex flex-col relative bottom-0 hover:bottom-8 transition-all ease-out duration-400 text-center w-[32%] p-8 items-center gap-2 shadow-[10px_10px_10px_10px_#f9f9f9] "
                >
                    <FaLocationDot className="text-4xl box-content p-4 text-white bg-gradient-to-r from-[#9729B1] to-[#6E38B6] rounded-full" />
                    <div className="space-y-2">
                        <h2 className="text-xl text-gray-500 font-semibold ">
                            Our Location
                        </h2>
                        <p className="text-sm text-gray-500">
                            123 Event Street
                        </p>
                    </div>
                    <p className="text-sm text-gray-500">New York, NY 10001</p>
                </motion.div>
                <motion.div
                    variants={slideup(0.7)}
                    initial="initial"
                    animate={"animate"}
                    className="flex flex-col relative bottom-0 hover:bottom-8 transition-all ease-out duration-400 text-center w-[32%] p-8 items-center gap-2 shadow-[10px_10px_10px_10px_#f9f9f9] "
                >
                    <IoCall className="text-4xl box-content p-4 text-white bg-gradient-to-r from-[#9729B1] to-[#6E38B6] rounded-full" />
                    <div className="space-y-2">
                        <h2 className="text-xl text-gray-500 font-semibold ">
                            Phone Number
                        </h2>
                        <p className="text-sm text-gray-500">
                            +1 (555) 123-4567
                        </p>
                    </div>
                    <p className="text-sm text-gray-500">+1 (555) 987-6543</p>
                </motion.div>
                <motion.div
                    variants={slideup(0.9)}
                    initial="initial"
                    animate={"animate"}
                    className="flex flex-col relative bottom-0 hover:bottom-8 transition-all ease-out duration-400 text-center w-[32%] p-8 items-center gap-2 shadow-[10px_10px_10px_10px_#f9f9f9] "
                >
                    <IoMdMail className="text-4xl box-content p-4 text-white bg-gradient-to-r from-[#9729B1] to-[#6E38B6] rounded-full" />
                    <div className="space-y-2">
                        <h2 className="text-xl text-gray-500 font-semibold ">
                            Email Address
                        </h2>
                        <p className="text-sm text-gray-500">
                            info@greatticket.com
                        </p>
                    </div>
                    <p className="text-sm text-gray-500">
                        support@greatticket.com
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Details;
