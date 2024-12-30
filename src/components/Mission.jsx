import missions from "../data/mission";
import { motion } from "framer-motion";
import { slideup } from "../animation/animate";

function Mission() {
    return (
        <section className="py-[1rem] bg-white ">
            <div className="container flex flex-col justify-center items-center gap-[1rem]">
                <motion.h1
                    variants={slideup(0.5)}
                    initial="initial"
                    whileInView="animate"
                    className="text-3xl font-bold"
                >
                    Our Mission
                </motion.h1>
                <motion.p
                    variants={slideup(0.7)}
                    initial="initial"
                    whileInView="animate"
                    className="text-lg text-center text-black opacity-50"
                >
                    We are dedicated to bringing unforgettable live experiences
                    to our customers through seamless ticket booking services.
                </motion.p>
            </div>
            <div className="container flex gap-[2rem]">
                {missions.map((mission, index) => {
                    return (
                        <motion.div
                            variants={slideup(0.5)}
                            initial="initial"
                            whileInView={"animate"}
                            key={index}
                            className="flex flex-col gap-[2rem] items-center p-[2rem] shadow-[10px_10px_10px_10px_#eae9e9] cursor-pointer relative bottom-0 transition-all duration-500 ease-in-out hover:bottom-[3rem]"
                        >
                            <mission.img className="text-4xl p-[1rem] box-content text-white rounded-full bg-purple-500 " />
                            <div className="flex flex-col items-center">
                                <mission.icon className="text-3xl text-[grey]" />
                                <p className="text-center text-black opacity-50">
                                    {mission.title}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Mission;
