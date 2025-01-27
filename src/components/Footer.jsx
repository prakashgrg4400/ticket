import { FaLocationPin } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { slideleft } from "../animation/animate";

function Footer() {
    return (
        <footer className="bg-[#181818] py-[6rem] relative">
            <div className=" max-w-[1000px] w-[80%] mx-auto flex gap-[1rem]">
                <motion.div
                    variants={slideleft(0.5)}
                    initial="initial"
                    whileInView={"animate"}
                    className=" w-[33%] space-y-6"
                >
                    <div className="flex items-center    gap-[1rem] text-[#fff]">
                        <IoCallSharp
                            className="bg-black p-3 box-content  text-xl"
                            // style={{ padding: "1rem" }}
                        />
                        <p className="text-white text-sm">011-55512444</p>
                    </div>
                    <div className="flex items-center gap-[1rem] text-[#fff]">
                        <MdMailOutline
                            className="bg-black p-3 box-content   text-xl"
                            // style={{ padding: "1rem" }}
                        />
                        <p className="text-white text-sm">
                            enquiry@concerttticket.my
                        </p>
                    </div>
                    <div className="flex items-center gap-[1rem] text-[#fff]">
                        <FaLocationPin
                            className="bg-black p-3 box-content   text-xl"
                            // style={{ padding: "1rem" }}
                        />
                        <p className="text-white text-sm">
                            271, Jalan Permai 2, Taman Desa Permai, 09600 Lunas,
                            Kedah
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={slideleft(0.5)}
                    initial="initial"
                    whileInView={"animate"}
                    className=" w-[33%] text-center space-y-4  flex-1"
                >
                    <p className="text-gray-500 text-xs  hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        About Us
                    </p>
                    <p className="text-gray-500 text-xs  hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        News and Events
                    </p>
                    <p className="text-gray-500 text-xs  hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Work with Us
                    </p>
                    <p className="text-gray-500 text-xs  hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Our Fee
                    </p>
                    <p className="text-gray-500 text-xs  hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Contact Us
                    </p>
                </motion.div>
                <motion.div
                    variants={slideleft(0.5)}
                    initial="initial"
                    whileInView={"animate"}
                    className="w-[33%] text-center space-y-4  flex-1"
                >
                    <p className="text-gray-500 text-xs  hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Privacy Policy
                    </p>
                    <p className="text-gray-500 text-xs  hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Terms and Condition
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
