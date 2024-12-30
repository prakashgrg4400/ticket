import ChooseUs from "../components/ChooseUs";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { headerAnimation } from "../animation/animate";

function AboutUs() {
    return (
        <>
            <header className="h-[80vh] w-full bg-black bg-aboutbg bg-cover bg-[bottom]">
                <div className="h-full w-full bg-[#3C2340] opacity-80"></div>
                <motion.h1
                    variants={headerAnimation(0.6, "40%")}
                    initial="initial"
                    animate="animate"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1.5/2 text-6xl bg-gradient-to-r from-[#9629B1] to-[#6B39B7] text-transparent bg-clip-text text-center "
                >
                    About Concert Booking Platform
                </motion.h1>
            </header>
            <Mission />
            <ChooseUs />
            <Footer />
        </>
    );
}

export default AboutUs;
