import { createPortal } from "react-dom";

function RegisterModal({ children, setIsOpen }) {
    return createPortal(
        <>
            <div
                onClick={() => {
                    setIsOpen(false);
                }}
                className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.7)] z-[100]"
            ></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white z-[200] ">
                {children}
            </div>
        </>,
        document.getElementById("modal")
    );
}

export default RegisterModal;
