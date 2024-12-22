/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import useImageLoader from "../hooks/useImageLoader";

function Organizer({ logo }) {
    const imgElement = useRef(null);
    const [inView, setInView] = useState(false);

    useImageLoader();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, self) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        self.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "100px 0px", threshold: 0 }
        );

        if (imgElement.current) {
            observer.observe(imgElement.current);
        }

        let myImg = imgElement.current;

        return () => {
            if (myImg) {
                observer.unobserve(myImg);
            }
        };
    }, []);
    return (
        <div className="organizer-logo ">
            <img
                ref={imgElement}
                data-src={logo}
                alt=""
                className={`organizer-logo-img ${
                    inView ? "animate-start" : ""
                }`}
            />
        </div>
    );
}

export default Organizer;
