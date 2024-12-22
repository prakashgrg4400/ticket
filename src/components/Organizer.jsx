/* eslint-disable react/prop-types */

import useImageLoader from "../hooks/useImageLoader";

function Organizer({ logo }) {
    useImageLoader();
    return (
        <div className="organizer-logo ">
            <img
                data-src={logo}
                alt=""
                className=" bg-[rgba(0,0,0,0.7)] organizer-logo-img animate-start"
            />
        </div>
    );
}

export default Organizer;
