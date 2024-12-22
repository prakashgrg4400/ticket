import EventOrganizers from "../components/EventOrganizers";
import SearchCategory from "../components/SearchCategory";
import RegisterOrganizer from "../components/RegisterOrganizer";
import UpcomingEvent from "../components/UpcomingEvent";
import FunActivities from "../components/FunActivities";
import BackgroundImage from "../components/BackgroundImage";
import TrendingEvents from "../components/TrendingEvents";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
    return (
        <>
            <Header />
            <main>
                <SearchCategory />
                <TrendingEvents />
                <UpcomingEvent />
                <EventOrganizers />
                <RegisterOrganizer />
                <FunActivities />
            </main>
            <footer>
                <Footer />
                <BackgroundImage />
            </footer>
        </>
    );
}

export default Home;
