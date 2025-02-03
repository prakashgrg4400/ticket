import choose from "../data/choose";
import { motion } from "framer-motion";
import { slideright, slideleft, slideup } from "../animation/animate";

function ChooseUs() {
    return (
        <section className="bg-white py-5">
            <motion.h2
                variants={slideup(0, 5)}
                initial="initial"
                whileInView="animate"
                className="text-center text-3xl font-bold text-gray-600"
            >
                Why Choose Us
            </motion.h2>
            <div className="container flex flex-wrap gap-[2rem]">
                {choose.map((choo, index) => {
                    return (
                        <motion.div
                            variants={
                                (index + 1) % 2 === 0
                                    ? slideleft(0.5)
                                    : slideright(0.5)
                            }
                            initial="initial"
                            whileInView={"animate"}
                            key={index}
                            className="bg-[#F8F9FA]  w-[48%] m-auto p-3 shadow-[7px_7px_5px_0_#eae9e9] space-y-4 "
                        >
                            <div className="flex gap-3 items-center">
                                <choo.icon className="text-[#9C27B0] text-2xl" />
                                <h2 className="text-xl text-gray-500">
                                    {choo.title}
                                </h2>
                            </div>
                            <p className="text-gray-500 text-sm">
                                {choo.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default ChooseUs;
