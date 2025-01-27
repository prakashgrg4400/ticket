import Footer from "../components/Footer";
import Navbar from "../components/userDashboard/Navbar";
import TicketTable from "../components/userDashboard/TicketTable";

function UserDashboard() {
    return (
        <>
            <Navbar />
            <TicketTable />
            <Footer />
        </>
    );
}

export default UserDashboard;
