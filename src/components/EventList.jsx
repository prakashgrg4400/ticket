import allEvents from "../data/event";
// import SingleEvent from "./SingleEvent";
import style1 from "../assets/css/event.module.css";
import { lazy, memo, Suspense } from "react";
import Loading from "./Loading";

const SingleEvent = lazy(() => import("./SingleEvent"));
function EventList() {
    return (
        <div className={`${style1["all-event"]} container`}>
            {allEvents.map((data, index) => {
                return (
                    <Suspense fallback={<Loading />} key={data.id}>
                        <SingleEvent {...data} key={index} />
                    </Suspense>
                );
            })}
        </div>
    );
}

export default memo(EventList);
