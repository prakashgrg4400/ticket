import activity from "../data/activity";
import { motion } from "framer-motion";
import { slideright } from "../animation/animate";

function FunActivities() {
    return (
        <section className="w-full bg-homebg h-[400px] bg-no-repeat bg-cover  flex items-center relative ">
            <div className="h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]"></div>
            <div className="container !mt-[8rem] flex">
                {activity.map((act, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="text-white w-[22%] m-auto px-[1rem] py-[2rem] flex flex-col transition ease-in-out duration-300 hover:scale-110 z-40"
                            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                            variants={slideright(0.5)}
                            initial="initial"
                            whileInView={"animate"}
                        >
                            <act.icon className="text-4xl" />
                            <p className="self-center text-[#fff]">
                                {act.title}
                            </p>
                            <h2 className="self-center text-[#6B30BE] text-4xl  ">
                                {act.quantity}
                            </h2>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default FunActivities;
