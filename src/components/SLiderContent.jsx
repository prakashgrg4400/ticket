/* eslint-disable react/prop-types */

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
                        <h2 className="slide-title">{slide.title}</h2>
                    </div>
                );
            })}
        </section>
    );
}

export default SLiderContent;
