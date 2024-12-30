import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { fadeInAndOut } from "../../animation/animate";

function RegisterModal({ children, setIsOpen }) {
    return createPortal(
        <>
            <motion.div
                variants={fadeInAndOut(0)}
                initial="initial"
                animate="animate"
                exit={"exit"}
                onClick={() => {
                    setIsOpen(false);
                }}
                className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.7)] z-[100]"
            ></motion.div>
            <motion.div
                variants={fadeInAndOut(0.5)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white z-[200] "
            >
                {children}
            </motion.div>
        </>,
        document.getElementById("modal")
    );
}

export default RegisterModal;
