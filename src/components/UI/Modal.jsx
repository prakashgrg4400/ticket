import { useState } from "react";
import { createPortal } from "react-dom";
import { fadeInAndOut } from "../../animation/animate";
import { motion } from "framer-motion";

function Modal({ setIsModelOpen, children }) {
    const [signinOrSignup, setSigninOrSignup] = useState(false);

    function handleSigninOrSignup() {
        setSigninOrSignup(() => !signinOrSignup);
    }

    return createPortal(
        <>
            <motion.div
                variants={fadeInAndOut(0, 0.5)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-screen w-screen bg-black z-[150] top-0 left-0 opacity-50 fixed"
                onClick={() => {
                    setIsModelOpen(false);
                }}
            ></motion.div>
            <motion.div
                variants={fadeInAndOut(0.3)}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`fixed w-[60%] flex h-[70%] bg-white z-[200] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
                {children}
                <div
                    className={`flex justify-center items-center flex-col p-[4rem] text-center gap-[2rem] absolute top-0  w-[50%] h-full bg-red-400 bg-gradient-to-b from-[#932AB1] to-[#6D37B6] transform transition-all duration-800 ease-in-out  ${
                        signinOrSignup ? "left-0" : "left-[50%]"
                    } `}
                >
                    <h2 className="text-4xl font-bold text-white">
                        {signinOrSignup ? "Welcome Back" : "Hello Friend"}
                    </h2>
                    <p className="text-white opacity-80">
                        {signinOrSignup
                            ? "To keep connected with us please login with your personal info"
                            : "Enter your personal details and start journey with us"}
                    </p>
                    <button
                        className="text-white cursor-pointer inline rounded-[50px] border-2 border-white px-[2rem] py-[0.5rem]
                    hover:bg-gradient-to-r hover:from-[#932AB1] hover:to-[#6D37B6] hover:text-white "
                        onClick={handleSigninOrSignup}
                    >
                        {signinOrSignup ? "Sign in" : "Sign up"}
                    </button>
                </div>
            </motion.div>
        </>,
        document.getElementById("modal")
    );
}

export default Modal;
// before:block before:w-[50%] before:h-full before:border-8 before:absolute before:right-0 before:bg-gradient-to-r before:from-[#932AB1] before:to-[#6D37B6] before:z-10 before
