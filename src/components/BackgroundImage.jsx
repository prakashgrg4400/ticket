import { useEffect, useState } from "react";

// import bgImage from "../assets/img/footer1.jpg";
function BackgroundImage() {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            {
                threshold: 0,
                rootMargin: "200px 0px",
            }
        );

        let myFooter = document.querySelector("section.activity-section");

        observer.observe(myFooter);

        return () => {
            observer.unobserve(myFooter);
        };
    }, []);
    return (
        <div
            className={`${
                inView ? "opacity-100" : "opacity-0"
            } h-screen w-screen fixed top-0 left-0 -z-50 bg-homebg bg-center bg-no-repeat bg-cover `}
        ></div>
    );
}

export default BackgroundImage;
