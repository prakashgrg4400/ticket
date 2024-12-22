import style from "../assets/css/upcoming.module.css";
import EventList from "./EventList";
function UpcomingEvent() {
    return (
        <section className={`${style["trending-section"]}`}>
            <div className={`${style["event-title"]} container`}>
                <h2 className={`${style["left-title"]}`}>
                    Upcoming{" "}
                    <span className={`${style["right-title"]}`}>EVENTS</span>
                </h2>
            </div>
            <EventList />
        </section>
    );
}

export default UpcomingEvent;
