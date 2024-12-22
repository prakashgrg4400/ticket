import { useEffect, useState } from "react";
import SLiderContent from "./SLiderContent";
import sliderImage from "../data/sliderImage";
import "../assets/css/slider.css";
// import Arrow from "./Arrow";
// import Dots from "./Dots";

const len = sliderImage.length - 1;

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [activeIndex]);
    return (
        <div className="slide-container">
            <SLiderContent
                activeIndex={activeIndex}
                sliderImage={sliderImage}
            />
            {/* <Arrow
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() => {
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
                }}
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            /> */}
        </div>
    );
}

export default Slider;
