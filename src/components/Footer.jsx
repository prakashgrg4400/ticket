import { FaLocationPin } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-[#181818] py-[6rem] relative">
            <div className=" max-w-[1000px] w-[80%] mx-auto flex gap-[1rem]">
                <div className=" w-[33%]">
                    <div className="flex items-center gap-[1rem] text-[#fff]">
                        <IoCallSharp
                            className="  text-xl"
                            // style={{ padding: "1rem" }}
                        />
                        <p className="text-white">011-55512444</p>
                    </div>
                    <div className="flex items-center gap-[1rem] text-[#fff]">
                        <MdMailOutline
                            className="  text-xl"
                            // style={{ padding: "1rem" }}
                        />
                        <p className="text-white">enquiry@concerttticket.my</p>
                    </div>
                    <div className="flex items-center gap-[1rem] text-[#fff]">
                        <FaLocationPin
                            className="  text-xl"
                            // style={{ padding: "1rem" }}
                        />
                        <p className="text-white">
                            271, Jalan Permai 2, Taman Desa Permai, 09600 Lunas,
                            Kedah
                        </p>
                    </div>
                </div>
                <div className=" w-[33%] text-center">
                    <p className="hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        About Us
                    </p>
                    <p className="hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        News and Events
                    </p>
                    <p className="hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Work with Us
                    </p>
                    <p className="hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Our Fee
                    </p>
                    <p className="hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Contact Us
                    </p>
                </div>
                <div className="w-[33%] text-center">
                    <p className="hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Privacy Policy
                    </p>
                    <p className="hover:text-[#6B30BE] cursor-pointer bg-opacity-80">
                        Terms and Condition
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
