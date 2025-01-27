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
                <ul>
                    <li>
                        <a href="" className="text-normal font-normal">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-normal font-normal">
                            Event
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-normal font-normal">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-normal font-normal">
                            Contact Us
                        </a>
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
