export const slideup = (delay) => {
    return {
        initial: { opacity: 0, y: 100 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { delay: delay, duration: 0.5 },
        },
    };
};

export const slidedown = (delay) => {
    return {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
    };
};

export const slideleft = (delay) => {
    return {
        initial: { opacity: 0, x: 100 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { delay: delay, duration: 0.5 },
        },
    };
};
export const slideright = (delay) => {
    return {
        initial: { opacity: 0, x: -200 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { delay: delay, duration: 0.5 },
        },
    };
};

export const fadeInAndOut = (delay, opacity = 1) => {
    return {
        initial: { opacity: 0 },
        animate: {
            opacity: opacity,
            transition: { duration: 0.3, ease: "easeIn", delay },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };
};

export const headerAnimation = (delay = 0.3, top) => {
    return {
        initial: { top: 0, opacity: 0 },
        animate: {
            top: top,
            opacity: 1,
            transition: { delay, duration: 0.3 },
        },
    };
};
