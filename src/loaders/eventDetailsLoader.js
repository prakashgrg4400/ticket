import eventList from "../utils/event";

export async function eventDetailsLoader({ params }) {
    let id = params.id * 1;
    let bookedEvent = {};
    eventList.forEach((singleEvent) => {
        if (id === singleEvent.id) {
            bookedEvent = { ...singleEvent };
        }
    });

    return bookedEvent.id ? bookedEvent : { message: "No such event exists" };
}
