import trendEvent from "../data/event";
import upcomingEvent from "../data/upcoming";

const handleEventsData = (status, id) => {
    let myEvent = {} ;
    if (status === "upcoming") {
        upcomingEvent.forEach((event) => {
            if (event.id === id) {
               myEvent = {...event} ;
            }
        });
    }else if(status === "trending")
    {
        trendEvent.forEach(event=>{
            if(event.id === id)
            {
                myEvent = {...event};
            }
        })
    }
    return myEvent ;
};

export default handleEventsData;
