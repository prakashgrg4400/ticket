import { motion } from "framer-motion";
import { headerAnimation } from "../animation/animate";
import Footer from "../components/Footer";

function Checkout() {
    return (
        <>
            <header className="bg-eventDetailbg2 bg-no-repeat bg-center h-[40vh] relative ">
                <div className="h-full w-full bg-purple-900 opacity-40"> </div>
                <motion.div
                    variants={headerAnimation(0.6, "85%")}
                    initial="initial"
                    animate="animate"
                    className="bg-white min-h-[150px] flex flex-col justify-center items-center w-[50%] absolute left-1/2 -translate-x-1/2 top-[70%]   "
                >
                    <h2 className="text-4xl text-center border-b-[3px] pb-4 mb-4 border-b-[#6B30BE] text-[#6B30BE]">
                        Ticket Checkout
                    </h2>
                </motion.div>
            </header>
            <section className="mt-[150px] mb-24 flex flex-col items-center justify-center ">
                <p className="text-2xl font-semibold text-gray-500">
                    Fill Your information
                </p>
                <div className="w-[75%] mt-12">
                    <p className="text-xl text-gray-600 mb-4">
                        Billing Address
                    </p>
                    <form
                        action=""
                        className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 "
                    >
                        <div className="  md:col-span-2 p-4 flex flex-col gap-6 ">
                            <div>
                                <p className="text-sm font-semibold opacity-70 mb-2">
                                    Full Names <sup>*</sup>
                                </p>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="w-full font-light text-sm p-2"
                                    placeholder="Great User"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold opacity-70 mb-2">
                                    Address <sup>*</sup>
                                </p>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="w-full font-light text-sm p-2"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div>
                                    <p className="text-sm font-semibold opacity-70 mb-2">
                                        Country<sup>*</sup>
                                    </p>
                                    <select
                                        name=""
                                        id=""
                                        className="w-full  font-light text-sm p-2"
                                    >
                                        <option value="Malaysia">
                                            Malaysia
                                        </option>
                                        <option value="Nepal">Nepal</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold opacity-70 mb-2">
                                        Country<sup>*</sup>
                                    </p>
                                    <select
                                        name=""
                                        id=""
                                        className="w-full  font-light text-sm p-2"
                                    >
                                        <option value="Malaysia">
                                            Malaysia
                                        </option>
                                        <option value="Nepal">Nepal</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold opacity-70 mb-2">
                                        City<sup>*</sup>
                                    </p>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="w-full font-light text-sm p-2"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold opacity-70 mb-2">
                                        PostCode<sup>*</sup>
                                    </p>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="w-full font-light text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm font-semibold opacity-70 mb-2">
                                        Email Address<sup>*</sup>
                                    </p>
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        className="w-full font-light text-sm p-2"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold opacity-70 mb-2">
                                        Phone<sup>*</sup>
                                    </p>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="w-full font-light text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold opacity-70 mb-2">
                                    Full Name 1<sup>*</sup>
                                </p>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="w-full font-light text-sm p-2"
                                />
                            </div>
                        </div>
                        {/* Ticket */}
                        <div className="bg-[#6B30BE] text-white px-4 py-6 flex flex-col gap-4">
                            <div>
                                <p className="text-xl border-b-2 pb-3">
                                    Tickets
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold">
                                    Malaysian (With Mykad) - Adult X 1
                                </p>
                                <p className="text-xs font-semibold">RM 26</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold">Total</p>
                                <p className="text-xs font-semibold">RM 26</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold">
                                    Service Charge
                                </p>
                                <p className="text-xs font-semibold">RM 26</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold">
                                    Discount / Offer
                                </p>
                                <p className="text-xs font-semibold">RM 26</p>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Coupon/Discount Code"
                                    className=" font-light text-sm p-2"
                                />
                                <button className="bg-red-600 opacity-90 hover:bg-red-700 text-white py-1 px-4 rounded-md ">
                                    Apply
                                </button>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-extrabold">
                                    Grand Total
                                </p>
                                <p className="text-xs font-extrabold">RM 26</p>
                            </div>
                            <p className="text-xl border-b-2 pb-3">
                                Payment Method
                            </p>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <span className="text-xs font-semibold">
                                    Online Payment
                                </span>
                                <img
                                    src="https://www.weblinknepal.com/ckfinder/userfiles/images/Online-Payment-Gateway.jpg"
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 opacity-90 md:place-self-end hover:bg-red-700 text-white py-1 px-4 rounded-md md:col-span-3 mt-6 "
                        >
                            Checkout
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Checkout;
