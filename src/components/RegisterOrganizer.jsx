import { useState } from "react";
import "../assets/css/register.css";
import { NavLink } from "react-router";
import RegisterForm from "./RegisterForm";
import RegisterModal from "./UI/RegisterModal";
import { motion, AnimatePresence } from "framer-motion";
import { slideup } from "../animation/animate";

function RegisterOrganizer() {
    const [isOpen, setIsOpen] = useState(false);

    function handleModal() {
        setIsOpen(true);
    }

    return (
        <section className="relative h-[200px] bg-[#F0F0F0]">
            <div className="register-div">
                <motion.h2
                    variants={slideup(0.5)}
                    initial="initial"
                    whileInView={"animate"}
                    className="register-title"
                >
                    BECOME A ORGANIZER
                </motion.h2>
                <motion.p
                    variants={slideup(0.7)}
                    initial="initial"
                    whileInView={"animate"}
                    className="register-description"
                >
                    Post Events, and connect with clients. If you need help with
                    crafting a message or providing more details about the
                    platform, feel free to ask!
                </motion.p>
                <motion.NavLink
                    variants={slideup(0.9)}
                    initial="initial"
                    whileInView="animate"
                    className="register-btn"
                    onClick={handleModal}
                >
                    REGISTER NOW
                </motion.NavLink>

                <AnimatePresence>
                    {isOpen && (
                        <RegisterModal setIsOpen={setIsOpen}>
                            <RegisterForm />
                        </RegisterModal>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default RegisterOrganizer;
