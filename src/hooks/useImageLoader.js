import { useEffect } from "react";

const options = {
    threshold: 0.5,
    rootMargin: "100px 0px",
};

const useImageLoader = function () {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, self) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImage(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, options);

        const images = document.querySelectorAll("[data-src]");

        images.forEach((img) => {
            observer.observe(img);
        });

        function loadImage(img) {
            img.src = img.dataset.src;
        }

        return () => {
            images.forEach((img) => {
                observer.unobserve(img);
            });
        };
    }, []);
};

export default useImageLoader;
