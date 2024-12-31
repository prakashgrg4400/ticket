import event from "../data/event";
import style from "../assets/css/upcoming.module.css";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { slideleft, slideright } from "../animation/animate";

function TrendingEvents() {
    return (
        <div className="container ">
            <div className={`${style["event-title"]} container`}>
                <h2
                    className={`${style["left-title"]}`}
                    // variants={slideup(0.5)}
                    // initial="initial"
                    // whileInView={"animate"}
                >
                    Trending{" "}
                    <span className={`${style["right-title"]}`}>EVENTS</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 p-8  mt-8 ">
                {event.map((event) => {
                    return (
                        <motion.div
                            key={event.id}
                            className="rounded-xl relative border-2 border-gray-300 flex flex-col shadow-[5px_5px_5px_0_gray] "
                            variants={
                                event.id < 4
                                    ? slideright(event.delay)
                                    : slideleft(event.delay)
                            }
                            initial="initial"
                            whileInView="animate"
                        >
                            <div className="h-52 w-full overflow-hidden rounded-t-xl">
                                <img
                                    src={event.img}
                                    alt=""
                                    className="h-full w-full object-cover rounded-xl"
                                />
                            </div>
                            <p className="text-2xl bg-white text-black text-center py-5">
                                <div className="line-clamp-1">{event.name}</div>
                            </p>
                            <div className="flex justify-between px-4 text-center">
                                <div>
                                    <p className="text-black text-base pb-0">
                                        {event.price}
                                    </p>
                                    <p className="pt-0 text-gray-500">Price</p>
                                </div>
                                <div>
                                    <p className="text-black text-base pb-0">
                                        {event.date}
                                    </p>
                                    <p className="pt-0 text-gray-500">Date</p>
                                </div>
                                <div>
                                    <p className="text-black text-base pb-0">
                                        {event.eventTime}
                                    </p>
                                    <p className="pt-0 text-gray-500">Time</p>
                                </div>
                            </div>
                            <NavLink
                                to={`/eventDetails/${event.id}?status=${event.status}`}
                                className="bg-black bg-gradient-to-r from-[#932AB1] to-[#6D37B6] text-center cursor-pointer rounded-xl px-[2rem] py-[0.5rem]"
                            >
                                View Details
                            </NavLink>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
// text-white cursor-pointer rounded-[50px] bg-gradient-to-r from-[#932AB1] to-[#6D37B6] m-auto
export default TrendingEvents;
