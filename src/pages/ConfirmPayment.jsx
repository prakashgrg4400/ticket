import { motion } from "framer-motion";
import { headerAnimation, slideright, slideup } from "../animation/animate";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { slideleft } from "../animation/animate";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import NavbarLayout from "../layout/NavbarLayout";

function ConfirmPayment() {
    const {
        fullName,
        address,
        country,
        state,
        city,
        postalCode,
        email,
        number,
    } = useSelector((states) => states.userBilling);

    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate(-1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavbarLayout />
            <header className="bg-eventDetailbg2 bg-no-repeat bg-center h-[40vh] relative ">
                <div className="h-full w-full bg-purple-900 opacity-40"> </div>
                <motion.div
                    variants={headerAnimation(0.6, "85%")}
                    initial="initial"
                    animate="animate"
                    className="bg-white min-h-[150px] flex flex-col justify-center items-center w-[50%] absolute left-1/2 -translate-x-1/2 top-[70%]   "
                >
                    <h2 className="text-4xl text-center border-b-[3px] pb-4 mb-4 border-b-[#6B30BE] text-[#6B30BE]">
                        Purchase Confirm
                    </h2>
                </motion.div>
            </header>
            <section className="mt-[150px] mb-24  ">
                <div className="flex items-center flex-col justify-center max-w-[70%] gap-8 mx-auto">
                    <motion.p
                        variants={slideup(0.8)}
                        initial="initial"
                        animate="animate"
                        className="text-xl font-semibold text-gray-400"
                    >
                        Check your Details properly
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        <motion.div
                            variants={slideright(1.2)}
                            initial="initial"
                            animate="animate"
                            className=" p-6 bg-[#6B30BE]"
                        >
                            <p className="text-xl text-white border-b-2 mb-8 pb-3">
                                Billing Address
                            </p>
                            <div className="flex flex-col gap-6">
                                <p className="text-sm text-white font-normal">
                                    Full Name :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {fullName}
                                    </span>
                                </p>
                                <p className="text-sm text-white font-normal">
                                    Address :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {address}
                                    </span>
                                </p>
                                <p className="text-sm text-white font-normal">
                                    Country :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {country}
                                    </span>
                                </p>
                                <p className="text-sm text-white font-normal">
                                    State :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {state}
                                    </span>
                                </p>
                                <p className="text-sm text-white font-normal">
                                    City :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {city}
                                    </span>
                                </p>
                                <p className="text-sm text-white font-normal">
                                    Postal Code :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {postalCode}
                                    </span>
                                </p>
                                <p className="text-sm text-white font-normal">
                                    Email Address :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {email}
                                    </span>
                                </p>
                                <p className="text-sm text-white font-normal">
                                    Phone Number :{" "}
                                    <span className="text-sm text-white font-normal">
                                        {number}
                                    </span>
                                </p>
                                <button
                                    onClick={handleUpdate}
                                    className="bg-red-600 opacity-90  hover:bg-red-700 text-white py-1 px-4 rounded-md  mt-20"
                                >
                                    Update
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={slideleft(1.2)}
                            initial="initial"
                            animate="animate"
                            className="bg-[#6B30BE] text-white px-4 py-6 flex flex-col gap-4"
                        >
                            <div>
                                <p className="text-xl text-white border-b-2 pb-3">
                                    Your Ticket Costing
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-xs font-semibold text-white">
                                    Total
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    RM 26
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold text-white">
                                    Service Charge
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    RM 26
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold text-white">
                                    Discount / Offer
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    RM 26
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-xs font-extrabold text-white">
                                    Grand Total
                                </p>
                                <p className="text-xs font-extrabold text-white">
                                    RM 26
                                </p>
                            </div>
                            <p className="text-xl border-b-2 pb-3 text-white">
                                Payment Via
                            </p>
                            <div>
                                <img
                                    src="https://www.weblinknepal.com/ckfinder/userfiles/images/Online-Payment-Gateway.jpg"
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <button className="bg-red-600 opacity-90  hover:bg-red-700 text-white py-1 px-4 rounded-md  mt-3">
                                Process to payment
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ConfirmPayment;
