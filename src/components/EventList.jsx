import allEvents from "../data/event";
import SingleEvent from "./SingleEvent";
import style1 from "../assets/css/event.module.css";
function EventList() {
    return (
        <div className={`${style1["all-event"]} container`}>
            {allEvents.map((data, index) => {
                return <SingleEvent {...data} key={index} />;
            })}
        </div>
    );
}

export default EventList;
