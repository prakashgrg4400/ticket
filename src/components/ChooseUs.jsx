import choose from "../data/choose";

function ChooseUs() {
    return (
        <section className="bg-white py-5">
            <h2 className="text-center text-3xl font-bold">Why Choose Us</h2>
            <div className="container flex flex-wrap gap-[2rem]">
                {choose.map((choo, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-[#F8F9FA]  w-[48%] m-auto p-3"
                        >
                            <div className="flex gap-3 items-center">
                                <choo.icon className="text-[#9C27B0] text-2xl" />
                                <h2 className="text-xl">{choo.title}</h2>
                            </div>
                            <p>{choo.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ChooseUs;
