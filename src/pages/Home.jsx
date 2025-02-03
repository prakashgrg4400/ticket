import EventOrganizers from "../components/EventOrganizers";
import SearchCategory from "../components/SearchCategory";
import RegisterOrganizer from "../components/RegisterOrganizer";
import UpcomingEvent from "../components/UpcomingEvent";
import FunActivities from "../components/FunActivities";
import TrendingEvents from "../components/TrendingEvents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarLayout from "../layout/NavbarLayout";

function Home() {
    return (
        <>
            <NavbarLayout />
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
            </footer>
        </>
    );
}

export default Home;
