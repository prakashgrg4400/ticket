/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router";
import style1 from "../assets/css/event.module.css";
import { useEffect, useRef, useState } from "react";
import useImageLoader from "../hooks/useImageLoader";

const options = {
    rootMargin: "100px 0px",
    threshold: 0.5,
};

function SingleEvent({ name, img, description, date, id }) {
    const imgElement = useRef(null);
    const [inView, setInView] = useState(false);

    useImageLoader();

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
        <div className={`${style1["single-event"]}  `}>
            <img
                // src={img}
                data-src={img}
                ref={imgElement}
                alt=""
                className={`${style1["event-image"]} ${
                    inView ? "animate-start" : ""
                }  `}
                loading="lazy"
            />
            <div className={`${style1["event-handle"]}`}>
                <h2>{name}</h2>
                <NavLink
                    to={`/eventDetails/${id}`}
                    className={`${style1["event-btn"]} btn`}
                >
                    View Event
                </NavLink>
            </div>
        </div>
    );
}

export default SingleEvent;
