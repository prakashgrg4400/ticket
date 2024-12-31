/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function SLiderContent({ activeIndex, sliderImage }) {
    return (
        <section className="parent">
            {sliderImage.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className={`${
                            index === activeIndex
                                ? "slides active "
                                : "inactive"
                        } image-slider`}
                    >
                        <img src={slide.urls} alt="" className="slide-image" />
                        <motion.h2
                            // variants={headerAnimation(1.5, "50%")}
                            // initial="initial"
                            // whileInView={"animate"}
                            animate={{
                                top: [
                                    "-10%",
                                    "50%",
                                    "40%",
                                    "50%",
                                    "44%",
                                    "50%",
                                    "46%",
                                    "50%",
                                    "48%",
                                    "50%",
                                ],
                                opacity: 1,
                            }}
                            transition={{
                                delay: 1,
                                duration: 3,
                                ease: "easeIn",
                                repeatType: "reverse",
                            }}
                            className="slide-title"
                        >
                            {slide.title}
                        </motion.h2>
                    </div>
                );
            })}
        </section>
    );
}

export default SLiderContent;
