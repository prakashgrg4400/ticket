import Details from "../components/Details";
import MessageDescription from "../components/MessageDescription";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { headerAnimation } from "../animation/animate";
import NavbarLayout from "../layout/NavbarLayout";

function ContactUs() {
    return (
        <>
            <NavbarLayout />
            <header className="bg-contactbg h-[60vh] w-full bg-white bg-no-repeat bg-cover bg-center">
                <div className="h-full w-full bg-[#381F3D] opacity-90">
                    <motion.h2
                        variants={headerAnimation(0.6, "50%")}
                        initial="initial"
                        whileInView={"animate"}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1.5/2 text-5xl bg-gradient-to-r from-[#9729B1] to-[#6E38B6] bg-clip-text text-transparent"
                    >
                        Get in Touch
                    </motion.h2>
                </div>
            </header>
            <Details />
            <section className="bg-white py-[2rem]">
                <div className="w-[80%] mx-auto max-w-[1200px] flex gap-8 ">
                    <MessageDescription />
                    <MessageForm />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ContactUs;
