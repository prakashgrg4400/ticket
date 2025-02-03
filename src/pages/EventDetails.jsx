/* eslint-disable no-unused-vars */
import {
    redirect,
    useLoaderData,
    useNavigate,
    useSearchParams,
} from "react-router";
import { MdGroups2 } from "react-icons/md";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInAndOut, headerAnimation, slideup } from "../animation/animate";
import handleEventsData from "../utils/handleEventsData";
import Ticket from "../components/EventInfo/Ticket";
import Details from "../components/EventInfo/Details";
import SeatView from "../components/EventInfo/SeatView";
import Organizer from "../components/EventInfo/Organizer";
import NavbarLayout from "../layout/NavbarLayout";

function EventDetails() {
    const { id } = useLoaderData();
    const [numberOfTickest, setNumberOfTickets] = useState(1);
    const navigate = useNavigate();

    let [searchParams] = useSearchParams();
    let status = searchParams.get("status");

    const {
        name,
        eventDate,
        eventTime,
        location,
        img,
        seatView,
        description,
        organizerImg,
        organizerAddress,
        remainingTicket,
    } = handleEventsData(status, id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [showTicket, setShowTicket] = useState(true);
    const [showSeatView, setShowSeatView] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showOrganizer, setShowOrganizer] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        console.log(numberOfTickest);
        console.log("Prakash");
        return navigate(
            `/cart/${id}?quantity=${numberOfTickest}&status=${status}`
        );
    };

    return (
        <>
            <NavbarLayout />
            <header className="bg-eventDetailbg2 bg-no-repeat bg-center h-[40vh] relative">
                <div className="h-full w-full bg-purple-900 opacity-40"> </div>
                <motion.div
                    variants={headerAnimation(0.6, "70%")}
                    initial="initial"
                    animate="animate"
                    className="bg-white min-h-[30vh] flex flex-col justify-center items-center w-[50%] absolute left-1/2 -translate-x-1/2 top-[70%]   "
                >
                    <h2 className="text-4xl border-b-[3px] pb-4 mb-4 border-b-[#6B30BE] text-[#6B30BE]">
                        {name.toUpperCase() || ""}
                    </h2>
                    <div className=" gap-8 flex justify-around bg-[#F0F0F0] px-[2rem] py-[1rem] my-[1rem] ">
                        <div className="flex items-center gap-2">
                            <MdGroups2 className="opacity-70" />
                            <p className="opacity-50">{eventDate}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdGroups2 className="opacity-70" />
                            <p className="opacity-50">{eventTime}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdGroups2 className="opacity-70" />
                            <p className="opacity-50">{location}</p>
                        </div>
                    </div>
                </motion.div>
            </header>
            <section className="relative top-[30vh] mb-[300px] flex flex-col gap-6 justify-center items-center">
                <motion.h2
                    variants={slideup(1.0)}
                    initial="initial"
                    animate="animate"
                    className="text-4xl text-[#6B30BE]"
                >
                    Event Info
                </motion.h2>
                <div className=" flex flex-col gap-6 bg-white max-w-[50vw] p-6">
                    <div className="flex gap-4">
                        <motion.button
                            variants={slideup(1.2)}
                            initial="initial"
                            animate="animate"
                            onClick={() => {
                                setShowDetails(false);
                                setShowOrganizer(false);
                                setShowSeatView(false);
                                setShowTicket(true);
                            }}
                            className={`${
                                showTicket ? "bg-[#7C3BF3]" : "bg-[#7B1FA2]"
                            } text-white px-4 py-2 rounded-md cursor-pointer text-sm`}
                        >
                            Ticket
                        </motion.button>
                        <motion.button
                            variants={slideup(1.4)}
                            initial="initial"
                            animate="animate"
                            onClick={() => {
                                setShowDetails(false);
                                setShowOrganizer(false);
                                setShowSeatView(true);
                                setShowTicket(false);
                            }}
                            className={`${
                                showSeatView ? "bg-[#7C3BF3]" : "bg-[#7B1FA2]"
                            } text-white px-4 py-2 rounded-md cursor-pointer text-sm`}
                        >
                            Seat View
                        </motion.button>
                        <motion.button
                            variants={slideup(1.6)}
                            initial="initial"
                            animate="animate"
                            onClick={() => {
                                setShowDetails(true);
                                setShowOrganizer(false);
                                setShowSeatView(false);
                                setShowTicket(false);
                            }}
                            className={`${
                                showDetails ? "bg-[#7C3BF3]" : "bg-[#7B1FA2]"
                            } text-white px-4 py-2 rounded-md cursor-pointer text-sm`}
                        >
                            Details
                        </motion.button>
                        <motion.button
                            variants={slideup(1.8)}
                            initial="initial"
                            animate="animate"
                            onClick={() => {
                                setShowDetails(false);
                                setShowOrganizer(true);
                                setShowSeatView(false);
                                setShowTicket(false);
                            }}
                            className={`${
                                showOrganizer ? "bg-[#7C3BF3]" : "bg-[#7B1FA2]"
                            } text-white px-4 py-2 rounded-md cursor-pointer text-sm`}
                        >
                            Organizer
                        </motion.button>
                    </div>
                    <motion.div
                        variants={slideup(2)}
                        initial="initial"
                        animate="animate"
                    >
                        {(showTicket && <Ticket img={img} />) ||
                            (showSeatView && (
                                <SeatView seatView={seatView} />
                            )) ||
                            (showDetails && (
                                <Details
                                    description={description}
                                    eventDate={eventDate}
                                    name={name}
                                />
                            )) ||
                            (showOrganizer && (
                                <Organizer
                                    organizerImg={organizerImg}
                                    organizerAddress={organizerAddress}
                                />
                            ))}
                    </motion.div>
                </div>
            </section>
            <section className=" flex justify-center items-center mb-[200px]">
                <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanYd1yUVJ5J8xtlc1Uf6pXXML8q4sZa8xgQ&s')] w-[70vw] min-h-[80vh] bg-no-repeat bg-cover bg-center ">
                    <h2 className="text-white text-center mt-20 text-4xl font-normal">
                        Buy Tickets and Enjoy
                    </h2>
                    {/* <p>Choose your package</p> */}
                    {/* card */}
                    <div
                        className={` w-[40vw] relative rounded-[50px] mx-auto my-[4rem] shadow-[0_0_8px_1px_black] `}
                    >
                        <div
                            className={`h-full w-full p-[2rem]  bg-[rgba(0,0,0,0.5)]  rounded-[50px]`}
                        >
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
                                    onSubmit={handleForm}
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
                                            value={numberOfTickest}
                                            onChange={(e) => {
                                                setNumberOfTickets(
                                                    e.target.value
                                                );
                                                console.log(e.target.value);
                                            }}
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
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default EventDetails;
