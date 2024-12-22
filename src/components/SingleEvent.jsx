/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router";
import style1 from "../assets/css/event.module.css";
import { useRef} from "react";
import useImageLoader from "../hooks/useImageLoader";

const options = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
};

function SingleEvent({ name, img, description, date, id }) {
    const imgElement = useRef();

    useImageLoader();

    return (
        <div className={`${style1["single-event"]}`}>
            <img
                // src={img}
                data-src={img}
                ref={imgElement}
                alt=""
                className={`${style1["event-image"]} bg-rgba(0,0,0,0.7) `}
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
