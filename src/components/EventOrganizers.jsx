import style from "../assets/css/upcoming.module.css";
import organizer from "../data/organizer";
// import Organizer from "./Organizer";
import "../assets/css/organizer.css";
import { lazy, Suspense } from "react";

const Organizer = lazy(() => import("./Organizer"));

function EventOrganizers() {
    return (
        <section className={`bg-[#f0f0f0] pt-[5rem]`}>
            <div className={`${style["event-title"]} container`}>
                <h2 className={`${style["left-title"]}`}>
                    Event{" "}
                    <span className={`${style["right-title"]}`}>Organizer</span>
                </h2>
            </div>
            <div className="container parent-org">
                {organizer.map((org, index) => {
                    // return <Organizer {...org} key={index} />;
                    return (
                        <Suspense fallback={<h1>Loading....</h1>} key={index}>
                            <Organizer {...org} />
                        </Suspense>
                    );
                })}
            </div>
        </section>
    );
}

export default EventOrganizers;
