import "../assets/css/funActivities.css";
import activity from "../data/activity";
function FunActivities() {
    return (
        <section className="activity-section">
            <div className="container fun-container flex">
                {activity.map((act, index) => {
                    return (
                        <div
                            key={index}
                            className="text-white w-[22%] m-auto px-[1rem] py-[2rem] flex flex-col transition ease-in-out duration-300 hover:scale-110 "
                            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                        >
                            <act.icon className="text-4xl" />
                            <p className="self-center text-[#fff]">
                                {act.title}
                            </p>
                            <h2 className="self-center text-[#6B30BE] text-4xl  ">
                                {act.quantity}
                            </h2>
                        </div>
                    );
                })}
            </div>
            {/* <div className="animate-start h-full w-full absolute bottom-0 left-0 -z-50 bg-homebg bg-center bg-no-repeat bg-cover "></div> */}
        </section>
    );
}

export default FunActivities;
