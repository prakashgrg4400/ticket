import "../assets/css/nav.css";
import { useState } from "react";
import Modal from "../components/UI/Modal";
import Signup from "../components/UI/Signup";
import Signin from "../components/UI/Signin";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar/Navbar";

function NavbarLayout() {
    const [isModalOpen, setIsModelOpen] = useState(false);

    function handleModal() {
        setIsModelOpen((prev) => !prev);
    }
    return (
        <>
            <Navbar handleModal={handleModal} />

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
        </>
    );
}

export default NavbarLayout;
