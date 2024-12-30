/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { headerAnimation } from "../animation/animate";

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
                            variants={headerAnimation(1.5, "50%")}
                            initial="initial"
                            whileInView={"animate"}
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
