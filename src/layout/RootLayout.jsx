import "../assets/css/nav.css";
import logo from "../assets/img/logo.jpg";
import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import Modal from "../components/UI/Modal";
import Signup from "../components/UI/Signup";
import Signin from "../components/UI/Signin";
import { AnimatePresence, motion } from "framer-motion";
import { slidedown } from "../animation/animate";
import { GiHamburgerMenu } from "react-icons/gi";
// import TicketModal from "../components/UI/TicketModal";

function RootLayout() {
    const [isModalOpen, setIsModelOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    // const [ticketModal, setTicketModal] = useState(false);

    function handleModal() {
        setIsModelOpen((prev) => !prev);
    }
    return (
        <>
            <motion.div
                variants={slidedown(0.5)}
                initial="initial"
                className="navbar"
                animate={"animate"}
            >
                <div className="logo-icon">
                    <img src={logo} className="logo" alt="" />
                </div>
                <ul className={`${openMenu ? "open" : ""}`}>
                    <li>
                        <NavLink
                            to={"/"}
                            className={(obj) => (obj.isActive ? "active" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/events"}>Events</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
                    </li>
                </ul>
                <div className="buttons">
                    <button className="btn" onClick={handleModal}>
                        Login/Register
                    </button>
                    {/* <button
                        className="btn"
                        onClick={() => {
                            setTicketModal(true);
                        }}
                    >
                        Ticket
                    </button> */}
                    <NavLink to={"/cart"} className="ticket">
                        Ticket
                    </NavLink>
                </div>
                <GiHamburgerMenu
                    className={`md:hidden  max-[600px]:inline-block text-white text-xl px-[2rem] box-content bg-[rgba(0, 0, 0, 0.5)]`}
                    onClick={() => {
                        setOpenMenu((prev) => !prev);
                    }}
                />
            </motion.div>

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
