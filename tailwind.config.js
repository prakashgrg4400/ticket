/** @type {import('tailwindcss').Config} */
import tailwindCss3d from "tailwindcss-3d";
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto Slab", "serif"],
            },
            animation: {
                "spin-3d": "autorun 20s linear infinite",
                start: "startrun 2s ease-in ",
                "start-bg": "startrun 8s ease-in ",
            },
            keyframes: {
                autorun: {
                    from: {
                        transform: "perspective(1000px) rotateY(0deg)",
                    },
                    to: {
                        transform: "perspective(1000px) rotateY(360deg)",
                    },
                },
                startrun: {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
            },
            backgroundImage: {
                eventbg: "url('./assets/img/slider3.jpg')",
                homebg: "url('./assets/img/footer1.jpg')",
                aboutbg: "url('./assets/img/slider4.jpg')",
                contactbg: "url('./assets/img/concert1.jpg')",
                eventDetailbg:
                    "url('./assets/img/eventDetailBackgroundImage3.jpg')",
                eventDetailbg2:
                    "url('https://wallpapers.com/images/hd/brookly-bridge-sunset-new-york-computer-9ckb3dpqekyq64i9.jpg')",
            },
            backgroundPosition: {
                // centerTop: "center top 1rem",
            },
            boxShadow: {
                innerdeep: "inset 0 0 3px 0 rgba(0 ,0 , 0, 0.2)",
            },
            translate: {
                "z-0": "0",
                "z-10": "10px",
                "z-20": "20px",
                "z-50": "50px",
            },
        },
    },
    plugins: [
        tailwindCss3d({ legacy: true }),
        // require("@tailwindcss/line-clamp"),
    ],
};
