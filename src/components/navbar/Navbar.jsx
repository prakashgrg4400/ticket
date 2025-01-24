/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { slidedown } from "../../animation/animate";
import logo from "../../assets/img/logo.jpg";
import "../../assets/css/nav.css";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar({ handleModal }) {
    const [openMenu, setOpenMenu] = useState(false);

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
                    <NavLink to={"/cart/none/?status=none"} className="ticket">
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
        </>
    );
}

export default Navbar;
