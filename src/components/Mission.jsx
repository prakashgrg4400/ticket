import missions from "../data/mission";

function Mission() {
    return (
        <section className="py-[1rem] bg-white ">
            <div className="container flex flex-col justify-center items-center gap-[1rem]">
                <h1 className="text-3xl font-bold">Our Mission</h1>
                <p className="text-lg text-center text-black opacity-50">
                    We are dedicated to bringing unforgettable live experiences
                    to our customers through seamless ticket booking services.
                </p>
            </div>
            <div className="container flex gap-[2rem]">
                {missions.map((mission, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-[2rem] items-center p-[2rem] shadow-[10px_10px_10px_10px_#F9F9F9] cursor-pointer relative bottom-0 transition-all duration-500 ease-in-out hover:bottom-[3rem]"
                        >
                            <mission.img className="text-4xl p-[1rem] box-content text-white rounded-full bg-purple-500 " />
                            <div className="flex flex-col items-center">
                                <mission.icon className="text-3xl text-[grey]" />
                                <p className="text-center text-black opacity-50">
                                    {mission.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Mission;
