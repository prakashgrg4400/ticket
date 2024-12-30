import style from "../assets/css/upcoming.module.css";
import organizer from "../data/organizer";
import Organizer from "./Organizer";

function EventOrganizers() {
    return (
        <section className={`bg-[#f0f0f0] pt-[5rem]`}>
            <div className={`${style["event-title"]} container`}>
                <h2 className={`${style["left-title"]}`}>
                    Event{" "}
                    <span className={`${style["right-title"]}`}>Organizer</span>
                </h2>
            </div>
            <div className="container flex flex-wrap justify-between gap-[1rem] ">
                {organizer.map((org, index) => {
                    return <Organizer key={index} {...org} />;
                })}
            </div>
        </section>
    );
}

export default EventOrganizers;
