import Footer from "../components/Footer";
import SearchCategory from "../components/SearchCategory";
import TrendingEvents from "../components/TrendingEvents";
import UpcomingEvent from "../components/UpcomingEvent";

function Events() {
    return (
        <>
            <header className="h-[40vh] w-full bg-eventbg bg-no-repeat bg-center">
                <div className="h-full w-full bg-[#442D48] opacity-90"></div>
            </header>
            <SearchCategory />
            <TrendingEvents />
            <UpcomingEvent />
            <Footer />
        </>
    );
}

export default Events;
