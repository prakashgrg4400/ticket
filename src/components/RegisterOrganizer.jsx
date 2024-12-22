import { useState } from "react";
import "../assets/css/register.css";
import { NavLink } from "react-router";
import RegisterForm from "./RegisterForm";
import RegisterModal from "./UI/RegisterModal";

function RegisterOrganizer() {
    const [isOpen, setIsOpen] = useState(false);

    function handleModal() {
        setIsOpen(true);
    }

    return (
        <section className="relative h-[200px] bg-[#F0F0F0]">
            <div className="register-div">
                <h2 className="register-title">BECOME A ORGANIZER</h2>
                <p className="register-description">
                    Post Events, and connect with clients. If you need help with
                    crafting a message or providing more details about the
                    platform, feel free to ask!
                </p>
                <NavLink className="register-btn" onClick={handleModal}>
                    REGISTER NOW
                </NavLink>
                {isOpen && (
                    <RegisterModal setIsOpen={setIsOpen}>
                        <RegisterForm />
                    </RegisterModal>
                )}
            </div>
        </section>
    );
}

export default RegisterOrganizer;
