import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { fadeInAndOut } from "../../animation/animate";

function TicketModal({ setTicketModal }) {
    return createPortal(
        <>
            <motion.div
                variants={fadeInAndOut(0)}
                initial="initial"
                animate="animate"
                exit={"exit"}
                onClick={() => {
                    setTicketModal(false);
                }}
                className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.7)] z-[300]"
            ></motion.div>
            <motion.div
                variants={fadeInAndOut(0.5)}
                initial="initial"
                animate="animate"
                exit={"exit"}
                className="fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[301] h-[70%] w-[50%]"
            >
                <div>
                    <h1 className="text-center py-6 text-2xl">
                        No Tickets Available at the moment
                    </h1>
                </div>
            </motion.div>
        </>,
        document.getElementById("modal")
    );
}

export default TicketModal;
