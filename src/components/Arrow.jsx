/* eslint-disable react/prop-types */
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

function Arrow({ prevSlide, nextSlide }) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>
                <FaLessThan />
            </span>
            <span className="next" onClick={nextSlide}>
                <FaGreaterThan />
            </span>
        </div>
    );
}

export default Arrow;
