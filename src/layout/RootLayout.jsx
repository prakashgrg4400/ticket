import "../assets/css/nav.css";
import logo from "../assets/img/logo.jpg";
import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import Modal from "../components/UI/Modal";
import Signup from "../components/UI/Signup";
import Signin from "../components/UI/Signin";

function RootLayout() {
    const [isModalOpen, setIsModelOpen] = useState(false);

    function handleModal() {
        setIsModelOpen((prev) => !prev);
    }
    return (
        <>
            <div className="navbar">
                <div className="logo-icon">
                    <img src={logo} className="logo" alt="" />
                </div>
                <ul>
                    <li>
                        <NavLink
                            to={"/"}
                            className={(obj) => (obj.isActive ? "active" : "")}
                            href=""
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="" to={"/events"}>
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="" to={"/about"}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="" to={"/contact"}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <div className="buttons">
                    <button className="btn" onClick={handleModal}>
                        Login/Register
                    </button>
                    <button className="btn">Ticket</button>
                </div>
            </div>
            {isModalOpen && (
                <Modal setIsModelOpen={setIsModelOpen}>
                    <Signin />
                    <Signup />
                </Modal>
            )}
            {/* <Modal /> */}
            <Outlet />
        </>
    );
}

export default RootLayout;
