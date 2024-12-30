/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router";
import { MdGroups2 } from "react-icons/md";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { headerAnimation, slideup } from "../animation/animate";

function EventDetails() {
    const {
        img,
        date,
        name,
        description,
        location,
        price,
        remainingTicket,
        soldOut,
        eventDate,
        eventTime,
    } = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <header
                className={`h-[50vh] w-full bg-eventDetailbg bg-no-repeat bg-cover bg-bottom-center `}
            >
                <div className="absolute h-[20%]  z-[100] flex justify-center items-center py-[2rem] top-[40%] left-[50%] -translate-x-[50%] text-white rounded-[50px] px-[4rem] text-6xl font-semibold mb-[1rem] ">
                    <motion.h2
                        variants={headerAnimation(0.5, "40%")}
                        initial="initial"
                        whileInView={"animate"}
                        className="bg-gradient-to-r text-4xl from-[#9629B1] to-[#6B39B7] text-transparent bg-clip-text text-center"
                    >
                        Event Details
                    </motion.h2>
                </div>
                <div className="h-full w-full bg-[#3C2340] opacity-90 flex items-center justify-center"></div>
            </header>
            <section className="p-[2rem] ">
                {/* <h1 className="text-center py-[2rem] text-4xl ">
                    Event Details
                </h1> */}
                <motion.div
                    variants={slideup(0.5)}
                    initial="initial"
                    whileInView={"animate"}
                    className="h-[95vh] w-[40vw] relative rounded-[50px] mx-auto my-[4rem] shadow-[0_0_8px_1px_black] "
                >
                    <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover rounded-[50px]"
                    />
                    <div className="absolute top-0 left-0 h-full w-full p-[2rem] bg-[rgba(0,0,0,0.5)] rounded-[50px]">
                        <h1 className="text-center text-2xl border-b-4 inline-block pb-5 text-white">
                            {name}
                        </h1>
                        <div className="text-white flex justify-around bg-[rgba(0,0,0,0.5)] px-[2rem] py-[1rem] my-[1rem] ">
                            <div className="flex items-center gap-2">
                                <MdGroups2 />
                                <p>{eventDate}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdGroups2 />
                                <p>{eventTime}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdGroups2 />
                                <p>{location}</p>
                            </div>
                        </div>
                        <div className="text-white bg-[rgba(0,0,0,0.7)] mb-[1rem] px-[2rem] py-[0.5rem]">
                            <h2>Description : </h2>
                            <p className="opacity-90 text-sm font-light">
                                {description}
                            </p>
                        </div>
                        <div className="text-white flex gap-[2rem] flex-col bg-[rgba(0,0,0,0.7)] p-[2rem] items-center ">
                            <p>Available Seats : {remainingTicket}</p>
                            <form
                                action=""
                                className="flex flex-col gap-[2rem] relative"
                            >
                                <div className="flex gap-[1rem] items-center ">
                                    <label htmlFor="" id="quantity">
                                        Quantity :
                                    </label>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className="outline-none py-[0.5rem] px-[1rem] text-black rounded-[50px] "
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Purchase ticket"
                                    className="bg-gradient-to-r from-[#9729B1] to-[#6E37B6] px-[1rem] py-[0.5rem] rounded-[50px] text-white gap-2 cursor-pointer "
                                />
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
}

export default EventDetails;
