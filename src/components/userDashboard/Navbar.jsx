import { NavLink } from "react-router";
import logo from "../../assets/img/logo.jpg";

function Navbar() {
    return (
        <div className="flex justify-between items-center bg-[#2A0634] bg-opacity-80 mb-8 p-4 ">
            <div className="flex items-center gap-6">
                <div className="h-[65px] w-[65px]">
                    <img
                        src={logo}
                        alt=""
                        className="h-full w-full  rounded-full object-cover"
                    />
                </div>
                <ul className="flex gap-4">
                    <li>
                        <NavLink
                            to={"/"}
                            className="text-normal font-normal text-white hover:border-b-[3px]"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/events"}
                            className="text-normal font-normal text-white hover:border-b-[3px]"
                        >
                            Event
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/about"}
                            className="text-normal font-normal text-white hover:border-b-[3px]"
                        >
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/contact"}
                            className="text-normal font-normal text-white hover:border-b-[3px]"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-white space-x-4 ">
                <button className="bg-[#391044] px-4 py-2 rounded-lg">
                    Prakash Gurung
                </button>
                <button className="bg-[#391044] px-4 py-2 rounded-lg">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navbar;
