import "../assets/css/nav.css";
import { Outlet, useLocation } from "react-router";
import { useState } from "react";
import Modal from "../components/UI/Modal";
import Signup from "../components/UI/Signup";
import Signin from "../components/UI/Signin";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar/Navbar";
// import logo from "../assets/img/logo.jpg";
// import { slidedown } from "../animation/animate";
// import { GiHamburgerMenu } from "react-icons/gi";
// import TicketModal from "../components/UI/TicketModal";

function RootLayout() {
    const { pathname } = useLocation();
    const [isModalOpen, setIsModelOpen] = useState(false);
    const excludePath = ["/failure", "/success", "/userDashboard"];

    // console.log(
    //     "pathname = ",
    //     pathname,
    //     " includes ===> ",
    //     excludePath.includes(pathname)
    // );
    // const [openMenu, setOpenMenu] = useState(false);
    // const [ticketModal, setTicketModal] = useState(false);

    function handleModal() {
        setIsModelOpen((prev) => !prev);
    }
    return (
        <>
            {!excludePath.includes(pathname) && (
                <Navbar handleModal={handleModal} />
            )}

            {/* <Modal /> */}

            {/* <AnimatePresence>
                {ticketModal && (
                    <TicketModal setTicketModal={setTicketModal}></TicketModal>
                )}
            </AnimatePresence> */}

            <AnimatePresence>
                {isModalOpen && (
                    <Modal setIsModelOpen={setIsModelOpen}>
                        <Signin />
                        <Signup />
                    </Modal>
                )}
            </AnimatePresence>

            <Outlet />
        </>
    );
}

export default RootLayout;
