import trendingEvents from "../data/event";
import singleEventStyle from "../assets/css/event.module.css";
import eventStyle from "../assets/css/upcoming.module.css";
import { NavLink } from "react-router";
import { useState } from "react";
import useImageLoader from "../hooks/useImageLoader";

// const options = {
//     rootMargin: "0px 0px 0px 0px",
//     threshold: 0,
// };
function TrendingEvents() {
    const [isHover, setIsHover] = useState(false);

    useImageLoader();

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
                className={`${
                    isHover
                        ? "absolute h-[200px] w-[200px] transform-style-3d"
                        : "animate-spin-3d absolute h-[200px] w-[200px] transform-style-3d "
                } `}
                style={{ transform: "perscpective(700px)" }}
            >
                {trendingEvents.map((trending, index) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                isHover
                                    ? "absolute inset-x-0 inset-y-0"
                                    : "absolute inset-x-0 inset-y-0  "
                            }  `}
                            style={
                                isHover
                                    ? {
                                          //   transform:
                                          //   "rotateY(0deg) translateZ(350px)",
                                      }
                                    : {
                                          transform: `rotateY(${
                                              (360 / trendingEvents.length) *
                                              index
                                          }deg) translateZ(350px)`,
                                      }
                            }
                            // onMouseEnter={() => setIsHover(true)}
                            // onMouseLeave={() => setIsHover(false)}
                        >
                            <div
                                className={`h-full w-full ${singleEventStyle["single-event"]} `}
                            >
                                <img
                                    data-src={trending.img}
                                    alt=""
                                    className={`h-full w-full bg-[rgba(0,0,0,0.7)] object-cover ${singleEventStyle["event-image"]}`}
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
                })}
            </div>
        </section>
    );
}

export default TrendingEvents;
