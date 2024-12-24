import trendingEvents from "../data/event";
import singleEventStyle from "../assets/css/event.module.css";
import eventStyle from "../assets/css/upcoming.module.css";
import { NavLink } from "react-router";
import { useState, useEffect, useRef } from "react";
// import useImageLoader from "../hooks/useImageLoader";

const options = {
    rootMargin: "100px 0px",
    threshold: 0.5,
};
function TrendingEvents() {
    const [inView, setInView] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imgElement = useRef(null);

    // useImageLoader();

    useEffect(() => {
        const loadImage = (image) => {
            return new Promise((resolve, reject) => {
                let myImage = new Image();
                myImage.src = image.img;

                myImage.onload = () => {
                    setTimeout(() => {
                        // console.log("Image resolved successfully");
                        resolve("Image details => success");
                    }, 2000);
                };

                myImage.onerror = (err) => {
                    // console.log("Image Failed to Load");
                    reject("Unable to load image => ", err);
                };
            });
        };

        Promise.all(
            trendingEvents.map((image) => {
                return loadImage(image);
            })
        )
            .then((result) => {
                console.log(result);
                setImagesLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, self) => {
            // console.log(entries);
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    self.unobserve(entry.target);
                }
            });
        }, options);

        if (imgElement.current) {
            observer.observe(imgElement.current);
        }

        let myImage = imgElement.current;
        return () => {
            if (myImage) {
                observer.unobserve(myImage);
            }
        };
    }, []);

    return (
        // h-[110vh]
        <section className="h-[110vh] w-full text-center  flex items-center justify-center relative bg-[#F0F0F0] ">
            <div className="absolute w-full top-[8%]">
                <div className={`${eventStyle["event-title"]} container `}>
                    <h2 className={`${eventStyle["left-title"]}`}>
                        Trending{" "}
                        <span className={`${eventStyle["right-title"]}`}>
                            Events
                        </span>
                    </h2>
                </div>
            </div>
            <div
                className={` flex flex-wrap md:animate-spin-3d md:perspective-750 md:absolute md:h-[200px] md:w-[200px] md:transform-style-3d absolute`}
                // style={{ transform: "perscpective(700px)" }}
            >
                {imagesLoaded ? (
                    trendingEvents.map((trending, index) => {
                        return (
                            <div
                                key={index}
                                className={` md:absolute md:inset-x-0 md:inset-y-0 w-full `}
                                style={{
                                    transform: `rotateY(${
                                        (360 / trendingEvents.length) * index
                                    }deg)  translateZ(350px)`,
                                }}
                            >
                                <div
                                    className={`md:h-full md:w-full ${singleEventStyle["single-event"]} `}
                                >
                                    <img
                                        ref={imgElement}
                                        data-src={trending.img}
                                        src={trending.img}
                                        alt=""
                                        className={`h-full w-full object-cover ${
                                            singleEventStyle["event-image"]
                                        } ${inView ? "animate-start" : ""} `}
                                        loading="lazy"
                                    />
                                    <div
                                        className={`${singleEventStyle["event-handle"]}`}
                                    >
                                        <h2>{trending.name}</h2>
                                        <NavLink
                                            to={`/eventDetails/${trending.id}`}
                                            className={`${singleEventStyle["every-btn"]} btn`}
                                        >
                                            View Event
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h1>Image is Loading</h1>
                )}
            </div>
        </section>
    );
}

export default TrendingEvents;
