/* eslint-disable react/prop-types */

function Dots({ activeIndex, onclick, sliderImage }) {
    return (
        <div className="all-dots">
            {sliderImage.map((slide, index) => {
                return (
                    <span
                        key={index}
                        className={`${
                            activeIndex === index ? "dot active-dot" : "dot"
                        }`}
                        onClick={() => {
                            return onclick(index);
                        }}
                    ></span>
                );
            })}
        </div>
    );
}

export default Dots;
