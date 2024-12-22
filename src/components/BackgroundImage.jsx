// import bgImage from "../assets/img/footer1.jpg";
function BackgroundImage() {
    return (
        <div
            className={`animate-start anim h-screen w-screen fixed top-0 left-0 -z-50 bg-homebg bg-center bg-no-repeat bg-cover `}
        >
            {/* <img
                src={`${bgImage}`}
                alt=""
                className="h-full w-full object-cover "
            /> */}
        </div>
    );
}

export default BackgroundImage;
